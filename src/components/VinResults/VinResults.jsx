import './VinResults.css'

export default function VinResults({ data, error, isLoading }) {
  if (isLoading) {
    return (
      <div className="vin-results__state">
        <p className="vin-results__loading">Decoding VIN...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="vin-results__state">
        <p className="vin-results__error">⚠ {error}</p>
      </div>
    )
  }

  if (!data) return null

  return (
    <section className="vin-results">
      {data.errorText && (
        <p className="vin-results__warning">⚠ {data.errorText}</p>
      )}
      <h2 className="vin-results__title">Decode Results</h2>
      <table className="vin-results__table">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((item) => (
            <tr key={item.VariableId}>
              <td>{item.Variable}</td>
              <td>{item.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
