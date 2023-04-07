import './App.css'
import Content from './Content'
import {useReducer, useRef, useState, createContext, useContext} from 'react'
import {ThemeContext} from './ThemeContext'
// context
// CompA => CompB => CompC

// 1. Create context: tao ra pham vi nhan du lieu
// 2. Provider: cung cap du lieu
// 3. Consumer: nhan du lieu


console.log('ThemeContext:', ThemeContext)

function App(){
  const context = useContext(ThemeContext)
    return (
        <div className="App">
            <button onClick={context.toggleTheme}>Toggle Themes</button>
            <Content/>
        </div>
    )
  }
//#endregion
export default App;
