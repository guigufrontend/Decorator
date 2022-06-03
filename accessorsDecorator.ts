// 4 存取器装饰器
// 参数： 类的构造函数或者实例的原型 成员名称 成员属性描述符
// 注意同一个装饰器不能同时用于一个存取器的set和get
export function formatAddress(target: any, propertyKey:string, descriptor:PropertyDescriptor){
    descriptor.get = function(){
        return `${this.name}住在${this._address}`
    }
}

class Animal{
    private _address:string = ''
    constructor(public name:string, public age:number){}
    @formatAddress
    get address(){
        return this._address;
    }
    set address(address:string){
        this._address = address
    }
}
interface Tom extends Animal{
    sex:string
}
const tom = new Animal('tom',1) as Tom
tom.address = '猫窝'
console.log(tom.address)

