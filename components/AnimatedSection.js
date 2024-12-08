export default function AnimatedSection() {
  return (
    <div style={{
      position: 'relative',
      height: '70vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
    }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(60%)',
          zIndex: '-1',
        }}
      >
        <source src="/images/sports-action.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{
        animation: 'fadeIn 2s ease-in-out',
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
      }}>
        <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>¡Siente la energía deportiva!</h2>
        <p style={{ fontSize: '1.8rem', marginBottom: '30px' }}>
          MomentumPro te equipa para alcanzar tus metas.
        </p>
        <button style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#FF4500',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6347'} onMouseLeave={(e) => e.target.style.backgroundColor = '#FF4500'}>
          Descubre más
        </button>
      </div>
    </div>
  );
}

/* CSS Animations */
const styles = `
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
