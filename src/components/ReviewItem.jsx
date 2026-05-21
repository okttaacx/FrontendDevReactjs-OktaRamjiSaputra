export default function ReviewItem({ review }) {
  // Fungsi render bintang untuk review
  const renderStars = (rating) => {
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  };

  return (
    <div className="review-item">
      <div className="review-header">
        <img src={review.image} alt={review.name} className="reviewer-photo" />
        <div className="reviewer-info">
          <h4 className="reviewer-name">{review.name}</h4>
          <span className="review-stars">{renderStars(review.rating)}</span>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
}