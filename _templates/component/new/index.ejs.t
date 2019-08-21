---
to: packages/<%= package %>/src/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/index.js
---
import { <%= h.capitalize(name) %> } from './<%= h.capitalize(name) %>';

export { <%= h.capitalize(name) %> };


