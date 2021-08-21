// alert('alert')   

// var user 



// alert = alert popup    |    prompt and confirm is user's input 

/*
        var a = 9
        var a = 90

        a = 900  // without var it becomes global variable  - which can be used from anywhere 
        a =80

        console.log(a)

        var x = 5, y = 4 , z =9;
        console.log(++x,y,--z)     //> increment and decrement by 1      

        ==   checks values without type     where x , y are operand and +,-,%,*,/ are the operators ! 
        ===  checks values with type 

        && =  AND operator btw 2 operands  (where 0 , false , undefined , null ,'' are considered as ZEROES )
        || =  OR  (either condition needs to be true)    ,     != gives opposite result   
        var a = 5, b = 10;
        (a != b) && (a < b);  // returns true
        !(a < b);             // returns false 

        var user ;
        alert(user ?? 'guest')   >>> inorder to escape undefined error 

*/

// concatination is allowed    with 'string' + 'another string '
// data types values are overwritten  is same variable is used 

/*      var x = 'tushar'
        var y = 31
        console.log( `hello  ${x}`)
        if (y < 4){
                console.log('hi , less than 4 ')}
        else if( x =='tushar' && y ==3){
                console.log('oh , hi tushar malhan , welcome ')}
        else{
                let y = alert('since y= 31  u it shows 31 in alert box ')
                console.log(' alert or prompt or confirm as many code as u want ')
        }

        console.log(y + '  this y is taken from global  var y  as inside block var was not changed , only let y was chosen ')
        if (y != null){
                alert('everything going correctly as u think ! ')
                console.log(y)
        }
        
        Ternary = single line (if else) | not multiple if statements
        var isx = 21 ;
        let option = isx == 21 ? 'tushar its 21 only ' : ' no tushar its not '; 
        console.log(option)
*/


//  
// input = ('yes')
// if (input ===1 || input ==='y' || input ==='yes'){
//         console.log('continue') }
// else{
//         console.log('end') }


/* SWITCH   = for strict comparison 
        // case 1,'y'.. (value) gets compares to switch value (input) ,
        // then we defined the condition > then break ! code comes out of block 
        // default : condition (where it means else statement )

        let input;
        input=1
        switch(input){
                case 1:    // if true conditions statment not given 
                case 'y': // it moves forward to next statemnt 
                        console.log('continue')
                        break
                case 'yes':
                        console.log('continue with yes')
                        break
                case 0:
                        console.log('end')
                        break
                default:
                        console.log('tushar its else condition') }
                                        
*/


//      Ways to get iterations [since indexing is done on string ]
/* 

       for loop -  vertical format 
       var str = 'tushar malhan'   
       for (var i=0;i<str.length;i++){
       console.log(str[i])}


       for - of loop - vertical format 
       for (var i of str){
       console.log(i)}

       console.log(str[0])   > single iteration 

       for - in loop - to get key iterations 
       for (var key in person ){
       console.log(key) }
*/

/* LOOPS
WHILE  -
*/
// let counter = 0                        
// while(counter <= 10){
//         document.write('tushar ')
//         counter ++ ; }
/* 

DO WHILE  = EXECUTES ATLEAST ONCE 
        let counter = 11 ;
        let sum = 1

        DO{  if (counter %2 ==0)
                sum = sum + counter
                counter ++ }

        while(counter <=1)
        document.write(sum)

for (let counter = 1 ; counter <= 10 ;counter ++ ){
        document.write(counter) 
        document.write('<br>') }
FOR LOOP  
*/


// var x = 'tushar MALHANq' ;
// var xz = x.includes('2')
// console.log(xz)


