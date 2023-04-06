import { useEffect, useState, useLayoutEffect} from "react"
// useEffect được sử dụng khi cần Side effects
// Cần nắm vững: 
// Events: Add / remove  event listeners
// Observer partern: Subcribe / unsubscribe
// Closures: Function that returns a function
// Timers: setInterval, clearInterval, setTimeout, clearTimeout
// useState
// mounted / unmounted
// ===
// Call API

/**
 * 
 * 1. Update DOM
 *  - F8 Blog title
 * 2. Call API
 * 3. Listen DOM events
 *  - Scroll 
 *  - Resize
 * 4. Cleanup
 *  - Remove listener / Unsubscribe
 *  - Clear timer
 */


function Content(){
    // 1. useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // - gọi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component được mounted
    // 3. useEffect(callback, [deps])
    // - Callback sẽ được gọi lại khi deps được thay đổi
    //---------------
    // 1. Callback luôn được gọi sau khi Component mounted
    // 2. Cleanup function luôn được gọi trước khi component unmounted
    // 3. Cleanup funtion luôn được gọi trước khi callback được gọi(trừ lần muonted)
    const [count, setCount] = useState(0)
    
    useLayoutEffect(() => {
        if(count > 3)
            setCount(0)

    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleRun}>Run</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Content