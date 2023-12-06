import React, { useState } from 'react'

function FilterLabelElement(props) {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked)
    props.onChange(props.id, !isChecked)
  }
  return (
    <div className="filter-element-wrapper">
        <input name={props.title} type="checkbox" value={props.id} checked={isChecked} onChange={handleCheckboxClick} className="filter-checkbox"/>
        <label htmlFor={props.title} className="filter-element-label">{props.title}</label>
    </div>
  )
}

export default FilterLabelElement
