import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

export const SearchFinal = ()=>{
    const [detail,setDetail] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        getData();
    },[]);
    const getData = ()=>{
        axios.get(`http://localhost:3001/results?id=${id}`).then((res)=>{
            setDetail(res.data);
            console.log(res.data);
            
        })
    }
    return(<div >
        {detail.map((e)=>{
            return(<div key={e.id} id="detailed-result">

                <div className="title">Title: {e.title}</div>
                <hr/>
                <div className="description"> Description:{e.description}</div>
                <hr/>
                <div className="author">Author: {e.author}</div>
                <hr/>
                <div className="creation-date">Creation-Date:{e.creation_date}</div>
                <hr/>
                <div className="explicit">{e.explicit}</div>
                <hr/>
                <div className="quality">Quality: {e.quality}</div>
            </div>)
        })}
        
         
       
        
        
    </div>)
}