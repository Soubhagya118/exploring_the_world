import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from './components/Error';
import Contact from "./components/Contanct";
import ResturantMenu from "./components/ResturantMenu";

import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";


import '../index.css';
import Profile from "./components/Profile";



const AppLayOut=()=>{
    return (
    <div>
         <Header/>
         <Outlet/>
         <Footer/>
    </div>
);
}


const appRouter = createBrowserRouter(
   [ {
       path:"/",
       element: <AppLayOut/>,
       errorElement:<Error/>,
       children:[
        {
            path: "/",
            element: <Body/>,
            
         },
        {
            path: "/about",
            element: <About/>,
            children:[
               {
                  path:"pofile",
                  element:<Profile/>
               }
            ]
            
            
         },
         {
            path: "/contact",
            element: <Contact />,
            
         },
         {
         
         path: "/resturant/:id",
         element: <ResturantMenu />,
         
      }
       ]
    },

    

 ] )
   

// const heading1= React.createElement(
//     "h1",
//     { id: "title",key:1} , 
//     "Heading1"
//     );
// const heading2= React.createElement(
//     "h2",
//     { id: "heading2",key:2} , 
//     "Heading2"
//     );
    
// const container= React.createElement(
//     "div",
//     { id: "contsiner"} , 
//     [heading1,heading2]
//     );
//     

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router= {appRouter} />
);


