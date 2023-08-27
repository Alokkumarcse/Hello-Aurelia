import environment from "../config/environment.json";
import { PLATFORM } from "aurelia-pal";
import { App } from "./app/app";
import { DataCache } from "./dependency-injection/dataCache";

import { Plugin1 } from "./dependency-injection/plugin1";
import { Plugin2 } from "./dependency-injection/plugin2";

export function configure(aurelia) {
  /**
   * Registering explicitly with container to controlling their lifetime this way instead of decorating the class, here * bcz main.js is aurelia configure object.
   * 1. use instance() method
   * 2. use singleton() method
   * 3. use transient() method
   * */
  // aurelia.use.singleton(DataCache);
  // aurelia.use.transient(DataCache);
  let cache = new DataCache();
  aurelia.use.instance("Cache", cache);

  /**
   * Injecting Resolvers, advance pattern to create the instances
   * 3 resolvers in Aurelia framework
   *  - Lazy.of(T): provides a function that produces a T instance when called
   *  - All.of(T) : provides an array of all
   *  - Optional.of(T) : Only provides ref if it already exists within container
   */
  aurelia.use.transient("SuperPlugin", Plugin1);
  aurelia.use.transient("SuperPlugin", Plugin2);

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName(App)));
}

/**
 * Globally registering Dependencies
 * - Avoid repetitive import declarations
 * - Register a dependency globally through our app configuration method
 * - Module will then be available for injection in our modules without an import
 *   and use in our views without a <require></require> element
 *
 */
// export funtion configure(Aurelia){
//   //...
//   static aurelia.use
//   .standardConfiguration()
//   .developmentLogging()
//   .globalResources('./dependency-injection/services/service');

//   //...

// }
