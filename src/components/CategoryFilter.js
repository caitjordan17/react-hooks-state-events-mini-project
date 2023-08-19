import React, {useState} from "react";

function CategoryFilter({categories, filter, handleTaskFilter}) {
  //console.log("filter", filter)
  const catList = categories.map((category) => (
    <button 
    key={category} 
    className={filter === category ? "selected" : null}
    onClick={handleTaskFilter}>
      {category}
    </button>
  ))

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {catList}
      </div>
    </div>
  );
}

export default CategoryFilter;
