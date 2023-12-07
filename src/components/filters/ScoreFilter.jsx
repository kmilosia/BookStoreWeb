import React from 'react'
import { useState } from 'react'
import FilterHeader from './FilterHeader'
import Stars from '../elements/Stars'

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
function ScoreFilter({setScoreFilter}) {
    const [showFilter, setShowFilter] = useState(false)
    const handleCheckboxChange = (value, isChecked) => {
        if (isChecked) {
          setScoreFilter((prevFilter) => `${prevFilter}${value}`)
        } else {
          setScoreFilter((prevFilter) =>
            prevFilter.replace(`${value}`, '')
          )
        }
    }
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Ocena" />
        {showFilter &&
            <>
            <div className='filter-list-wrapper'>
                <div className='filter-list-container'>
                    <FilterElement name="score0" score={0} value={`&scoreValues=${0}`} onChange={handleCheckboxChange}/>
                    <FilterElement name="score1" score={1} value={`&scoreValues=${1}`} onChange={handleCheckboxChange}/>
                    <FilterElement name="score2" score={2} value={`&scoreValues=${2}`} onChange={handleCheckboxChange}/>
                    <FilterElement name="score3" score={3} value={`&scoreValues=${3}`} onChange={handleCheckboxChange}/>
                    <FilterElement name="score4" score={4} value={`&scoreValues=${4}`} onChange={handleCheckboxChange}/>
                    <FilterElement name="score5" score={5} value={`&scoreValues=${5}`} onChange={handleCheckboxChange}/>
                </div>
            </div>
            </>
        }
    </div>
  )
}

export default ScoreFilter
