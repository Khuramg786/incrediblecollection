import React, { useEffect, useState } from "react";
import { postData } from "../Api/Apidata";

const Form = ({data, setData}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: ""
  });

  // -------------------purpos for the update data in th fild---
  // useEffect(()=>{
  //   updateapi && setAddData({
  //     title: updateapi.title || "",
  //     body: updateapi.body || "",
  //   },[updateapi])
  // })

  // ✅ Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const addpostdata = async()=>{
   const res = await postData(addData)
   console.log("res",res);
   if((res.status === 201)){
    setData([...data, res.data]); 
    // ---------------when submit than filed is blacnk  
     setAddData({ title: "", body: "" });
   }
   

  }

  // ✅ Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addpostdata()
   
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Add title"
        value={addData.title}
        onChange={handleInputChange}
      />

      <label htmlFor="body">Body</label>
      <input
        type="text"
        id="body"
        name="body"
        placeholder="Add body"
        value={addData.body}
        onChange={handleInputChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
