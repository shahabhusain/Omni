import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Buisness from "../Pages/Buisness";
import Career from "../Pages/Career";
import Looking from "../Pages/Looking";
import Partner from "../Pages/Partner";
import Product from "../Pages/Product";
import LandingPage from "../Pages/LandingPage";


  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
         <Route index element={<LandingPage />} />
         <Route path="/buisnes" element={<Buisness />} />
         <Route path="/career" element={<Career />} />
         <Route path="/looking" element={<Looking />} />
         <Route path="/partner" element={<Partner />} />
         <Route path="/product" element={<Product />} />
        </>
    ))
        