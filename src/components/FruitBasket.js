import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


 const FruitBasket = ({filters, handleFilterChange, selectedFilter, fruit}) => {
   return (
     <div className="fruit-basket">
       <Filter
         handleChange={handleFilterChange}
         filters={filters} />
       <FilteredFruitList
         filter={selectedFilter}
         fruit={fruit} />
     </div>
   )
 }


FruitBasket.defaultProps = {
  fruit: '',
  filters: '',
  currentFilter: '',
  updateFilterCallback: ''
}


export default FruitBasket;
