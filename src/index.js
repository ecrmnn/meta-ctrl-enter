'use strict';

const handler = (event, binding, vnode) => {
  if ((event.ctrlKey || event.metaKey) && event.keyCode === 13) {
    vnode.context[binding.expression](event);
  }
}

module.exports = {
  install: Vue => {
    Vue.directive('meta-ctrl-enter', {
      bind(el, binding, vnode) {
        el.addEventListener('keydown', event => handler(event, binding, vnode));
      },

      unbind(el) {
        el.removeEventListener('keydown', event => handler(event, binding, vnode));
      }
    });
  }
};