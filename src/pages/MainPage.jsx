import { useState, useMemo, useEffect } from 'react'
// Hapus import restaurants lokal jika sudah pakai API penuh nanti, 
// tapi kita simpan dulu untuk fallback jika API belum siap
import { restaurants as localData } from '../data/restaurants' 
import RestaurantCard from '../components/RestaurantCard'
import FilterNav from '../components/FilterNav'

const ITEMS_PER_PAGE = 8

function MainPage() {
  const [filters, setFilters] = useState({
    openNow: false,
    price: '',
    category: ''
  })
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  
  // State baru untuk menyimpan data dari API
  const [fetchedRestaurants, setFetchedRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Mengambil daftar kategori unik (Bisa tetap dari lokal atau dari API terpisah)
  const categories = useMemo(() => {
    return [...new Set(localData.map((r) => r.categories[0].title))]
  }, [])

  // --- LOGIKA SERVER-SIDE FILTER (Hanya terpancing jika filter kategori berubah) ---
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // CONTOH ENDPOINT MOCKAPI: 
        // let url = 'https://[ID_MOCKAPI].mockapi.io/restaurants'
        // if (filters.category) {
        //   url += `?category=${filters.category}` // Server-side search
        // }
        // const response = await fetch(url)
        // const data = await response.json()
        
        // KARENA API BELUM ADA, KITA SIMULASIKAN DULU KERJA SERVER-NYA DI SINI:
        let dataFromServer = [...localData]
        if (filters.category) {
          dataFromServer = dataFromServer.filter(r => r.categories[0].title === filters.category)
        }
        
        // Simpan data "dari server" ke state
        setFetchedRestaurants(dataFromServer)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [filters.category]) // <-- Effect HANYA dijalankan ulang kalau category berubah

  // --- LOGIKA CLIENT-SIDE FILTER (Hanya untuk Open Now & Price) ---
  const filtered = useMemo(() => {
    // Kita filter data yang sudah diambil dari "server" (fetchedRestaurants)
    return fetchedRestaurants.filter((r) => {
      if (filters.openNow && !r.is_open) return false
      if (filters.price && r.price !== filters.price) return false
      return true
    })
  }, [fetchedRestaurants, filters.openNow, filters.price])

  const handleClearAll = () => {
    setFilters({ openNow: false, price: '', category: '' })
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
      {/* Header */}
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Restaurants</h1>
      <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Filter */}
      <FilterNav
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        onClearAll={handleClearAll}
      />

      {/* Section Title */}
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>All Restaurants</h2>

      {/* Loading State Indicator */}
      {isLoading ? (
        <p style={{ textAlign: 'center', margin: '40px 0' }}>Loading data...</p>
      ) : (
        <>
          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '32px'
          }}>
            {filtered.slice(0, visibleCount).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>

          {/* Tidak ada hasil */}
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999' }}>No restaurants found.</p>
          )}

          {/* Load More */}
          {visibleCount < filtered.length && (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
                style={{
                  padding: '12px 48px',
                  border: '1px solid #333',
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MainPage