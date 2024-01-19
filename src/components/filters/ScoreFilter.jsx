import React from 'react'
import { useState } from 'react'
import Stars from '../elements/Stars'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const FilterElement = (props) => {
const [isChecked, setIsChecked] = useState(false)
const handleCheckboxClick = () => {
    setIsChecked(!isChecked)
    props.onChange(props.value, !isChecked)
  }
    return (
        <div className="filter-element-wrapper">
            <input name={props.name} type="checkbox" value={props.value} checked={isChecked} onChange={handleCheckboxClick} className="filter-checkbox"/>
            <label htmlFor={props.name} className="ml-2 text-xs"><Stars score={props.score} /></label>
        </div>
    )
}
function ScoreFilter({filterElements,setFilterElements,filtersOpen,setFiltersOpen}) {
    const handleCheckboxChange = (scoreId) => {
      const isSelected = filterElements.score.includes(`&ScoreValues=${scoreId}`)
      if (isSelected) {
        setFilterElements((prevValues) => ({
          ...prevValues,
          score: prevValues.score.replace(`&ScoreValues=${scoreId}`, ''),
      }))
      } else {
        setFilterElements((prevValues) => ({
          ...prevValues,
          score: `${prevValues.score}&ScoreValues=${scoreId}`,
      }))
      }
    }
  return (
    <div className='filter-wrapper'>
      <div onClick={() => setFiltersOpen({...filtersOpen, score: !filtersOpen.score})} className='cursor-pointer flex flex-row justify-between items-center w-full px-3 py-1'>
        <h1 className='font-medium'>Ocena</h1>
        <button className='pointer'>
            {filtersOpen.score ? <IoIosArrowUp />: <IoIosArrowDown />}
        </button>
        </div>
        {filtersOpen.score &&
            <div className='filter-list-wrapper'>
                <div className='filter-list-container'>
                    <FilterElement name="score0" score={0} value={0} onChange={handleCheckboxChange}/>
                    <FilterElement name="score1" score={1} value={1} onChange={handleCheckboxChange}/>
                    <FilterElement name="score2" score={2} value={2} onChange={handleCheckboxChange}/>
                    <FilterElement name="score3" score={3} value={3} onChange={handleCheckboxChange}/>
                    <FilterElement name="score4" score={4} value={4} onChange={handleCheckboxChange}/>
                    <FilterElement name="score5" score={5} value={5} onChange={handleCheckboxChange}/>
                </div>
            </div>
        }
    </div>
  )
}

export default ScoreFilter
