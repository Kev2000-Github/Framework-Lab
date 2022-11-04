import '../Barra.css';

export function Barra() {
  return (
    <div className='barra'>
      <h2 className='titulo2'>Ventas Actuales</h2>
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
