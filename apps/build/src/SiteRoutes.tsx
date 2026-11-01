import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage, ContactPage, PrivacyPage, ProcessPage, ServicesPage, TermsPage } from './pages/InfoPages';
import { NotFoundPage } from './pages/NotFoundPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ProjectPage, WorkPage } from './pages/WorkPages';

// The public Studio pages served from pwavwe.com. Imported eagerly (not lazily)
// so the prerendered HTML and the first client render match for hydration.
export function SiteRoutes() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="studio" element={<HomePage />} />
      <Route path="studio/about" element={<AboutPage />} />
      <Route path="studio/contact" element={<ContactPage />} />
      <Route path="studio/privacy" element={<PrivacyPage />} />
      <Route path="studio/terms" element={<TermsPage />} />
      <Route path="work" element={<WorkPage />} />
      <Route path="work/:slug" element={<ProjectPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="process" element={<ProcessPage />} />
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>;
}
