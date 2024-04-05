import React from 'react'
import "../css/page3.css"
import img3 from "./images/img3.png"
export default function Page3() {
  return (
    <div>
        <div className='page3-con1'>
      <h1 className='page3-h1'>Pricing that suits your pocketv</h1>
      <img src={img3} alt='image-4' className='page3-img'/>
      </div>
      <div className='page3-con-box'>
      
      <div className='page-box'>

          <h2 className='text-primary'>Premium</h2>
          <p>Everything you need to create your website</p>
          <div><del>$11.99</del><span className='card-button'>SAVE 75%</span></div>
          <div className='p-2'><p>$ <span> 2.99</span>/mo</p></div>
          <h3>+3 months FREE</h3>
          <button  className='page-bu'>Add to Card</button>
          <p>$7.99/mo when you renew</p>
          <hr/>
         <h3>Top Features</h3>
         <ul>
          <li>Standard Performance</li>
          <li>100 Websites</li>
          <li>100 GB SSD Storage</li>
          <li>Weekly Backups</li>
         </ul>

      </div>
      <div className='page-box'>

<h2 className='text-primary'>Premium</h2>
<p>Everything you need to create your website</p>
<div><del>$11.99</del><span className='card-button'>SAVE 75%</span></div>
<div className='p-2'><p>$ <span> 2.99</span>/mo</p></div>
<h3>+3 months FREE</h3>
<button  className='page-bu'>Add to Card</button>
<p>$7.99/mo when you renew</p>
<hr/>
<h3>Top Features</h3>
<ul>
<li>Standard Performance</li>
<li>100 Websites</li>
<li>100 GB SSD Storage</li>
<li>Weekly Backups</li>
</ul>

</div>
<div className='page-box'>

<h2 className='text-primary'>Premium</h2>
<p>Everything you need to create your website</p>
<div><del>$11.99</del><span className='card-button'>SAVE 75%</span></div>
<div className='p-2'><p>$ <span> 2.99</span>/mo</p></div>
<h3>+3 months FREE</h3>
<button  className='page-bu'>Add to Card</button>
<p>$7.99/mo when you renew</p>
<hr/>
<h3>Top Features</h3>
<ul>
<li>Standard Performance</li>
<li>100 Websites</li>
<li>100 GB SSD Storage</li>
<li>Weekly Backups</li>
</ul>

</div>

      </div>
    </div>
  )
}
