// 3. 属性装饰器
// 参数： 成员的构造函数或者实例成员的类的原型  成员名称

export function yellowColor(target:any,propertyKey:string ){
    target[propertyKey] = 'yellow'
}

class Animal{
    private _address:string = ''
    @yellowColor static color:string = 'black'
}
interface Tom extends Animal{
    sex:string
}
console.log(Animal.color)

