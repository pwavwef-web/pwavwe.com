import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ssrHead, type SeoHead } from './lib/seoHead';
import { SiteRoutes } from './SiteRoutes';
import { sitePaths } from './sitePaths';

export { sitePaths };

export function render(url: string): { html: string; head: SeoHead | null } {
  ssrHead.current = null;
  const html = renderToString(<StaticRouter location={url}><SiteRoutes /></StaticRouter>);
  return { html, head: ssrHead.current };
}
