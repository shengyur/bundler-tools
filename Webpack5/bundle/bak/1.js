const toString = Object.prototype.toString

console.log(toString.call('foo'))
console.log(toString.call([]))
console.log(toString.call(1))
console.log(toString.call(true))

const a = {}

Object.defineProperty(a, Symbol.toStringTag, {
    value: 'TestModule'
})

console.log(Object.prototype.toString.call(a))

var ageValue = 10

Object.defineProperty(a,'age', {
    enumerable: true,
    configurable: true,
    get() {
        return ageValue
    },
    set(newValue){
        ageValue = newValue 
    }
})

console.log(a.age)
ageValue = 1000
console.log(a.age)
