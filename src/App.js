import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import {API_URL_DELETE, API_URL_GET, API_URL_POST} from "./url/url"
function Parent_data() {
  const [collect,setcollect]=useState([]);
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [ref,setref]=useState(true);
  useEffect(()=>{
    axios.get(API_URL_GET).then((res)=>{console.log(res.data)
      setcollect(res.data);
    })
    
  },[ref]);
  function handle(){
    axios.post(API_URL_POST,{
      name,
      email,
    });
};
let update =async(v)=>{
  setname(v.name);
  setemail(v.email);
};
let delete_data =(v)=>{
   axios.delete(`${API_URL_DELETE}/${v._id}`).then((res)=>{
    setref(!ref);
   });
};

return(<>
  <h1>FRONTEND </h1>
  <form>
    <span>name:</span>
    <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
    <br></br>
    <span>email:</span>
    <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <button onClick={handle}>login</button>
  </form>
  <h1>backend</h1>
  <div>
    {
      collect && collect.map((v,i)=>(
      <div key={i}> {v.name}{v.email}
        <button onClick={()=>{update(v)}}>update</button>
        <button onClick={()=>{delete_data(v)}}>delete</button>
        </div>
      ))
    }
  </div>
  </>)
}
export default Parent_data;