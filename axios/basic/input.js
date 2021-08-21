import React, { Component } from 'react'
import Output from './output'
import Select from 'react-select'

const options = [
    { value: 20, label: 'Excellent' },
    { value: 10, label: 'Moderate' },
    { value: 5, label: 'Bad' }
]
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            val: 0,
            select_option: '',
            name: '',
            custdetails: []
        }
    }



    render() {
        return (
            <div className='input'>
                <h4> Enter your bill amount </h4>


                <input type="text" className='input-input'
                    onChange={(e) => { this.setState({ val: e.target.value }) }} />
                <hr />
                <label for="s">How was the service </label>
                <Select id ='select' options={options} placeholder='Review' onChange={(value) => { this.setState({ select_option: value.label }) }} />
                <input id ='inp' type="text" placeholder='Customer Name' value={this.state.name}
                    onChange={(e) => { this.setState({ name: e.target.value }) }} /> &nbsp;

                
                
                <button onClick={() => { this.setState({ custdetails: [...this.state.custdetails, { name: this.state.name}] }) }}  > Add name </button>


                <Output name={this.state.l} val={this.state.val} select={this.state.select_option} custdetails ={this.state.custdetails} />
            </div>




        )

    }
}








{/* <select name="s" className='options  ' >
                    <option value='excellent ' >Excellent </option>
                    <option value='moderate'>Moderate</option>
                    <option value='bad'>Bad</option>
                </select>  &nbsp; */}
