import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function Stars({ score }) {
  return (
    <div className='flex flex-row items-center'>
      {(() => {
        switch (score) {
          case 1:
            return (
              <>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
              </>
            );
          case 2:
            return (
              <>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
              </>
            );
          case 3:
            return (
              <>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-gray-300'/>
                <AiFillStar className='text-gray-300'/>
              </>
            );
          case 4:
            return (
              <>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-gray-300'/>
              </>
            );
          case 5:
            return (
              <>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
                <AiFillStar className='text-yellow-400'/>
              </>
            );
          default:
            return (
              <>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
              </>
            );
        }
      })()}
    </div>
  );
}

export default Stars;
