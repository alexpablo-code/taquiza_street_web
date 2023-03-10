import React from 'react';

const ProductForm = () => {
    return (
        <div className='container'>
            <form>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="number" />
                </div>
                <div>
                    <label htmlFor="">Category:</label>
                    <input type="text" />
                </div>
                <button>Submit</button>
            </form>
            
        </div>
    );
}

export default ProductForm;
