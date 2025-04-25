import './pageStyles/PlasticBottles.css'

export default function PlasticBottles() {
  return (
    <section className="plastic-bottles-page">
      <h1>♻️ Recycling Plastic Bottles</h1>

      <div className="top-columns">
        <div className="fun-fact">
          <h3>🌟 Fun Fact:</h3>
          <p>Plastic bottles are among the most recycled plastics — but only about <strong>30%</strong> actually get recycled!</p>
        </div>

        <div className="recycling-tips">
          <h2>💡 Tips for Recycling Bottles</h2>
          <ul>
            <li>👉 ✅ Empty and rinse bottles before recycling</li>
            <li>👉 ✅ Keep bottle caps ON (they’re recyclable too!)</li>
            <li>👉 ❌ Avoid squishing or flattening bottles unless your city requests it</li>
          </ul>
        </div>
      </div>

    <br></br>
      <h2 className="bottles-heading">🧴 Common Plastic Bottle Types</h2>
      <p className="bottles-subheading">Learn about the types of bottles you can recycle:</p>

      <div className="bottle-grid">
        <div className="bottle-card recyclable">
          <h2>🥤 PET Bottles (#1)</h2>
          <p><strong>Examples:</strong> Water bottles, soda bottles, juice bottles</p>
          <p><strong>Status:</strong> ✅ Widely recyclable</p>
        </div>

        <div className="bottle-card recyclable">
          <h2>🧼 HDPE Bottles (#2)</h2>
          <p><strong>Examples:</strong> Milk jugs, shampoo bottles, detergent bottles</p>
          <p><strong>Status:</strong> ✅ Widely recyclable</p>
        </div>

        <div className="bottle-card non-recyclable">
          <h2>🧴 PVC Bottles (#3)</h2>
          <p><strong>Name:</strong> Polyvinyl Chloride</p>
          <p><strong>Examples:</strong> Oil bottles, clear food packaging, shampoo bottles</p>
          <p><strong>Status:</strong> ❌ Rarely recyclable</p>
        </div>

        <div className="bottle-card caution">
          <h2>🛢️ LDPE Bottles (#4)</h2>
          <p><strong>Examples:</strong> Squeeze bottles (like ketchup or honey)</p>
          <p><strong>Status:</strong> ⚠️ Sometimes recyclable — check locally</p>
        </div>

        <div className="bottle-card caution">
          <h2>🏷️ PP Bottles (#5)</h2>
          <p><strong>Examples:</strong> Medicine bottles, some food containers</p>
          <p><strong>Status:</strong> ⚠️ Sometimes recyclable — growing acceptance</p>
        </div>

        <div className="bottle-card non-recyclable">
          <h2>🚫 PS Bottles (#6)</h2>
          <p><strong>Examples:</strong> Some disposable cup lids and containers</p>
          <p><strong>Status:</strong> ❌ Not recyclable in most programs</p>
        </div>
      </div>
    </section>
  )
}