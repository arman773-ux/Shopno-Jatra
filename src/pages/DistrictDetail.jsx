import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DISTRICT_INDEX, DISTRICT_CARDS, buildDistrictExperience } from '@/lib/bangladeshData.js'
import { upsertTrip } from '@/lib/storage.js'

export default function DistrictDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const district = useMemo(() => DISTRICT_INDEX[slug], [slug])
  const experience = useMemo(() => (district ? buildDistrictExperience(district) : null), [district])
  const [status, setStatus] = useState('wishlist')
  const [plannedDate, setPlannedDate] = useState('')
  const [saved, setSaved] = useState(false)
  const [fromLocation, setFromLocation] = useState('Dhaka')
  const [guideSummary, setGuideSummary] = useState('')
  const [budgetMode, setBudgetMode] = useState('budget')
  const [days, setDays] = useState(2)
  const [people, setPeople] = useState(2)

  if (!district) {
    return (
      <section className="section">
        <div className="section-inner">
          <div className="notice" style={{ textAlign: 'center' }}>
            <p className="badge">Unknown destination</p>
            <h1 className="section-title" style={{ marginTop: '0.75rem' }}>
              We could not find that district
            </h1>
            <p className="section-subtitle">Try browsing the full destination list.</p>
            <div className="support-actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <Link className="btn btn-primary" to="/destinations">
                View destinations
              </Link>
              <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const planRates = experience.budgetPlan[budgetMode]
  const perPersonPerDay = planRates.transport + planRates.stay + planRates.food + planRates.activities
  const tripTotal = perPersonPerDay * days * people
  const personTotal = perPersonPerDay * days

  const related = DISTRICT_CARDS.filter((item) => item.division === district.division && item.slug !== district.slug).slice(0, 3)
  const saveTrip = async () => {
    await upsertTrip({
      id: district.slug,
      districtSlug: district.slug,
      districtName: district.name,
      division: district.division,
      status,
      plannedDate,
      title: district.name,
      type: 'district',
      description: district.tagline,
      image: district.heroImage,
      updatedAt: new Date().toISOString(),
    })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }

  const guideMe = () => {
    setGuideSummary(`${fromLocation} → ${district.name}: ${experience.gettingThere.summary}`)
  }

  return (
    <section className="section">
      <div className="section-inner">
        <div className="detail-layout">
          <article className="detail-hero">
            <div className="detail-hero__media" style={{ backgroundImage: `url(${district.heroImage})` }} />
            <div className="detail-hero__body">
              <span className="badge">{district.division}</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginTop: '0.75rem' }}>
                {district.name}
              </h1>
              <p className="section-subtitle">{district.description}</p>
              <div className="pill-row" style={{ marginTop: '1rem' }}>
                <span className="mini-badge">{district.category}</span>
                <span className="mini-badge">Best for: {district.bestFor}</span>
                <span className="mini-badge">Best time: {experience.bestTime}</span>
              </div>

              <div className="section" style={{ paddingBottom: 0 }}>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.55rem, 3vw, 2.1rem)' }}>
                  About {district.name}
                </h2>
                <p className="section-subtitle">{experience.aboutNote}</p>
                <p className="hero-note" style={{ marginTop: '0.9rem' }}>
                  {experience.aboutQuote}
                </p>
              </div>
            </div>
          </article>

          <aside className="detail-panel">
            <div className="detail-panel__body">
              <span className="kicker">Trip saver</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem' }}>
                Save this destination
              </h2>
              <p className="section-subtitle">Store your trip locally and pick a status for later planning.</p>

              <div className="inline-form" style={{ marginTop: '1rem' }}>
                <label>
                  <span className="label">Trip status</span>
                  <select className="select" value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="wishlist">Wishlist</option>
                    <option value="planned">Planned</option>
                    <option value="completed">Completed</option>
                  </select>
                </label>
                <label>
                  <span className="label">Planned date</span>
                  <input className="input" type="date" value={plannedDate} onChange={(event) => setPlannedDate(event.target.value)} />
                </label>
                <button className="btn btn-primary" onClick={saveTrip}>
                  Save to My Trips
                </button>
                {saved && <div className="notice">Saved locally in your browser.</div>}
              </div>
            </div>
          </aside>
        </div>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Top attractions</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                What to see in {district.name}
              </h2>
              <p className="section-subtitle">The same feature set now appears for every district, with destination-specific content.</p>
            </div>
          </div>
          <div className="feature-grid">
            {experience.topAttractions.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-card__media" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="feature-card__body">
                  <span className="mini-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Getting there</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                How to reach {district.name}
              </h2>
            </div>
          </div>
          <div className="surface">
            <div className="detail-grid">
              <div>
                <h3 style={{ marginTop: 0 }}>{experience.gettingThere.title}</h3>
                <p className="section-subtitle">{experience.gettingThere.summary}</p>
                <p className="hero-note" style={{ marginTop: '0.75rem' }}>{experience.gettingThere.routeHint}</p>
              </div>
              <div>
                <h3 style={{ marginTop: 0 }}>Local transport</h3>
                <p className="section-subtitle">{experience.gettingThere.localTransport}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Where to stay</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Best stay options in {district.name}
              </h2>
            </div>
          </div>
          <div className="plan-grid">
            {experience.stayOptions.map((stay) => (
              <article className="plan-card" key={stay.name}>
                <div className="plan-card__body">
                  <span className="mini-badge">{stay.tier}</span>
                  <h3>{stay.name}</h3>
                  <p>{stay.note}</p>
                  <p style={{ marginTop: '0.8rem', color: 'var(--gold)', fontWeight: 700 }}>{stay.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Travel at minimum cost</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Budget-saving tips for {district.name}
              </h2>
            </div>
          </div>
          <div className="surface">
            <ul className="check-list">
              {experience.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Local food specialties</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                What to eat in {district.name}
              </h2>
            </div>
          </div>
          <div className="surface">
            <div className="pill-row">
              {experience.foods.map((item) => (
                <span className="mini-badge" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Guide me here</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Plan a route to {district.name}
              </h2>
            </div>
          </div>
          <div className="surface">
            <div className="inline-form">
              <label>
                <span className="label">From location</span>
                <input className="input" value={fromLocation} onChange={(event) => setFromLocation(event.target.value)} placeholder="e.g., Dhaka, Noakhali..." />
              </label>
              <button className="btn btn-primary" onClick={guideMe}>
                Guide Me Here
              </button>
              {guideSummary && <div className="notice">{guideSummary}</div>}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Budget calculator</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Estimate your {district.name} trip
              </h2>
            </div>
          </div>
          <div className="surface">
            <div className="inline-form">
              <div className="filter-row">
                {['budget', 'midRange', 'premium'].map((mode) => (
                  <button key={mode} className={`chip ${budgetMode === mode ? 'active' : ''}`} onClick={() => setBudgetMode(mode)}>
                    {mode === 'midRange' ? 'Mid-range' : mode === 'premium' ? 'Premium' : 'Budget'}
                  </button>
                ))}
              </div>
              <div className="detail-grid">
                <label>
                  <span className="label">Days</span>
                  <input className="input" type="number" min="1" value={days} onChange={(event) => setDays(Number(event.target.value) || 1)} />
                </label>
                <label>
                  <span className="label">People</span>
                  <input className="input" type="number" min="1" value={people} onChange={(event) => setPeople(Number(event.target.value) || 1)} />
                </label>
              </div>
              <div className="plan-grid">
                <article className="plan-card">
                  <div className="plan-card__body">
                    <span className="badge">Per person / day</span>
                    <h3>৳{perPersonPerDay.toLocaleString()}</h3>
                    <p>Transport + stay + food + activities</p>
                  </div>
                </article>
                <article className="plan-card">
                  <div className="plan-card__body">
                    <span className="badge">Per person total</span>
                    <h3>৳{personTotal.toLocaleString()}</h3>
                    <p>{days} day plan for one traveler</p>
                  </div>
                </article>
                <article className="plan-card">
                  <div className="plan-card__body">
                    <span className="badge">Trip total</span>
                    <h3>৳{tripTotal.toLocaleString()}</h3>
                    <p>{people} people for {days} days</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="badge">Traveler's eye</span>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Real-feel views from {district.name}
              </h2>
            </div>
          </div>
          <div className="feature-grid">
            {experience.gallery.map((photo) => (
              <article className="feature-card" key={photo.title}>
                <div className="feature-card__media" style={{ backgroundImage: `url(${photo.image})` }} />
                <div className="feature-card__body">
                  <h3>{photo.title}</h3>
                  <p>{photo.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="surface" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <span className="badge">Ready to go?</span>
              <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>{experience.readyToGo}</p>
            </div>
            <div className="support-actions">
              <Link className="btn btn-primary" to="/plan">
                Open planner
              </Link>
              <Link className="btn btn-secondary" to="/my-trips">
                Saved trips
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <h2 className="section-title">More from {district.division}</h2>
              <p className="section-subtitle">Similar destinations you may want to open next.</p>
            </div>
          </div>
          <div className="feature-grid">
            {related.map((item) => (
              <Link className="feature-card" key={item.slug} to={`/district/${item.slug}`}>
                <div className="feature-card__media" style={{ backgroundImage: `url(${item.heroImage})` }} />
                <div className="feature-card__body">
                  <span className="mini-badge">{item.bestFor}</span>
                  <h3>{item.name}</h3>
                  <p>{item.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
