import { Link } from 'react-router-dom'
import { FEATURED_DISTRICTS, FEATURE_STRIPS, divisionCards, heroStats } from '@/lib/bangladeshData.js'

const spotlight = FEATURED_DISTRICTS[0]
const exploreCards = FEATURED_DISTRICTS.slice(0, 6)

export default function Landing() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="kicker">Proudly made in Bangladesh</span>
            <h1>Explore, Discover, Experience Bangladesh</h1>
            <p className="hero-note">
              Discover Bangladesh through a modern travel experience with iconic destinations, division guides, budget planning, and a browser-based trip saver built for explorers.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/explore">
                Explore 64 Districts
              </Link>
              <Link className="btn btn-secondary" to="/plan">
                Plan Your Journey
              </Link>
            </div>
            <div className="stats-grid">
              {heroStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel__image" style={{ backgroundImage: `url(${spotlight.heroImage})` }} />
            <div className="hero-panel__overlay" />
            <div className="hero-panel__content">
              <div className="surface" style={{ background: 'rgba(7, 16, 13, 0.58)' }}>
                <span className="badge">Featured destination</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem' }}>
                  {spotlight.name}
                </h2>
                <p className="section-subtitle">{spotlight.description}</p>
              </div>
              <div className="card-actions">
                <div className="panel-stat">
                  <strong>{spotlight.division} Division</strong>
                  <span>{spotlight.tagline}</span>
                </div>
                <div className="panel-stat">
                  <strong>{spotlight.category}</strong>
                  <span>Curated travel feel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2 className="section-title">Iconic Destinations</h2>
              <p className="section-subtitle">
                From mangrove jungles to mountain peaks, these are the places that define the spirit of the country.
              </p>
            </div>
            <Link className="btn btn-secondary" to="/destinations">
              View all districts
            </Link>
          </div>

          <div className="feature-grid">
            {exploreCards.map((district) => (
              <Link className="feature-card" key={district.slug} to={`/district/${district.slug}`}>
                <div className="feature-card__media" style={{ backgroundImage: `url(${district.heroImage})` }} />
                <div className="feature-card__body">
                  <span className="mini-badge">{district.division}</span>
                  <h3>{district.name}</h3>
                  <p>{district.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2 className="section-title">Explore by Division</h2>
              <p className="section-subtitle">Every corner of Bangladesh holds a unique story.</p>
            </div>
          </div>
          <div className="division-grid">
            {divisionCards.map((division) => (
              <Link className="division-card" key={division.division} to={`/destinations?division=${division.division}`}>
                <div className="division-card__media" style={{ backgroundImage: `url(${division.heroImage})` }} />
                <div className="division-card__body">
                  <span className="badge">{division.count} districts</span>
                  <h3>{division.division}</h3>
                  <p>{division.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <h2 className="section-title">Everything You Need to Explore Bangladesh</h2>
              <p className="section-subtitle">A practical, polished travel guide designed for browsing on desktop and mobile.</p>
            </div>
          </div>
          <div className="plan-grid">
            {FEATURE_STRIPS.map((item) => (
              <article className="plan-card" key={item.title}>
                <div className="plan-card__body">
                  <span className="badge">Feature</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
