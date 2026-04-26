import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db, auth, signInWithGoogle } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { LogIn, LogOut, Calendar, Star, CheckCircle2, XCircle, Trash2, Filter, ChevronRight, User, Phone, MessageSquare } from 'lucide-react';

interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  program: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: any;
}

interface Review {
  id: string;
  rating: number;
  program: string;
  content: string;
  createdAt: any;
}

const ADMIN_EMAIL = 'redsunhi08@gmail.com';

export default function Admin() {
  const [user, setUser] = useState(auth.currentUser);
  const [isAdmin, setIsAdmin] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState<'reservations' | 'reviews'>('reservations');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user && user.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    const qRes = query(collection(db, 'reservations'), orderBy('createdAt', 'desc'));
    const unsubRes = onSnapshot(qRes, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Reservation));
      setReservations(data);
    });

    const qRev = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubRev = onSnapshot(qRev, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Review));
      setReviews(data);
    });

    return () => {
      unsubRes();
      unsubRev();
    };
  }, [isAdmin]);

  const updateReservationStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'reservations', id), { status });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReservation = async (id: string) => {
    if (confirm('이 예약을 삭제하시겠습니까?')) {
      try {
        await deleteDoc(doc(db, 'reservations', id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const deleteReview = async (id: string) => {
    if (confirm('이 후기를 삭제하시겠습니까?')) {
      try {
        await deleteDoc(doc(db, 'reviews', id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF9F6]">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF9F6] p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm text-center space-y-8"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <LogIn className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-serif text-[#1A1A1A] mb-2">관리자 로그인</h1>
            <p className="text-[#636363] text-sm font-medium">루미에르 스킨 관리자 계정으로 로그인해주세요.</p>
          </div>
          <button 
            onClick={signInWithGoogle}
            className="w-full bg-[#1A1A1A] text-white py-4 rounded-sm font-bold tracking-widest hover:bg-[#8E734D] transition-colors duration-300 flex items-center justify-center gap-3"
          >
            Google 계정으로 로그인
          </button>
          {!isAdmin && user && (
            <p className="text-red-500 text-xs font-bold mt-4">관리자 권한이 없는 계정입니다.</p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#A67C52] uppercase mb-4 block">ADMIN DASHBOARD</span>
            <h1 className="text-4xl font-serif text-[#1A1A1A]">매니지먼트 센터</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-sm shadow-sm border border-[#E5E5E5]/40">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
                {user.photoURL ? <img src={user.photoURL} alt="" /> : user.email?.[0].toUpperCase()}
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">{user.displayName || 'ADMIN'}</p>
                <p className="text-[10px] text-[#8E8E8E]">{user.email}</p>
              </div>
            </div>
            <button 
              onClick={() => auth.signOut()}
              className="p-3 bg-white border border-[#E5E5E5]/40 text-[#8E8E8E] hover:text-red-500 hover:border-red-500/20 transition-all rounded-sm shadow-sm"
              title="로그아웃"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-10 bg-white p-1 rounded-sm shadow-sm max-w-fit">
          <button 
            onClick={() => setActiveTab('reservations')}
            className={`px-8 py-3 text-xs font-bold tracking-widest transition-all rounded-sm flex items-center gap-3 ${activeTab === 'reservations' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#8E8E8E] hover:text-[#1A1A1A]'}`}
          >
            <Calendar className="w-4 h-4" /> 예약 관리 ({reservations.length})
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`px-8 py-3 text-xs font-bold tracking-widest transition-all rounded-sm flex items-center gap-3 ${activeTab === 'reviews' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#8E8E8E] hover:text-[#1A1A1A]'}`}
          >
            <Star className="w-4 h-4" /> 후기 관리 ({reviews.length})
          </button>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {activeTab === 'reservations' ? (
            <motion.div 
              key="reservations"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              {reservations.length === 0 ? (
                <div className="bg-white p-20 text-center rounded-sm shadow-sm border border-[#E5E5E5]/40">
                  <Calendar className="w-12 h-12 text-[#E5E5E5] mx-auto mb-4" />
                  <p className="text-[#8E8E8E] font-medium">등록된 예약이 없습니다.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reservations.map((res) => (
                    <div key={res.id} className="bg-white rounded-sm shadow-sm border border-[#E5E5E5]/40 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="p-6 border-b border-[#F5F5F5] flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                             <span className={`w-2 h-2 rounded-full ${res.status === 'confirmed' ? 'bg-green-500' : res.status === 'cancelled' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E8E8E]">{res.status}</span>
                          </div>
                          <h3 className="text-xl font-serif text-[#1A1A1A]">{res.name} 님</h3>
                        </div>
                        <button 
                          onClick={() => deleteReservation(res.id)}
                          className="text-[#E5E5E5] hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-4 text-sm">
                           <Calendar className="w-4 h-4 text-primary" />
                           <span className="text-[#1A1A1A] font-medium">{res.date}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                           <Phone className="w-4 h-4 text-primary" />
                           <span className="text-[#1A1A1A] font-medium">{res.phone}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                           <Filter className="w-4 h-4 text-primary" />
                           <span className="text-[#1A1A1A] font-medium">{res.program}</span>
                        </div>
                        {res.message && (
                          <div className="bg-[#FBF9F6] p-4 rounded-sm space-y-2">
                             <div className="flex items-center gap-2">
                               <MessageSquare className="w-3 h-3 text-[#A67C52]" />
                               <span className="text-[10px] font-bold text-[#A67C52] uppercase tracking-wider">메시지</span>
                             </div>
                             <p className="text-xs text-[#636363] leading-relaxed">{res.message}</p>
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-[#FBF9F6] border-t border-[#E5E5E5]/40 grid grid-cols-2 gap-2">
                         <button 
                           onClick={() => updateReservationStatus(res.id, 'confirmed')}
                           className="flex items-center justify-center gap-2 py-3 bg-green-500/10 text-green-600 text-[10px] font-bold tracking-widest uppercase hover:bg-green-500 hover:text-white transition-all rounded-sm"
                         >
                           <CheckCircle2 className="w-3 h-3" /> 확정
                         </button>
                         <button 
                           onClick={() => updateReservationStatus(res.id, 'cancelled')}
                           className="flex items-center justify-center gap-2 py-3 bg-red-500/10 text-red-600 text-[10px] font-bold tracking-widest uppercase hover:bg-red-500 hover:text-white transition-all rounded-sm"
                         >
                           <XCircle className="w-3 h-3" /> 취소
                         </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="reviews"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              {reviews.length === 0 ? (
                <div className="bg-white p-20 text-center rounded-sm shadow-sm border border-[#E5E5E5]/40">
                  <Star className="w-12 h-12 text-[#E5E5E5] mx-auto mb-4" />
                  <p className="text-[#8E8E8E] font-medium">등록된 후기가 없습니다.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="bg-white rounded-sm shadow-sm border border-[#E5E5E5]/40 p-8 space-y-6 group relative hover:shadow-xl transition-all duration-300">
                      <button 
                        onClick={() => deleteReview(rev.id)}
                        className="absolute top-6 right-6 text-[#E5E5E5] hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-4">
                        <div className="flex text-[#A67C52]">
                          {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rev.rating ? 'fill-[#A67C52]' : 'text-[#E5E5E5]'}`} />)}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{rev.program}</span>
                      </div>
                      <p className="text-base text-[#1A1A1A] font-medium leading-relaxed italic">"{rev.content}"</p>
                      <div className="pt-6 border-t border-[#F5F5F5] flex justify-between items-center">
                         <span className="text-[10px] font-bold text-[#8E8E8E] uppercase tracking-widest">
                           {rev.createdAt?.toDate().toLocaleDateString()}
                         </span>
                         <span className="flex items-center gap-2 text-primary">
                           <Verified className="w-4 h-4" />
                           <span className="text-[10px] font-bold tracking-widest uppercase">Verified Response</span>
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Verified({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
