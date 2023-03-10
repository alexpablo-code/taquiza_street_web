import {Link} from 'react-router-dom';

const ProductsTable = ({allProducts, setAllProducts}) => {
    return (
        <div>
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sample</td>
                            <td>sample</td>
                            <td><Link>Edit</Link> <Link>Delete</Link></td>
                        </tr>
                        {
                            allProducts.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><Link>Edit</Link> <Link>Delete</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsTable;
