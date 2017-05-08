# meta-ctrl-enter
> Trigger Vue methods by pressing cmd+enter, windows+enter or ctrl+enter

[![npm version](https://img.shields.io/npm/v/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)
[![npm downloads](https://img.shields.io/npm/dm/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)
[![npm license](https://img.shields.io/npm/l/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)

### Installation
```bash
npm install meta-ctrl-enter --save
```

### Usage
```javascript
// Load using CommonJS syntax
const Vue = require('vue');
const MetaCtrlEnter = require('meta-ctrl-enter');
Vue.use(MetaCtrlEnter);

// Load using ES6 syntax
import Vue from 'vue';
import MetaCtrlEnter from 'meta-ctrl-enter';
Vue.use(MetaCtrlEnter);
```

```html
<template>
    <input type="text" v-meta-ctrl-enter="submit">
</template>

<script>
    export default {
      methods: {
        submit(event) {
          // This will be triggered when pressing;
          // cmd + enter
          // windows key + enter
          // ctrl + enter
          console.log('triggered ...', event);
        }
      }
    }
</script>
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)