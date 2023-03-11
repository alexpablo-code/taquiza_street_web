import React from 'react';

const ProductForm = ({product, setProduct, submitHandler}) => {

const handleInputChange =(e) => {
    setProduct({...product, [e.target.name]: e.target.value})
}



    return (
        <div className='container'>
            <form onSubmit={submitHandler} className='col-8 offset-3 my-3'>
                <h2>Add Product</h2>
                <div className='my-2'>
                    <label htmlFor="">Name:</label>
                    <input className='form-control' type="text" name='name' value={product.name} onChange={handleInputChange}/>
                </div>
                <div className='my-2'>
                    <label htmlFor="">Description:</label>
                    <input className='form-control' type="text" name='description' value={product.description} onChange={handleInputChange}/>
                </div>
                <div className='my-2'>
                    <label htmlFor="">Price:</label>
                    <input className='form-control' type="number" name='price' value={product.price} onChange={handleInputChange}/>
                </div>
                <div className='my-2'>
                    <label htmlFor="">Category:</label>
                    <input className='form-control' type="text" name='category' value={product.category} onChange={handleInputChange}/> 
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
            
        </div>
    );
}

export default ProductForm;
