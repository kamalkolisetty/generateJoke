import { useState } from "react"



export default function Form() {


  let [formData,setFormData]=useState({
    fullName:"",
    userName:"",
    password:""
  })
  let handleInputChange=(event)=>{

    let fieldName=event.target.name;
    let newVal=event.target.value;
    setFormData( (currData)=>{
            currData[fieldName]=newVal; // acessing using []  is acalled computed property
            return {...currData};
    }  )

  }

  let handleSubmit=(event)=>{
event.preventDefault();

  }

    // let handleNameChange = (event) => {
    //     //console.log(event.target.value)
    //     setFullName(event.target.value)
    // }
    // let handleUserNameChange = (event) => {
    //     setUserName(event.target.value)
    // }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="formData.fullName">Full Name : </label>

                <input onChange={handleInputChange} type="text" placeholder="Enter ur name" value={formData.fullName} id="fullName" name="fullName" />
                <br />
                <br />
                   <label htmlFor="formData.userName">User Name : </label>

                <input onChange={handleInputChange}  type="text"  placeholder="Enter user name" value={formData.userName} id="userName" name="userName" />
                &nbsp;
                <br />  <br />
                <label htmlFor="formData.password">Password : </label>

<input onChange={handleInputChange}  type="password"  placeholder="Enter ur  password" value={formData.password} id="password" name="password" />
&nbsp; <br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}