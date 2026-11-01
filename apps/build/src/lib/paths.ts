// Pwavwe Studio lives on two hosts. The public pages (studio home, work, case
// studies, services, process, about) are prerendered onto pwavwe.com so search
// engines read real content on the domain that holds the authority. The app —
// project requests, the requester portal, feedback and admin — stays on
// build.pwavwe.com, the origin the Functions CORS list and Auth domains allow.
//
// The same components render in both builds, so every internal link goes
// through crossOriginHref(): a link to the other host becomes an absolute URL.

export const SITE_ORIGIN = 'https://pwavwe.com';
export const APP_ORIGIN = 'https://build.pwavwe.com';

/** True in the prerendered pwavwe.com build (`vite build --mode site`). */
export const isSiteBuild = import.meta.env.VITE_BUILD_TARGET === 'site';

export const siteUrl = (import.meta.env.VITE_SITE_URL ?? (isSiteBuild ? SITE_ORIGIN : APP_ORIGIN)).replace(/\/$/, '');

const APP_PREFIXES = ['/request', '/feedback', '/admin'];

export function isAppPath(to: string): boolean {
  const path = to.split(/[?#]/)[0];
  return APP_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

/** Absolute URL when `to` belongs to the other host; null when it is local. */
export function crossOriginHref(to: string): string | null {
  if (!to.startsWith('/')) return null;
  const app = isAppPath(to);
  if (app === !isSiteBuild) return null;
  return `${app ? APP_ORIGIN : SITE_ORIGIN}${to}`;
}

/** A file from public/, resolved against the build's base path. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
