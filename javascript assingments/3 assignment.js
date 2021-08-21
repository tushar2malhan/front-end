function f(v, ...arr) {
    var result = arr.includes(v)
    console.log(v ,'=' , result  )
}
f(2, 2, 3, 4, 5)

// v is assigned as the first arg from given args , rest taken as an array 


function second (v,...ar){
    console.log(`index of ${v} in array ${ar} is `,ar.indexOf(v))}
second(85,35,5,3,13,8,0)




function blue(){
    document.getElementsByClassName('blue-white')[0].style.background='blue' ;
    document.getElementsByClassName('blue-white')[0].style.color='white';
}
function color(){
    document.getElementById('root').style.color='red';
}
function p(){
    document.getElementsByTagName('p')[2].style.fontSize='50px';

}