import './App.css';
import firebase from "./firebase/firebaseConfig"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

function App() {
  const Auth = getAuth(firebase)
  const provider = new GoogleAuthProvider()

  const SignOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  const SignInWithGoogle = () => {
    signInWithPopup(Auth, provider)
      .then(res => {
        localStorage.setItem("Name", res.user.displayName)
        localStorage.setItem("Email", res.user.email)
        localStorage.setItem("Photo", res.user.photoURL)
        console.log(res.user);
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  const localName = localStorage.getItem("Name"),
    localEmail = localStorage.getItem("Email"),
    localPhoto = localStorage.getItem("Photo")
  console.log(localName, localEmail, localPhoto);
  return (
    <div className="App">
      <h1>ssalsdas</h1>

      {localName === null ? <button onClick={SignInWithGoogle}>Sign in </button> : <button onClick={SignOut}>Sign Out </button>}

      <h1>{localName}</h1>
      <h1>{localEmail}</h1>
      <img src={localPhoto} width="400px" alt="" />
    </div>
  );
}

export default App;
