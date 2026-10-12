import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import PropertyTemplate from '../components/property/PropertyTemplate'
import { propertyPages } from '../data/propertyPages'
import { fetchWebsiteProject, toWebsiteProperty } from '../lib/websiteProjects'

const PropertyPage = () => {
  const { slug } = useParams()
  const staticProperty = slug ? propertyPages[slug] : null
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(!staticProperty)

  useEffect(() => {
    if (staticProperty || !slug) return undefined
    const controller = new AbortController()
    setLoading(true)
    fetchWebsiteProject(slug, controller.signal)
      .then(project => setProperty(toWebsiteProperty(project)))
      .catch(error => {
        if (error.name !== 'AbortError') setProperty(null)
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [slug, staticProperty])

  if (staticProperty) return <PropertyTemplate property={staticProperty} />
  if (loading) return <div className="section-spacing text-center text-neutral-600">Loading project...</div>
  if (!property) {
    return <Navigate to="/properties" replace />
  }

  return <PropertyTemplate property={property} />
}

export default PropertyPage
