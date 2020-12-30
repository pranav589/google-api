import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import{useHistory} from 'react-router-dom'
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '211391100044-h1s66co3lvpth08oru5irh4mkgk49546.apps.googleusercontent.com';

function LoginHooks() {
  const history=useHistory('')
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
      history.push('/logout')
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>Google Login</h2>

      <button className="buttonText" onClick={signIn} style={{cursor:'pointer'}}>Sign in with Google</button>
    </div>
  );
}

export default LoginHooks;