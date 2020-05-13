let objects = [
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "Array",
    "Date",
    "RegExp",
    "Promise",
    "Proxy",
    "Map",
    "WeakMap",
    "Set",
    "WeakSet",
    "Function",
    "Boolean",
    "String",
    "Number",
    "Symbol",
    "Object",
    "Error",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8ClampedArray",
    "Atomics",
    "JSON",
    "Math",
    "Reflect"
  ];
 
  const set = new Set();
 
  const globalObject = []
 
  for (let i of objects) {
    globalObject.push({
      object: this[i],
      path: [i]
    })
  }
 
  while (globalObject.length) {
    const current = globalObject.shift()
    console.log(current.path.join('.'))
    if (set.has(current.object))
      continue;
    set.add(current.object)
    let proto = Object.getPrototypeOf(current.object)
    if (proto) {
      globalObject.push({
        path: current.path.concat(["__proto__"]),
        object: proto
      })
    }

 
    for (let p of Object.getOwnPropertyNames(current.object)) {
      let d = Object.getOwnPropertyDescriptor(current.object, p)


// 属性描述符： 

// value： 该属性的值(仅针对数据属性描述符有效)

// writable： 当且仅当属性的值可以被改变时为true。(仅针对数据属性描述有效)

// get：获取该属性的访问器函数（getter）。如果没有访问器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)

// set：获取该属性的设置器函数（setter）。 如果没有设置器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)

// configurable：当且仅当指定对象的属性描述可以被改变或者属性可被删除时，为true。

// enumerable：当且仅当指定对象的属性可以被枚举出时，为 true。

      if (d.hasOwnProperty("value") && ((d.value !== null && typeof d.value === "object") || (typeof d.value === "function")) && d.value instanceof Object) {
        globalObject.push({
          path: current.path.concat([p]),
          object: d.value
        })
      }
      if (d.hasOwnProperty("get") && typeof d.get === "function") {
        globalObject.push({
          path: current.path.concat([p]),
          object: d.get
        })
      }
      if (d.hasOwnProperty("set") && typeof d.set === "function") {
        globalObject.push({
          path: current.path.concat([p]),
          object: d.set
        })
      }
    }
  }