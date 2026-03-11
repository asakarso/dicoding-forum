import PropTypes from 'prop-types';
import React from 'react';

function CategoryList({ categories, selectedCategory, onClick }) {
  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-semibold mb-4 text-primary'>Kategori Thread</h2>
      <div className='flex gap-4'>
        {
          categories.map((category, index) => (
            <div
              onClick={() => onClick(category)}
              className={`border border-gray-400 rounded-lg w-fit px-6 py-2 flex gap-6 ${category === selectedCategory ? ' bg-primary text-white' : ' bg-white'}`}
              key={index}
            >
              {category}
            </div>
          ))
        }
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CategoryList;