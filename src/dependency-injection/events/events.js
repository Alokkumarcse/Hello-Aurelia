// import { DataCache } from "../dataCache";
// import { inject } from "aurelia-framework";

// @inject(DataCache)
// export class Event {
//   constructor(dataCache) {
//     this.message = "from Events class";
//     this.tasks = ["task1", "task2", "task3", "task4", "task5"];
//     this.dataCache = dataCache;
//     this.dataCache.data.push("data1");
//     this.dataCache.data.push("data2");
//   }
// }

// we use named object to pass the Cache instance which is created in main.js using aurelia.use.instance("Cache", DataCache)
// import { inject } from "aurelia-framework";
// @inject("Cache")
// export class Event {
//   constructor(dataCache) {
//     console.log(dataCache);
//     this.message = "from Events class";
//     this.tasks = ["task1", "task2", "task3", "task4", "task5"];
//     dataCache.data.push("data1");
//     dataCache.data.push("data2");
//   }
// }

/**
 * Injecting Resolvers, advance pattern to create the instances
 * 3 resolvers in Aurelia framework
 *  - Lazy.of(T): provides a function that produces a T instance when called
 *  - All.of(T) : provides an array of all
 *  - Optional.of(T) : Only provides ref if it already exists within container
 */
import { inject, Lazy, All } from "aurelia-framework";
import { LazyOf } from "../LazyOf";
@inject("Cache", Lazy.of(LazyOf), All.of("SuperPlugin"))
export class Event {
  constructor(dataCache, lazyOfObject, plugins) {
    console.log(dataCache);
    this.message = "from Events class";
    this.tasks = ["task1", "task2", "task3", "task4", "task5"];
    dataCache.data.push("data1");
    dataCache.data.push("data2");

    this.lazyOfObject = lazyOfObject;

    plugins.forEach((plugin) => {
      plugin.doPluginStuff();
    });
  }

  createAndUseLazy() {
    console.log("about to use Lazy");
    this.lazyOfObject().doStuff();
  }
}
