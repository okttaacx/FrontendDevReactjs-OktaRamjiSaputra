function ReviewItem({ review }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFB800' : '#ccc', fontSize: '16px' }}>★</span>
    ))
  }

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '16px 0',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <img
        src={review.image}
        alt={review.name}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0
        }}
      />
      <div>
        <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 'bold' }}>{review.name}</h4>
        <div>{renderStars(review.rating)}</div>
        <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#444' }}>{review.text}</p>
      </div>
    </div>
  )
}

export default ReviewItem