---
inject: true
append: true
to: packages/<%= package %>/src/index.js
---

export * from './<%= h.capitalize(name) %>';