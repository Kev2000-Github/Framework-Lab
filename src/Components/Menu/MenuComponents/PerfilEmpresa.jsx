import '../Barra.css';
import {
  Principal,
} from '../../SVG/IconNavbar';

export function PerfilEmpresa() {
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
