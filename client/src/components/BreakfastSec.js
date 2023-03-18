import React from 'react';
let brkbrto = require('./images/breakfast_burrito.jpg')

const BreakfastSec = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <h1>Breakfast Burritos</h1>
                    <p>6 Different burritos
                        that you must try!

                        We open at 7am Mon - Sat
                        Sunday at 9am
                        Breakfast ends at 11am</p>
                </div>
                <div className='col-5 img-side'>
                    <img src={brkbrto} alt="" />
                </div>

            </div>
            
        </div>
    );
}

export default BreakfastSec;
