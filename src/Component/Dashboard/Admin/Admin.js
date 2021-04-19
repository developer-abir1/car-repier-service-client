import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { useForm } from "react-hook-form";
import "./Admin.css"

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  


    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC", height:"700px" } }>
                    <h1>Add Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input type="text"id="addAdmin" {...register("email", { required: true })} name="email" placeholder="Add Admin Email"  />

                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;