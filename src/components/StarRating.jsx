const stars = [1, 2, 3, 4, 5];

export default function StarRating({ value, onSelect }) {
  return (
    <div className="star-rating" role="radiogroup" aria-label="Five star rating">
      {stars.map((star) => (
        <button
          key={star}
          className={`star-button ${star <= value ? 'filled' : ''}`}
          type="button"
          onClick={() => onSelect(star)}
          aria-label={`${star} star${star === 1 ? '' : 's'}`}
          aria-pressed={star === value}
        >
          ★
        </button>
      ))}
    </div>
  );
}
