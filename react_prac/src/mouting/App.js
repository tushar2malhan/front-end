import React from 'react'
import Header from './Header'
import Mouting1 from './mouting-child'
import Dash from './mouting-child2'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state={
        users:[]
      }

      
    }
    componentDidMount(){
      axios('https://jsonplaceholder.typicode.com/users').then((res) => {
        this.setState({users:res.data})
      })
    }
  
    handlechange = (id,name) =>{
      let ind = -1 
      this.setState({users:[] })
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div> <Link to='/mounting'> Go to  mounting  </Link></div>
            <div> <Link to='/dash'> Go to  dash  </Link></div> 

          </div> <br/>

          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/dash/:id' render={(routeProps) => { <Header handlechange={this.handlechange } {...routeProps} />} } />
            <Route path='/dash'   render={() => <Dash users ={this.state.users}/>} />
            <Route path='/mounting' component={Mouting1} />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }

}

export default App