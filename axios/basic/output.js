import React from 'react'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tip:0,
            totaltip:0,
            feedback: 0

        }
    }

    calculatetotal = () => {
        const total = this.props.custdetails.reduce((sum,item)=> {
            return sum + Number(this.state.feedback * this.props.val)
        },0)
        this.setState({totaltip:total})
    }
    
    render()
    {
        // console.log(this.props.custdetails , 'cust')
        var count = 0
        this.props.custdetails.forEach( (e) => { 
            count +=1
         } ) 

        let a = this.props.val ,
        tipo = a * 20 /100

        if(this.props.select =="Moderate"){
            tipo = a * 10 /100
            this.state.feedback = 0.1
           

        }else
         if(this.props.select =="Excellent"){
            tipo = a * 20 /100
            this.state.feedback = 0.2
        }
        else 
        if(this.props.select =="Bad"){
            tipo = a * 5 /100
            this.state.feedback = 0.05
            
        }



        return(
            <div className="output" >
               
            <h3>Customer List </h3> <hr/>
            <div>
                    <ul>
                        {this.props.custdetails.map((item,index) => {
                            return <li key ={index}>
                                {item.name} ,{item.tottip}
                            </li>

                        })}
                    </ul>
            </div>
            
            {console.log(this.state)}
            <button className="btn-output"  onClick={() =>{this.calculatetotal() }  }      >Calculate Total Tip   </button>
                             <br/> <br/>

            <table >
                <tr>
                    <th>Total Customer</th>
                    <th> Total Tip</th>
                </tr>    
                <tr>
                    <td >{count}   </td>
                    <td>  { this.state.totaltip}</td>
                   
                </tr>
                
            </table>
            
             
             
            </div>
            
        )
    }
}

// totalamount = val 
// feedback    = select_option
// name        = name
//