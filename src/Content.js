import React, { useEffect, useState, useLayoutEffect, useRef, memo} from "react"
// 1. memo() -> higher order component  (hoc)
// 2. useCallBack()

//Hooks
//HOC
// Render props

function Content(){
    
    return (
        <div>
            <h1>Hello Content!</h1>
        </div>
    )
}

export default memo(Content)