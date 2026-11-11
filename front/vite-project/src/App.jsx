import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  const [data, setData] = useState([])
  const [brand, setBrand] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:3000/api/main?brand=${encodeURIComponent(brand)}`)
      .then(res => setData(res.data))
  }, [brand])

  return (
    <>
      <select value={brand} onChange={e => setBrand(e.target.value)}>
        <option value="">ALL</option>
        <option value="BMW">BMW</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Volvo">Volvo</option>
      </select>

      <input value={brand} onChange={e => setBrand(e.target.value)}
        placeholder='введите марку' />

      <ul>{data.map(i =>
        <li key={i.id}>{i.name_car} - {i.brand}</li>
      )}</ul>
    </>
  )
}

