const configuredApiUrl = (import.meta.env.VITE_CRM_API_URL || 'http://localhost:5000').trim();
const apiBaseUrl = configuredApiUrl.replace(/\/$/, '').replace(/\/api$/, '');

const request = async (path, signal) => {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: { Accept: 'application/json' },
    signal
  });
  if (!response.ok) throw new Error(`Could not load website projects (${response.status})`);
  const payload = await response.json();
  return payload?.data ?? payload;
};

export const fetchWebsiteProjects = signal => request('/api/public/projects', signal);

export const fetchWebsiteProject = (slug, signal) => request(`/api/public/projects/${encodeURIComponent(slug)}`, signal);

export const toWebsiteProperty = project => ({
  name: project.projectName,
  displayName: project.projectName,
  heroHeadline: project.propertyType || 'Featured Project',
  heroSubheadline: project.status || '',
  startFrom: project.priceRange || 'On request',
  location: project.location,
  reraNumber: project.reraNumber || 'RERA details on request',
  reraWebsite: project.websiteUrl || '',
  description: project.description,
  highlights: project.amenities?.length ? project.amenities : undefined,
  amenities: project.amenities?.length ? project.amenities : undefined,
  heroImage: project.images?.[0],
  galleryImages: project.images,
  contact: {
    name: project.builderName,
    phone: project.contactPerson?.phone,
    email: project.contactPerson?.email,
    address: project.location,
    projectRera: project.reraNumber
  }
});
