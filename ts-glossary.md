# TypeScript cheat sheet

## Fundamentals

### Annotation 

```ts
let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];
```

### Tuples
```ts
let user: [number, string] = [1, 'Mosh'];
```

### Enums
```ts
enum Size { Small = 1, Medium, Large };
```

### Functions
```ts
function calculateTax(income: number): number { 
  return income * .2; 
}
```

### Objects
```ts
let employee: { 
 id: number; 
 name: string; 
 retire: (date: Date) => void
} = {
 id: 1,
 name: 'Mosh',
 retire: (date: Date) => {},
};
```

## Advanced types

### Type alias

```ts
type Employee = { 
 id: number; 
 name: string; 
 retire: (date: Date) => void
}
```

### Union types
```ts
let weight: number | string = 1; 
weight = '1kg';
```

### Intersection types
```ts
type UIWidget = Draggable & Droppable;
```

### Literal types
```ts
type Quantity = 50 | 100; 
```

### Nullable types
```ts
let name: string | null = null; 
```

### Optional chaining (?.)
```ts
customer?.birthdate?.getFullYear();
customers?.[0]; 
log?.('message');
```

### Nullish coalescing operator
```ts
someValue ?? 30
```

### Type assertion
```ts
let code: any = 123; 
let employeeCode = <number> code;
// alternative syntax
let employeeCode = code as number;
```

### The unknown type
```ts
function render(document: unknown) { 
 // We have to narrow down to a specific 
 // type before we can perform any operations
 // on an unknown type.
 if (typeof document === 'string') { 
 
 }
}
```

### The never type
```ts
function reject(): never { 
 // This function never returns because 
 // it always throws an error
 throw new Error('Error!')
}
```

## Object Orienting Programming

### Classes and constructors

```ts
class Account { 
 id: number; 
 constructor(id: number) { 
  this.id = id; 
 }
}
let account = new Account(1);
```

### Accessing properties and methods
```ts
account.id = 1;
account.deposit(10)
```

### Read-only and optional properties
```ts
class Account { 
 readonly id: number; 
 nickname?: string;
}
```

### Access modifiers
```ts
class Account { 
 private _balance: number; 
 
 // Protected members are inherited. 
 // Private members are not. 
 protected _taxRate: number; 
}
```

### Parameter properties
```ts
class Account { 
 // With parameter properties we can 
 // create and initialize properties in one place.
 constructor(public id: number, private _balance: number) {}
}
```

### Getters and setters
```ts
class Account { 
 private _balance = 0; 

 get balance(): number { 
  return this._balance;
 }

 set balance(value: number) {
  if (value < 0) 
    throw new Error();
    this._balance = value; 
  }
}
```

### Index signatures
```ts
class SeatAssignment { 
 // With index signature properties we can add 
 // properties to an object dynamically 
 // without losing type safety.
 [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh'; 
seats.A2 = 'John';
```

### Static members
```ts
class Ride { 
 static activeRides = 0; 
}
Ride.activeRides++;
```

### Inheritance
```ts
class Student extends Person { 
}
class Student extends Person { 
 override speak() { 
  console.log('Student speaking');
 }
}
```

### Method overriding
```ts
abstract class Shape { 
 // Abstract methods don't have a body 
 abstract render(); 
}
class Circle extends Shape { 
 override render() {
  console.log('Rendering a circle')
 }
}
```

### Interfaces
```ts
interface Calendar { 
 name: string;
 addEvent(): void; 
}
class GoogleCalendar implements Calendar {}
```

## Generics

### Generic classes
```ts
class KeyValuePair<K, V> { 
 constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair<number, string>(1, 'a');
// The TypeScript compiler can sometimes infer 
// generic type arguments so we don't need to specify them.
let other = new KeyValuePair(1, 'a');
```

### Generic functions
```ts
function wrapInArray<T>(value: T) {
 return [value];
}
let numbers = wrapInArray(1);
```

### Generic interfaces
```ts
interface Result<T> { 
 data: T | null;
}
```
### Generic constraints

```ts
function echo<T extends number | string>(value: T) {}
// Restrict using a shape object
function echo<T extends { name: string }>(value: T) {}
// Restrict using an interface or a class
function echo<T extends Person>(value: T) {}
```

### Extending generic classes
```ts
// Passing on generic type parameters 
class CompressibleStore<T> extends Store<T> { }
// Constraining generic type parameters 
class SearchableStore<T extends { name: string }> extends Store<T> { }
// Fixing generic type parameters 
class ProductStore extends Store<Product> { }
```

### The keyof operator

```ts
interface Product { 
 name: string;
 price: number; 
}
let property: keyof Product;
// Same as
let property: 'name' | 'price';
property = 'name'; 
property = 'price';
property = 'otherValue'; // Invalid 
```

### Type mapping

```ts
type ReadOnly<T> = {
 readonly [K in keyof T]: T[K];
};
type Optional<T> = {
 [K in keyof T]?: T[K];
};
type Nullable<T> = {
 [K in keyof T]: T[K] | null;
};
```

### Utility types
```ts
interface Product { 
 id: number; 
 name: string; 
 price: number; 
}
// A Product where all properties are optional 
let product: Partial<Product>;
// A Product where all properties are required
let product: Required<Product>;
// A Product where all properties are read-only
let product: Readonly<Product>;
// A Product with two properties only (id and price)
let product: Pick<Product, 'id' | 'price'>;
// A Product without a name 
let product: Omit<Product, 'name'>;
```







# TypeScript config

### noImplicitAny 
When enabled, the compiler will warn you about variables 
that are inferred with the any type. You’ll then have to 
explicitly annotate them with any if you have a reason to 
do so.

### noImplicitReturns 
When enabled, the compiler will check all code paths in a 
function to ensure they return a value.

### noUnusedLocals 
When enabled, the compiler will report unused local 
variables.

### noUnusedParameters 
When enabled, the compiler will report unused 
parameters.

### strictNullChecks 
When enabled, null and undefined will not be 
acceptable values for variables unless you explicitly 
declare them as nullable. So, you’ll get an error if you 
set a variable to null or undefined. 

### allowUnreachableCode 
When set the false, reports error about unreachable code

### noImplicitOverride
When enabled, then compiler will warn us if we try to override a method without using the override keyword.