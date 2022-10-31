import { useEffect } from "react"
import { useState } from "react"
import ReviewCard from "./ReviewCard"
const Reviews = () => {

const [reviewData, setReviewData] = useState([])
let count = 0
useEffect(() => {
    fetch("https://obsoknotty-project.herokuapp.com/api/reviews").then((data) => {
        return data.json()
    }).then(({reviews})=> {
        setReviewData(reviews)
    })
}, [])
return(
    <div>
        <h2>Reviews</h2>
        <ul >
            {reviewData.map((review)=> {
                count++
                return(
                    <li className="reviewCard">
                        <ReviewCard
                        key={count}
                        review_id={review.review_id} 
                        category={review.category} 
                        comment_count={review.comment_count} 
                        date={review.created_at}
                        designer={review.designer}
                        review_body={review.review_body}
                        img={review.review_img_url}
                        title={review.title}
                        votes={review.votes}
                        />
                    </li>
                )
            })}
        </ul>
    </div>
)
}

export default Reviews