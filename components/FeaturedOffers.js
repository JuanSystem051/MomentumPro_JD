export default function FeaturedOffers() {
  const products = [
    { name: 'Balón de fútbol profesional', image: 'PelotaFutbol.jpg', tag: 'En oferta' },
    { name: 'Set de mancuernas ajustables', image: 'SetMancuernasAjustables.jpg', tag: 'Lo más vendido' },
    { name: 'Zapatillas deportivas multiuso', image: 'ZapatillasDeportivas.jpg', tag: 'Edición limitada' },
  ];

  return (
    <div style={{ padding: '50px', backgroundColor: '#252525' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center', fontSize: '2.8rem', marginBottom: '30px' }}>
        Ofertas Destacadas
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '25px' }}>
        {products.map((product, index) => (
          <div key={index} style={{
            backgroundColor: '#1E1E1E',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
            maxWidth: '300px',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.6)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}>
            <img src={`/images/${product.image}`} alt={product.name} style={{
              width: '100%',
              borderRadius: '10px',
              marginBottom: '15px',
            }} />
            <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '10px' }}>{product.name}</h3>
            <span style={{
              display: 'inline-block',
              padding: '8px 15px',
              fontSize: '1rem',
              backgroundColor: '#FFD700',
              color: 'black',
              borderRadius: '5px',
            }}>{product.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
