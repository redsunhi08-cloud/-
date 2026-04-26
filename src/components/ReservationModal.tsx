import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { db, auth, serverTimestamp } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    program: '피부 정밀 진단',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const reservationData = {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(db, 'reservations'), reservationData);
      
      // Formspree submission
      try {
        await fetch('https://formspree.io/f/xpqknqvd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            subject: `[Lumiere Reservation] ${formData.name}`,
            ...formData,
            status: 'pending'
          })
        });
      } catch (e) {
        console.error('Formspree error:', e);
      }
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          name: '',
          phone: '',
          date: '',
          program: '피부 정밀 진단',
          message: ''
        });
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'reservations');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-surface p-8 md:p-12 shadow-2xl rounded-sm overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface/40 hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-serif text-primary">예약 요청 완료</h2>
                  <p className="text-on-surface/60 font-medium font-sans">
                    담당자가 확인 후 순차적으로 연락드리겠습니다.<br />
                    루미에르를 선택해주셔서 감사합니다.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-primary text-white text-xs font-bold tracking-widest hover:bg-primary-container transition-all"
                >
                  닫기
                </button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-serif text-primary mb-2">프라이빗 상담 예약</h2>
                  <p className="text-on-surface/60 text-sm font-medium">루미에르의 개인별 맞춤 케어를 경험해보세요.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary block">성함</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-container-low border border-primary/10 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-all"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary block">연락처</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-container-low border border-primary/10 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-primary block">예약 희망일</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        <input
                          required
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-surface-container-low border border-primary/10 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-primary block">관심 프로그램</label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-surface-container-low border border-primary/10 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all appearance-none"
                      >
                        <option>피부 정밀 진단</option>
                        <option>안티에이징 리프팅</option>
                        <option>색소 침착 케어</option>
                        <option>스페셜 웨딩 케어</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary block">추가 문의사항</label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-4 w-4 h-4 text-primary/40" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-surface-container-low border border-primary/10 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-accent transition-all resize-none"
                        placeholder="고민하시는 부위나 궁금하신 점을 남겨주세요."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 font-serif text-base tracking-widest hover:bg-primary-container transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '전송 중...' : '상담 예약하기'} 
                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
