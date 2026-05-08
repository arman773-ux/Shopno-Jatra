import { Link, useSearchParams } from 'react-router-dom'
import { DIVISIONS, DISTRICT_CARDS, divisionCards } from '@/lib/bangladeshData.js'

export default function Destinations() {
  const [params] = useSearchParams()
  const activeDivision = params.get('division') || 'All'

  const divisionsToShow = activeDivision === 'All' ? DIVISIONS : [activeDivision]

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="kicker">64 districts</span>
            <h1 className="section-title">Browse the full map</h1>
            <p className="section-subtitle">
              A full list of destinations organized by division, ideal for deep browsing and trip planning.
            </p>
          </div>
        </div>

        <div className="filter-row" style={{ marginBottom: '1rem' }}>
          <Link className={`chip ${activeDivision === 'All' ? 'active' : ''}`} to="/destinations">
            All
          </Link>
          {divisionCards.map((division) => (
            <Link
              className={`chip ${activeDivision === division.division ? 'active' : ''}`}
              key={division.division}
              to={`/destinations?division=${division.division}`}
            >
              {division.division} ({division.count})
            </Link>
          ))}
        </div>

        {divisionsToShow.map((division) => {
          const districts = DISTRICT_CARDS.filter((district) => district.division === division)
          return (
            <article className="surface" key={division} style={{ marginBottom: '1rem' }}>
              <div className="section-head" style={{ marginBottom: '1rem' }}>
                <div>
                  <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}>
                    {division}
                  </h2>
                  <p className="section-subtitle">{districts[0]?.description?.split('.').slice(0, 1).join('.') || 'Division-level overview for travelers.'}</p>
                </div>
                <span className="badge">{districts.length} districts</span>
              </div>
              <div className="feature-grid">
                {districts.map((district) => (
                  <Link className="feature-card" key={district.slug} to={`/district/${district.slug}`}>
                    <div className="feature-card__media" style={{ backgroundImage: `url(${district.heroImage})` }} />
                    <div className="feature-card__body">
                      <span className="mini-badge">{district.bestFor}</span>
                      <h3>{district.name}</h3>
                      <p>{district.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
