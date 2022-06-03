
// 2. 方法装饰器
// 方法装饰器在方法声明之前。
// 装饰器参数有3个：类的构造函数或者实例成员的原型、函数名称、函数的属性描述符
// 返回一个属性描述符
export function consoleAge(target: any, propertyKey:string, descriptor:PropertyDescriptor){
    const value = descriptor.value;
    if(typeof value === 'function'){
        descriptor.value = function(){
            console.log(`name：${this.name} age：${this.age} run!!`)
        }
    }
}

class Animal{
    private _address:string = ''
    constructor(public name:string, public age:number){}
    @consoleAge
    action(){
        console.log('run');
    }
}
interface Tom extends Animal{
    sex:string
}
const tom = new Animal('tom',1) as Tom

tom.action()