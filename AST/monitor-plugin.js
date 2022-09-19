const importModule = require('@babel/helper-module-imports');
const template = require('@babel/template');
const types = require('@babel/types');
const autoLoggerPlugin = (options) => {
    return {
        visitor: {
            Program: {
                enter(path, state) {
                    let loggerId;
                    path.traverse({
                        ImportDeclaration(path) {
                            // 先获取引入的模块名
                            const libName = path.get('source').node.value;
                            if (libName === options.libName) {
                                const specifierPath = path.get('specifiers.0');
                                //import logger from 'logger'
                                //import { logger } from 'logger';
                                //import * as logger from 'logger';
                                // 拿到第0个specifiers
                                if (specifierPath.isImportDefaultSpecifier()
                                    || specifierPath.isImportSpecifier()
                                    || specifierPath.isImportNamespaceSpecifier()) {
                                    loggerId = specifierPath.local.name;
                                }
                                path.stop();
                            }
                        }
                    });
                    if (!loggerId) {
                        loggerId = importModule.addDefault(path, 'logger', {
                            nameHint: path.scope.generateUid('logger')
                        }).name;
                    }
                    //state.loggerNode = types.expressionStatement(types.callExpression(types.identifier(loggerId), []));
                    //state.loggerNode = template.statement(`${loggerId}();`)();
                    state.loggerNode = template.statement(`LOGGER();`)({
                        LOGGER: loggerId
                    });
                }
            },
            // 找到所有函数，把logger插进去
            'FunctionExpression|FunctionDeclaration|ArrowFunctionExpression|ClassMethod'(path, state) {
                const { node } = path
                if (types.isBlockStatement(node.body)) {
                    node.body.body.unshift(state.loggerNode);
                } else {
                    const newNode = types.blockStatement([
                        state.loggerNode,
                        types.expressionStatement(node.body)
                    ]);
                    path.get('body').replaceWith(newNode);
                }
            }
        }
    }
};
module.exports = autoLoggerPlugin;