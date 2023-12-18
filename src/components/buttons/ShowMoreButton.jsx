import React from 'react';

function ShowMoreButton(props) {
  const label = props.displayedFields === 6 ? 'Pokaż więcej' : 'Pokaż mniej'
  return (
    <button onClick={props.onClick} className='text-xs w-max mx-3 font-light text-purple-400 hover:text-purple-500'>
      {label}
    </button>
  )
}

export default ShowMoreButton
