(function() {
// hide the true requirejs from ace so it doesn't trip over itself
var requirejs = undefined;
var require = undefined;
var old_requirejs = window.requirejs;
var old_require = window.require;
var old_define = window.define;
