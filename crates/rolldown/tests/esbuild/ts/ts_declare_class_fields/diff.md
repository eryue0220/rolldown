# Reason
1. lowering class
# Diff
## /out.js
### esbuild
```js
// define-false/index.ts
() => null, c, () => null, C;
var Foo = class {
};
(() => new Foo())();

// define-true/index.ts
var _a;
var Bar = class {
  constructor() {
    __publicField(this, "a");
    __publicField(this, _a);
  }
  static A;
  static [(_a = (() => null, c), () => null, C)];
};
(() => new Bar())();
```
### rolldown
```js

//#region define-false/index.ts
var Foo = class {
	a;
	[(() => null, c)];
	static A;
	static [(() => null, C)];
};
(() => new Foo())();

//#endregion
//#region define-true/index.ts
var Bar = class {
	a;
	[(() => null, c)];
	static A;
	static [(() => null, C)];
};
(() => new Bar())();

//#endregion
```
### diff
```diff
===================================================================
--- esbuild	/out.js
+++ rolldown	entry.js
@@ -1,13 +1,14 @@
-(() => null, c, () => null, C);
-var Foo = class {};
+var Foo = class {
+    a;
+    [(() => null, c)];
+    static A;
+    static [(() => null, C)];
+};
 (() => new Foo())();
-var _a;
 var Bar = class {
-    constructor() {
-        __publicField(this, "a");
-        __publicField(this, _a);
-    }
+    a;
+    [(() => null, c)];
     static A;
-    static [(_a = (() => null, c), () => null, C)];
+    static [(() => null, C)];
 };
 (() => new Bar())();

```