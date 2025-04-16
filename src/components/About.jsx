import React from 'react'
import  './Footer.css'

const About = ({AboutUs , App , lang , SiteMap}) => {
  return (
    <div>
<div className='content-container'>
        <div className='no-border'>
            <div className='link-lang'>
                <div className='content-grid'>
                    <div className='content-grid-item'>
                        <div className='structured-link'>
                            <div className='abt'>About</div>
                            <ul className='str-links'>

                            {AboutUs.map((about)=>
                                <li>
                                    <span className='white-link'>{about.type}</span>
                                </li>
                            )}

                            </ul>
                            
                        </div>
                    </div>
                    <div className='content-grid-item'>
                        <div className='structured-link'>
                            <div className='abt'>Discovery Udemy</div>
                            <ul className='str-links'>

                            {App.map((about)=>
                                <li>
                                    <span className='white-link'>{about.ud}</span>
                                </li>
                            )}

                            </ul>
                            
                        </div>
                    </div>
                    <div className='content-grid-item'>
                        <div className='structured-link'>
                            <div className='abt'>Udemy for Business</div>
                            <ul className='str-links'>

                            {lang.map((about)=>
                                <li>
                                    <span className='white-link'>{about.site}</span>
                                </li>
                            )}

                            </ul>
                            
                        </div>
                    </div>
                    <div className='content-grid-item'>
                        <div className='structured-link'>
                            <div className='abt'>Legal & Accessibility</div>
                            <ul className='str-links'>

                            {SiteMap.map((about)=>
                                <li>
                                    <span className='white-link'>{about.acces}</span>
                                </li>
                            )}

                            </ul>
                            
                        </div>
                    </div>
                    {/*  */}
                       

                </div>
            </div>
            
        </div>
        
    </div>
      <div className='light-border'>
                           <div className='light-ud'>
                            ABbB
                           </div>
                       </div> 
    </div>
    
         
  )
}

export default About





