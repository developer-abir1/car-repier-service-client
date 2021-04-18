import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../sidebar/sidebar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="">
            <div className="row">
                <Sidebar></Sidebar>

                  
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC" }}>
                <h1 className="text-primary">Review</h1>
                    <form id="reviewForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                            <input  id="name" {...register("name", { required: true })} name="name" placeholder="Enter Name" />
                            <br/>
                            {errors.name && <span style={{color: "red"}}>This field is name</span>}
                            <br/>
                            <input  {...register("companyName", { required: true })} name="companyName" placeholder="Enter company Name" />
                            <br/>
                            {errors.companyName && <span style={{color: "red"}}>This field is company Name</span>}
                            <br/>
                            
                        <textarea {...register("description", {required: true})} name="description"  rows="4" cols="50"  placeholder="Description" > </textarea>
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