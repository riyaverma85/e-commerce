
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";


const App=()=>{
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
           </Routes>
        </BrowserRouter>
         
        </>
    )
}
export default App;
