import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h3>Logo</h3>
            <ul className='links'>
                <Link to="/about"><li>About</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                
            </ul>
        </div>
     );
}
 
export default Navbar;