import React from 'react'
import "../css/content.css"
import img2 from "./images/img2.png"
import img4 from "./images/img4.png"
export default function Content() {
  return (
    <div className='content'>
      <div className='con1'>
    {/* <div className='conbu'>

        <button className='con-b'><h1 className='login-bu'>LOGIN</h1></button>
    </div> */}

    <div className='sup-con'>

        <h1>One Platform, Infinite Possibilities</h1>
        <p className='con-p'>Elevate Your operations, boost your brand impact, streamline integrations
            effortlessly, uncover the true outcomes of your training efforts, unify various 
            opertions, fortify data security, maximize revenue with zero sharing, receive
            personalized support, and achieve swift scaling with Edmingle - the ultimate
            Learning Management Solution.
        </p>
        <div className='con-courses'>
          <img src={img4} alt='courses-image'/>
          <h1 className='con-cre'>Create <br/> courses</h1>
        </div>
    </div>
    </div>
    <div className='con2'>
<img src={img2} alt='image2' className='imag2'/>
    </div>
    </div>
  )
}
