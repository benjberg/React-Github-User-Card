import React from 'react';
import axios from 'axios'; 
import GitCard from './GitCard'; 
import GitFollow from './GitFollow';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      followers: []
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/benjberg').then(res => {
      console.log('res', res);
      this.setState({
        user: res.data
      })
    })
    axios.get('https://api.github.com/users/benjberg/followers').then(res =>{
      console.log('follow res', res.data);
      this.setState({
        followers: res.data
      })

    })
  }
  render() {
    return(
      <div className="App">
        <GitCard user={this.state.user} />
        <GitFollow followers={this.state.followers}/>
       
       </div> 
  
    );
  }
}
