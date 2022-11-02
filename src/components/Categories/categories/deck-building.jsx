import { useLocation } from "react-router-dom"

const DeckBuilding = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <>
        {state.description}
        </>
    )
}

export default DeckBuilding