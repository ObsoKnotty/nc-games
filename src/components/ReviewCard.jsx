import { useNavigate } from "react-router-dom"

const ReviewCard = (props) => {
    const navigate = useNavigate()
    const {category, comment_count, date, designer, review_body, img, title, votes, review_id } = props


    return(
        <div onClick={() => {
            navigate(`/reviews/${review_id}`)
        }}>
            <p>Title: {title}</p>
            <img src={img} alt="Image of the game cover" width="100" height="100"/>
            <p>Review Number: {review_id}</p>
            <p>Posted on: {date.slice(0, 10)}</p>
            <p>Category: {category}</p>
            <p>Designer: {designer}</p>
            <p>{review_body}</p> {/* maybe move this to only show on the review page*/}
            <p>Comments:{comment_count}</p>
            <p>Votes:{votes}</p>
        </div>
    )



}
export default ReviewCard