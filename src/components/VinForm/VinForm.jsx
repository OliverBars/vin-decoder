import { useState } from 'react'
import './VinForm.css'

const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{1,17}$/i

export default function VinForm({ onSubmit, isLoading }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function validate(vin) {
    if (!vin.trim()) return 'VIN code cannot be empty'
    if (vin.length !== 17) return 'VIN code must be exactly 17 characters'
    if (!VIN_REGEX.test(vin)) return 'VIN contains invalid characters (I, O, Q are not allowed)'
    return ''
  }

  function handleChange(e) {
    const val = e.target.value.toUpperCase()
    setValue(val)
    if (error) setError(validate(val))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validate(value)
    if (err) {
      setError(err)
      return
    }
    setError('')
    onSubmit(value)
  }

  return (
    <form className="vin-form" onSubmit={handleSubmit} noValidate>
      <div className="vin-form__group">
        <label className="vin-form__label" htmlFor="vin-input">
          Enter VIN Code
        </label>
        <div className="vin-form__row">
          <input
            id="vin-input"
            className={`vin-form__input ${error ? 'vin-form__input--error' : ''}`}
            type="text"
            value={value}
            onChange={handleChange}
            maxLength={17}
            placeholder="e.g. 1FTFW1CT5DFC10312"
            autoComplete="off"
            disabled={isLoading}
          />
          <button
            className="vin-form__btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Decoding...' : 'Decode'}
          </button>
        </div>
        <div className="vin-form__counter">{value.length} / 17</div>
        {error && <p className="vin-form__error">{error}</p>}
      </div>
    </form>
  )
}
