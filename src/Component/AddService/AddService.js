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
  const [imageURL, setImageURL] = useState({})
  

 
  const onSubmit = data => {
    const addData ={
      name: data.name,
      price: data.price,
      description: data.description,
      image: imageURL

    };
    fetch("https://blooming-spire-22229.herokuapp.com/addService",{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(addData)
    })
    .then(res => console.log("post is Done", res))
  }

  
const handleUploadImage = e =>{

  const imageData = new FormData()
  imageData.set('key', 'e805ac140d838f01a27f27aad6e43f4d')
  imageData.append('image', e.target.files[0]);
  axios.post('https://api.imgbb.com/1/upload',imageData)
  .then(res =>{
   setImageURL(res.data.data.display_url)
  })
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
                      <input type="text" {...register("name", { required: true })}  name="name" placeholder="Enter service name" />
                      <br/>
                      {errors.name && <span style={{color: "red"}}>This field is Enter service name</span>}
                      <br/>
                      <br/>
                      <p><strong>Enter service price</strong></p>
                      <input type="text" {...register("price",{ required: true })}  name="price" placeholder="Enter price" />
                      <br/>
                      {errors.price && <span style={{color: "red"}}>This field is Enter service price</span>}
                    
                      </div>
                      <div className="col-md-6">
                      <p><strong> Service Description </strong></p>
                      <textarea  type="text" {...register("description", {required: true})}  name="description"  rows="4" cols="50"  placeholder="Description" ></textarea>
                        <br/>
                        {errors.description && <span style={{color: "red"}}>This field is description</span>}
                       
                      <p><strong>upload Image</strong></p>
                      <input id="uploadImg"  onChange={handleUploadImage} type="file"  />
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