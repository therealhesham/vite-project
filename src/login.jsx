
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

async function submit(e) {
 e.preventDefault();

 //  fetch({})
// fetch("http://localhost:3008/auth/login",{method:"POST",credentials:true})
 await axios.post("https://amacerp.onrender.com/auth/login",{email,password},{headers:{"Content-Type":"application/json"},withCredentials:true}).then(e=>console.log("bearer",e.headers))
// alert(submit.)

// console.log(submit.headers.bearer)

}
    return (
<div className="gridparent">
    <div className="leftdiv">
    <img src="https://marketplace.canva.com/EAFtMiaPRPI/1/0/1600w/canva-green-and-beige-human-resources-modern-presentation-dZkEueY1Hdg.jpg" alt="Girl in a jacket" />

    </div>
<div className="form"  >
    <form>
<input type="text" placeholder="Email" value={email} className="input" onChange={(e)=>setEmail(e.target.value)} />
<input type="password"  placeholder="Password" value={password} className="input" onChange={(e)=>setPassword(e.target.value)}/>
<input type="submit"   onClick={(e)=>submit(e)} value="Sign in" className="submit"/>
</form>
</div>
</div>

    )




}


export default Login;