import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Star, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

interface WeddingEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WeddingEventModal({ isOpen, onClose }: WeddingEventModalProps) {
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
            <div className="h-48 bg-secondary relative flex items-center justify-center overflow-hidden">
              <Heart className="absolute top-4 right-4 w-12 h-12 text-white/20 animate-pulse" />
              <div className="text-center z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.5em] text-white/60 uppercase">Wedding Special</span>
                <h2 className="text-4xl font-serif mt-2">Everlasting Glow</h2>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">생애 가장 빛나는 순간을 위한 웨딩 케어</h3>
                <p className="text-on-surface/70 font-medium leading-relaxed">
                  결혼식을 앞둔 예비 신랑·신부님을 위한 루미에르만의 시그니처 로드맵입니다. 
                  전문적인 피부 분석과 체계적인 관리를 통해 본식 당일 최상의 컨디션을 약속드립니다.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: '눈부신 신부 스탠다드 (4회)', price: '₩1,100,000', desc: '본식 1개월 전 집중 수분 및 라인 정리' },
                  { title: '프리미엄 브라이달 글로우 (8회)', price: '₩2,000,000', desc: '본식 3개월 전부터 시작하는 근본적 개선' }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-primary/10 rounded-sm bg-surface-container-low flex justify-between items-center group hover:border-secondary transition-colors cursor-default">
                    <div className="space-y-1">
                      <h4 className="text-lg font-serif text-primary">{item.title}</h4>
                      <p className="text-xs text-on-surface/50 font-medium">{item.desc}</p>
                    </div>
                    <span className="text-xl font-serif text-on-surface font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-xs font-bold text-primary/60">
                  <ShieldCheck className="w-4 h-4 text-secondary" /> 맞춤형 컨설팅 제공
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-primary/60">
                  <Star className="w-4 h-4 text-secondary" /> 프라이빗 트윈룸 이용
                </div>
              </div>

              <div className="pt-6 border-t border-primary/5">
                <button
                  onClick={() => {
                    onClose();
                    openReservation();
                  }}
                  className="w-full bg-secondary text-white py-5 font-serif text-lg tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  웨딩 상담 신청하기 <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
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
