/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from '@/src/components/Layout';
import Home from '@/src/pages/Home';
import Pricing from '@/src/pages/Pricing';
import BeforeAfter from '@/src/pages/BeforeAfter';
import Reviews from '@/src/pages/Reviews';
import Reservation from '@/src/pages/Reservation';
import Admin from '@/src/pages/Admin';
import { ReservationProvider } from '@/src/context/ReservationContext';
import { ReservationModal } from '@/src/components/ReservationModal';
import { SkinAnalysisModal } from '@/src/components/SkinAnalysisModal';
import { PromotionModal } from '@/src/components/PromotionModal';
import { WeddingEventModal } from '@/src/components/WeddingEventModal';
import { ReviewModal } from '@/src/components/ReviewModal';
import { useReservation } from '@/src/context/ReservationContext';

function ReservationManager() {
  const { isOpen, closeReservation, isAnalysisOpen, closeAnalysis, isPromotionOpen, closePromotion, isWeddingOpen, closeWedding, isReviewOpen, closeReview } = useReservation();
  return (
    <>
      <ReservationModal isOpen={isOpen} onClose={closeReservation} />
      <SkinAnalysisModal isOpen={isAnalysisOpen} onClose={closeAnalysis} />
      <PromotionModal isOpen={isPromotionOpen} onClose={closePromotion} />
      <WeddingEventModal isOpen={isWeddingOpen} onClose={closeWedding} />
      <ReviewModal isOpen={isReviewOpen} onClose={closeReview} />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ReservationProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/program" element={<Pricing />} />
              <Route path="/before-after" element={<BeforeAfter />} />
              <Route path="/review" element={<Reviews />} />
              <Route path="/price" element={<Reservation />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <ReservationManager />
        </div>
      </Router>
    </ReservationProvider>
  );
}
