import React, { useEffect, useState } from 'react';
import FilterHeader from './FilterHeader';
import ShowMoreButton from '../buttons/ShowMoreButton';
import FilterLabelElement from './FilterLabelElement';
import { getAuthors } from '../../utils/api/filtersAPI';

function AuthorFilter({setAuthorFilter}) {
  const [showFilter, setShowFilter] = useState(false)
  const [authors, setAuthors] = useState([])
  const [displayedFields, setDisplayedFields] = useState(6)
  useEffect(() => {
    getAuthors(setAuthors)
  }, [])
  const handleShowMore = () => {
    setDisplayedFields((prevCount) => (prevCount === 6 ? authors.length : 6));
  }
  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setAuthorFilter((prevFilter) => `${prevFilter}${value}`)
    } else {
      setAuthorFilter((prevFilter) =>
        prevFilter.replace(`${value}`, '')
      )
    }
  }
  return (
    <div className='filter-wrapper'>
      <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Autor" />
      {showFilter && (
        <>
          <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
              {authors &&
                authors.slice(0, displayedFields).map((item, index) => {
                  const title = `${item.name} ${item.surname}`
                  const value = `&authorIds=${item.id}`
                  return <FilterLabelElement key={index} id={item.id} value={value} onChange={handleCheckboxChange} title={title} />
                })}
            </div>
            
            {authors.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
          </div>
        </>
      )}
    </div>
  );
}

export default AuthorFilter;
