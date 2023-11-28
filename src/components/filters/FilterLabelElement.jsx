import React from 'react'

function FilterLabelElement(props) {
  return (
    <div className="filter-element-wrapper">
        <input id='' type="checkbox" value="" className="filter-checkbox"/>
        <label htmlFor='' className="filter-element-label">{props.title}</label>
    </div>
  )
}

export default FilterLabelElement
