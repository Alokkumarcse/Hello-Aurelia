import { transient, singleton } from "aurelia-framework";

// @transient()
// export class DataCache {
//   constructor() {
//     this.data = [];
//     console.log("DataCache constructor");
//   }
// }

@singleton()
export class DataCache {
  constructor() {
    this.data = [];
    console.log("DataCache constructor");
  }
}
