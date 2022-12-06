import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectCatagory }) {
  const categoryBtns = categories.map(category => {
    const className = category === selectedCategory ? "selected" : ""
    return <button key={category} className={className} onClick={() => setSelectCatagory(category)}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
