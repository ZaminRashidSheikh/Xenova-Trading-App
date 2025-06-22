import React from 'react'

function Stats() {
    return ( 
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 mb-4'>
                    <h1 className=' fs-2 mb-4 '>Trust With Confidence</h1>

                    <h4 className='fs-4'>Customer-first Always</h4>
                    <p className='text-muted'>
                        That's why 1.6+ crore customers trust Zamin with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h4 className='fs-4'>No spam or gimmicks</h4>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>

                    <h4 className='fs-4'>The Zamin universe</h4>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h4 className='fs-4'>Do better with money</h4>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                <div className='col-md-6 text-center'>
                    <img 
                        src='media/images/trading3.jpg' 
                        alt='Stats image' 
                        className='img-fluid mb-4' 
                        style={{ maxWidth: "90%" }} 
                    />
                    <div className='d-flex justify-content-center gap-4'>
                        <a href='#' className='text-decoration-none text-primary fw-bold'>
                            Explore our products --{">"}
                        </a>
                        <a href='#' className='text-decoration-none text-primary fw-bold'>
                            Visit Us --{">"}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats
