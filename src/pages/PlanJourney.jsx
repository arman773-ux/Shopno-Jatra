import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_DISTRICTS, DIVISIONS } from '@/lib/bangladeshData.js'
import { upsertTrip } from '@/lib/storage.js'

const budgets = [
  { value: 'budget', label: 'Budget', description: 'Cheap transport, local food, guesthouses' },
  { value: 'mid-range', label: 'Mid-range', description: 'Balanced comfort and value' },
  { value: 'luxury', label: 'Luxury', description: 'Private vehicles and premium stays' },
]

const transportModes = ['Bus', 'Train', 'Launch', 'Car']

const buildPlan = ({ fromLocation, district, budget, transportMode }) => {
  const budgetMap = {
    budget: { hotel: '৳800-1800', food: '৳400-900', transport: '৳300-1200' },
    'mid-range': { hotel: '৳2000-4500', food: '৳1000-2200', transport: '৳1200-3000' },
    luxury: { hotel: '৳5000+', food: '৳2500+', transport: '৳3500+' },
  }

  const suggestions = {
    beach: ['Sunset walk', 'Boat ride', 'Seafood dinner'],
    hills: ['Viewpoint hike', 'Village stay', 'Cultural night'],
    nature: ['Early morning drive', 'Boat safari', 'Local market stop'],
    culture: ['Heritage visit', 'Local museum', 'Food trail'],
  }

  const bucket = district.category.toLowerCase().includes('beach')
    ? 'beach'
    : district.category.toLowerCase().includes('hill')
      ? 'hills'
      : district.category.toLowerCase().includes('nature')
        ? 'nature'
        : 'culture'

  return {
    routeSummary: `${fromLocation || 'Your location'} → ${district.name} by ${transportMode.toLowerCase()}`,
    totalDuration: transportMode === 'Train' ? '6-10 hours' : transportMode === 'Car' ? '5-12 hours' : '4-14 hours',
    estimatedCost: budgetMap[budget],
    steps: [
      `Start from ${fromLocation || 'your location'} and choose ${transportMode.toLowerCase()} transport toward ${district.division} division.`,
      `Reach ${district.name} and settle into a stay that matches the ${budget} budget style.`,
      `Visit ${district.bestFor.toLowerCase()} highlights and finish with the local food trail.`,
    ],
    foods: district.foods.slice(0, 3),
    activities: suggestions[bucket],
  }
}

export default function PlanJourney() {
  const [fromLocation, setFromLocation] = useState('Dhaka')
  const [destination, setDestination] = useState(ALL_DISTRICTS[0].slug)
  const [budget, setBudget] = useState('budget')
  const [transportMode, setTransportMode] = useState('Bus')
  const [plannedDate, setPlannedDate] = useState('')
  const [plan, setPlan] = useState(null)
  const [saved, setSaved] = useState(false)

  const selectedDistrict = useMemo(() => ALL_DISTRICTS.find((district) => district.slug === destination), [destination])

  const generate = () => {
    if (!selectedDistrict) return
    setPlan(buildPlan({ fromLocation, district: selectedDistrict, budget, transportMode }))
  }

  const savePlan = async () => {
    if (!selectedDistrict || !plan) return
    await upsertTrip({
      id: selectedDistrict.slug,
      districtSlug: selectedDistrict.slug,
      districtName: selectedDistrict.name,
      division: selectedDistrict.division,
      status: 'planned',
      plannedDate,
      title: `${selectedDistrict.name} travel plan`,
      type: 'plan',
      description: plan.routeSummary,
      image: selectedDistrict.heroImage,
      budget,
      transportMode,
      updatedAt: new Date().toISOString(),
    })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="kicker">Plan & budget</span>
            <h1 className="section-title">Build a trip plan</h1>
            <p className="section-subtitle">
              Create a route, estimate travel cost, and save the plan locally.
            </p>
          </div>
        </div>

        <div className="surface" style={{ marginBottom: '1rem' }}>
          <div className="inline-form">
            <label>
              <span className="label">From location</span>
              <input className="input" value={fromLocation} onChange={(event) => setFromLocation(event.target.value)} />
            </label>
            <label>
              <span className="label">Destination</span>
              <select className="select" value={destination} onChange={(event) => setDestination(event.target.value)}>
                {ALL_DISTRICTS.map((district) => (
                  <option key={district.slug} value={district.slug}>
                    {district.name} ({district.division})
                  </option>
                ))}
              </select>
            </label>
            <div className="filter-row">
              {budgets.map((item) => (
                <button key={item.value} className={`chip ${budget === item.value ? 'active' : ''}`} onClick={() => setBudget(item.value)}>
                  {item.label}
                </button>
              ))}
            </div>
            <div className="filter-row">
              {transportModes.map((mode) => (
                <button key={mode} className={`chip ${transportMode === mode ? 'active' : ''}`} onClick={() => setTransportMode(mode)}>
                  {mode}
                </button>
              ))}
            </div>
            <label>
              <span className="label">Planned date</span>
              <input className="input" type="date" value={plannedDate} onChange={(event) => setPlannedDate(event.target.value)} />
            </label>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={generate}>
                Generate plan
              </button>
              <button className="btn btn-secondary" onClick={savePlan} disabled={!plan}>
                Save plan
              </button>
            </div>
            {saved && <div className="notice">Plan saved locally in your browser.</div>}
          </div>
        </div>

        {plan && selectedDistrict && (
          <div className="plan-grid">
            <article className="plan-card">
              <div className="plan-card__body">
                <span className="badge">Route summary</span>
                <h2>{plan.routeSummary}</h2>
                <p>{plan.totalDuration}</p>
                <div className="map-grid" style={{ marginTop: '1rem' }}>
                  <div className="map-tile">
                    <strong>Transport budget</strong>
                    <span className="muted">{plan.estimatedCost.transport}</span>
                  </div>
                  <div className="map-tile">
                    <strong>Stay budget</strong>
                    <span className="muted">{plan.estimatedCost.hotel}</span>
                  </div>
                  <div className="map-tile">
                    <strong>Food budget</strong>
                    <span className="muted">{plan.estimatedCost.food}</span>
                  </div>
                  <div className="map-tile">
                    <strong>Destination</strong>
                    <span className="muted">{selectedDistrict.name}</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="plan-card">
              <div className="plan-card__body">
                <span className="badge">Itinerary</span>
                <ul className="timeline">
                  {plan.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="plan-card">
              <div className="plan-card__body">
                <span className="badge">Foods and activities</span>
                <div className="detail-grid" style={{ marginTop: '0.85rem' }}>
                  <div>
                    <h3>Foods</h3>
                    <ul className="highlight-list">
                      {plan.foods.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Activities</h3>
                    <ul className="highlight-list">
                      {plan.activities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  )
}
