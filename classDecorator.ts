
// 1。类装饰器
// 作用域类上，参数是类的构造函数
export function extendsAnimal(target:typeof Animal){
    console.log(target === Animal.prototype.constructor)
    return class extends target{
        sex = 'male'
        age: number
        constructor(name:string, age:number){
            super(name, age)
            this.age += 1
        }
    }
}

@extendsAnimal
class Animal{
    constructor(public name:string, public age:number){}
}
interface Tom extends Animal{
    sex:string
}
const tom = new Animal('tom',1) as Tom

console.log(tom.sex)
console.log(tom.age)