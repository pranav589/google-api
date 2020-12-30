import React from 'react';
import { useGoogleLogout ,UseGoogleLoginResponse} from 'react-google-login';
import{useHistory} from 'react-router-dom'
const clientId =
  '211391100044-h1s66co3lvpth08oru5irh4mkgk49546.apps.googleusercontent.com';

function LogoutHooks() {
    const history=useHistory('')
    
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    
    history.push('/')
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
