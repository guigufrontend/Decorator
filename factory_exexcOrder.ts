// 装饰器可以用在一行或多行上
function log1(target) {
    console.log('log1')
}

function log2(target) {
    console.log('log2')
}

function log3(target) {
    console.log('log3')
}

// 可以这么写
@log3
@log2
@log1
class Person{}

// 也可以这么写
@log3 @log2 @log1
class Animal{}
// 打印顺序
// log1
// log2
// log3


// 如果是装饰器工厂
 const factoryFirst = function(x:string){
    console.log(x)
    return function(target:typeof Person2){
        console.log('decoratorFirst')
    }
 }
 const factorySecond = function(x:string){
    console.log(x)
    return function(target:typeof Person2){
        console.log('decoratorFirst')
    }
 }

@factoryFirst('y')
@factorySecond('x')
class Person2{
    x: number
    constructor(x:number){
        this.x=x
    }
}

// 装饰器工厂先打印y，再打印x
// 也就是先执行外层的工厂，再执行内层的工厂


function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
        console.log('method called')
    }
}
const c = new C
c.method()