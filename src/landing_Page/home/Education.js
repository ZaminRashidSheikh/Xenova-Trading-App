import React from 'react'

function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 mb-4 mb-md-0'>
                    <img 
                        src='media/images/Education.svg' 
                        alt='Education Illustration' 
                        className='img-fluid' 
                    />
                </div>

                <div className='col-md-6'>
                    <h1 className='mb-3 fs-2'>Free and Open Market Education</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' className='text-decoration-none text-primary fw-bold d-block mb-4'>
                        Versity <i className="fas fa-arrow-right ms-2"></i>
                    </a>

                    <p>
                        Trading Q&A — the most active trading and investment community in India for all your market-related queries.
                    </p>
                    <a href='#' className='text-decoration-none text-primary fw-bold d-block'>
                        Trading Q&A <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Education
