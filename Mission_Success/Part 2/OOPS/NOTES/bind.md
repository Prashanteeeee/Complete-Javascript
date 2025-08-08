## bind() in JavaScript Classes

When using class methods as event handlers, `this` can lose its reference to the class instance.
By default, inside an event listener, `this` refers to the element that triggered the event.

Example:
- Without bind:
    this.server -> undefined
- With bind:
    this.server -> works as expected

### Alternative:
Use arrow functions:
handleClick = () => {
    console.log(this.server);
}
