import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '@/lib/AuthContext'
import UserNotRegisteredError from './UserNotRegisteredError'

export default function ProtectedRoute() {
  if (children) {
    return children
  }

  return <Outlet />
}
