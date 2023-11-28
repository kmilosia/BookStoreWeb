import React, { useEffect, useState } from 'react';
import FilterHeader from './FilterHeader';
import ShowMoreButton from '../buttons/ShowMoreButton';
import FilterLabelElement from './FilterLabelElement';
import axiosClient from '../../utils/api/axiosClient';

function AuthorFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [displayedFields, setDisplayedFields] = useState(5)

  const getAuthors = async () => {
    try {
      const response = await axiosClient.get(`/Author`);
      setAuthors(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getAuthors();
  }, [])
  const handleShowMore = () => {
    setDisplayedFields((prevCount) => (prevCount === 5 ? authors.length : 5));
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
                  const title = `${item.name} ${item.surname}`;
                  return <FilterLabelElement key={index} title={title} />;
                })}
            </div>
            {authors.length > 5 && <ShowMoreButton onClick={handleShowMore} displayedFields={displayedFields} />}
          </div>
        </>
      )}
    </div>
  );
}

export default AuthorFilter;
