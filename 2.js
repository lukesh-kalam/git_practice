let a=12
let b=23

console.log(a+b)

function add(a,b)
{
    let s =a+b ;
    console.log(s)
}
add(10,22)

// arrow 

var fun=(a,b)=> 
{
    fun=a*b;
    console.log("multiply function :- ",fun)
}
fun(15,22)
let student =
{
    name:"lukesh",
    roll:123,
    king:14
};
console.log(student.name)
student.backlogs=0;
console.log(student.backlogs)
// delete student.king;
console.log(student.king)



var marks=100;
if (marks>90) 
{
    document.writeln("excellent") ;
    console.log("excellent")
}
else if  (marks>80)
{
    console.log(" A grade")
}

let hello1=[10,"lukesh",'a']
console.log("printing array " ,hello1[1])
console.log(hello1.indexOf('a'))
hello2=[15,89,"kumar","kalam"]
console.log(hello1.concat(hello2))
hello1.push(18)
console.log(hello1)
hello1.slice(2,1,250)
console.log("print slice ",hello1)
hello1.sort()
console.log("printing sort :- ", hello1)

let new_number=[9,1,6,5,8,9]

for (let index=0;index<new_number.length;index=index+1) 
{
    console.log(new_number[index])
}



let kin12=12
console.log(kin12)
kin12="lukesh"
console.log(kin12)


const lukesh="kalam"
// const lukesh="kumar"

console.log("printing constant ",lukesh)


let kumar ={
    name:"lukesh kaumr kalam",
    addd:"Gudivada",
    degree:"B.Tech"
};
console.log(kumar.name)

var kumar1 ={
    name:"lukesh kaumr kalam",
    addd:"Gudivada",
    degree:"B.Tech"
}
console.log("var",kumar1.name)


var x="hi"
for (let i of x) 
{
    console.log(i)
}