import { useState, useEffect } from 'react';
import { getRestaurants } from '../services/api';
import RestaurantCard from '../components/RestaurantCard';
import FilterBar from '../components/FilterBar';

const INITIAL_FILTERS = {
  openNow: false,
  price: '',
  category: ''
};

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data = await getRestaurants();
        if (filters.category) {
          data = data.filter(resto => resto.categories.includes(filters.category));
        }
        setRestaurants(data);
      } catch (error) {
        console.error('Gagal mengambil data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters.category]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearAll = () => {
    setFilters(INITIAL_FILTERS);
  };

  const filteredRestaurants = restaurants.filter(resto => {
    const matchOpenNow = filters.openNow ? resto.is_open === true : true;
    const matchPrice = filters.price ? resto.price_range === filters.price : true;
    return matchOpenNow && matchPrice;
  });

  return (
    <main className="container">
      <header className="header-title">
        <h1>Restaurants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>

      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />

      <h2 className="section-title">All Restaurants</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div className="restaurant-grid">
            {filteredRestaurants.map(resto => (
              <RestaurantCard key={resto.id} restaurant={resto} />
            ))}
          </div>
          <div className="load-more-container">
            <button className="load-more-btn">LOAD MORE</button>
          </div>
        </>
      )}
    </main>
  );
}