import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "./ReviewCard"

const SingleReview = (props) => {
 const {reviewData, setReviewData} = props
 const [review, setReview] = useState([])
 const {id} = useParams()


const arr = []
useEffect(() => {
     reviewData.map((review) => {
        if(Number(id) === review.review_id){
            arr.push(review)
        }
        return arr
    })
    setReview(arr)
}, [])
   

 return (
    <div>
       <ul>
            {review.map((rev)=> {
               
                return(
                    <li className="reviewCard">
                        <ReviewCard
                      
                        review_id={rev.review_id} 
                        category={rev.category} 
                        comment_count={rev.comment_count} 
                        date={rev.created_at}
                        designer={rev.designer}
                        review_body={rev.review_body}
                        img={rev.review_img_url}
                        title={rev.title}
                        votes={rev.votes}
                        />
                    </li>
                )
            })}
           </ul>
    </div>
 )
}


export default SingleReview