export default function Hero() {
  return (
    <div style={{
      backgroundColor: '#121212',
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src="/images/logo.webp" alt="MomentumPro Logo" style={{ width: '300px', marginBottom: '30px' }} />
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>
        ¡Bienvenido a MomentumPro!
      </h1>
      <button style={{
        padding: '15px 30px',
        fontSize: '1.2rem',
        backgroundColor: '#FFD700',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      }} onClick={() => document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' })}>
        Descubre más
      </button>
    </div>
  );
}
