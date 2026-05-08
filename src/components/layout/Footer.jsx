import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-grid">
          <div>
            <span className="brand__title">Shopno Jatra</span>
            <p>
              A full web travel version for exploring Bangladesh's 64 districts, planning journeys, and saving trips directly in your browser.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>
              <Link to="/explore">All destinations</Link>
              <br />
              <Link to="/destinations">By division</Link>
              <br />
              <Link to="/plan">Plan journey</Link>
            </p>
          </div>
          <div>
            <h3>Support</h3>
            <p>
              <a href="mailto:support@arman43.com">support@arman43.com</a>
              <br />
              Made for your own branded travel experience.
            </p>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem' }}>© {year} Shopno Jatra. Built for travel inspiration.</p>
      </div>
    </footer>
  )
}
