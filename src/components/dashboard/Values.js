import React, { Component } from 'react';
import axios from 'axios'

const API_KEY = "02bc771f7b989251afda68563083429b";
const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
export default class Values extends Component {
    state = {
        values: []
    }
   
    componentDidMount() {
        axios.get(`${URL}`)
        .then(res => {
            this.setState({values: res.data.rates});
            
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

  render() {
     const val = this.state.values;
     console.log(val)
     const list_values = Object.keys(val).map((item, i) => (
        <ul key={i} class="collection with-header">
        <li class="collection-item"><div>{item}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>

      </ul>
  
    ))
    return (
      <div>
          {list_values}
      </div>
    )
  }
}
