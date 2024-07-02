import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Action1";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
 
  const router = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (username && password) {
        // toast.success("Registration Successfull. Go for Login")
        console.log(user, "user")
        const response = {
          data: {
            success: true,
            message: "LOGIN Successfull.",
          },
        };

        if (response.data.success) {
          // dispatch(login({user, payload:response.data.userData }));

          dispatch(login({ user: response.data.userData.name }));
          console.log(user, "user2")
          setUsername("");
          setPassword("");

          router("/");
          // alert(response.data.message);
        }
      } else {
        alert("All fields are mandatory");
      }
    } catch (error) {}
  };

  return (
    <div style={{
      border:"2px solid black",
      width:"35%",
      height:"300px",
      margin:"auto",
    
  }}>
     
    
          <h1>Login</h1>
          <form onSubmit={handleLogin} >
            <div style={{
      marginTop:"30px",        
      width:"400px",
      height:"60px",
      display:"flex",
      justifyContent:"space-between",
      lineHeight:"1.9"
  }}>
              <label style={{
                fontSize:"19px",
                // fontWeight:"bold",
                lineHeight:"1.9",
                marginLeft:"70px",

              }}>Email:</label>
              <input style={{
                fontSize:"16px",
                // fontWeight:"300px",
                marginLeft:"66px",
                width:"260px",
               height: "25px"
              }}
                type="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
             </div>
             <div style={{
      width:"400px",
      height:"60px",
      
      display:"flex",
      justifyContent:"space-between",
  }}>
              <label style={{
                fontSize:"19px",
                // fontWeight:"bold",
                marginLeft:"70px",

              }}>Password:</label>
              <input style={{
                fontSize:"16px",
                // fontWeight:"300px",
                marginLeft:"30px",
                width:"260px",
                height:"25px"
              }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>

            <button
            style={{
             
              marginTop:"30px",
              width:"78px",
              height: "40px",
              fontSize:"20px",
              fontWeight:"bold",
              backgroundColor:"black",
              color:"white",

            }}   type="submit">Login</button>
            
          </form>
        </div>
    
    
  );
};

export default Login;