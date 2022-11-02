import { useLocation } from "react-router-dom"

const EngineBuilding = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <>
        {state.description}
        </>
    )
}

export default EngineBuilding