import { Navigate, useParams } from 'react-router-dom'
import PropertyTemplate from '../components/property/PropertyTemplate'
import { propertyPages } from '../data/propertyPages'

const PropertyPage = () => {
  const { slug } = useParams()
  const property = slug ? propertyPages[slug] : null

  if (!property) {
    return <Navigate to="/properties" replace />
  }

  return <PropertyTemplate property={property} />
}

export default PropertyPage
