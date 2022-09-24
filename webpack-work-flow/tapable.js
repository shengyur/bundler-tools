class SyncHook {
    constructor() {
      this.taps = [];
    }
    tap(name, fn) {
      this.taps.push(fn);
    }
    call() {
      this.taps.forEach((tap) => tap());
    }
}
  
  let hook = new SyncHook();

  hook.tap("some name", () => {
    console.log("some name");
  });
  
class Plugin {
    apply() {
      hook.tap("Plugin", () => {
        console.log("Plugin ");
      });
    }
}

  new Plugin().apply();
  hook.call();