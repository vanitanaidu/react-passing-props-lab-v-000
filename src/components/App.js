import React, { Component } from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';


class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  //this is another way of writing `.then` statements if you don't want to use a debugger

    fetchFruit = () => {
      fetch('/api/fruit')
        .then(response => {
          return response.json()
        })
        .then(fruit => {
          this.setState({ fruit });
        })
    }
    //this syntax is when you want to use a debugger

    handleFilterChange = event => {
       this.setState({ currentFilter: event.target.value });
     }

  render() {
    return (
      <FruitBasket
        selectedFilter={this.state.currentFilter}
        handleFilterChange={this.handleFilterChange}
        fruit={this.state.fruit}
        filters={this.state.filters}
      />
    )
  }
}


export default App;
