import { useLocation } from "react-router-dom"

const PushYourLuck = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <>
        {state.description}
        </>
    )

}

export default PushYourLuck

