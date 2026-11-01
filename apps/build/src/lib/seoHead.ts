import { asset, siteUrl } from './paths';

export type SeoProps = { title: string; description: string; path?: string; noIndex?: boolean; image?: string };

export type SeoHead = Required<Omit<SeoProps, 'path'>> & { url: string };

// The prerender step reads the head of the page it just rendered from here.
export const ssrHead: { current: SeoHead | null } = { current: null };

export function resolveSeo({ title, description, path = '/', noIndex = false, image }: SeoProps): SeoHead {
  const url = `${siteUrl}${path === '/' ? '/' : path}`;
  return { title, description, noIndex, url, image: new URL(image ?? asset('pwavwe-studio-social.png'), siteUrl).href };
}
