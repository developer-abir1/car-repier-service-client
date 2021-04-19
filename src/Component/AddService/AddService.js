import React, { useState } from 'react';
import Sidebar from '../Dashboard/sidebar/sidebar';
import { useForm } from "react-hook-form";
import './Addservice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from '@material-ui/core';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    




    const onSubmit = () => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', info.name)
      formData.append('price',info.price)
      formData.append('description', info.description)
    
      fetch('http://localhost:6500/addService', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
        
    };

   const handleBlur = (e) =>{
       const newInfo ={...info}
       newInfo[e.target.name] = e.target.value
       setInfo(newInfo)

   }
    

   const handleFileChange = (e) =>{
       const newFile = e.target.files[0]
       setFile(newFile)

   }
  
    return (
        <div className="container-fluid">
          <div className="row">
          <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC" , height:"700px" }}>

                <h1>ADD Service</h1>

              <form id="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row" id="addServiceForm">
                     
                      <div className="col-md-6">
                      <p><strong>Enter your Name</strong></p>
                      <input type="text" {...register("name", { required: true })} onBlur={handleBlur} name="name" placeholder="Enter service name" />
                      <br/>
                      {errors.name && <span style={{color: "red"}}>This field is Enter service name</span>}
                      <br/>
                      <br/>
                      <p><strong>Enter service price</strong></p>
                      <input type="text" {...register("price",{ required: true })} onBlur={handleBlur} name="price" placeholder="Enter price" />
                      <br/>
                      {errors.price && <span style={{color: "red"}}>This field is Enter service price</span>}
                    
                      </div>
                      <div className="col-md-6">
                      <p><strong> Service Description </strong></p>
                      <textarea  type="text" {...register("description", {required: true})} onBlur={handleBlur} name="description"  rows="4" cols="50"  placeholder="Description" ></textarea>
                        <br/>
                        {errors.description && <span style={{color: "red"}}>This field is description</span>}
                       
                      <p><strong>upload Image</strong></p>
                      <input id="uploadImg"  onChange={handleFileChange} type="file"  />
                    <label for="uploadImg">
                    <FontAwesomeIcon icon={faCloudDownloadAlt} />  Upload an image
                    </label>
                      </div>
                  </div>

                <button className="btn btn-primary ms-4 ml-end" type="submit">Submit</button>
                   <br/>
                  
                </form>
                
            </div>

          </div>
        </div>
    );
};

export default AddService;