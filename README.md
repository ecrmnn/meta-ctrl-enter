# meta-ctrl-enter
> Trigger Vue methods by pressing cmd+enter, ctrl+enter or windows key+enter

[![npm version](https://img.shields.io/npm/v/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)
[![npm downloads](https://img.shields.io/npm/dm/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)
[![npm license](https://img.shields.io/npm/l/meta-ctrl-enter.svg?style=flat-square)](http://badge.fury.io/js/meta-ctrl-enter)

### Installation
```bash
npm install meta-ctrl-enter --save
```

### Why?
Why not use ``@keydown.meta.enter="myMethod"``?

Tl;dr: On Windows keyboards, ``meta`` is the windows key (⊞), and this is not a "natural" modifier key.
By using ``v-meta-ctrl-enter`` you'll be able to use ``ctrl+enter`` which is a widley used modifier key. 

From Vue.js documentation:
> On Macintosh keyboards, meta is the command key (⌘). On Windows keyboards, meta is the windows key (⊞). On Sun Microsystems keyboards, meta is marked as a solid diamond (◆). On certain keyboards, specifically MIT and Lisp machine keyboards and successors, such as the Knight keyboard, space-cadet keyboard, meta is labeled “META”. On Symbolics keyboards, meta is labeled “META” or “Meta”.

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