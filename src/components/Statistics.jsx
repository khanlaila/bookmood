import StatisticLine from './StatisticLine';

export default function Statistics({ loved, okay, dnf }) {
  const total = loved + okay + dnf;

  if (total === 0) {
    return (
      <section className="panel">
        <h2>Stats</h2>
        <p className="empty-state">No data collected yet.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h2>Stats</h2>
      <ul className="statistics">
        <StatisticLine label="Loved it" value={loved} />
        <StatisticLine label="It was okay" value={okay} />
        <StatisticLine label="DNF" value={dnf} />
        <StatisticLine label="Total collected" value={total} />
      </ul>
    </section>
  );
}
