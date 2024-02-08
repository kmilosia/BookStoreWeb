import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function Stars({ score }) {
  return (
    <div className='flex flex-row items-center my-1'>
      <AiFillStar className={`${score >= 1 ? 'text-yellow-400' : 'text-gray-300'}`}/>
      <AiFillStar className={`${score >= 2 ? 'text-yellow-400' : 'text-gray-300'}`}/>
      <AiFillStar className={`${score >= 3 ? 'text-yellow-400' : 'text-gray-300'}`}/>
      <AiFillStar className={`${score >= 4 ? 'text-yellow-400' : 'text-gray-300'}`}/>
      <AiFillStar className={`${score === 5 ? 'text-yellow-400' : 'text-gray-300'}`}/>  
    </div>
  );
}

export default Stars;
