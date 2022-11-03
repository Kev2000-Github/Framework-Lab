import './Barra.css';
import {House,Grafica,Contacto,Mail,Trabajo,Documento,Ajuste,Principal,FotoPerfil} from '../SVG/IconNavbar.js';


const Perfil = () => {
    return (
        <div className="navbar">
                <div className='icono'>
                    <Principal/>
                </div>
                <div>
                    <h1 className='titulo1'>OnTheGo</h1>
                    <h2 className='titulo2'>Sales Solutions</h2>
                </div>      
        </div>
    )
}

const Lista = () => {
    return (

        
        <div className="listado">
            <Perfil/>
            <ul>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <House/>
                        </div>
                        Dashboard</a>
                </li>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <Grafica/>
                        </div>
                        Analytics</a>
                </li>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <Contacto/>
                        </div>
                        Contacts</a>
                </li>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <Mail/>
                        </div>
                        Requests</a>
                </li>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <Trabajo/>
                        </div>
                        Projects</a>
                </li>
                <li className="item" id='Documents'>
                    <a href="#Documents" className="btn">
                        <div className='icono'>
                            <Documento/>
                        </div>
                        Documents</a>
                            <div className="smenu">
                                <a href="">Invoices</a>
                                <a href="">Extracts</a>
                                <a href="">Handbils</a>
                            </div>
                </li>
                <li>
                    <a href="#">
                        <div className='icono'>
                            <Ajuste/>
                        </div>
                        Settings</a>
                </li>
            </ul>
            <Barra/>
            <Perfilfinal/>
        </div>
        
    )
}

const Barra = () =>{
    return(
        <div className='barra'>
            <h2 className='titulo2'>Current Sales</h2>
            <h1 className='titulo1'>13.40k<p className='porcentaje'>/62%</p></h1>
            <div className='base'>
                <div className="barra-relleno neon"></div>
            </div>
        </div>
    )
}

const Perfilfinal = () => {
    return (
            <div className="navbar2">
                <div className='icono'>
                    <FotoPerfil/>
                </div>
                <div>
                    <h1 className='nombre'>Gabriel T.</h1>
                    <h2 className='correo'>27436114@gmail.com</h2> 
                </div> 
            </div>
    )
}

export {Lista};