import Shows from  "./Shows";
import { Route , Routes } from 'react-router-dom';
import Summary from './Summary'
import Form from './Form'
import Navbar from "./Navbar";

function App() {
  return (
       <>
       <Navbar />
      <Routes>
      <Route path = "/" element = {<Shows/>}/>
     <Route path = "summary/:id" element = {<Summary/>}/>
     <Route path = "book-ticket/:id" element = {<Form/>}/>
     </Routes>
    </>
    
  );
}

export default App;
