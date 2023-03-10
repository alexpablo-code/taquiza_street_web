
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsTable from './ProductsTable';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const StoreManager = ({allProducts, setAllProducts}) => {


        useEffect(() => {
            axios.get('http://localhost:8000/api/allproducts')
                .then((products) => {
                    console.log(products)
                    setAllProducts(products.data)
                })
                .catch((err) => console.log(err))
        },[])
    return (
        <div>
            <NavBar/>
            <section>
                <div className='container my-2'>
                    <div className='row'>
                        <div>
                            <h2>Welcome!</h2>
                            <p>Menu changes will be available soon</p>
                        </div>
                        <div>
                            <Link to={'/store-manager/addproduct'}>+ Add Product</Link>
                        </div>
                    </div>
                </div>
            </section>
            <ProductsTable allProducts={allProducts} setAllProducts={setAllProducts}/>
            <Footer/>
        </div>
    );
}

export default StoreManager;