/* 
Object
        // var obj = {
        //         'car' :'bmw',
        //         Color:{texture :'blue'},
        //         price:100000,
        //         'start' : function(){
        //                 return 'starting car'},
        //         virgin: true,
        //         false: 'ok',
        //         return_name: function(){return this.car + ' for'+' tushar'}
                
        // }
        // console.log(obj['price'])       // indexing requires string 
        // console.log(obj.Color.texture)  
        // console.log(obj[0])             // cant be indexed by number  
        // console.log(obj['Color'].texture)  
        // console.log(obj.start())
        // console.log(obj.false)
        // console.log(obj.return_name())

        access methods in object  ie  access functions in objects by
        person.fullname()  >  cause its a function 
        Without (), it will return function definition.
*/

// in arrays = order matters 



//FETCHING ARRAYS  
//     fetch('').then(res => res.json()).then(data => {
//                 console.log(data)  
//         })



/*   FUNCTIONS   =  is  A Value (number, float , string , object)

        initialization |condition | code | increment > condition | code | increment 

        console.log() ~ prints the value of the function  , cant be assigned to variable 
        return ~ keyword returns the value of the function , which can be saved inside any variable 
        function_name() = retuns the value       |     function_name  = returns the text [ without () ]

        function  add(n1,n2){ 
        return n1 +n2; 
        }
        var sum = add(3,4)    // now REMEMBER THIS    'add(3,4)' == 7   >>> where we assigned this value to sum
        var sum = add    //   now if we just use add[function name ] >>> it gives the whole (function)text    ~ without ()
        console.log(sum) // SO WE ASSIGN THE VALUE TO THE VARIABLE [number , int , float  ,object ]
        if u return any value in function in an anonymous function  > it wont get any REFERENCE  >>> Throws error , so it must be assigned to a variable 
        (function(){
        console.log('anonymous function called without name')  // u cant return here | only print output 
        }())  // this concept is called      return by reference 
        outer function gets called first - where inside function get refer to paramters of function1 and will be run after function 2 
        callback function = call later 


        function addnum(callback){       //   addnum(callback) = getnum()
                return callback()           // argument passed in addnum function
        }
        
        function getnum(){              // getnum() = 5 
                return 5                    //   callbacks takes this getnum function() , it goes to getnum function
                // }                                   we call addnum(getnum)  > where getnum() = callback() only 
                //                                 forget getnum , think callback only
                
                console.log(addnum(getnum) )
                
                // [ FIRST WE CALL addnum function(getnum ==5  ,now callback() has getnum() which returns 5  )
                // so addnum(getnum)  == 5  ] 
                
                
                // SUMMARY    =      CALLBACK()  ==  GETNUM()
                // ALWAYS THINKS AND LOOK AT THE EXECUTION
                
                */




/*      function a() {
        alert('A');
        }
        //alerts 'A', returns undefined

        function b() {
        alert('B');
        return a;
        }
        //alerts 'B', returns function a

        function c() {
        alert('C');
        return a();
        }
        //alerts 'C', alerts 'A', returns undefined

        alert("Function 'a' returns " + a());
        alert("Function 'b' returns " + b());
        alert("Function 'c' returns " + c());    
        
        function add (){
                if (arguments.length ==0){
                        return('no argument passed from you ') }
                else{   var sum = 0 // +12  +3
                        for(let i = 0 ; i < arguments.length; i ++){
                                sum = sum + arguments[i]}
                        return arguments ,sum}}
        var ok = add;  
        console.log(ok(12,3))
        IF U SAVE FUNCTION IN VARIABLE , U DONT GIVE FUNCTION > U GIVE TEXT  
        >>> because u r returning value from the function 

        setTimeout(a,2000)   // (function , timeperiod )   > delays the output value 
        
*/

// CALLBACK 

/* Create a function that takes three argument which is another function (callback) and 2 numbers. 
  Now this callback function will have a provision to take 2 numbers as input and it would sum the two and return the result. 

        function my(callback,num1,num2){     1
correct       return callback(num1,num2)      this callback will be passed same as second  function     callback2  
                
wrong         return callback()                     # Not this 
        }

        function callback2(num1,num2){       2 
                return num1 + num2
        }
        
        correct- console.log(my(callback2,2,3)))    >  function applied same as 1
        
        wrong-  console.log(my(callback2(2,3)))               # Not this

        */

