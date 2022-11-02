import { useLocation } from "react-router-dom"

const HiddenRoles = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <>
        {state.description}
        </>
    )
    }


export default HiddenRoles