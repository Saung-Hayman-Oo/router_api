import React,{ useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

const Shop = () => {
    const [items,setItems] = useState([]);

    const itemFetch = async () => {
        const data=await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
            );
        console.log(data);
        
        const items=await data.json();
        console.log(items.data);
        setItems(items.data);
        
    };
    useEffect(() => {
        itemFetch();
    }, [])
    return ( 
        <div>
            
            {
                items.map( item =>
                     <h2 key={item.itemId}>
                         <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                    </h2> 
                     )
            }

        </div>
     );
}
 
export default Shop;