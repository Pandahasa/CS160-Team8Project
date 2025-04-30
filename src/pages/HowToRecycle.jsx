import { useState } from 'react'
import './pageStyles/HowToRecycle.css'

export default function HowToRecycle() {
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    { 
      id: 1, 
      title: 'Prepare the Items', 
      description: 'Rinse and clean all containers thoroughly. Remove any food residue and sticky labels.' 
    },
    { 
      id: 2, 
      title: 'Separate Components', 
      description: 'Organize recyclables by material: paper, metals, plastics, glass, etc. Remove caps, lids, or other detachable parts when necessary.' 
    },
    { 
      id: 3, 
      title: 'Sort into Bins', 
      description: 'Place items into designated recycling bins. Secure fragile items and stack them carefully.' 
    },
    { 
      id: 4, 
      title: 'Follow Local Guidelines', 
      description: 'Check your local recycling rules. Some areas require you to flatten boxes or clean plastic containers.' 
    },
    { 
      id: 5, 
      title: 'Drop Off or Pick Up', 
      description: 'If curbside pickup isn’t available, locate your nearest recycling center and drop off your prepared items.' 
    }
  ]

  return (
    <section className="how-to-recycle">
      <h1>How to Recycle Effectively</h1>
      <p className="intro">
        Follow these steps to ensure proper recycling and help protect our environment!
      </p>
      <div className="steps-container">
        {steps.map(step => (
          <div 
            key={step.id} 
            className={`step-card ${activeStep === step.id ? 'active' : ''}`}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
          >
            <h3 className="step-title">{step.title}</h3>
            {activeStep === step.id && (
              <p className="step-description">{step.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}