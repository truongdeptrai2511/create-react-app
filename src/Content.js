import { useEffect } from "react"
import { useState } from "react"
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

const lessons = [
    {
        id: 1,
        name: "CSS",
    },
    {
        id: 2,
        name: "HTML",
    },
    {
        id: 3,
        name: "JS",
    }
]

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
    const [lessonId, setLessonId] = useState(1)
    
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log({detail})
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    },[lessonId])

    return(
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? "red" : "black",
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content