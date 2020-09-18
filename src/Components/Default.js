import React from 'react';

function Default() {
return(
        <div 
          style={{backgroundColor:"white"}}>
          <text style={{color:"Red"}}>
            Work is in Progress.. Comming Soon...<br></br>We are working to reach out to you..</text><br></br>
          <img style={{width:'50%',justifyContent:"space-around"}} src={process.env.PUBLIC_URL+"/ComingSoonGif.gif"} alt="ComingSoon" />
          <img src={process.env.PUBLIC_URL+"/developers-gif-showcase.gif"} alt="Work In Progress" /><br></br>
          <img style={{width:'300px',height:'250px',padding:"10px"}}src={process.env.PUBLIC_URL+"/coming-soon.gif"} alt="Work In Progress" />
          <img style={{width:'300px',height:'250px',padding:"10px"}} src={process.env.PUBLIC_URL+"/Homebase_Thumb_v01.gif"} alt="Work In Progress" />
        </div>
)
}
export default Default