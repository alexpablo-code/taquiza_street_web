import React from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = ({user, setUser, submitHandler}) => {

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }



    return (
        <div className='container my-3' >
            <form className='col-5 offset-3' onSubmit={submitHandler}>
                <h2>Register</h2>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type="text" name="firstName" value={user.firstName} onChange={onChangeHandler}/>

                <label className='form-label'>Last Name:</label>
                <input className='form-control' type="text" name="lastName" value={user.lastName} onChange={onChangeHandler}/>

                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name="email" value={user.email} onChange={onChangeHandler}/>

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name="password" value={user.password} onChange={onChangeHandler}/>

                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeHandler}/>

                <button className='btn btn-warning my-3'>Register</button> <br/> 
                <Link className='my-3' to={'/manager-login'}>Already have an account? Click here to login</Link>
            </form>
        </div>
    );
}

export default RegisterForm;
