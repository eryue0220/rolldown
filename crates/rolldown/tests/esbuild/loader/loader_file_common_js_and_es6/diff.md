# Reason
1. Not support file loader
# Diff
## /y-YE5AYNFB.txt
### esbuild
```js
y
```
### rolldown
```js

```
### diff
```diff
===================================================================
--- esbuild	/y-YE5AYNFB.txt
+++ rolldown	
@@ -1,1 +0,0 @@
-y;

```
## /x-LSAMBFUD.txt
### esbuild
```js
x
```
### rolldown
```js

```
### diff
```diff
===================================================================
--- esbuild	/x-LSAMBFUD.txt
+++ rolldown	
@@ -1,1 +0,0 @@
-x;

```
## /out.js
### esbuild
```js
// x.txt
var require_x = __commonJS({
  "x.txt"(exports, module) {
    module.exports = "./x-LSAMBFUD.txt";
  }
});

// y.txt
var y_default = "./y-YE5AYNFB.txt";

// entry.js
var x_url = require_x();
console.log(x_url, y_default);
```
### rolldown
```js


//#region y.txt
var y_default = "y";

//#endregion
//#region x.txt
var require_x = __commonJS({ "x.txt"(exports, module) {
	module.exports = "x";
} });

//#endregion
//#region entry.js
const x_url = require_x();
console.log(x_url, y_default);

//#endregion
```
### diff
```diff
===================================================================
--- esbuild	/out.js
+++ rolldown	entry.js
@@ -1,8 +1,8 @@
+var y_default = "y";
 var require_x = __commonJS({
     "x.txt"(exports, module) {
-        module.exports = "./x-LSAMBFUD.txt";
+        module.exports = "x";
     }
 });
-var y_default = "./y-YE5AYNFB.txt";
 var x_url = require_x();
 console.log(x_url, y_default);

```