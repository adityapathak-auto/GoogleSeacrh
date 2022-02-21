import { Navbar } from "./navbar"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SearchPage = ()=>{
    const {text} = useParams();
    const [seacrh,setSearch]= useState("");
    const [result,setResult] = useState([]);
    useEffect(()=>{
    getData();
    },[])
    const getData = ()=>{
        axios.get(`http://localhost:3001/results?title=${text}`).then((res)=>{
            setResult(res.data);
        })
    }
    return(<div>
       {/* <Navbar text={text} getData={getData} result={result} /> */}
       <div id="navbar">
       <img className="nav-img" src="https://icon-library.com/images/google-old-icon/google-old-icon-6.jpg" ></img>
          <input onChange={(e)=>{
                 setSearch(e.target.value);
          }}></input>
          <button className="search" onClick={()=>{
              axios.get(`http://localhost:3001/results?title=${seacrh}`).then((res)=>{
                setResult(res.data);
                console.log(res);
              })
          }}>Search</button>
          </div>
          <br/>
       <button id="sort-alphabetically">Sort A-Z</button>
       <button id="sort-alphabetically-desc">Sort Z-A</button>
       <button id="sort-by-date">sort-by-date</button>
       <button id="sort-by-date-desc">sort-by-date-desc</button>
       <div id="search-result">
       {result.map((e)=>{
           return(<div key={e.id} className="result">
               <hr/>
               
               <a href="">{e.url}</a>
               <br/>
               <br/>
              <Link to={`/searchFInal/${e.id}`}><span style={{color:"blue"}} onClick={()=>{
                   
               }}>{e.title}</span></Link><span> | {e.author}</span>
               <p style={{color:"grey"}}>{e.description}</p>
               
               <hr/>
           </div>)
       })}
       </div>


    </div>)
}