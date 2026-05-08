import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function UserNotRegisteredError() {
  return (
    <div className="page" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="notice" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <p className="badge">Access note</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem' }}>
          This area is reserved
        </h1>
        <p className="section-subtitle">
          The page you tried to open is not available in this build. You can still explore the public travel experience and save trips locally in your browser.
        </p>
        <div className="support-actions" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
          <Link className="btn btn-primary" to="/explore">
            Explore destinations
          </Link>
          <a className="btn btn-secondary" href="mailto:support@arman43.com">
            Contact support
          </a>
        </div>
      </div>
    </div>
  )
}