//commments are saved in ROM   , variables stored in RAM 
//  RETURNING FUNCTION IS NEVER CALLED WITH ()   , u just give the function name 
// function my(callback, num1 , num2){
//         return callback(num1,num2)    // HOW TO PRESENT THE VALUE 
//         // return - returns callback(num1,num2) > to my(callback,num1,num2)
// }
// function callback2(num1,num2){    // Function to be called later
//         return num1 + num2
// }
// console.log(my(callback2,3,4))       
// now   my(callback2,3,4)  =  callback2 function(num1,num2) 

// var i = 234
// console.log(i,'1');
// var i = 10 
// console.log(i,'2');
// function my(callback,i ){   
//         return callback(i)}
// function myfun(i){
//         i= 9
//         return i} 
// console.log(my(myfun,i),'4')   // how do u call the function by looking syntax above 
// console.log(i,'3')




/*DOM  
var a = document.getElementById('btn').innerText
var b = document.scripts

Array.from(a).forEach(function(Element){   //  IF U CAN'T GET IMAGES OR SCRIPTS , USE Array.from (a) >>> inorder to convert    
        console.log(Element)             //  convert object into array , so u can perform necessary functions 
})
Array.from(b).forEach(function(Element){
        console.log(Element)
})
*/



// use let 
// new var  =  data.map(item => {
// if(item.id >3){
// return ...item ,company:{...item.company,geo :{lat:item.address.geo.lng}} }   this way you interchange 
// })

// since company is object , change it likewise 


// var newar = data.filter(function(item , index){
//         if (item %2 ==0){
//                 return true
//         }
// })
// console.log(newar) })


//  access and change  elements by  tag , id , class , css selectors , object collections  
//display or change content from html body 
// function myfunc(){
//         console.log(document.body)
//         console.log(document.getElementById('demo').innerText='tushar')
//         console.log(document.getElementById('demo').style.color='blue')
// }



// SCOPE 
// function testing() {
//         let v = 'tushar malhan'  // immutables = means it saves in seperate location in memory 
//         function one() {
//                 var v = 'john pepper'   // change var v   >>> changes statement  from tushar to john pepper 
//                 console.log(v,'1')  // error , this v is accessible inside the function itself 
//         }
//         console.log(v ,'2')
//         one()                     
//         console.log(v ,'3')
// }
// testing()
// var which is closest to the function wrapper > gets printed []
// one() function is called because of [2 function (testing())] >>> so we need to call 2 function inorder to call the one function ()
// change in array is    var arr.push(3)     >>> MUTABLE 
// we dont change strings , we give another reference to it with another var     >>> immutable 


//Q why we use let  variable 
// for(var i = 0; i <= 10 ; i ++){  // all iteration gets printed here only until 10  , then after 10 i moves out
//         setTimeout(function(){
//                console.log(i)},1000) }  
// NO DELAY FOR EACH ITERATION >>> BECAUSE  FOR  EACH ITERAITON IN  FOR LOOP > THE EXECTUION TAKES PLACE AFTER FOR LOOP IS DONE 
// ONLY AFTER THAT SETIMEOUT TAKES PLACE , WHERE EACH ITERATION IS DELAYED AND PRINTED AFETR 1 SEC , THATS Y IF IT WAS VAR variable 
// then for loop prints 10 only with timeout 
// all 10 printed 
// var = functional scope , since for is not function  > its loop
// for loop working =  i = 0 > condition > execution > incrementation > condition > execution 
// i = 10 , then it executes the loop >>> so it prints the i = 10 
// if we use let >>> we get iterations 






// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {    
//         let n = data.map(item => {
//                 if(item.id >3 && item.id <9){  
//                         return {...item,company:{...item.company,geo:{lat:item.address.geo.lng, lng:item.address.geo.lat }}}                
//                          // want geo in company = so change company 
// return all the objects == items  , change company key :{by adding lat , lng inside geo}
// }
//                 return item  })    
//         console.log(data,'OLD')
//         console.log(n,'NEW')
// })
//             To alter particular object   |  we dont delete , we get different version of obj 
//             const { street1 , ...anyname } = obj     ...anyname = all other values are present 

