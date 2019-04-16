/**
 * Created by 14486 on 2019/3/9.
 * 事件循环
 1: setImmeidiate(callback); 异步
     让回调函数在将来执行;
     promise.resolve.then
     promise 是同步的
     then的回调 是异步的
     process.nextTick(callback) 也是异步的

 2: 异步是有优先级的  事件循环的优先级
     macro-task:队列  script(全部的代码) setInterval setTimeout() setImmediate() I/O(读写操作);
     micro-task:队列  process.nextTick() >  promise.then()

 3:  while(true){
        第一步: script(全部的代码);
        第二步:
    }
 script(全部的代码) > process.nextTick > promise.then > setTimeout > setImmediate() > I/O
 */
