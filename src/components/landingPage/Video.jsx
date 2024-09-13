import React from 'react';

import video from '../../assets/landingPage/product.mov'

export default function Video() {
    const fileId = '1ZkqZ3pXPjMa9zZEi3Q-t_fN7T3CvwF1m'; // Replace with your actual file ID
    const src = `https://drive.google.com/file/d/${fileId}/preview`;
  return (
    <div className='my-14'>
        
        <div className='text-[30px] text-center'>Project Video</div>
        <div className='w-[75%] mx-auto'>
          {/* <video src={video} loop controls></video> */}
          <iframe src={src} width="100%" height="580" allow="autoplay"></iframe>
          {/* https://drive.google.com/file/d/1ZkqZ3pXPjMa9zZEi3Q-t_fN7T3CvwF1m/view?usp=sharing */}
        </div>


    </div>
  )
}
