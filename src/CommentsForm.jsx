import { useState } from "react"
//import {useFormik} from 'formik'
export default function CommentsForm({ addComment }) {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })
    let handleChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    }

    let handleSubmit = (event) => {

        console.log(formData)
        addComment(formData);

        event.preventDefault();
        setFormData(
            {
                username: "",
                remarks: "",
                rating: 5
            }
        )

    }


    return (
        <div>
            <h4>ADD neew comment</h4>

            <form onSubmit={handleSubmit} >

                <input type="text" placeholder="username plis" name={"username"} id="username" onChange={handleChange} />
                <br /> <br />
                <textarea placeholder="Remarks!!" name={"remarks"} id="remarks" onChange={handleChange}  ></textarea>
                <br /> <br />
                <label htmlFor="rating">    rating  : &nbsp;
                    <input type="number" min={1} max={5} name={"rating"} id="rating" onChange={handleChange} />

                </label>
                <br /> <br />
                <label htmlFor="">
                    <button>Add Comment</button>
                </label>
            </form>

        </div>
    )
}
