// console.log('ok')

var a =[]
function n(arr){
    // for(i=0; i<arr.length;i++){
    arr.forEach(e => {
        e.forEach(i => {
            // console.log(i)
            if(i.match(/[0-9]/)){
                console.log(i)
                a.push(i)
            }
            else{
                console.log('no')
            }
        })     
})

console.log(a)
}

n([['1af', 'fd', '34hdj','fdg']])

// [['name', 'age'], ['John', 32]]
const obj = {
    name: 'John',
    age: 32
}
let os =[]
let o = []
let s = []

for(key in obj){
    o.push(key)
}

s.push(Object.values(obj))
console.log(o)
os.push(o,s)

console.log(os)
o.forEach((e) => {
    console.log(e)
})


