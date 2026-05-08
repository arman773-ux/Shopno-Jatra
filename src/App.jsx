import { Outlet, Link, NavLink, Route, Routes } from 'react-router-dom'
import Landing from '@/pages/Landing.jsx'
import Explore from '@/pages/Explore.jsx'
import Destinations from '@/pages/Destinations.jsx'
import DistrictDetail from '@/pages/DistrictDetail.jsx'
import PlanJourney from '@/pages/PlanJourney.jsx'
import MyTrips from '@/pages/MyTrips.jsx'
import Dashboard from '@/pages/Dashboard.jsx'
import PageNotFound from '@/pages/PageNotFound.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="explore" element={<Explore />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="district/:slug" element={<DistrictDetail />} />
        <Route path="plan" element={<PlanJourney />} />
        <Route path="my-trips" element={<MyTrips />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
