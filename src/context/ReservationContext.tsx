import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReservationContextType {
  isOpen: boolean;
  isAnalysisOpen: boolean;
  isPromotionOpen: boolean;
  isWeddingOpen: boolean;
  isReviewOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
  openAnalysis: () => void;
  closeAnalysis: () => void;
  openPromotion: () => void;
  closePromotion: () => void;
  openWedding: () => void;
  closeWedding: () => void;
  openReview: () => void;
  closeReview: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isPromotionOpen, setIsPromotionOpen] = useState(false);
  const [isWeddingOpen, setIsWeddingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const openReservation = () => setIsOpen(true);
  const closeReservation = () => setIsOpen(false);
  const openAnalysis = () => setIsAnalysisOpen(true);
  const closeAnalysis = () => setIsAnalysisOpen(false);
  const openPromotion = () => setIsPromotionOpen(true);
  const closePromotion = () => setIsPromotionOpen(false);
  const openWedding = () => setIsWeddingOpen(true);
  const closeWedding = () => setIsWeddingOpen(false);
  const openReview = () => setIsReviewOpen(true);
  const closeReview = () => setIsReviewOpen(false);

  return (
    <ReservationContext.Provider value={{ 
      isOpen, 
      isAnalysisOpen, 
      isPromotionOpen,
      isWeddingOpen,
      isReviewOpen,
      openReservation, 
      closeReservation,
      openAnalysis,
      closeAnalysis,
      openPromotion,
      closePromotion,
      openWedding,
      closeWedding,
      openReview,
      closeReview
    }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}
