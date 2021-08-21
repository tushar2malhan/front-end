// fetchbtn   =  post 
let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', click)

function click() {
    console.log('You clicked Fetchbtn');
    const x = new XMLHttpRequest();
    x.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);// POST  request 
    x.getResponseHeader('Content-type', 'application/json');
    x.onprogress = function () {
        console.log('In progress')
    };
    // x.onreadystatechange=  function(){
    //     console.log('Ready state =',x.readyState)}
    x.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.warn('Error occurred')
        }
    }
    p = `{"id":"1","name":"tushar","salary":"123","age":"22","mobile number":"73847478"}`;
    x.send(p);

}



// backupbtn  = GET
let popbtn = document.getElementById('backupbtn');
popbtn.addEventListener('click', pop);

function pop() {
    console.log('You have clicked the pop handler');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].id} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("error occured , please wait some time ...")
        }
    }
    xhr.send();
    console.log("We are done fetching employees!");
    
}


// I used Ajax for async 
// ajax() method allows you to send asynchronous http requests to submit or retrieve data from the server without reloading the whole page. $. ajax() can be used to send http GET, POST, PUT, DELETE etc. request. 
// It can retrieve any type of response from the server.
//  2 buttons used > one for post data == fetchbtn 
//        other used > to  get data   == backupbtn


/*  SECURITY  measures 
 Whenever u send passwords or any condidential credentials > never ever send via  GET request 
 ALways send it via POST request      for security  !
 XML HTTP Request: The main disadvantages of building web applications is that once a particular webpage is loaded within the user’s browser, the related server connection is cut off. 
 Further browsing (even) within the page itself requires establishing another connection with the server and sending the whole page back even though the user might have simply wanted to expand a simple link. 
 XML HTTP Request allows asynchronous data retrieval or ensuring that the page does not reload in its entirety each time the user requests the smallest of changes.
 JavaScript (JS) is the scripting language that unifies these elements to operate effectively together and therefore takes a most significant role in web applications.
 XML and XSLT that provide the formats for data to be manipulated, transferred and exchanged between server and client.
 */