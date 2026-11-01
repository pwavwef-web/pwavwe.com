import { firebaseApp } from './firebaseApp';

export type PublicTestimonial = {
  name: string;
  role?: string;
  organisation?: string;
  quote: string;
  rating: number;
  projectName?: string;
  featured?: boolean;
  order?: number;
  sourceId?: string;
};

// Public, display-safe testimonials. Written only by trusted callable Functions
// and readable by anyone, so this never exposes emails or private feedback.
// The Firestore SDK is imported dynamically so it stays out of the initial
// bundle — the landing page only pays for it once testimonials are requested.
// Sorting is done client-side to avoid needing a composite index.
export async function fetchPublicTestimonials(max = 60): Promise<PublicTestimonial[]> {
  const { collection, getDocs, getFirestore, limit, orderBy, query } = await import('firebase/firestore');
  const snapshot = await getDocs(query(collection(getFirestore(firebaseApp), 'publicTestimonials'), orderBy('approvedAt', 'desc'), limit(max)));
  const items = snapshot.docs.map((document) => document.data() as PublicTestimonial);
  return sortTestimonials(items);
}

export function sortTestimonials(items: PublicTestimonial[]): PublicTestimonial[] {
  return items.sort((a, b) => Number(b.featured) - Number(a.featured) || (a.order ?? 0) - (b.order ?? 0));
}

// The prerender step fetches the published testimonials at build time and
// embeds them, so the static pages carry real quotes before any script runs.
export function prefetchedTestimonials(): PublicTestimonial[] | null {
  const data = (globalThis as { __STUDIO_PREFETCH__?: { testimonials?: PublicTestimonial[] } }).__STUDIO_PREFETCH__;
  return data?.testimonials ?? null;
}
