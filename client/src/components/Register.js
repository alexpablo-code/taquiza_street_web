import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import RegisterForm from './RegisterForm';

const Register = () => {
    const navigate = useNavigate();

    const[user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const submitHandler =(e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/store-manager')
            })
            .catch((err) => {
                console.log(err);
            })
    }




    return (
        <div>
            <NavBar/>
            <RegisterForm user={user} setUser={setUser} submitHandler={submitHandler} />
            <Footer/>
        </div>
    );
}

export default Register;