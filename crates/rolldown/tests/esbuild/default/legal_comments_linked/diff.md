## /out/entry.js
### esbuild
```js
// a.js
console.log("in a");

// b.js
console.log("in b");

// c.js
console.log("in c");
/*! For license information please see entry.js.LEGAL.txt */
```
### rolldown
```js

```
### diff
```diff
===================================================================
--- esbuild	/out/entry.js
+++ rolldown	
@@ -1,3 +0,0 @@
-console.log("in a");
-console.log("in b");
-console.log("in c");

```
