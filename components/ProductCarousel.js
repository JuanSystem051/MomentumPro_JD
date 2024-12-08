export default function ProductCarousel({ images }) {
  return (
    <div style={{
      display: 'flex',
      overflowX: 'scroll',
      gap: '15px',
      padding: '10px',
      scrollbarWidth: 'none',
    }}>
      {images.map((image, index) => (
        <div key={index} style={{
          position: 'relative',
          flex: '0 0 auto',
          width: '250px',
          height: '250px',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img src={`/images/${image}`} alt={`Producto ${index + 1}`} style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '0.9rem',
          }}>
            Producto {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
