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
const tabs = ['posts', 'albums', 'comments']
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
    
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(posts => setPosts(posts))
    },[type])

    return(
        <div>
            <div>
                    {tabs.map(tab => (
                        <button 
                            style={type === tab ? {
                                backgroundColor: 'blue',
                            } : {}}
                            key={tab} 
                            onClick={() => 
                            setType(tab)}>{tab}
                        </button>
                    ))}
                </div>
            <input 
                value={title} 
                onChange={(e) => 
                setTitle(e.target.value)}/>
                <ul>
                    {posts.map(post => 
                    <li key={post.id}>
                        {post.title||post.name}
                    </li>)}
                </ul>
                
        </div>
    )
}

export default Content