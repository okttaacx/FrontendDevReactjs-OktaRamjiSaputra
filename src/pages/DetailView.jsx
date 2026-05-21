import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurantById } from '../services/api';
import ReviewItem from '../components/ReviewItem';

export default function DetailView() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (error) {
        console.error('Gagal mengambil detail', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div className="container"><p>Loading detail...</p></div>;
  if (!restaurant) return <div className="container"><p>Restoran tidak ditemukan.</p></div>;

  const renderStars = (rating) =>
    '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to List</Link>

      <header className="detail-header">
        <h1 className="detail-title">{restaurant.name}</h1>
        <div className="detail-stars">{renderStars(restaurant.rating)}</div>
        <div className="detail-meta">
          <span className="detail-category">{restaurant.categories?.[0]}</span>
          <span className="separator">•</span>
          <span className={`detail-status ${restaurant.is_open ? 'open' : 'closed'}`}>
            {restaurant.is_open ? 'OPEN NOW' : 'CLOSED'}
          </span>
        </div>
      </header>

      <section className="detail-content">
        <div className="map-container">
          <iframe
            title={`Map of ${restaurant.name}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${encodeURIComponent(restaurant.name + ' Restaurant')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          />
        </div>

        <div className="reviews-section">
          <h3>All Reviews</h3>
          <div className="reviews-list">
            {restaurant.reviews?.length > 0 ? (
              restaurant.reviews.map((rev, index) => (
                <ReviewItem key={index} review={rev} />
              ))
            ) : (
              <p>Belum ada review untuk restoran ini.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}