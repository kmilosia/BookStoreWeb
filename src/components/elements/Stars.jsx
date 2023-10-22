import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Stars({ score }) {
  return (
    <div className='flex flex-row items-center'>
      {(() => {
        switch (score) {
          case 1:
            return (
              <>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
              </>
            );
          case 2:
            return (
              <>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
              </>
            );
          case 3:
            return (
              <>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-gray-400'/>
                <AiFillStar className='text-gray-400'/>
              </>
            );
          case 4:
            return (
              <>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-gray-400'/>
              </>
            );
          case 5:
            return (
              <>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
                <AiFillStar className='text-orange-400'/>
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
