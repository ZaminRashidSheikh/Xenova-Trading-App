import React from 'react'
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>We pionered the concept of discount broking and price transparency in India.Flat Fees and no hidden charges</p>
                     <a href='#' className='text-decoration-none text-primary fw-bold'>
                            See Pricing --{">"}
                        </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>0</h1>
                            <p>Free Equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                             <h1 className='mb-3'>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;