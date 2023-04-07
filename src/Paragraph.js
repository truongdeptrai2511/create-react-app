import { useContext } from "react"
import {ThemeContext} from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        
        <div >
            <h1 className={context.theme}>Hello Paragraph!</h1>
        </div>
    )
}

export default Paragraph