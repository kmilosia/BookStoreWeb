import React, { useEffect, useState } from 'react';
import ShowMoreButton from '../buttons/ShowMoreButton';
import FilterLabelElement from './FilterLabelElement';
import { getAuthors } from '../../utils/api/dictionaryAPI';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function AuthorFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
  const [authors, setAuthors] = useState([])
  const [displayedFields, setDisplayedFields] = useState(6)
  useEffect(() => {
    getAuthors(setAuthors)
  },[])
  const handleShowMore = () => {
    setDisplayedFields((prevCount) => (prevCount === 6 ? authors.length : 6));
  }
  const handleCheckboxChange = (authorId) => {
    const isSelected = filterElements.author.includes(`&AuthorIds=${authorId}`)
    if (isSelected) {
      setFilterElements((prevValues) => ({
        ...prevValues,
        author: prevValues.author.replace(`&AuthorIds=${authorId}`, ''),
    }))
    } else {
      setFilterElements((prevValues) => ({
        ...prevValues,
        author: `${prevValues.author}&AuthorIds=${authorId}`,
    }))
    }
  }
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, author: !filtersOpen.author})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Autor</h1>
        <button className='pointer'>
            {filtersOpen.author ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
      {filtersOpen.author && (
          <div className='filter-list-wrapper'>
            <div className='filter-list-container'>
              {authors?.slice(0, displayedFields).map((item, index) => {
                  const title = `${item.name} ${item.surname}`
                  return <FilterLabelElement key={index} value={item.id} onChange={handleCheckboxChange} title={title} />
                })}
            </div>
            {authors.length > 6 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
          </div>
      )}
    </div>
  );
}

export default AuthorFilter;
