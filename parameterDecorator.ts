// 5  参数装饰器
// 参数： 静态成员的类的构造函数或者实例成员的类的原型  成员名称  函数参数列表中参数的索引号
// 检测参数必填

// 利用闭包保存函数缺失的必填参数
 export function validateFactory(){
    const requiredMap:Record<string, number[]|undefined> = {}
    function requiredParam(target:any, propertyKey:string, index:number){
        const indexes = [...requiredMap[propertyKey] ||[], index]
        // 保存必填参数
        requiredMap[propertyKey]  = indexes
    }
    function validateRequired(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        const method = descriptor.value
        descriptor.value=function(){

            Object.keys(requiredMap).forEach(methodName=>{
                if(methodName === propertyKey){
                    requiredMap[methodName].forEach(index=>{
                        if(arguments[index]===undefined){
                            console.log(`${propertyKey} method miss required argument ${index}`)
                        }
                    })
                }
            })
            return method.apply(this, arguments)
        }
    }
    return {validateRequired, requiredParam}

}
// 获取真正的装饰器
const {validateRequired, requiredParam }= validateFactory()
class Animal{
    constructor(public name:string, public age:number){}

    @validateRequired
    say(@requiredParam message:string, @requiredParam second?:string, @requiredParam third?:string){
        console.log(`${this.name} say ${message}`)
    }
    @validateRequired
    eat(@requiredParam message:string, @requiredParam second?:string){
        console.log(`${this.name} eat ${message}`)
    }
}
interface Tom extends Animal{
    sex:string
}
const tom = new Animal('tom',1) as Tom
tom.say('hello' ,undefined,)
tom.eat('food')
