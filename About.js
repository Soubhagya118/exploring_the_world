import React from 'react';
//import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
const About= () => {
    return (
        <div>
        <h1>About Us Page</h1>
        <p>
            
            This is the Namaste React Course By Akshya Saini - Find The Path.
        </p>
        
        <Profile name="This is Class Component"/>
        <ProfileClass name="This is Functional Component"/>
       </div>
    )
};

export default About ;