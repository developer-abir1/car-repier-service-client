import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../sidebar/sidebar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const [review, setReview] = useState({})




    const onSubmit = data => {
        const reviewData ={
            name: data.name,
            company: data.company,
            description: data.description
        }
        console.log(reviewData);
    fetch('https://blooming-spire-22229.herokuapp.com/addReview', {
        method: 'POST',
        headers:{ 'Content-Type': 'Application/json'},
        body: JSON.stringify(reviewData)
    })
    .then(res => console.log("data is company", res))
    

    
    };

    return (
           <div className="container-fluid">
                <div className="row">
                <Sidebar></Sidebar>

                  
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC" }}>
                <h1 className="">Review</h1>
                    <form id="addServiceForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                            <input type="text"  id="name" {...register("name", { required: true })} name="name" placeholder="Enter Name" />
                            <br/>
                            {errors.name && <span style={{color: "red"}}>This field is name</span>}
                            <br/>
                            <input   type="text"  {...register("company", { required: true })} name="company" placeholder="Enter company Name" />
                            <br/>
                            {errors.companyName && <span style={{color: "red"}}>This field is company Name</span>}
                            <br/>
                            
                            <textarea  type="text"  {...register("description", {required: true})} name="description"  rows="4" cols="50"  placeholder="Description" ></textarea>
                        <br/>
                        {errors.description && <span style={{color: "red"}}>This field is description</span>}
                        </div>
                        </div>
                        <br/>
                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>
            
        </div>
           </div>
    );
};

export default Review;