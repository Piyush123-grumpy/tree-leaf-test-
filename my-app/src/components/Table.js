import { useState } from "react";
import { Link, } from "react-router-dom";





function Table({ data, setData ,setTogglesubmit,setEdited,compare,setEditvalue}) {

  const [ascending,setAscending]=useState(false)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const sort=()=>{
    console.log(data)
      data.sort(compare)
      
      if(ascending===false){
        setAscending(true)
       
      }
      else{
        setAscending(false)
      }
      
      setTogglesubmit(true)
  }
  const deleteItem = (id) => {
    console.log("Fired");
    const updateditems = data.filter((elem) => {
      return id !== elem.id;
    });
    setData(updateditems);
  };
  const editItem = (id) => {
    let newEditedItem = data.find((elem) => elem.id === id);
    console.log(newEditedItem)
    setEditvalue(newEditedItem)
    setTogglesubmit(false)
    setEdited(id)
  };



  return (
    <>
    <button id="tableButtonName" onClick={sort}>Name</button>
    <div className="table-height">
    
    <table id="table">
    
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date of birth</th>
          <th>District</th>
          <th>Province</th>
          <th>City</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ascending? data.map((data) => (
          <tr key={data.id}>
            <td>{capitalizeFirstLetter(data.Name)}</td>
            <td>{data.Email}</td>
            <td>{data.PhoneNumber}</td>
            <td>{data.date}</td>
            <td>{data.District}</td>
            <td>{data.Province}</td>
            <td>{data.City}</td>
            <td>{data.Countries}</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(data.id);
                  setTogglesubmit(true)
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  editItem(data.id);
                  setTogglesubmit(false)
                }}
              >
                Edit
              </button>
            </td>
            
          </tr>
        )):data.map((data) => (
          <tr key={data.id}>
            <td>{capitalizeFirstLetter(data.Name)}</td>
            <td>{data.Email}</td>
            <td>{data.PhoneNumber}</td>
            <td>{data.date}</td>
            <td>{data.District}</td>
            <td>{data.Province}</td>
            <td>{data.City}</td>
            <td>{data.Countries}</td>
            <td>
              <button id="delete"
                onClick={() => {
                  deleteItem(data.id);
                  setTogglesubmit(true)
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  editItem(data.id);
                  setTogglesubmit(false)
                }}
              >
                Edit
              </button>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
    <Link id="profile" to="/profile">Profile</Link>
    
    
    </>
  );
}

export default Table;
