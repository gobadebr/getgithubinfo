import React, { Component } from 'react'

import './App.css';

import Banner from "./Components/banner/Banner"
import Card from "./Components/card/Card"
import SearchBox from "./Components/search/SearchBox";



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  };

  render() {
    return (
      <>
        <Banner />
        <SearchBox onInputChange={this.onInputChange} />
        {this.state.userData.id && this.state.searchName !== "" ? (
          <Card profile={this.state.userData} />
        ) : (
          <div className="no-data">
            No user Found! <br />
          </div>
        )}
      </>
    )
  }
}

export default App
