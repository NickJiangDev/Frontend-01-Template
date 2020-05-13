Realm

JS Context => Realm


js引擎对大粒度：Context
对应一个Global Object
多个宏任务之间共享全局对象，多个宏任务之间定义的变量和内置对象相通


Realm内有一套完整的JS内置对象

<!-- let current;
while(queue.length) {
current = queue.shift();
if(set.has(current)) continue;
set.add(current);
for(let p of Object.getOwnPropertyNames(current)) {
    var property = Object.getOwnPropertyNames(current, p);
    if(property.hasOwnProperty("value") && property.value instanceof Object)
    queue.push(current.value)
    if (property.hasOwnProperty("getter") && property.value instanceof Object)
    queue.push(current.getter)
    if (property.hasOwnProperty("setter") && property.value instanceof Object)
    queue.push(current.setter)
}
} -->

