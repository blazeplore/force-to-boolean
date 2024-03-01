# Force Boolean
> Forced transform your variable into a boolean without worried.

## How to install

  * via **npm**: `npm install --save force-to-boolean`
  * via **yarn**: `yarn add force-to-boolean`

## How to use
```javascript
// ES6+ Babel
import ForceBoolean from 'force-boolean'
// Typescript
import ForceBoolean from 'force-boolean'
// CommonJS
const ForceBoolean = require('force-boolean').default

const YOUR_VAR = 'false'
console.log(ForceBoolean(YOUR_VAR)) // it's return boolean false
```