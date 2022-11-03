import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ReviewCard from "../../ReviewCard"

const Dexterity = (props) => {
    const {reviewData, setReviewData} = props
    const [categoryReview, setCategoryReview] = useState([])
const location = useLocation()
const state = location.state

const newArr = []
useEffect(() => {
reviewData.map((review) => {
    if(review.category === 'dexterity'){
        newArr.push(review)
    }
    return newArr
})
setCategoryReview(newArr)
},[])

return (
    <div>
    <p>{state.description}</p>
    <ul>
            {categoryReview.map((review)=> {
                return(
                    <li className="reviewCard">
                        <ReviewCard
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

export default Dexterity