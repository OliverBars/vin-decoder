import { useState } from 'react'
import VinForm from '../../components/VinForm/VinForm'
import VinHistory from '../../components/VinHistory/VinHistory'
import VinResults from '../../components/VinResults/VinResults'
import { useVinHistory } from '../../hooks/useVinHistory'
import { decodeVin } from '../../api/nhtsa'
import './Home.css'

export default function Home() {
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { history, addToHistory } = useVinHistory()

  async function handleDecode(vin) {
    setIsLoading(true)
    setError('')
    setResults(null)

    try {
      const data = await decodeVin(vin)
      setResults(data)
      addToHistory(vin)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="home">
      <h1 className="home__title">VIN Decoder</h1>
      <p className="home__subtitle">
        Enter a 17-character Vehicle Identification Number to decode it
      </p>

      <VinForm onSubmit={handleDecode} isLoading={isLoading} />
      <VinHistory history={history} onSelect={handleDecode} />
      <VinResults data={results} error={error} isLoading={isLoading} />
    </div>
  )
}
