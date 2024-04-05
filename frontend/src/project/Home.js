import React from 'react';
import img1 from "./images/img1.png"
import "../css/Home.css"
export default function Home() {
  return (
    <div className='h-container'>
<div className='h-image'>
  <img src={img1} alt='image' className='none' className="image1"/>

</div>
<div className='h-content'>
<h1 className='h-h1'>
 <span className='h1-span'>Scale</span> your training business with ZERO opertational hassles
</h1>
<div className='h-mini'>
<p className='h-p'>
  Deliver Training Programs, Convert Insights Profit, And Build Lasting Learner Loyality
  --All Under Your Brand.
</p>
<button className='h-button'><h1 className='h1-bu'>Book Now</h1></button>
</div>
</div>
    </div>
  )
}
