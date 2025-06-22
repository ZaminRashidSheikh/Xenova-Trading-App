import React from 'react'
function Hero() {
    return ( 
        <div className='container border-bottom mb-5 ' style={{textAlign:"center"}}>
            <div className="row mt-5 mb-5">
            <h1>Technology</h1>
            <h3 className='text-muted mt-3'>Sleek, modern and intuitive trading platforms</h3>
            <p className='mt-2'>Check out our <a href="#"> investment offerings  <i class="fa fa-long-arrow-right" aria-hidden="true" ></i>  </a></p>
            </div>
        </div>
     );
}

export default Hero;