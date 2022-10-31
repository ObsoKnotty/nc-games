const ReviewCard = (props) => {
 
    const {category, comment_count, date, designer, review_body, img, title, votes, review_id } = props


    return(
        <div>
            <p>Title: {title}</p>
            <img src={img} alt="Image of the game cover" width="100" height="100"/>
            <p>Review Number: {review_id}</p>
            <p>Posted on: {date.slice(0, 10)}</p>
            <p>Category: {category}</p>
            <p>Designer: {designer}</p>
            <p>{review_body}</p>
            <p>Comments:{comment_count}</p>
            <p>Votes:{votes}</p>
        </div>
    )



}
export default ReviewCard