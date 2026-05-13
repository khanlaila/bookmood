export default function Button({ handleClick, text, tone, active }) {
  return (
    <button
      className={`vibe-button ${tone} ${active ? 'active' : ''}`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
