import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import axios from 'axios';


class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      posts: [],
	 isToggleOn: true,
	 clicks:0
	}

	    this.componentDidMount = this.componentDidMount.bind(this);

    };

  
  componentDidMount() {
    axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format
=json`).then(res => {
		const posts = res.data;
        this.setState({ posts });
		      });
		this.setState(prevState => ({
		isToggleOn: !prevState.isToggleOn
		}));
		
		this.setState({ clicks: this.state.clicks + 1 });
  
  }
  render() {
    return (
		
      <div className="container">
		  <div className="form-group">
		  </div>

         <h2>Quick Quote</h2>

		
		<Button color="danger" onClick={this.componentDidMount}>Danger!</Button>

		<h2>{this.state.posts.CustomerRate}</h2>
		<h2>{this.state.isToggleOn ? 'ON' : 'OFF'}</h2>
		<h2>{this.state.clicks}</h2>



      </div>
    );
  }
}

export default App;