//         // const newdata = data.filter(item => item.id%2 ==0 ).map(e => {
//         const {city , ...remainigaddress} = e.address // we delete city from address
//         const {phone , ...remaining_address} = e.company  // we filter out phone > so we just add the remaining address
//         return {...remaining_address, address:{remainigaddress} , company:{...e.company , city:{city}   }}
//               })
//       console.log(data,"old")
//      console.log(newdata,"new")
//      })
//              Q remove city from address and join to company with phone number 
// filter itself will return true or false 
// address key getting changed [no city] | company key getting changed [add city , phone number ]
//       now address = remaining address [after deleting city]
//      now company = {city address , and add city:{city}  the key and value  }
//  WE REMOVE THE KEY , WE ADD THE KEY   | if key value same use  city  only 
//  WE NEED TO SPECIFY THE MODIFICATIONS IN THE END 
// these alterations never change the data > it just do mutations 
//  WE MAKE CHANGES TO THE OBJECT NOT TO STRING 

// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {})
// let n = data.filter(e => e.id%2 ==0 ).map(item =>{
//         const {suite , city , ...remaining_address}=item.address                              // remaining only for address object 
//         return{...item , address:{remaining_address}, company:{...item.company,city}}
// })
// console.log(data,'old')
// console.log(n,'new')

// let newdata = data.map(e => {
//         let {suite , city ,...raddress} = e.address
//         if(e.id %2 ==0){
//                 return{ ...e,address:{raddress},company:{...e.company , city}}
//         } else{
//                 return e;
//         }
// }) ;
// console.log(newdata,'new')



// reverse catchprase from company, 
// delete suite - address , 
// copy geo  [interchange] from address to  username | 
// make phone as int for  all even id 

// ***
//         console.log(data, 'old')
//         let n = data.map(e => {
//                 let {suite , geo , ...remainingaddress} = e.address
//                 if (e.id % 2 == 0) {
//                         return{...e, address:{remainingaddress} , address:{...e.address , geo:{lat:e.address.geo.lng , lng:e.address.geo.lat } } , company:{catchPhrase:e.company.catchPhrase='Tushar'} , phone:85 } //, company:{catchPhrase:e.company.catchphrase } } 

//                 }else{return e}
//         })
//         console.log(n,'new');

// })




// for (key in values){console.log(key) }               // arrays   in = index 
// for (key of values){console.log(key) }               //  arrays   of = elements 
// for (key in person){console.log(person[key])  }      // object  in =  keys }
// for (key of person){ 
// console.log(key)}

//  USED BOTH FOR ARRAYS AND OBJECTS    (for of , for in , while , while do , for )
// IN ADDITIONAL arrays have foreach , filter , map functions 



//                PRACTICE 

// let obj = {}
// let arr = [['a', 2], ['b', 10], ['c', 40]] 

// let o = arr.forEach(e => {
//         obj[e[0]]=e[1]
// })
// console.log(obj)

// arr=[true , false , true , false , false]
// var c = 0 
// for(key of arr) { if(key == true){c=c+1}} console.log(c)


// var arr = [{ a: true }, {b: false}, {c: true}, {d: true}, {e: false} ]
// console.log(arr)
// let o = arr.filter( e => Object.values(e)[0]).length
// console.log(o)
// console.log(arr.filter( e => Object.keys(e)[0] ).length )

// var x =         arr.filter(s => (s > 5 )).length
//              [   this is is an array ].use functions on top of it 


// console.log(Object.keys(arr))  >>>  return array
// console.log(Object.values(arr))




// let a = [['a',true] ,['b',false] ,['c',true]]

// let x = a.forEach(i => {if(i[1]==true){ console.log(i)}})
// let x = a.filter(i => i[1])


