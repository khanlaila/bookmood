import StarRating from './StarRating';

export default function EntryForm({
  title,
  review,
  currentVibe,
  selectedStars,
  canSave,
  onTitleChange,
  onReviewChange,
  onStarSelect,
  onSubmit,
}) {
  return (
    <form className="panel form-panel" onSubmit={onSubmit}>
      <div className="panel-heading">
        <h2>Add a review</h2>
        <span className="badge">Current vibe: {currentVibe}</span>
      </div>

      <label className="field">
        <span>Book title</span>
        <input
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="What did you just finish?"
          type="text"
        />
      </label>

      <label className="field">
        <span>Review</span>
        <textarea
          value={review}
          onChange={(event) => onReviewChange(event.target.value)}
          placeholder="What worked, what dragged, and what you'd tell a friend..."
          rows="5"
        />
      </label>

      <div className="field">
        <span>Star rating</span>
        <StarRating value={selectedStars} onSelect={onStarSelect} />
        <p className="helper-text rating-copy">
          {selectedStars > 0
            ? `${selectedStars} out of 5 stars`
            : 'Tap a star to rate the book, or leave it blank and save.'}
        </p>
      </div>

      <button className="save-button" type="submit" disabled={!canSave}>
        Save review
      </button>
    </form>
  );
}
