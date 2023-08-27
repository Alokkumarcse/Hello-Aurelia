import { DataCache } from "../dataCache";
import { inject } from "aurelia-framework";

@inject(DataCache)
export class Event {
  constructor(dataCache) {
    this.message = "from Events class";
    this.tasks = ["task1", "task2", "task3", "task4", "task5"];
    this.dataCache = dataCache;
    this.dataCache.data.push("data1");
    this.dataCache.data.push("data2");
  }
}
