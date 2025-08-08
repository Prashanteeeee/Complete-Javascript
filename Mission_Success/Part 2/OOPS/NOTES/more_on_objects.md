# Object Property Descriptors

Every property in JavaScript has a **descriptor** that defines how it behaves.
Descriptor properties:
- value: the actual value of the property
- writable: can the value be changed? (default: true)
- enumerable: will it show up in loops? (default: true)
- configurable: can the descriptor itself be changed or deleted? (default: true)

Example:
Object.getOwnPropertyDescriptor(obj, propName);
Object.defineProperty(obj, propName, { writable: false, enumerable: false });

⚡ Tip:
Math.PI is non-writable, non-enumerable, and non-configurable by default.
