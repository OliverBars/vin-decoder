import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getVariableList, getVariableById } from '../../api/nhtsa'
import './VariableDetail.css'

export default function VariableDetail() {
  const { variableId } = useParams()
  const [variable, setVariable] = useState(null)
  const [values, setValues] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        // Отримуємо інфо про змінну зі списку
        const list = await getVariableList()
        const found = list.find((v) => String(v.ID) === String(variableId))
        setVariable(found || null)

        // Отримуємо можливі значення
        const vals = await getVariableById(variableId)
        setValues(vals)
      } catch (err) {
        setError(err.message || 'Failed to load variable')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [variableId])

  if (isLoading) {
    return (
      <div className="var-detail__state">
        <p className="var-detail__loading">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="var-detail__state">
        <p className="var-detail__error">⚠ {error}</p>
      </div>
    )
  }

  return (
    <div className="var-detail">
      <Link to="/variables" className="var-detail__back">
        ← Back to Variables
      </Link>

      <div className="var-detail__card">
        <div className="var-detail__header">
          <h1 className="var-detail__title">{variable?.Name || `Variable #${variableId}`}</h1>
          {variable?.DataType && (
            <span className="var-detail__type">{variable.DataType}</span>
          )}
        </div>

        {variable?.Description && (
          <p className="var-detail__desc">{variable.Description}</p>
        )}

        <dl className="var-detail__meta">
          <div className="var-detail__meta-row">
            <dt>ID</dt>
            <dd>{variableId}</dd>
          </div>
          {variable?.GroupName && (
            <div className="var-detail__meta-row">
              <dt>Group</dt>
              <dd>{variable.GroupName}</dd>
            </div>
          )}
        </dl>
      </div>

      {values.length > 0 && (
        <div className="var-detail__values">
          <h2 className="var-detail__values-title">Possible Values</h2>
          <table className="var-detail__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {values.map((val) => (
                <tr key={val.Id}>
                  <td>{val.Id}</td>
                  <td>{val.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {values.length === 0 && (
        <p className="var-detail__no-values">
          No predefined values for this variable.
        </p>
      )}
    </div>
  )
}