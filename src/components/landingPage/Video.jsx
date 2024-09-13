import React from 'react';

import video from '../../assets/landingPage/product.mov'

export default function Video() {
  return (
    <div className='my-14'>
        
        <div className='text-[30px] text-center'>Video</div>
        <div className='w-[75%] mx-auto'>
          <video src={video} loop controls></video>

        </div>


    </div>
  )
}
