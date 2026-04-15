import { useNavigate } from 'react-router-dom'

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate()

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFB800' : '#ccc', fontSize: '16px' }}>★</span>
    ))
  }

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      // 1. Tambahan Flexbox pada container luar
      display: 'flex',
      flexDirection: 'column',
      height: '100%' 
    }}>
      <img
        src={restaurant.photos[0]}
        alt={restaurant.name}
        style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', backgroundColor: '#d0d0d0' }}
      />
      <div style={{ 
        padding: '12px',
        // 2. Tambahan Flexbox pada area teks agar bisa melar (flex-grow)
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 'bold' }}>{restaurant.name}</h3>
        <div>{renderStars(restaurant.rating)}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {restaurant.categories[0].title} • {restaurant.price}
          </span>
          <span style={{
            fontSize: '12px',
            color: restaurant.is_open ? 'green' : 'red',
            display: 'flex', alignItems: 'center', gap: '4px'
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: restaurant.is_open ? 'green' : 'red',
              display: 'inline-block'
            }}></span>
            {restaurant.is_open ? 'OPEN NOW' : 'CLOSED'}
          </span>
        </div>
        
        {/* 3. Bungkus tombol dan dorong ke bawah dengan marginTop: 'auto' */}
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <button
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1a2e5a',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '13px',
              letterSpacing: '1px'
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard