import { useCallback,useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';

const ItemDetail = () => {
    const [item,setItem] = useState({
        images : {}
    });
    const {id} = useParams();
    console.log(id);
    const itemFetch = useCallback(() => {
        fetch('https://fortnite-api.theapinetwork.com/item/get?id='+id)
        .then(res => res.json())
        .then(data => {
            
            setItem(data);
            
        })
        .catch((err)=>err.message)
    },[id]);
    useEffect(() => {
        itemFetch();
    }, [itemFetch])
    return ( 
        <div>
            {/* <h2>ItemDetail Page</h2> */}
            {
                item && item.data && item.data.item && item.data.item.name && <h4>{ item.data.item.name }</h4>
            }
            {
                item && item.data && item.data.item && item.data.item.images && item.data.item.images.icon && 
                <img alt='icon' src={ item.data.item.images.icon } /> 
            }
           
        </div>
     );
}
 
export default ItemDetail;