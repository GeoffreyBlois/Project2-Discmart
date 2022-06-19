import { Button,ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./disco2.jpg"
import Logo from "./Walmartlogo.jpg";

export default function MainNavBar(){
    const navigate = useNavigate();

    return(
       
        <nav>
             <div className="header">

             <img src={Logo} alt="Logo"></img>
            <h1>Welcome to FRITTTE</h1>
            </div>
            <div className="headerPic">
            <img src={Image}></img>
            </div>
            <div className="mainBar">
            
             <center>
{/* <<<<<<< HEAD
           <body className="body4">
            <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/login")}>Login</Button>
            <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}}onClick={() => navigate("/register")}>Sign Up</Button>
            <Button style={{borderRadius: 15, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/Food-Items")}>View all Food Items</Button>
            <img src={yellowbody}></img>
            </body>
            </center>
======= */}
            
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/login")}>Login</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}}onClick={() => navigate("/register")}>Sign Up</Button>
            <Button style={{borderRadius: 35, backgroundColor: "#0D7AB2", padding: "18px 36px",fontSize: "18px" }} variant="contained" sx={{color:'#FDBB2F'}} onClick={() => navigate("/Food-Items")}>View all Food Items</Button>

            
            </center>  
            </div>
        </nav>
    )
}