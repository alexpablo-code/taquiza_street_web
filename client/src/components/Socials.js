import React from 'react';
const insta = require('./images/insta_logo.png')
const face = require('./images/face_logo.jpg')

const Socials = () => {
    return (
        <div className='container text-center my-4'>
            <h4>Follow us</h4>
            <div className='d-flex justify-content-center'>
                <img className='social-img' src={insta} alt="" />
                <img className='social-img' src={face} alt="" />
            </div>
        </div>
    );
}

export default Socials;
