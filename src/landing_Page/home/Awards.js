import React from 'react'
function Awards() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <img 
                        src='media/images/Trading2.jpg' 
                        alt='Award image' 
                        className='img-fluid' 
                        style={{ maxHeight: '300px' }} 
                    />
                </div>
                <div className='col-md-6'>
                    <h1 className='mb-3'>Stock Broker Platform</h1>
                    <p>Zamin brings you a seamless and reliable platform to trade stocks, mutual funds, and more — all in one place. Backed by real-time market data, intuitive tools, and robust security, Zamin empowers both beginners and expert investors to take control of their financial journey.</p>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <ul className='list-unstyled'>
                                <li>Future and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='list-unstyled'>
                                <li>Stocks and IPOs</li>
                                <li>Direct Mutual Fund</li>
                                <li>Government Securities</li>
                            </ul>
                        </div>
                    </div>
                    {/* image here */}
                    <img src=''/>
                </div>
            </div>
        </div>
    )
}

export default Awards
