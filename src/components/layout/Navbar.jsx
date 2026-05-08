import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/plan', label: 'Plan' },
  { to: '/my-trips', label: 'My Trips' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/">
          <span className="brand__title">Shopno Jatra</span>
          <span className="brand__tag">Bangladesh travel for explorers</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/explore">
            Start journey
          </Link>
        </nav>
      </div>
    </header>
  )
}
