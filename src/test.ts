
let name1 = "aaa"; //类型推论
let title: string = "规定类型"; // 类型注解
//name1 = 2; // 错误 -- 上面已经推论出name1是字符串类型
//title = 5; //错误的 -- 已经声明是字符串类型

// 数组使用类型
let names: string[]; //或者Array<string>
names = ['Tom']; 

let foo:any = "任意类型";
foo = 3

//any类型也可以使用数据
let lists: any[]
lists = [1,"任意类型",true]
lists[1] = 300

//函数中使用类型注解
function greeting(person: string): string{
    return "Hello,"+ person
}

//void类型 常用于没有返回值的函数
function warnUser(): void {alert('This is my warning message')}

//TS的内置类型
/**
 * 1.string
 * 2.number
 * 3.boolean
 * 4.void --函数的不返回值
 * 5.any --任意类型
 */

 //函数
 /**
  * 此处name和age是必填参数
  * 如果变更为可选参数 加上?
  * 可选参数在必选参数后面
  */
 function sayHello(name:string,age: number=20,addr?:string): string{
     return '您好： '+name + "" + age
 }

 /**
  * 函数重载
  * 参数数量或者类型或者返回类型不同 函数名却相同
  * 先声明 在实现
  */
 function info(a:{name: string}):string;
 function info(a:string): object;
 function info(a:{name:string}|string):any{
     if(typeof a==='object'){
         return a.name;
     }else {
         return {name:a}
     }
 }

 //类
 //ts中的类和es6中的大体相同  重点关注ts带来的特性
 class MyComp {
    private _foo: string; //私有属性 不能在类的外部访问
    protected bar: string; //保护属性 还可以在派生类中访问
    readonly mua = 'mua'; //只读属性 必须在声明时 或者构造函数里初始化

    //构造函数： 初始化成员变量
    // 参数加上修饰符  能够定义并初始化一个成员属性
    constructor(private tua = "tua"){
        this._foo = "foo";
        this.bar = "bar"
    }

    //方法也有修饰符
    private someMethod(){}

    //存取器：存取数据时可添加额外的逻辑  在vue中可以当做计算属性来用
    get foo(){return this._foo}
    set foo(val){this._foo = val}
 }


 //class的原理
 class Person{ //类指向构造函数
    public name: string
    public age: number
    constructor(name:string,age:number){ //constructor是默认方法 new实例是自动调用
        this.name = name; //属性声明在实例上 因为this指向实例
        this.age = age;
    }
    say(){
        return "我的名字是" + this.name + "今年" + this.age + "岁"
    }
 }
 //等效于
 function Person1(name:string,age:number){
     //this.name = name;
     //this.age = age;
 }
 Person1.prototype.say = function(){
    return "我的名字是" + this.name + "今年" + this.age + "岁"
 }

 //接口
 //interface 仅定义结构 不需要是实现
 interface Person2 {
     firstName: string;
     lastName: string;
     sayHello(): string; //要求实现方法
 }
 //实现接口
 class Greeter implements Person2{
     constructor(public firstName="",public lastName=""){
         
     }
     sayHello(){
         return "Hello" + this.firstName + " " +this.lastName
     }
 }
 //面向接口编程
 function greeting1(person: Person2){
     return person.sayHello
 }
 
 const user = new Greeter("第一个名字","最后一个名字"); //创建对象实例
 console.log(user)
 console.log(greeting1(user))


 //泛型 Generics
 //Generics是指定义函数、接口、或类的时候 不预先指定具体的类型 而使用的时候再指定类型的一种特性
 //定义泛型接口
 interface Result<T>{
    ok: 0 | 1;
    data: T[];
 }
 //定义泛型函数
 function getData<T>(): Result<T>{
     const data: any[] = [
        {id:1,name:"类型注释",verson: "1.0"},
        {id:2,name:"编译型语言",verson: "2.0"}
     ]
     return {ok:1,data};
 }
 //使用泛型
 getData<Result<string>>().data;



 //装饰器原理
 //装饰器实际上是一个函数 通过定义劫持 能够对类方法 属性 提供额外的扩展功能

 //类装饰器
 function isFoo(target){
     console.log(target===Foo); //true
     target.isFoo = true;
     return target
 }
 //属性装饰器
 function mua(target,name){
     //target是原型，name是属性名
     console.log(target === Foo.prototype);//true
    target[name] = 'mua-------'
 }
 //方法装饰器
 function dong(target,name,descriptor){
     //target是原型 name是方法名 descriptor是描述符
     console.log(target === Foo.prototype);//true
     //方法定义方式： Object.defineProperty(target,name,descriptor)
      console.log(target[name] === descriptor.value);
     //这里通过修改descriptor.value扩展了bar方法
     const bar = descriptor.value;
     descriptor.value = function(){
         console.log("dong____")
         bar()
     }
     return descriptor
 }
 @isFoo
 class Foo{
     @mua aaa: string;
     constructor(){
         console.log("Foo的构造函数")
     }
     @dong
     bar(){
         console.log('bar---')
     }
 }
 console.log(Foo.isFoo)
 let f = new Foo()
console.log(f.aaa);
f.bar()