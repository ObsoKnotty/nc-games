import { useLocation } from "react-router-dom"

const RollAndWrite = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <>
        {state.description}
        </>
    )
}

export default RollAndWrite