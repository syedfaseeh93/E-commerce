import {Route, Routes } from 'react-router-dom'
import CustomerRouter from './Routers/CustomerRouter'
function App() {

  return (

    <>
    <div>
      <Routes>
      <Route path='/*' element={<CustomerRouter/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
