
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsTable from './ProductsTable';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const StoreManager = ({allProducts, setAllProducts}) => {
    const navigate = useNavigate()

        useEffect(() => {
            axios.get('http://localhost:8000/api/allproducts')
                .then((products) => {
                    console.log(products)
                    setAllProducts(products.data)
                })
                .catch((err) => console.log(err));
        },[])


        const deleteItem = (id) => {
            axios.delete(`http://localhost:8000/api/allproducts/delete/${id}`)
                .then((res) => {
                    console.log("item deleted", res)
                    navigate('/')
                    //have to change navigate to changing the allproducts state to remove the item we just deleted
                })
                .catch((err) => console.log(err));
        }


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
            <ProductsTable allProducts={allProducts} setAllProducts={setAllProducts} deleteItem={deleteItem}/>
            <Footer/>
        </div>
    );
}

export default StoreManager;
