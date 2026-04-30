import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

export default function About() {
  const { openReservation } = useReservation();

  return (
    <div className="overflow-hidden bg-[#FBF9F6]">
      {/* Refined Header Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.4em] text-[#BE9B7B] uppercase mb-10"
          >
            OUR SANCTUARY
          </motion.span>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-12 border-y border-[#E5E5E5]/40 py-16"
          >
             {/* Left Spacing (Desktop) */}
             <div className="flex-1 hidden lg:block"></div>
             
             {/* Center Title */}
             <div className="flex-1 text-center space-y-3">
               <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#1A1A1A] tracking-tight whitespace-nowrap">공간 소개</h1>
               <p className="text-[#636363] font-medium font-sans text-base tracking-wide">미학적 안식처, 본연의 아름다움을 찾는 공간</p>
             </div>
             
              {/* Right Stats & Action */}
              <div className="flex-1 flex items-center justify-center md:justify-start gap-8 md:gap-10 md:pl-12 md:border-l border-[#D1D1D1]">
                 <div className="flex flex-col items-start space-y-0.5">
                   <div className="flex items-center gap-2">
                     <div className="w-10 h-10 border border-[#8E734D]/20 rounded-full flex items-center justify-center bg-white shadow-sm">
                       <ShieldCheck className="w-5 h-5 text-[#8E734D]" />
                     </div>
                     <span className="text-3xl md:text-4xl font-bold font-serif text-[#1A1A1A] flex items-baseline gap-1">
                       1:1 <span className="text-xs font-sans text-[#A3A3A3] uppercase tracking-tighter">Private</span>
                     </span>
                   </div>
                 </div>
                 
                 <button 
                   onClick={openReservation}
                   className="flex items-center gap-2 bg-[#1A1A1A] px-10 py-5 rounded-sm text-[12px] font-bold tracking-[0.1em] text-white hover:bg-[#8E734D] transition-colors duration-300 shadow-lg whitespace-nowrap"
                 >
                   <Calendar className="w-4 h-4" />
                   상담 예약
                 </button>
              </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 text-center max-w-2xl mx-auto"
          >
            <p className="text-[#8E8E8E] font-medium font-sans text-base md:text-lg leading-relaxed">
              메디컬 정밀함과 미학적 조화가 만나는 성소를 경험해 보세요.<br />
              당신의 유니크한 피부 여정을 위해 설계된 맞춤형 공간입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Space Gallery */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-serif text-[#1A1A1A]">미학적 안식처, 공간 소개</h2>
            <div className="w-20 h-1 bg-[#BE9B7B] mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 row-span-2 aspect-[4/5] md:aspect-auto overflow-hidden group shadow-sm"
            >
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MjRfMjYx/MDAxNzc2OTc4OTQ0ODMz.7kCG_TdN2GTmz4QDiDwVdIPvqNNFILYvxmG_NDU7-3cg.-D_T4cwacUZP-Mg6OAyGWdbR9_9Jal-x9GvZpRrsllcg.PNG/Untitled-20260424-050131-3889-2x.png?type=w966" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 1"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden group shadow-sm"
            >
               <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MzBfMTcg/MDAxNzc3NTUzMDQ0NzUy.rlyF-oqZ4sDXJUaBVD9k8P2Ijhk8fL9GYPeuK23CMvIg.X7jFspLWqajL4tiRTX5VYuw4d7GCm-RA477Q5RaLV8cg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_09_30_15.png?type=w3840" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 2"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] overflow-hidden group shadow-sm"
            >
               <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MjVfOTYg/MDAxNzc3MTI4MzE4ODQ1._th6lzaqs5lkgFZgxFi5JtGXDow5kgW7b6poILv20OEg.6FYy3fR5oRTEf1dcadrJeG7ncWSdvTS0dUMyrJWCxwgg.PNG/2%EA%B0%95_%EC%A0%84%EA%B2%BD.png?type=w966" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 3"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#F8F5F2]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
             <span className="text-[11px] font-bold tracking-[0.3em] text-[#BE9B7B] uppercase">Lumière Philosophy</span>
             <h3 className="text-3xl font-serif text-[#1A1A1A]">공간이 주는 치유의 힘</h3>
          </div>
          <p className="text-[#636363] leading-[2] font-medium text-lg max-w-2xl mx-auto">
            Lumière Skin의 모든 공간은 단순한 인테리어를 넘어, <br />
            고객님의 오감이 온전한 휴식을 누릴 수 있도록 설계되었습니다. <br />
            당신의 피부가 빛을 되찾기 전, 마음이 먼저 머무는 곳입니다.
          </p>
        </div>
      </section>
    </div>
  );
}
