import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductForm from './ProductForm';

const EditProduct = () => {




    return (
        <div>
            <NavBar/>
            <ProductForm/>
            <Footer/>
        </div>
    );
}

export default EditProduct;
