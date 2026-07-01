# sandbox
Personal sandbox / scratch repo

## textkit

Tiny zero-dependency string helpers.

```js
import { slugify, truncate, capitalize } from './src/index.js';

slugify('Hello World!');      // "hello-world"
truncate('long text', 6);     // "long…"
capitalize('hi');             // "Hi"
```
