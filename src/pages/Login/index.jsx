import { LoginPage } from "./style";
import logo_resized from "../../assets/logo_resized.png";
import { GoogleLogo } from "@phosphor-icons/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  
  const [user, setUser] = useState();

  useEffect(() => {
    user ? localStorage.setItem("user", JSON.stringify(user)) : null;
  }, [user]);

  const handleGoogleSignIn = () => {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider)
      .then((result) => {
        setUser(result.user);
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <LoginPage>
      <img src={logo_resized} alt="logo-alerta-recife"/>
        <Link onClick={handleGoogleSignIn}>
          <GoogleLogo size={24} />
          Entrar com o Google
        </Link>
    </LoginPage>
  );
};
