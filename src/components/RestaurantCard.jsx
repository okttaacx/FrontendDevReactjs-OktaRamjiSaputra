import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
  const imageUrl = restaurant.photos?.[0] || 'https://via.placeholder.com/300x200?text=No+Image';
  const category = restaurant.categories?.[0] || 'General';

  const renderStars = (rating) => {
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  };

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={restaurant.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{restaurant.name}</h3>
        
        <div className="card-rating">
          <span className="stars">{renderStars(restaurant.rating)}</span>
        </div>
        
        <div className="card-info">
          <span className="category-price">{category} • {restaurant.price_range}</span>
          <span className="status">
            <span className={`status-dot ${restaurant.is_open ? 'open' : 'closed'}`}></span>
            {restaurant.is_open ? 'OPEN NOW' : 'CLOSED'}
          </span>
        </div>
        
        <Link to={`/detail/${restaurant.id}`} className="learn-more-btn">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}