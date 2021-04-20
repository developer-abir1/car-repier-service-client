import React from 'react';

const UpdateDelete = (props) => {
  const {name, price , description , _id } = props.service;
  const handleDelete = () =>{
    const url = `https://blooming-spire-22229.herokuapp.com/serviceDelete/${_id}`
    fetch(url,{
          method:'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        console.log("delete successfully" , result)
    })
   }
    return (
        <tbody>
        <tr>
          <td>{name}</td>
          <td>{price}</td>
          <td>{description}</td>
          <td><button class="btn-brand">Update</button></td>
          <td><button onClick={handleDelete} class="btn-brand">Delete</button></td>
        </tr>
        </tbody>
    );
};

export default UpdateDelete;