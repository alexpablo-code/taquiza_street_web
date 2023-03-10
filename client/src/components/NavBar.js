import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='bg-dark'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='col-5'>
                            <h1 className='text-white' >Taquiza Street</h1>
                        </div>
                        <div className='col-5 offset-2'>
                            <ul>
                                <li><Link>Menu</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
