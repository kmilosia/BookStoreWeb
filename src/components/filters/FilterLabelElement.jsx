import React from 'react'

function FilterLabelElement(props) {
  return (
    <div class="filter-element-wrapper">
        <input id='' type="checkbox" value="" class="filter-checkbox"/>
        <label htmlFor='' class="filter-element-label">{props.title}</label>
    </div>
  )
}

export default FilterLabelElement
