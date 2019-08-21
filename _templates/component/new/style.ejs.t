---
to: packages/<%= package %>/src/<%= h.capitalize(name) %>/style.js
---
const <%= h.capitalize(name)%>Style = {
  bg: 'blue',
};

export { <%= h.capitalize(name)%>Style };
