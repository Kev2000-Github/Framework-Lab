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
  Principal,
  FotoPerfil,
} from '../SVG/IconNavbar';
import { ArrowDown } from '../SVG/ArrowDown';

function Perfil() {
  return (
    <div className='navbar'>
      <div className='icono'>
        <Principal />
      </div>
      <div>
        <h1 className='titulo1'>OnTheGo</h1>
        <h2 className='titulo2'>Sales Solutions</h2>
      </div>
    </div>
  );
}

function Lista() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuOnClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className='listado'>
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

function Barra() {
  return (
    <div className='barra'>
      <h2 className='titulo2'>Current Sales</h2>
      <h1 className='titulo1'>
        13.40k
        <p className='porcentaje'>/62%</p>
      </h1>
      <div className='base'>
        <div className='barra-relleno neon' />
      </div>
    </div>
  );
}

function Perfilfinal() {
  return (
    <div className='navbar2'>
      <div className='icono'>
        <FotoPerfil />
      </div>
      <div>
        <h1 className='nombre'>Gabriel T.</h1>
        <h2 className='correo'>27436114@gmail.com</h2>
      </div>
    </div>
  );
}

export { Lista };
