import { Link, useSearchParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { ALL_DISTRICTS, DIVISIONS } from '@/lib/bangladeshData.js'

const categoryFilters = ['All', 'Beach', 'Hills', 'Nature', 'Culture']

export default function Explore() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') || '')
  const [division, setDivision] = useState(params.get('division') || 'All')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return ALL_DISTRICTS.filter((district) => {
      const searchable = [district.name, district.tagline, district.description, district.division, district.bestFor]
        .join(' ')
        .toLowerCase()
      const matchesSearch = !query || searchable.includes(query)
      const matchesDivision = division === 'All' || district.division === division
      const matchesCategory = category === 'All' || district.category === category
      return matchesSearch && matchesDivision && matchesCategory
    })
  }, [search, division, category])

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <span className="kicker">Explore</span>
            <h1 className="section-title">Find your next district</h1>
            <p className="section-subtitle">
              Search by district name, division, or travel style and jump directly into the full details.
            </p>
          </div>
        </div>

        <div className="surface" style={{ marginBottom: '1rem' }}>
          <div className="inline-form">
            <input
              className="input"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search districts, landmarks, or vibes..."
            />
            <div className="filter-row">
              <button className={`chip ${division === 'All' ? 'active' : ''}`} onClick={() => setDivision('All')}>
                All divisions
              </button>
              {DIVISIONS.map((item) => (
                <button key={item} className={`chip ${division === item ? 'active' : ''}`} onClick={() => setDivision(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="filter-row">
              {categoryFilters.map((item) => (
                <button key={item} className={`chip ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="muted" style={{ marginBottom: '1rem' }}>
          Showing {filtered.length} destinations
          {division !== 'All' ? ` in ${division}` : ''}
        </p>

        <div className="trip-grid">
          {filtered.map((district) => (
            <Link className="district-card" key={district.slug} to={`/district/${district.slug}`}>
              <div className="district-card__media" style={{ backgroundImage: `url(${district.heroImage})` }} />
              <div className="district-card__body">
                <span className="mini-badge">{district.division}</span>
                <h3>{district.name}</h3>
                <p>{district.tagline}</p>
                <div className="meta-row" style={{ marginTop: '0.85rem' }}>
                  <span className="badge">{district.category}</span>
                  <span className="mini-badge">{district.bestFor}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
