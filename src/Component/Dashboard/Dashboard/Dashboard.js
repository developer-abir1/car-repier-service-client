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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input defaultValue="test" {...register("example")} />
                        <label for="w3review">Review of W3Schools:</label>

                            <textarea id="w3review" name="w3review" {...register("example")}  rows="4" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                                 </textarea>


                        {/* include validation with required or other standard HTML validation rules */}
                        <input {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;