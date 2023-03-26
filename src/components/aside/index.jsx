import { AsideStyle } from  "./style"
import logo from "../../assets/logo.png"
import { House, DeviceMobile, User, DotsThreeCircle, Siren } from "@phosphor-icons/react"


export const Aside = () => {
    const Usuario = JSON.parse(localStorage.getItem("user"));
    return(
        
        <AsideStyle>
            <img src={logo} alt="" />
            
            <div>
              <img src={Usuario.photoURL} className="img-perfil"></img>
              <h3 className="h3-perfil">{Usuario.displayName} </h3>
              <h5></h5>
            </div>
         

            <a href="#"   classname="btn-inicio">
                <House size={24} />
                <h3> Inicio</h3>
            </a>

            <a href="#">
                <DeviceMobile size={24}/>
                <h3> Feed </h3>
             </a>

            <a href="#" >
                <User size={24} />
                <h3> Pefil</h3> </a>

                <a href="#" >
                    <DotsThreeCircle size={24}/>
                <h3> Configurações</h3> </a>
                
                <div className="button-div">
                <button>
                    Alertar
                </button>
                <button className="btn-mobile">
                    <Siren size={24}/>
                </button>
                </div>
        </AsideStyle>
    )
}