import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Gift, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromotionModal({ isOpen, onClose }: PromotionModalProps) {
  const { openReservation } = useReservation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-surface shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Banner */}
            <div className="h-48 bg-primary-container relative flex items-center justify-center overflow-hidden">
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/20 animate-pulse" />
              <div className="text-center z-10">
                <span className="text-[10px] font-bold tracking-[0.5em] text-white/60 uppercase">Special Offer</span>
                <h2 className="text-4xl font-serif text-white mt-2">Welcome Ritual</h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent opacity-60"></div>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">첫 방문 고객 30% 할인 혜택</h3>
                <p className="text-on-surface/70 font-medium leading-relaxed">
                  Lumière Skin을 처음 방문하시는 고객님께 감사의 마음을 담아 전 프로그램 30% 할인 혜택을 드립니다. 
                  당신만의 본연의 빛을 찾는 첫 여정을 특별한 가격으로 시작해보세요.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Gift, title: '전 프로그램 적용', desc: '리프팅, 브라이트닝 등 모든 메뉴' },
                  { icon: Clock, title: '방문 시 즉시 할인', desc: '현장 상담 후 자동 적용' },
                  { icon: ShieldCheck, title: '정품·정량 보증', desc: '할인 시에도 동일한 프리미엄 정량 시술' },
                  { icon: Sparkles, title: '시그니처 샘플킷', desc: '홈케어를 위한 스페셜 키트 증정' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border border-primary/5 rounded-sm bg-surface-container-low">
                    <item.icon className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-[11px] text-on-surface/50 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/5">
                <button
                  onClick={() => {
                    onClose();
                    openReservation();
                  }}
                  className="w-full bg-primary text-white py-5 font-serif text-lg tracking-[0.2em] hover:bg-primary-container transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  지금 바로 혜택받기 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-on-surface/40 mt-4 font-medium uppercase tracking-[0.1em]">
                  * 본 이벤트는 루미에르 스킨 신규 고객 대상 1회 한정 프로모션입니다.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
