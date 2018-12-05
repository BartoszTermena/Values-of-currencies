import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment/min/moment-with-locales';

const API_KEY = "02bc771f7b989251afda68563083429b";
const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`
export default class Values extends Component {
    state = {
        values: [],
        specs: []
    }
   
    componentDidMount() {
        axios.get(`${URL}`)
        .then(res => {
            this.setState({
            values: res.data.rates,
            specs: res.data});
        })
        .catch(err => console.log(err))
    }

  render() {
     moment.locale('eng');
     const date = this.state.specs.date;
     const base = this.state.specs.base;
     const val = this.state.values;
     console.log(val)
     const list_values = Object.entries(val).map(([item, value]) => (
        <div key={value + item} className="row">
        <div className="col s6">
  <ul className="collapsible">
  <li>
    <div className="collapsible-header"><i className="material-icons">attach_money</i>{item} | <span className="green-text currency_value"> {value}</span></div>
    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>
</ul>
</div>
</div>
       
  
    ))
    return (
      <div>
          <h5>{base} | {moment(date).format("YYYY/MM/DD")}</h5>
          <div className="input-field col s6 search_currency">
          <input id="last_name" type="text" />
          <label htmlFor="last_name">Search Currency</label>
            </div>
        
          {list_values}
          
      </div>
    )
  }
}
