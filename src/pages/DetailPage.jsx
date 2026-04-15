import { useParams, Link } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import ReviewItem from '../components/ReviewItem'

// 1. Import komponen dan CSS bawaan Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function DetailPage() {
  const { id } = useParams()
  const restaurant = restaurants.find((resto) => resto.id === parseInt(id))

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFB800' : '#ccc', fontSize: '20px' }}>★</span>
    ))
  }

  if (!restaurant) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Restoran tidak ditemukan</h2>
        <Link to="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
          ← Kembali ke Halaman Utama
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      
      {/* Navigasi Kembali */}
      <div style={{ marginBottom: '24px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          ← Back to Main
        </Link>
      </div>

      {/* Bagian Header: Nama & Rating */}
      <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '32px' }}>{restaurant.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div>{renderStars(restaurant.rating)}</div>
          <span style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>
            {restaurant.rating} out of 5
          </span>
        </div>
      </div>

      {/* 2. Bagian Map Menggunakan Leaflet */}
      {restaurant.lat && restaurant.lng && (
        <div style={{ 
          marginBottom: '32px', 
          height: '250px', 
          width: '100%', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          border: '1px solid #ccc',
          position: 'relative',
          zIndex: 1 // zIndex 1 agar map tidak menimpa elemen UI lain (seperti dropdown)
        }}>
          <MapContainer 
            center={[restaurant.lat, restaurant.lng]} 
            zoom={15} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[restaurant.lat, restaurant.lng]}>
              <Popup>
                <b>{restaurant.name}</b> <br /> Lokasi restoran ini.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      {/* Bagian Daftar Review */}
      <div>
        <h3 style={{ 
          borderBottom: '2px solid #000', 
          paddingBottom: '8px', 
          display: 'inline-block',
          margin: '0 0 16px 0'
        }}>
          Reviews
        </h3>
        
        <div>
          {restaurant.reviews && restaurant.reviews.length > 0 ? (
            restaurant.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))
          ) : (
            <p style={{ color: '#666' }}>Belum ada ulasan untuk restoran ini.</p>
          )}
        </div>
      </div>

    </div>
  )
}