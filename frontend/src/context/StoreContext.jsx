import { createContext,useEffect,useState } from "react";
import axios from "axios";
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const [add,setAdd]=useState({});
    const [token,setToken]=useState('');
    const [food_list,setFood]=useState([]);
    const url="https://food-delivery-628a.onrender.com";
    const addItem=async (itemId)=>{
        if(!add[itemId]){
            setAdd((prev)=>{return {...prev,[itemId]:1}})
        }
        else{
            setAdd((prev)=>{
                return {...prev,[itemId]:prev[itemId]+1}
            }) 
        }
        if(token){
            await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}});
            
        }
    }
    const removeItem=async (itemId)=>{
        setAdd((prev)=>{
            
            return {...prev,[itemId]:prev[itemId]-1}
        })
        if(token){
            await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}});
        }
    }
    
    const total=(food_list)=>{
        let t=0;
        food_list.map((item,index)=>{
            if(add[item._id]>0){
              t+=item.price*add[item._id];
            }
        })
        return t;
    }
    const fetchFood= async ()=>{
        const response= await axios.get(`${url}/api/food/find`);
        setFood(response.data.data);
    }
    const loadCart=async(token)=>{
        const response=await axios.post(`${url}/api/cart/get`,{},{headers:{token}});
        setAdd(response.data.cartData);
    }
    useEffect(()=>{
        async function loadData() {
        await fetchFood();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCart(localStorage.getItem("token"));
        }
    }
    loadData();
    },[])
    
    const contextValue={
        food_list,
        add,setAdd,addItem,removeItem,total,url,token,setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;