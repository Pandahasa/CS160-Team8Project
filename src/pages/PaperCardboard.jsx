import './pageStyles/PaperCardboard.css'

export default function PaperCardboard() {
  return (
    <section className="paper-cardboard-page">
      <h1>♻️ Recycling Paper & Cardboard</h1>

      <div className="top-columns">
        <div className="fun-fact">
          <h3>📚 Fun Fact:</h3>
          <p>Recycling one ton of paper saves about <strong>17 trees</strong>, <strong>7,000 gallons</strong> of water, and enough energy to power an average home for <strong>6 months</strong>!</p>
        </div>

        <div className="recycling-tips">
          <h2>💡 Tips for Recycling Paper & Cardboard</h2>
          <ul>
            <li>👉 ✅ Flatten cardboard boxes to save space</li>
            <li>👉 ✅ Remove any plastic, tape, or metal bindings</li>
            <li>👉 ❌ Avoid recycling greasy, wet, or food-soiled paper (like pizza boxes!)</li>
          </ul>
        </div>
      </div>

    <br></br>
      <h2 className="paper-heading">📦 Common Paper & Cardboard Items</h2>
      <p className="paper-subheading">Learn what types of paper and cardboard can and can't be recycled:</p>

      <div className="paper-grid">
        <div className="paper-card recyclable">
          <h2>📄 Office Paper</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Printer paper, notebook paper, and loose-leaf paper are all recyclable.</p>
        </div>

        <div className="paper-card recyclable">
          <h2>📦 Corrugated Cardboard</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Shipping boxes, packaging boxes — just flatten and remove tape!</p>
        </div>

        <div className="paper-card recyclable">
          <h2>📰 Newspapers</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Old newspapers can easily be recycled into new paper products.</p>
        </div>

        <div className="paper-card recyclable">
          <h2>🛍️ Paper Bags</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Brown paper bags, shopping bags — remove any plastic handles first.</p>
        </div>

        <div className="paper-card caution">
          <h2>🍕 Greasy Pizza Boxes</h2>
          <p><strong>Status:</strong> ⚠️ Sometimes recyclable</p>
          <p>If the box is only slightly greasy, you can cut out clean parts to recycle.</p>
        </div>

        <div className="paper-card non-recyclable">
          <h2>☕ Wax-Coated Paper Cups</h2>
          <p><strong>Status:</strong> ❌ Not recyclable</p>
          <p>Most coffee cups are coated with plastic or wax, making them unrecyclable.</p>
        </div>
      </div>
    </section>
  )
}