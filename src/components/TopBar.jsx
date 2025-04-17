import { Link } from 'react-router-dom'
import './componentStyles/TopBar.css'

export default function TopBar() {
  return (
    <header className="top-bar">
      <nav>
        <Link to="/whatToRecycle">What to Recycle</Link>
        <Link to="/whereToRecycle">Where to Recycle</Link>
        <Link to="/">Home</Link>
        <Link to="/howToRecycle">How to Recycle</Link>
        <Link to="/carbonFootprint">Carbon Footprint</Link>
      </nav>
    </header>
  )
}