//  truthy =  1,2 , 'anystring', true 
// falsy   = 0 , null , undefined , false , ''

// if(!obj[item.albumid]){'go inside'}

// Person.prototype.fullname =()=>{console.log( this.firstname , this.lastname )} 
// prototype is for accessing functions in the base class 

// arr = [3,5,6,5,7]



// var x =         arr.filter(s => (s > 5 )).map(e => e*2)
//              [   this is is an array ].use functions on top of it 
// console.log(x)
// for(i=0;i<arr.length;i++){
//         console.log(arr[i])
// }

// var x =[[1], [2, 3], [5], [3]]
// let y = x.reduce((combine, item) => {
//         return [...combine, ...item]   // we spread the combine array , then all elements inside combine 
// },[])





// arr =  [{ a: 10}, { b: 69}, {c: 33}]
// let keys = [];
// let values = []
// arr.forEach(item =>{ // want to iterate each value > put in for each 
//         keys.push(Object.keys(item)[0])
//         values.push(Object.values(item)[0])
//     })
// console.log(keys)
// console.log(values)



// Direction in which person is moving 
// let v = [ 'NORTH', 'SOUTH','EAST', 'WEST', ]

// function process(arr) {
//         let obj = { west: 0, east: 0, south: 0, north: 0 } // how u short the code , assign keys to values , instead of assigning variables 
//         let dir = {NORTH:'SOUTH',EAST:'WEST'}  
//         let result =[]
//         for (let i = 0; i < arr.length; i++) {
//                 obj[arr[i]] +=1 // give each direction with value 1 
//         }
//         let ns = obj.NORTH - obj.SOUTH  , ew = obj.EAST - obj.WEST 
//         if(ns > 0){
//                 result = Array(ns).fill('NORTH')
//         } else if(ns < 0){
//                 result = Array(ns).fill('SOUTH ')
//         }
//         if(ew > 0){
//                 result =[...result , ...Array(ns).fill('EAST') ]
//         } else if(ew < 0){
//                 result =[...result  , ...Array(ns).fill('WEST') ]
//         }
//         return result
// }



// function vowelsAndConsonants (s){
//         let vowels =['a','e','i','o','u']
//         for(let i=0;i<s.length;i++){
//                 vowels.forEach(s => {
//                         if(s[i] in vowels){ 
//                                 console.log(s[i])
//                 })
//                 }
//         }
//     }
// vowelsAndConsonants('javascript')

// v.forEach(e => {
//         if(e =="WEST"){
//                 p += "Left " 
//                 west +=1 
//         } else if(e =="EAST"){
//                 p += "right "
//                 east -= 1 
//         }

//         if(e =="NORTH"){
//                 p += "UP " 
//                 north += 1
//         }else if(e =="SOUTH"){
//                 p += "DOWN " 
//                 south -= 1 
//         }
// })
// console.log(p)
// console.log()




        // class snake {
        //         constructor (name){          // constructed parameter name 
        //             this.snakesname = name   // > WHERE args  ARE PASSED
        //         }
        //         getname (){
        //             return 'snake is '+ this.snakesname   // constructing method which returns 
        //         }
        //     }

        // class viper extends snake{
        //         constructor(name,age){   // where we create new attributes = age 
        //                 super('tushar')                     // use it mandatory to inherit parent class featues 
        //                 this.snakesname = name      // assign the snakesname to name parameter 
        //                 this.age =age  
        //         }
        //         get(){
        //                 return 'snake is  '+ this.name
        //         }

        // }
        // var viperra  = new viper ('black viper ',30)
        // var viperrab  = new viper ('red viper ',20) 

        // snakepit =[viperra,viperrab] // Q 1 !  can we do this ?
                // console.log(snakepit[0])
        // var nam =''
        // snakepit.forEach(element => { nam += element.get()}   ); // we get all names of all class , thus concated everything
        // var totalage  = snakepit.reduce((sum,element) => { 
        //        return  sum + element.snakesname           },'')
                // console.log(totalage )

                //Q hardcoded in super()


