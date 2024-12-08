export default function ProductSection() {
  const products = [
    { name: 'Balón de fútbol', image: 'PelotaFutbol.jpg', description: 'Balón de alta calidad para césped natural y artificial.' },
    { name: 'Set de mancuernas ajustables', image: 'SetMancuernasAjustables.jpg', description: 'Perfectas para entrenamientos en casa con pesos personalizados.' },
    { name: 'Zapatillas deportivas', image: 'ZapatillasDeportivas.jpg', description: 'Cómodas y ligeras, ideales para correr o entrenar.' },
    { name: 'Kit de Yoga', image: 'KitJoga.jpg', description: 'Incluye mat, bloques y correas para una experiencia completa.' },
    { name: 'Bicicletas estáticas', image: 'BicicletasEstaticas-Spinning.jpg', description: 'Equipos de cardio con monitoreo de ritmo cardíaco.' },
    { name: 'Raquetas de tenis', image: 'RaquetasTenis.jpg', description: 'De calidad profesional para jugadores recreativos o avanzados.' },
    { name: 'Equipo de natación', image: 'EquipoNatacion.jpg', description: 'Gafas, gorros y trajes de baño de alto rendimiento.' },
    { name: 'Tablas de surf', image: 'TablasSurf.jpg', description: 'Resistentes al desgaste por agua salada con diseños modernos.' },
    { name: 'Rodilleras deportivas', image: 'Rodilleras-Muñequeras.jpg', description: 'Protección para deportes como voleibol y baloncesto.' },
    { name: 'Ropa deportiva', image: 'RopaDeportiva.jpg', description: 'Materiales transpirables y de secado rápido para entrenamientos.' },
    { name: 'Bolsas de gimnasio', image: 'BolsasGimnasio.jpg', description: 'Resistentes al agua con múltiples compartimentos.' },
    { name: 'Guantes de boxeo', image: 'GuantesBoxeo.jpg', description: 'Diseñados para mayor durabilidad y protección en cada golpe.' },
  ];

  return (
    <div id="featured-products" style={{ padding: '40px', backgroundColor: '#1E1E1E' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>
        Explora nuestros productos destacados
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
        {products.map((product, index) => (
          <div key={index} style={{
            backgroundColor: '#2A2A2A',
            padding: '15px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          }}>
            <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ color: 'white', margin: '10px 0' }}>{product.name}</h3>
            <p style={{ color: '#BDBDBD' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
