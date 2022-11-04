import './Barra.css';
import { useState } from 'react';
import {
  House,
  Grafica,
  Contacto,
  Mail,
  Trabajo,
  Documento,
  Ajuste,
} from '../SVG/IconNavbar';
import { PerfilEmpresa as Perfil } from './MenuComponents/PerfilEmpresa';
import { PerfilUsuario as Perfilfinal } from './MenuComponents/PerfilUsuario';
import { Barra } from './MenuComponents/Barra';
import { ArrowDown } from '../SVG/ArrowDown';

export function Lista({ className }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuOnClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className={`${className} listado`}>
      <Perfil />
      <ul>
        <li>
          <a href='#'>
            <div className='icono'>
              <House />
            </div>
            Dashboard
          </a>
        </li>
        <li>
          <a href='#' className='selected'>
            <div className='icono'>
              <Grafica />
            </div>
            Analiticas
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Contacto />
            </div>
            Contactos
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Mail />
            </div>
            Solicitudes
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Trabajo />
            </div>
            Proyectos
          </a>
        </li>
        <li className='item' id='Documents'>
          <a href='#' className='btn submenu' onClick={subMenuOnClick}>
            <div className='icono'>
              <Documento />
            </div>
            Documentos
            <ArrowDown className='arrowDown' />
          </a>
          <div className={`smenu ${isSubMenuOpen ? 'open' : ''}`}>
            <a href='#'>Facturas</a>
            <a href='#'>Extractos</a>
            <a href='#'>Volantes</a>
          </div>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Ajuste />
            </div>
            Configuracion
          </a>
        </li>
      </ul>
      <Barra />
      <Perfilfinal />
    </div>

  );
}
