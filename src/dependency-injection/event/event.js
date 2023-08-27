import { inject } from "aurelia-framework";
import { DataCache } from "../dataCache";

@inject(DataCache)
export class Event {
  constructor(dataCache) {
    this.message = "from Event class";
    this.dataCache = dataCache;
    this.dataCache.data.push("data3");
  }
  activate(bindingContext) {
    this.item = bindingContext;
  }
}
