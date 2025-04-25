import './pageStyles/AluminumCans.css'

export default function AluminumCans() {
  return (
    <section className="aluminum-cans-page">
      <h1>♻️ Recycling Aluminum Cans</h1>

      <div className="top-columns">
        <div className="fun-fact">
          <h3>⚡ Fun Fact:</h3>
          <p>Recycling one aluminum can saves enough energy to power a TV for <strong>3 hours</strong> or run a laptop for <strong>4 hours</strong>!</p>
        </div>

        <div className="recycling-tips">
          <h2>💡 Tips for Recycling Aluminum</h2>
          <ul>
            <li>👉 ✅ Rinse cans to remove leftover liquid</li>
            <li>👉 ✅ Crush cans to save space in your bin</li>
            <li>👉 ❌ Don’t include dirty foil or aerosol cans unless specifically accepted</li>
          </ul>
        </div>
      </div>
      <br></br>
      <h2 className="items-heading">🧾 Common Aluminum Items</h2>
      <p className="items-subheading">Not just soda cans! Here’s what can and can’t go in the bin:</p>

      <div className="item-grid">
        <div className="item-card recyclable">
          <h2>🥤 Soda Cans</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>These are the most commonly recycled aluminum products. Rinse and toss!</p>
        </div>

        <div className="item-card recyclable">
          <h2>🍺 Beer Cans</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Same as soda cans — just make sure they’re empty and clean.</p>
        </div>

        <div className="item-card caution">
          <h2>🧴 Aerosol Cans</h2>
          <p><strong>Status:</strong> ⚠️ Sometimes</p>
          <p>Must be fully empty. Some programs accept them — check your local rules.</p>
        </div>

        <div className="item-card recyclable">
          <h2>🍽️ Aluminum Food Trays</h2>
          <p><strong>Status:</strong> ✅ Recyclable</p>
          <p>Like takeout containers or pie pans. Clean them first!</p>
        </div>

        <div className="item-card caution">
          <h2>🧻 Aluminum Foil</h2>
          <p><strong>Status:</strong> ⚠️ Sometimes</p>
          <p>Only recyclable if it’s clean and uncrinkled.</p>
        </div>

        <div className="item-card non-recyclable">
          <h2>🎁 Foil Packaging</h2>
          <p><strong>Status:</strong> ❌ Not recyclable</p>
          <p>Mixed materials (like chips or candy wrappers) make these non-recyclable.</p>
        </div>
      </div>
    </section>
  )
}