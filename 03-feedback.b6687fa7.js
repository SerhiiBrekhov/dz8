!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequirea638;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequirea638=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return u.default(e)||l.default(e)||f.default(e)||i.default()};var u=s(o("kMC0W")),l=s(o("7AJDX")),i=s(o("8CtQK")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector(".feedback-form");!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(console.log(e),e)for(key in e)d[key].textContent=d[key].value,console.log(d[key].name,d[key].value)}(),d.addEventListener("submit",(function(t){if(t.preventDefault(),e(a)(t.target.elements).filter((function(e){return"INPUT"===e.tagName})).some((function(e){return""===e.value})))return void alert("Усі поля мають бути заповнені.");var r=t.currentTarget.elements,n=r.email,o=r.message,u={email:n.value,message:o.value};return console.log(u),d.reset(),void localStorage.removeItem("feedback-form-state")})),d.addEventListener("input",_.throttle((function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;try{var o=JSON.stringify({email:r.value,message:n.value});console.log(o),localStorage.setItem("feedback-form-state",o)}catch(e){console.log("error")}}),300))}();
//# sourceMappingURL=03-feedback.b6687fa7.js.map