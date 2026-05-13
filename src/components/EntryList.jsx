function EntryCard({ entry }) {
  return (
    <article className={`entry-card ${entry.vibe}`}>
      <div className="entry-card-top">
        <h3>{entry.title}</h3>
        <span className="badge">{entry.vibeLabel}</span>
      </div>
      {entry.stars > 0 ? (
        <div className="entry-stars" aria-label={`${entry.stars} out of 5 stars`}>
          {'★'.repeat(entry.stars)}
          <span className="entry-stars-muted">{'★'.repeat(5 - entry.stars)}</span>
        </div>
      ) : (
        <p className="entry-stars entry-stars-empty">No star rating</p>
      )}
      <p className="entry-review">{entry.review}</p>
      <time className="entry-date">{entry.createdAt}</time>
    </article>
  );
}

export default function EntryList({ entries }) {
  return (
    <section className="panel">
      <h2>Recent reviews</h2>
      {entries.length === 0 ? (
        <p className="empty-state">No reviews yet. Add one after you rate a book.</p>
      ) : (
        <div className="entry-list">
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </section>
  );
}
