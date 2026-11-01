import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom';
import { crossOriginHref } from '../lib/paths';

// Drop-in replacements for Link and NavLink that render a plain anchor when the
// destination lives on the other Studio host (see lib/paths.ts).

type StudioLinkProps = Omit<LinkProps, 'to'> & { to: string };

export function StudioLink({ to, replace: _replace, state: _state, reloadDocument: _reload, preventScrollReset: _scroll, relative: _relative, ...anchor }: StudioLinkProps) {
  const href = crossOriginHref(to);
  if (href) return <a href={href} {...anchor} />;
  return <Link to={to} replace={_replace} state={_state} reloadDocument={_reload} preventScrollReset={_scroll} relative={_relative} {...anchor} />;
}

type StudioNavLinkProps = Omit<NavLinkProps, 'to' | 'className' | 'children' | 'style'> & { to: string; className?: string; children?: React.ReactNode };

export function StudioNavLink({ to, className, children, tabIndex }: StudioNavLinkProps) {
  const href = crossOriginHref(to);
  if (href) return <a href={href} className={className} tabIndex={tabIndex}>{children}</a>;
  return <NavLink to={to} className={className} tabIndex={tabIndex}>{children}</NavLink>;
}
