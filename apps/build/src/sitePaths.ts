import { publishedProjects } from './data/projects';

/** Every URL the prerender step writes to disk. */
export const sitePaths = [
  '/studio', '/studio/about', '/studio/contact', '/studio/privacy', '/studio/terms',
  '/work', ...publishedProjects.map((project) => `/work/${project.slug}`),
  '/services', '/process', '/testimonials',
];
