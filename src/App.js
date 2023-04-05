import './App.css';

import {useState} from 'react'
//#region Random Gift
// const gifts = ['gift1', 'gift2', 'gift3', 'gift4', 'gift5']

// function App() {

//   const [gift, setGift] = useState()
//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//         <h1>{gift||'Chưa có phần thưởng'}</h1>
//         <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// } 
//#endregion
//#region input
// function App(){
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   console.log(name)
//   const handleSubmit = () => {
//     //call API
//     console.log({name, email})
//   }
//   return (
//     <div className="App" style={{padding:30}}>
//       <input 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>
//         Register
//       </button>
//     </div>
//   )
// }
//#endregion
//#region Radio Button
const courses = [
  {
    id: 1,
    name: 'HTML'
  },
  {
    id: 2,
    name: 'CSS'
  },
  {
    id: 3,
    name: 'JavaScript'
  }
]
// function App(){
//   const [checked, setChecked] = useState(1)
//   console.log(checked)
//   const handleSubmit = () => {
//     //call API
//     console.log({id: checked})
//   }
  
//   return (
//     <div className="App" style={{padding:30}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input type='radio'
//           checked={course.id === checked}
//             onChange={() => setChecked(course.id)}
//           />{course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }
//#endregion
//#region Checkbox
function App(){
  const [checked, setChecked] = useState([])
  const handleChecked = (id) => {
    setChecked(prev => {
      const isChecked = prev.includes(id)
      if(isChecked){
        return prev.filter(item => item !== id)
      }else{
        return [...prev, id]
      }
    })
  }
  const handleSubmit = () => {
    //call API
    console.log({ids: checked})
  }
  return (
    <div className="App" style={{padding:30}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )}
//#endregion
export default App;
