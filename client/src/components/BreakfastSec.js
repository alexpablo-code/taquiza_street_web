import React from 'react';
let brkbrto = require('./images/breakfast_burrito.jpg')

const BreakfastSec = () => {
    return (
        <div className='container my-4'>
            <div className='row justify-content-center'>
                <div className='col-5 my-auto'>
                    <h1 className='text-danger' >Breakfast Burritos</h1>
                    <p>6 Different burritos
                        that you must try! <br/>

                        We open at 7am Mon - Sat
                        Sunday at 9am
                        Breakfast ends at 11am</p>
                </div>
                <div className='col-5 img-side'>
                    <img src={brkbrto} alt="breakfast-burritos" />
                </div>

            </div>
            
        </div>
    );
}

export default BreakfastSec;
