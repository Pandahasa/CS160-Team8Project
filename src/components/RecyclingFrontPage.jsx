import bin from '../assets/blue-recycle-bin-with-plastic-bottles.png'
import kids from '../assets/pngtree-kids-recycling-garbage-png-image_11710808.png'
import symbol from '../assets/Recycle_Symbol_PNG_Clip_Art-2136.png'

export default function RecyclingFrontPage() {
  return (
    <section className="recycling-container">
      <div className="images">
        <img src={bin} alt="Recycle Bin" className="bin" />
        <div className="center-text">
          <h1>Recycle for a Better Future</h1>
          <img src={symbol} alt="Recycle Symbol" className="symbol" />
          <p>Recycling is cool!</p>
        </div>
        <img src={kids} alt="Kids Recycling" className="kids" />
      </div>
    </section>
  )
}