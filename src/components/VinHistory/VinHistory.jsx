import './VinHistory.css'

export default function VinHistory({ history, onSelect }) {
  if (history.length === 0) return null

  return (
    <section className="vin-history">
      <h2 className="vin-history__title">Recent Searches</h2>
      <ul className="vin-history__list">
        {history.map((vin) => (
          <li key={vin}>
            <button
              className="vin-history__btn"
              onClick={() => onSelect(vin)}
            >
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
