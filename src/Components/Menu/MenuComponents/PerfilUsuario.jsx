import '../Barra.css';
import { FotoPerfil } from '../../SVG/IconNavbar';

export function PerfilUsuario() {
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
