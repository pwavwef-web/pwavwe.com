import { lazy, Suspense } from 'react';
import { LoaderCircle } from 'lucide-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';

// build.pwavwe.com serves only the app. The public pages (studio home, work,
// services, process, about) are prerendered onto pwavwe.com from SiteRoutes,
// and firebase.json redirects their old build.pwavwe.com addresses there.
const RequestPage = lazy(() => import('./pages/RequestPages').then((module) => ({ default: module.RequestPage })));
const SuccessPage = lazy(() => import('./pages/RequestPages').then((module) => ({ default: module.SuccessPage })));
const RequesterPortalPage = lazy(() => import('./pages/RequesterPortalPage').then((module) => ({ default: module.RequesterPortalPage })));
const FeedbackPage = lazy(() => import('./pages/FeedbackPages').then((module) => ({ default: module.FeedbackPage })));
const FeedbackSuccessPage = lazy(() => import('./pages/FeedbackPages').then((module) => ({ default: module.FeedbackSuccessPage })));
const AdminPage = lazy(() => import('./pages/AdminPages').then((module) => ({ default: module.AdminPage })));
const AdminRequestPage = lazy(() => import('./pages/AdminRequestPage').then((module) => ({ default: module.AdminRequestPage })));
const AdminFeedbackPage = lazy(() => import('./pages/AdminPages').then((module) => ({ default: module.AdminFeedbackPage })));
const AdminTestimonialPage = lazy(() => import('./pages/AdminPages').then((module) => ({ default: module.AdminTestimonialPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

function LoadingPage() {
  return <div className="route-loading" role="status" aria-live="polite"><LoaderCircle className="spin" /> Loading page…</div>;
}

export default function App() {
  return <BrowserRouter><Suspense fallback={<LoadingPage />}><Routes>
    {/* Full-screen requester dashboard — its own shell, outside the marketing chrome */}
    <Route path="request/status" element={<RequesterPortalPage />} />
    {/* Full-screen admin console — single auth gate + tabbed shell */}
    <Route path="admin" element={<AdminLayout />}>
      <Route index element={<AdminPage />} />
      <Route path="requests/:requestId" element={<AdminRequestPage />} />
      <Route path="feedback" element={<AdminFeedbackPage />} />
      <Route path="feedback/:testimonialId" element={<AdminTestimonialPage />} />
    </Route>
    <Route element={<Layout />}>
      <Route path="request" element={<RequestPage />} />
      <Route path="request/success" element={<SuccessPage />} />
      <Route path="feedback" element={<FeedbackPage />} />
      <Route path="feedback/success" element={<FeedbackSuccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes></Suspense></BrowserRouter>;
}
