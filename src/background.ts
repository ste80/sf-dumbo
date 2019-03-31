global.browser = require('webextension-polyfill-ts');
import store from './store';

alert(`Hello ${store.getters.foo}!`);
