/**
 * Injecting Resolvers, advance pattern to create the instances
 * 3 resolvers in Aurelia framework
 *  - Lazy.of(T): provides a function that produces a T instance when called
 *  - All.of(T) : provides an array of all
 *  - Optional.of(T) : Only provides ref if it already exists within container
 */

export class LazyOf {
  constructor() {
    console.log("ImLazy constructor");
  }

  doStuff() {
    console.log("ImLazy but doing stuff!");
  }
}
