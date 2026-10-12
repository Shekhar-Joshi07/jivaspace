import { useEffect, useMemo, useState } from 'react';
import { propertyCategories } from '@/data/navigation';
import { fetchWebsiteProjects } from '@/lib/websiteProjects';

const categoryForType = type => {
  const normalized = String(type || '').toLowerCase();
  if (['apartment', 'builder floor', 'residential'].includes(normalized)) return 'Residential';
  if (['office', 'shop', 'warehouse', 'commercial'].includes(normalized)) return 'Commercial';
  if (['plot', 'plots'].includes(normalized)) return 'Plots';
  if (['villa', 'villas'].includes(normalized)) return 'Villas';
  return 'Residential';
};

export const useWebsiteProjectCategories = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchWebsiteProjects(controller.signal)
      .then(items => setProjects(Array.isArray(items) ? items : []))
      .catch(error => {
        if (error.name !== 'AbortError') console.warn('Website projects could not be loaded:', error.message);
      });
    return () => controller.abort();
  }, []);

  return useMemo(() => {
    const usedHrefs = new Set(propertyCategories.flatMap(category => category.items.map(item => item.href)));
    const additions = projects.reduce((byCategory, project) => {
      if (!project.websiteSlug) return byCategory;
      const href = `/properties/${project.websiteSlug}`;
      if (usedHrefs.has(href)) return byCategory;
      usedHrefs.add(href);
      const category = categoryForType(project.propertyType);
      byCategory[category] = [...(byCategory[category] || []), { label: project.projectName, href }];
      return byCategory;
    }, {});

    return propertyCategories.map(category => ({
      ...category,
      items: [...category.items, ...(additions[category.label] || [])]
    }));
  }, [projects]);
};
