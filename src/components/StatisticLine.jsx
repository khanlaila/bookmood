export default function StatisticLine({ label, value }) {
  return (
    <li className="statistic-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </li>
  );
}
