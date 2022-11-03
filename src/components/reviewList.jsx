
import ReviewCard from "./ReviewCard"
const ReviewList = (props) => {
 const {reviewData, setReviewData} = props

let count = 0

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

export default ReviewList