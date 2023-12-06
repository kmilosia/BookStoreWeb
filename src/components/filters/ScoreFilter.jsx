import React from 'react'
import { useState } from 'react'
import FilterHeader from './FilterHeader'
import Stars from '../elements/Stars'

const FilterElement = (props) => {
    return (
        <div class="filter-element-wrapper">
            <input id='' type="checkbox" value="" className="filter-checkbox"/>
            <label htmlFor='' className="ml-2 text-xs"><Stars score={props.score} /></label>
        </div>
    )
}
function ScoreFilter() {
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='filter-wrapper'>
        <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} title="Ocena" />
        {showFilter &&
            <>
            <div className='filter-list-wrapper'>
                <div className='filter-list-container'>
                    <FilterElement score={0}/>
                    <FilterElement score={1}/>
                    <FilterElement score={2}/>
                    <FilterElement score={3}/>
                    <FilterElement score={4}/>
                    <FilterElement score={5}/>
                </div>
            </div>
            </>
        }
    </div>
  )
}

export default ScoreFilter
