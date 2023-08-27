import { transient, singleton } from "aurelia-framework";

// @transient()
// export class DataCache {
//   constructor() {
//     this.data = [];
//     console.log("DataCache constructor");
//   }
// }

// @singleton()
// export class DataCache {
//   constructor() {
//     this.data = [];
//     console.log("DataCache constructor");
//   }
// }

// @transient() not used bcz it is register globally in main.js configure file.
// export class DataCache {
//   constructor() {
//     this.data = [];
//     console.log("DataCache constructor");
//   }
// }

// @singleton() not used bcz it is register globally in main.js configure file.
export class DataCache {
  constructor() {
    this.data = [];
    console.log("DataCache constructor");
  }
}
