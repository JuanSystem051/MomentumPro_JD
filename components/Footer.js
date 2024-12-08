export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1E1E1E',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      borderTop: '1px solid #333',
    }}>
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>MomentumPro</h3>
        <p>Tu tienda deportiva de confianza.</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '10px',
      }}>
        <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Políticas de Compra</a>
        <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Términos y Condiciones</a>
        <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Contáctanos</a>
      </div>
      <div>
        <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
          © 2024 MomentumPro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
