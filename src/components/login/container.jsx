import { useState } from "react";

const Login = () => {
    const [login, setLogin] = useState(true),
        [loading, setLoading] = useState(false),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const submit = async () => {
        console.log(email)
        console.log(password)
        const token = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: email,
                password: password
            })
        })
        console.log("asd"+token)
    }

    return <div className="loginContainer">
        <h1 className="loginTitle">{login?"Login":"Sing up"}</h1>
        <form className="loginData">
            <h2>Email</h2>
            <input type="text" placeholder="email" onChange={({target})=> {setEmail(target.value)}}/>
            <h2>Password</h2>
            <input type="password" placeholder="password" onChange={({target})=> {setPassword(target.value)}}/>
            <div className="buttonContainer">
                <input className="loginButton" type="button" value={!loading?(login?"Login":"Sing up"):"Loading..."} onClick={()=>submit()}/>
            </div>
        </form>
        <p className="changeLogin" onClick={()=>setLogin(!login)}>{login?"Dont have a acount?":"You have a acount?"}</p>
    </div>
}

export default Login;