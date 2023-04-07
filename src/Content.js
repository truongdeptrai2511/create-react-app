import React, { useEffect, useState, useLayoutEffect, useRef, memo} from "react"
import Paragraph from "./Paragraph"
function Content({theme}){
    
    return (
        <div>
            <h1><Paragraph theme={theme}/></h1>
        </div>
    )
}

export default Content