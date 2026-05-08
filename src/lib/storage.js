import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { db, hasFirebaseConfig } from '@/lib/googleDatabase.js'

const KEY = 'shonar-path-saved-trips'
const JOURNEY_KEY = 'shonar-path-journey'
const TRIPS_COLLECTION = 'savedTrips'

const safeParse = (value, fallback) => {
  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

const readLocalTrips = () => {
  if (typeof window === 'undefined') return []
  return safeParse(window.localStorage.getItem(KEY) || '[]', [])
}

const writeLocalTrips = (trips) => {
  if (typeof window === 'undefined') return trips
  window.localStorage.setItem(KEY, JSON.stringify(trips))
  return trips
}

const normalizeTrip = (trip) => ({
  ...trip,
  updatedAt: trip.updatedAt || new Date().toISOString(),
})

export const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `trip-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export const loadTrips = async () => {
  if (!hasFirebaseConfig || !db) return readLocalTrips()

  const snapshot = await getDocs(query(collection(db, TRIPS_COLLECTION), orderBy('updatedAt', 'desc')))
  return snapshot.docs.map((document) => ({ id: document.id, ...document.data() }))
}

export const saveTrips = async (trips) => {
  if (!hasFirebaseConfig || !db) return writeLocalTrips(trips)

  const batch = writeBatch(db)
  const existing = await getDocs(collection(db, TRIPS_COLLECTION))
  existing.docs.forEach((document) => batch.delete(document.ref))
  trips.forEach((trip) => {
    const tripId = trip.id || createId()
    batch.set(doc(db, TRIPS_COLLECTION, tripId), normalizeTrip({ ...trip, id: tripId }))
  })
  await batch.commit()
  return trips
}

export const upsertTrip = async (trip) => {
  const normalized = normalizeTrip(trip)

  if (!hasFirebaseConfig || !db) {
    const trips = readLocalTrips()
    const next = trips.some((item) => item.id === normalized.id)
      ? trips.map((item) => (item.id === normalized.id ? { ...item, ...normalized } : item))
      : [normalized, ...trips]
    return writeLocalTrips(next)
  }

  const tripId = normalized.id || createId()
  await setDoc(doc(db, TRIPS_COLLECTION, tripId), { ...normalized, id: tripId }, { merge: true })
  return { ...normalized, id: tripId }
}

export const updateTrip = async (tripId, patch) => {
  if (!hasFirebaseConfig || !db) {
    const next = readLocalTrips().map((trip) => (trip.id === tripId ? { ...trip, ...patch } : trip))
    return writeLocalTrips(next)
  }

  await setDoc(doc(db, TRIPS_COLLECTION, tripId), { ...patch, updatedAt: new Date().toISOString() }, { merge: true })
  return tripId
}

export const removeTrip = async (tripId) => {
  if (!hasFirebaseConfig || !db) {
    const next = readLocalTrips().filter((trip) => trip.id !== tripId)
    return writeLocalTrips(next)
  }

  await deleteDoc(doc(db, TRIPS_COLLECTION, tripId))
  return tripId
}

export const clearTrips = async () => {
  if (!hasFirebaseConfig || !db) return writeLocalTrips([])

  const existing = await getDocs(collection(db, TRIPS_COLLECTION))
  const batch = writeBatch(db)
  existing.docs.forEach((document) => batch.delete(document.ref))
  await batch.commit()
  return []
}

export const loadJourney = () => {
  if (typeof window === 'undefined') return null
  return safeParse(window.localStorage.getItem(JOURNEY_KEY) || 'null', null)
}

export const saveJourney = (journey) => {
  if (typeof window === 'undefined') return journey
  window.localStorage.setItem(JOURNEY_KEY, JSON.stringify(journey))
  return journey
}
