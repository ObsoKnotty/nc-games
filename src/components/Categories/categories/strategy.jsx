import { useLocation } from "react-router-dom"

const Strategy = (props) => {
const location = useLocation()
const state = location.state
return (
    <>
    {state.description}
    </>
)
}

export default Strategy