import React from 'react'
import Home from './Home';
// import Page2 from './Page2'
import Page3 from './Pges3'
import Page4 from './Pages4'
import Page5 from './Pages5'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page6 from './Page6';
import Pages6 from './Pages6';
import Pages7 from './Pages7';
// import New from '../component8/New';
import Newpage from './Newpage';
// import New from '../component8/New';
const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Page3/>}/>
    <Route path="/content" element={<Page4/>}/>
    <Route path="/about" element={<Page5/>}/>
    <Route path="/vegetable" element={<Page6/>}/>
    <Route path="/login" element={<Pages6/>} />
    <Route path="/register" element={<Pages7/>}/>
    <Route path="/new" element={<Newpage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App