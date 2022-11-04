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
          <a href='#'>
            <div className='icono'>
              <Grafica />
            </div>
            Analytics
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Contacto />
            </div>
            Contacts
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Mail />
            </div>
            Requests
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Trabajo />
            </div>
            Projects
          </a>
        </li>
        <li className='item' id='Documents'>
          <a href='#' className='btn submenu' onClick={subMenuOnClick}>
            <div className='icono'>
              <Documento />
            </div>
            Documents
            <ArrowDown className='arrowDown' />
          </a>
          <div className={`smenu ${isSubMenuOpen ? 'open' : ''}`}>
            <a href='#'>Invoices</a>
            <a href='#'>Extracts</a>
            <a href='#'>Handbils</a>
          </div>
        </li>
        <li>
          <a href='#'>
            <div className='icono'>
              <Ajuste />
            </div>
            Settings
          </a>
        </li>
      </ul>
      <Barra />
      <Perfilfinal />
    </div>

  );
}
