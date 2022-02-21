import { useState } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import "./home.css";
export const Home = ()=>{
    const [text,setText] = useState("");
    const usNavigate = useNavigate();
    let entt = false;
    if(entt = true){
        <Navigate to={`/search/${text}`}/>
    }
    
    return(<div>
        <img src="https://icon-library.com/images/google-old-icon/google-old-icon-6.jpg" alt=""></img>
        <input type="text" className="search-box"  placeholder="Search Google" onChange={(e)=>{
            setText(e.target.value);
            
        }} onKeyPress={(key)=>{
            
            
            // console.log(key);
            if(key.nativeEvent.code==="Enter"){
                 console.log(text);
                entt = true;
                usNavigate(`/search/${text}`)
                

                

                 
               
                
            }

        }} onClick={()=>{
            
        }} />
    </div>)
}