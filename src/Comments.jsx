import { useState } from "react"
import CommentsForm from "./CommentsForm"
export default function Comments() {
    let [comments, setComments] = useState([
        {
            username: "@jpmc_good",
            remarks: "jpmc is gud",
            rating: 5
        }
    ]

    )


    let addComment = (comment) => {

        setComments((currComments) => [...currComments, comment])

    }



    return (
        <div>
            <h3>All comments</h3>
            {
                comments.map((comment, idx) => (
                    <div className="comment" key={idx} style={{ border: "1px solid pink", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }} >

                        <span>{comment.remarks} </span> &nbsp;
                        <span> <strong>{comment.rating}</strong> </span> &nbsp;
                        <p> <strong>-</strong> {comment.username}  </p> &nbsp;
                    </div>
                ))
            }
            <CommentsForm addComment={addComment} />
        </div>
    )

}