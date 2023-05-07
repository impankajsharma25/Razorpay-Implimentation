import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import PaymentSucess from "./PaymentSucess";

function App() {
  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/paymentsuccess' element={<PaymentSucess/>} exact />
      </Routes>
      
    </>
  );
}

export default App;
