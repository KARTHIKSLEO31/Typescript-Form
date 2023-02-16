import './App.css'
import { Routes, Route } from "react-router-dom"
import User from './components/user'
import Posts from './components/posts'

function App() {

  return (
    <div className="App" style = {{display:'flex'}}>
      <Routes>
        <Route path="/" element={ <User/> } />
        <Route path="posts" element={ <Posts/> } />
      </Routes>
    </div>
  )
}

export default App
