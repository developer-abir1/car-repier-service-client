import React from 'react';
import Sidebar from '../sidebar/sidebar';
import { useForm } from "react-hook-form";


const Dashboard = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="">
            <div className="row ">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-4 py-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4F7FC" }}>
                   
                 
                </div>
            </div>
        </section>
    );
};

export default Dashboard;