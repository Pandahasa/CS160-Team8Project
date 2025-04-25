import { useState } from 'react'
import './pageStyles/WhatToRecycle.css'
import bottleImage from '../assets/bottles.jpg'
import cansImage from '../assets/cans.png'
import paperImage from '../assets/paperrecycling.jpeg'
import plasticbagsImage from '../assets/plasticbags.jpg'
import { Link } from 'react-router-dom'

function BarcodeInput() {
  const [barcode, setBarcode] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/barcodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ barcodeValue: barcode }),
      })
      console.log('Server response:', await response.json())
    } catch (error) {
      console.error('Error sending barcode:', error)
    }
  }

  return (
    <form className="barcode-form" onSubmit={handleSubmit}>
      <label htmlFor="barcodeInput">Enter Barcode:</label>
      <input
        id="barcodeInput"
        type="number"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        required
      />
      <button type="submit">Send Barcode</button>
    </form>
  )
}

export default function WhatToRecycle() {
  return (
    <section className="what-to-recycle">
      <h1>What to Recycle</h1>
      <p>Below are common recyclables. Click on an image for details:</p>

      <div className="recyclables-grid">
        <Link to="/PaperCardboard" className="recyclable-item">
          <img src={paperImage} alt="Paper Recycling" />
          <h3>Paper &amp; Cardboard</h3>
        </Link>

        <Link to="/PlasticBottles" className="recyclable-item">
          <img src={bottleImage} alt="Plastic Bottles" />
          <h3>Plastic Bottles</h3>
        </Link>

        <Link to="/AluminumCans" className="recyclable-item">
          <img src={cansImage} alt="Aluminum Cans" />
          <h3>Aluminum Cans</h3>
        </Link>

        <Link to="/PlasticBags" className="recyclable-item">
          <img src={plasticbagsImage} alt="Plastic Bags" />
          <h3>Plastic Bags</h3>
        </Link>
      </div>

      <div className="barcode-section">
        <h2>Scan Your Barcode</h2>
        <BarcodeInput />
      </div>
    </section>
  )
}