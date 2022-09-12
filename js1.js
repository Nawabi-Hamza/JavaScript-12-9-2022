// arrow functions

function sayHi(){
    return 'hello'  }
console.log(sayHi())


let say = () => {
    console.log('how are you') }
say()


hel = (p)=> 'What the fuck ' + p
console.log(hel('you'))

jum = (a,b)=> "sum of two number : " + (a+b)
console.log(jum(12,32))
console.log('----------------------------------------------')

// class

class person{
        constructor(name,age){
            this.theName = name ;
            this.theAge = age; 
        }
}
let pObj = new person('Ahmad' , 32)
let pObj1 = new person('israel' , 12)

console.log(pObj.theName)
console.log(pObj.theAge)

console.log(pObj1.theName)
console.log(pObj1.theAge)
