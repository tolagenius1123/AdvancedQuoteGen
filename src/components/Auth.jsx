import React from 'react'
import { useEffect } from 'react'
import './Auth.css'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const Auth = () => {

    let navigate = useNavigate()

    // const handleLoginResponse = (response) => {
    //     console.log(`Encoded JWT ID Token: ${response.credentials}`);

    // }

    // useEffect(() => {
    //     /*global google */
    //     google.accounts.id.initialize({
    //         client_id: "464529379469-vdr1g7oiheaohu700tfibgnp8glgqe34.apps.googleusercontent.com",
    //         callback: handleLoginResponse
    //     })

    //     google.accounts.id.renderButton(
    //         document.getElementById("google"),
    //         {
    //             theme: "outline",
    //             size: "large",
    //             width: "100%"
    //         }
    //     )
    // },[])

    return (
    <div className='google-auth'>
        <div id='google'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    const decodedJWT = jwt_decode(credentialResponse.credential)
                    console.log(decodedJWT);
                    navigate("/quotes")
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    </div>
    )
}

export default Auth