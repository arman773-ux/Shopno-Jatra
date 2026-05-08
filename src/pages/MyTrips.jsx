import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadTrips, removeTrip, saveTrips, updateTrip } from '@/lib/storage.js'

const statuses = ['wishlist', 'planned', 'completed']

export default function MyTrips() {
  const [trips, setTrips] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const load = async () => {
      setTrips(await loadTrips())
    }

    load()
  }, [])

  const filtered = useMemo(() => {
    return filter === 'all' ? trips : trips.filter((trip) => trip.status === filter)
  }, [trips, filter])

  const stats = {
    total: trips.length,
    wishlist: trips.filter((trip) => trip.status === 'wishlist').length,
    planned: trips.filter((trip) => trip.status === 'planned').length,
    completed: trips.filter((trip) => trip.status === 'completed').length,
  }

  const setStatus = async (tripId, nextStatus) => {
    await updateTrip(tripId, { status: nextStatus })
    setTrips(await loadTrips())
  }

  const deleteTrip = async (tripId) => {
    await removeTrip(tripId)
    setTrips(await loadTrips())
  }

  const clearAll = async () => {
    await saveTrips([])
    setTrips([])
  }

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="kicker">Saved trips</span>
            <h1 className="section-title">My Trips</h1>
            <p className="section-subtitle">Track your planned, saved, and completed destinations locally in your browser.</p>
          </div>
        </div>

        <div className="stats-grid" style={{ marginBottom: '1rem' }}>
          {Object.entries(stats).map(([key, value]) => (
            <div className="stat-card" key={key}>
              <strong>{value}</strong>
              <span>{key}</span>
            </div>
          ))}
        </div>

        <div className="surface" style={{ marginBottom: '1rem' }}>
          <div className="filter-row">
            {['all', ...statuses].map((item) => (
              <button key={item} className={`chip ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
            <button className="chip" onClick={clearAll}>
              Clear all
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="notice" style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              No saved trips yet
            </h2>
            <p className="section-subtitle">Start by exploring a district and saving it to your list.</p>
            <div className="support-actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <Link className="btn btn-primary" to="/explore">
                Explore destinations
              </Link>
              <Link className="btn btn-secondary" to="/plan">
                Plan a journey
              </Link>
            </div>
          </div>
        ) : (
          <div className="trip-grid">
            {filtered.map((trip) => (
              <article className="trip-card" key={trip.id}>
                <div className="trip-card__media" style={{ backgroundImage: `url(${trip.image})` }} />
                <div className="trip-card__body">
                  <span className="mini-badge">{trip.division}</span>
                  <h3>{trip.districtName || trip.title}</h3>
                  <p>{trip.description}</p>

                  <label style={{ display: 'block', marginTop: '0.8rem' }}>
                    <span className="label">Status</span>
                    <select className="select" value={trip.status} onChange={(event) => setStatus(trip.id, event.target.value)}>
                      {statuses.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  {trip.plannedDate && (
                    <p style={{ marginTop: '0.75rem' }}>
                      Planned date: <strong>{trip.plannedDate}</strong>
                    </p>
                  )}

                  <div className="card-actions" style={{ marginTop: '0.9rem' }}>
                    <Link className="btn btn-secondary" to={`/district/${trip.districtSlug}`}>
                      Open district
                    </Link>
                    <button className="btn btn-secondary" onClick={() => deleteTrip(trip.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
