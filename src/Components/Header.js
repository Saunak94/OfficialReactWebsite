//Funtional Component
import React from 'react';
//import Css from 'D:\Users\J N Ganguly\Documents\React\PersonalWebsite\personalwebsite\src\App.css';
import './ButtonHeader.css';
import logo from './logo.gif';
import logo2 from './developer.gif';
import { BrowserRouter, NavLink} from 'react-router-dom';

function Header(){
    return(
        <div
         style={{
            width:'100%',
            height:'50px',  
            display:"flex", 
            justifyContent:"space-around",
            padding:"10px"
            }} 
        >
            <b style={{ flexDirection:'row'}}>
                <img src={logo2} style={{width:'80px'}}  alt="Work In Progress"/>
                <text>Inovations-2020</text>
                <img src={logo} style={{width:'60px'}}  alt="logo" />
           </b>
           <BrowserRouter>
                <button className="ButtonHeader" onClick>
                    <NavLink to ={"/"}>Home</NavLink> 
                    <span class="tooltiptext">Page Under Progress</span></button>
                <button className="ButtonHeader">About<span class="tooltiptext">Page Under Progress</span></button>
                <button className="button3">Work</button>
                <button  onPress={() => alert('This is a button!')} className="button2" onClick>
                    <NavLink to ={"/contact"}><span>Contact US</span></NavLink>
                    <span class="tooltiptext">Almost completed</span>
                </button>
            </BrowserRouter>
             {/* Block Comments 
            <div style={{display:"inline",margin:"Auto"}}>Home</div>
            <div style={{display:"inline",margin:"Auto"}}>About</div>
            <div style={{display:"inline",margin:"Auto"}}>Work</div>
            <div style={{display:"inline",margin:"Auto"}}>Contact US</div> 
            */}             
        </div>
    )
}
export default Header