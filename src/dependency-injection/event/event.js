import { inject } from "aurelia-framework";
// import { DataCache } from "../dataCache";

// @inject(DataCache)
// export class Event {
//   constructor(dataCache) {
//     this.message = "from Event class";
//     this.dataCache = dataCache;
//     this.dataCache.data.push("data3");
//   }
//   activate(bindingContext) {
//     this.item = bindingContext;
//   }
// }

// we use named object to pass the Cache instance which is created in main.js using aurelia.use.instance("Cache", DataCache)
@inject("Cache")
export class Event {
  constructor(dataCache) {
    console.log(dataCache);
    this.message = "from Event class";
    dataCache.data.push("data3");
  }
  activate(bindingContext) {
    this.item = bindingContext;
  }
}
