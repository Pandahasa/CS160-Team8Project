import './pageStyles/PlasticBags.css'

export default function PlasticBags() {
  return (
    <section className="plastic-bags-page">
      <h1>♻️ Recycling Plastic Bags</h1>

      <div className="top-columns">
        <div className="fun-fact">
          <h3>🌍 Fun Fact:</h3>
          <p>Plastic bags can take up to <strong>500 years</strong> to decompose. Let's recycle wisely!</p>
        </div>

        <div className="recycling-tips">
          <h2>💡 Tips for Plastic Bag Recycling</h2>
          <ul>
            <li>👉 ✅ Always clean and dry plastic bags before recycling</li>
            <li>👉 ✅ Recycle at special store drop-off bins (not curbside unless allowed)</li>
            <li>👉 ❌ Never recycle food-contaminated plastic bags</li>
          </ul>
        </div>
      </div>

      <br></br>
      <h2 className="plastics-heading">🔢 Common Types of Plastics (#1–#6)</h2>
      <p className="plastics-subheading">Here’s a breakdown of different plastic types and their recyclability:</p>

      <div className="plastic-grid">
        <div className="plastic-card recyclable">
          <h2>♻️ #1 PET</h2>
          <p><strong>Name:</strong> Polyethylene Terephthalate</p>
          <p><strong>Common Uses:</strong> Water bottles, food containers</p>
          <p><strong>Status:</strong> ✅ Recyclable</p>
        </div>

        <div className="plastic-card recyclable">
          <h2>♻️ #2 HDPE</h2>
          <p><strong>Name:</strong> High-Density Polyethylene</p>
          <p><strong>Common Uses:</strong> Milk jugs, detergent bottles, plastic bags</p>
          <p><strong>Status:</strong> ✅ Recyclable</p>
        </div>

        <div className="plastic-card non-recyclable">
          <h2>♻️ #3 PVC</h2>
          <p><strong>Name:</strong> Polyvinyl Chloride</p>
          <p><strong>Common Uses:</strong> Pipes, food wrap, shrink wrap</p>
          <p><strong>Status:</strong> ❌ Not recyclable in most programs</p>
        </div>

        <div className="plastic-card caution">
          <h2>♻️ #4 LDPE</h2>
          <p><strong>Name:</strong> Low-Density Polyethylene</p>
          <p><strong>Common Uses:</strong> Grocery bags, bread bags, plastic wrap</p>
          <p><strong>Status:</strong> ⚠️ Sometimes recyclable (check locally)</p>
        </div>

        <div className="plastic-card recyclable">
          <h2>♻️ #5 PP</h2>
          <p><strong>Name:</strong> Polypropylene</p>
          <p><strong>Common Uses:</strong> Yogurt cups, chip bags, straws</p>
          <p><strong>Status:</strong> ✅ Recyclable in many areas</p>
        </div>

        <div className="plastic-card non-recyclable">
          <h2>♻️ #6 PS</h2>
          <p><strong>Name:</strong> Polystyrene (Styrofoam)</p>
          <p><strong>Common Uses:</strong> Foam cups, to-go containers</p>
          <p><strong>Status:</strong> ❌ Not recyclable</p>
        </div>
      </div>
    </section>
  )
}