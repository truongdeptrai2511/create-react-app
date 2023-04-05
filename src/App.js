import './App.css';
import Content from './Content'
import {useState} from 'react'
// Mounted / Unmounted
function App(){
  const [showContent, setShowContent] = useState(false)
  return (
    <div className="App" style={{padding:30}}>
      <button onClick={() => 
        setShowContent(!showContent)}>
          Show Content
      </button>
      {showContent && <Content/>}
    </div>
  )}
//#endregion
export default App;
