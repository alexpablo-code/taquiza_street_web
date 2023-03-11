import {useState} from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductForm from './ProductForm';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const[product, setProduct] = useState({})

    const submitHandler =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/addproduct', product)
            .then((newProduct) => {
                console.log(newProduct)
                navigate('/store-manager')
            })
            .catch((err) => {
                console.log(err);

                //we will set errors here
            })
    }

    return (
        <div>
            <NavBar/>
            <ProductForm product={product} setProduct={setProduct} submitHandler={submitHandler} />
            <Footer/>
        </div>
    );
}

export default AddProduct;
