import './Login.css'
import { Player} from '@lottiefiles/react-lottie-player';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}


export default function Login() {
  return (
    <main>
        <h1 id='hero'>Hello DOC !</h1>
      <div id='bubble'>
      Hello DOC is a platform for both doctors and patients to add, access and customize their SMART Nutrition CARD....
      </div>

      <div id='doc'>
      <h5>For DOCTORS,</h5>
        To keep Track of your Patients,<br></br> health to manage your schedule 
        <div>
        <GoogleLogin
    clientId="196950100380-bv55e83gop6ca1i8u9fnheerulc70bf8.apps.googleusercontent.com"
    render={renderProps => (
      <button id="doc-login"  onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN
      
      </button>
    )}
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
         cookiePolicy={'single_host_origin'}
         />,
          </div>
          <a href='http://'>Sign up </a>
      </div>

      <div id='pat'>
      <h5>For PATIENTS,</h5>
      To add your profile, medical<br></br> history's, to keep track of your prescription 
        <div>
        <GoogleLogin
    clientId="196950100380-bv55e83gop6ca1i8u9fnheerulc70bf8.apps.googleusercontent.com"
    render={renderProps => (
      <button id="doc-login"  onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN
      
      </button>
    )}
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
         cookiePolicy={'single_host_origin'}
         />,
          </div>
          <a href='http://'>Sign up </a>
      </div>
 
      <Player
  autoplay
  loop
  src="https://assets5.lottiefiles.com/packages/lf20_zpjfsp1e.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>

    </main>
  )
}
