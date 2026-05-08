import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="notice" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <p className="badge">404</p>
          <h1 className="section-title" style={{ marginTop: '0.8rem' }}>
            Page not found
          </h1>
          <p className="section-subtitle">
            The page you were looking for does not exist. Use the links below to continue exploring the site.
          </p>
          <div className="support-actions" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
            <Link className="btn btn-primary" to="/">
              Go home
            </Link>
            <Link className="btn btn-secondary" to="/explore">
              Explore destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
