import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { useForm } from "react-hook-form";
import "./Admin.css"
import UpdateDelete from '../UpdateDelete/UpdateDelete';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  const [services, setServices] = useState([]);

  useEffect(() =>{
    fetch(`https://blooming-spire-22229.herokuapp.com/services`)
    .then(res => res.json())
    .then(data =>{
        setServices(data);
    })
  },[])




    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC", height: "700px" }}>
                    <h1>Add Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" id="addAdmin" {...register("email", { required: true })} name="email" placeholder="Add Admin Email" />

                        <input className="btn btn-success" type="submit" />
                    </form>

                  <div className="mt-3">
                  <table class="table">
                        <thead>
                            <tr>
                                
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>

                        {
                            services.map(service => <UpdateDelete service={service}></UpdateDelete> )
                        }
                        </table>
                  </div>
                </div>

                </div>
            </div>
    );
};

export default Admin;