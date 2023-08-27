export class Event {
  constructor() {
    this.message = "from Event class";
  }
  activate(bindingContext) {
    this.item = bindingContext;
  }
}
