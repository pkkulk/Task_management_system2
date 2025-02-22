import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="w-full bg-gray-800 text-white flex justify-between items-center p-4">
  <h1 className="text-2xl font-bold">Task Dashboard</h1>
  <div className="flex items-center gap-4">
    <button className="bg-blue-600 px-3 py-1 rounded">Logout</button>
  </div>
</header>

     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
    </>
  )
}

export default App
