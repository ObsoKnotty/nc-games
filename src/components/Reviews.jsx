import { useEffect } from "react"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import ReviewCard from "./ReviewCard"
const Reviews = (props) => {
 const {reviewData, setReviewData} = props

let count = 0

return(
    <div>
        <h2>Reviews</h2>
        <Link to="/reviews/list"> List </Link>

        <Outlet/>
    </div>
)
}

export default Reviews