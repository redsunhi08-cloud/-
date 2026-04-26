import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Camera, Send, CheckCircle2 } from 'lucide-react';
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

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    program: '시그니처 리프팅 리추얼',
    content: ''
  });

  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('이미지 크기는 2MB 이하여야 합니다.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const reviewData = {
        rating,
        program: formData.program,
        content: formData.content,
        image: image, // Store as base64 data URL
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(db, 'reviews'), reviewData);
      
      // Formspree submission
      try {
        await fetch('https://formspree.io/f/xpqknqvd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            subject: `[Lumiere Review] ${rating} Stars`,
            rating,
            program: formData.program,
            content: formData.content,
            imageAttached: !!image
          })
        });
      } catch (e) {
        console.error('Formspree error:', e);
      }
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'reviews');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg bg-surface shadow-2xl rounded-sm overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-serif text-primary">솔직 후기 작성</h2>
                <button onClick={onClose} className="text-on-surface/40 hover:text-primary transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif text-primary">후기가 등록되었습니다</h3>
                    <p className="text-on-surface/60 font-medium font-sans">루미에르의 서비스 발전을 위해 <br />소중한 의견을 나누어주셔서 감사합니다.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-primary text-white text-xs font-bold tracking-widest hover:bg-primary-container transition-all"
                  >
                    닫기
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-widest text-primary uppercase">만족도 평가</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform active:scale-90"
                        >
                          <Star 
                            className={`w-8 h-8 ${star <= rating ? 'text-accent fill-accent' : 'text-primary/10'}`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-widest text-primary uppercase">방문 프로그램</label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-surface-container-low border border-primary/10 p-4 text-sm font-medium focus:border-accent outline-none"
                    >
                      <option>시그니처 리프팅 리추얼</option>
                      <option>루미에르 글로우 테라피</option>
                      <option>모공 클래리파잉 테라피</option>
                      <option>웨딩 케어 패키지</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-widest text-primary uppercase">상세 내용</label>
                    <textarea 
                      required
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="시술 후 변화나 친절도 등 솔직한 경험을 들려주세요."
                      className="w-full bg-surface-container-low border border-primary/10 p-4 text-sm font-medium h-32 focus:border-accent outline-none resize-none"
                    ></textarea>
                  </div>

                  {image && (
                    <div className="relative w-24 h-24 group">
                      <img src={image} alt="Preview" className="w-full h-full object-cover rounded-sm border border-primary/10" />
                      <button 
                        type="button"
                        onClick={() => setImage(null)}
                        className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <button 
                      type="button" 
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center justify-center gap-2 border border-primary/10 py-4 text-xs font-bold tracking-widest text-primary hover:bg-surface-container-low transition-colors"
                    >
                      <Camera className="w-4 h-4" /> {image ? '사진 변경' : '사진 첨부'}
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-primary text-white py-4 text-xs font-bold tracking-widest hover:bg-primary-container transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" /> {isSubmitting ? '전송 중...' : '등록하기'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

  );
}
