

import Home from "./pages/homes/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Newpage from "./pages/newpage/Newpage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
 <BrowserRouter>

 
    <Routes>
     
      <Route path="home" element={<Home />}>
        </Route>
        <Route path="LISTS" element={<List />}>
        </Route>
        <Route path="users">
                <Route index element={<List/>}/>
                <Route path="userid" element={<Single/>}/>
                <Route path="new" element={<Newpage/>}/>

        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
