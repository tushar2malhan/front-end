
// for(let i = 0; i < 100; i++)
// {
//     console.log(i);
// }

// let j = 0
// while (j<100){
//     console.log(j)
//     j++
// }

// let k = 0
// do {
//     console.log(k+1)
//     k +=1
//     if (k ==6){
//         break
//     }
//     if (k ==3){
//         k +=1
//         continue
//     }
// }while(k <10)

// let object = {
//     name:'tushar',                dictionary 
//     age :21,
//     status:'programmer'
// }

// for (let values in object){
//     console.log(values,object[values])
// }


// function f(name,greet){
//     console.log(`You know ${name} is going to be ${greet} of the world !`)
//     a = 'tushar malhan is the best ! '
//     return a;
// }

// let name = "tushar"
// let greet = "King"

// let val=f(name,greet)
// console.log(val)                                       // both the output gets printed 

// let ob={
//     name:'tushar',
//     game:function(){
//         return "Black ops - Zombies";
//     }
// }

// console.log(ob.game())

// arr = ['tushar','malhan','programmer']
// arr.forEach(function(element,index){
//     console.log(element,index)
// });

// let i = 23
// console.log(i)

// function u (name){
//     i = 9 
//     console.log(i)            // local varaible modified into gloabl  I = 9  now printed 
//     return `${name} malhan`
// }

// console.log(u('tushar'),i)  

// a = window.document;
// a = alert('alert message !')               // u get alert message from the webpage 
// a = prompt('HI tushar malhan  !')         // this stores values of messgae from user in varaible  a
// a = confirm('This is tushar malhan !?')   // it reconfirm the status  on the webpage 
// a = innerHeight
// a = innerWidth
// a = location.toString();
//  console.log(a)

// let arr = ['tushar','malhan',null,34,8.5,true]
// // console.log(arr.unshift('malhan'));
// // console.log(arr.sort());


// for ( let i =0; i < arr.length; i++){
//     const element = arr[i];
//     console.log(element)}



// let mydate = new Date();

// console.log(mydate.ge)



//                                DOM MANIPULATION    -  manipulate website via thier documents

// console.log(document.getElementById('ok'))
// document.getElementById('ok').style.color='red'

// console.log(document.getElementsByClassName('con')[0].style.background='yellow')

// let a = document.getElementsByClassName('con');
// a[0].classList.add('bf')
// a[0].classList.remove('bf')

// console.log(a[0].innerText)


// tag=document.getElementsByTagName('h1')
// console.log(tag)


// console.log(document.querySelector('.con'))

// function clicked(){
//     console.log('okk')       
// }


// log_karo= ()=>{
//     console.log('im log ')
// }

// setTimeout(log_karo,2000);