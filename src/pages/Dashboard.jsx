import { Link } from 'react-router-dom'
import { loadTrips } from '@/lib/storage.js'
import { divisionCards } from '@/lib/bangladeshData.js'

export default function Dashboard() {
  const trips = loadTrips()
  const planned = trips.filter((trip) => trip.status === 'planned').length
  const completed = trips.filter((trip) => trip.status === 'completed').length
  const wishlist = trips.filter((trip) => trip.status === 'wishlist').length

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="kicker">Dashboard</span>
            <h1 className="section-title">Your travel overview</h1>
            <p className="section-subtitle">A quick snapshot of your saved journey activity and popular divisions.</p>
          </div>
        </div>

        <div className="stats-grid" style={{ marginBottom: '1rem' }}>
          <div className="stat-card">
            <strong>{trips.length}</strong>
            <span>Total saved trips</span>
          </div>
          <div className="stat-card">
            <strong>{wishlist}</strong>
            <span>Wishlist</span>
          </div>
          <div className="stat-card">
            <strong>{planned}</strong>
            <span>Planned</span>
          </div>
          <div className="stat-card">
            <strong>{completed}</strong>
            <span>Completed</span>
          </div>
        </div>

        <div className="detail-grid">
          <div className="surface">
            <div className="section-head" style={{ marginBottom: '1rem' }}>
              <div>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  Quick actions
                </h2>
                <p className="section-subtitle">Continue where you left off.</p>
              </div>
            </div>
            <div className="support-actions">
              <Link className="btn btn-primary" to="/explore">
                Explore more
              </Link>
              <Link className="btn btn-secondary" to="/plan">
                Plan a journey
              </Link>
              <Link className="btn btn-secondary" to="/my-trips">
                Open saved trips
              </Link>
            </div>
          </div>
          <div className="surface">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Popular divisions
            </h2>
            <div className="feature-grid" style={{ marginTop: '1rem' }}>
              {divisionCards.slice(0, 4).map((division) => (
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
        </div>
      </div>
    </section>
  )
}
