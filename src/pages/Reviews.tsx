import { motion } from 'motion/react';
import { Star, Pencil, ChevronRight } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

const reviewImage = "https://postfiles.pstatic.net/MjAyNjA0MjZfMjYy/MDAxNzc3MTMyNDE0NDEw.iDSIz3iJQevGVrL1yBpTVXWr0dN7sWVpSQcdScVmu-cg.fY9ZswFYX0gMfEsdY_lRTDtblB2lguEHsFa_mSx3sEMg.JPEG/%ED%9B%84%EA%B8%B0.jpg?type=w966";

export default function Reviews() {
  const { openReview } = useReservation();
  return (
    <div className="pb-20 bg-[#FBF9F6]">
       {/* Header Section */}
       <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#BE9B7B] uppercase mb-10">CUSTOMER REVIEW</span>
            
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 border-y border-[#E5E5E5]/40 py-16">
               {/* Left Spacing (Desktop) */}
               <div className="flex-1 hidden lg:block"></div>
               
               {/* Center Title */}
               <div className="flex-1 text-center space-y-3">
                 <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#1A1A1A] tracking-tight whitespace-nowrap">실제 고객 이용 후기</h1>
                 <p className="text-[#636363] font-medium font-sans text-base tracking-wide">피부 변화로 증명하는 리얼 스토리</p>
               </div>
               
                {/* Right Stats & Action */}
                <div className="flex-1 flex items-center justify-center md:justify-start gap-8 md:gap-10 md:pl-12 md:border-l border-[#D1D1D1]">
                   <div className="flex flex-col items-start space-y-0.5">
                     <div className="flex items-center gap-2">
                       <div className="flex text-[#A67C52]">
                         {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#A67C52]" />)}
                       </div>
                       <span className="text-3xl md:text-4xl font-bold font-serif text-[#1A1A1A] flex items-baseline gap-1">
                         4.9 <span className="text-xs font-sans text-[#A3A3A3] uppercase tracking-tighter">Avg</span>
                       </span>
                     </div>
                   </div>
                   
                   <button 
                     onClick={openReview}
                     className="flex items-center gap-2 bg-[#1A1A1A] px-10 py-5 rounded-sm text-[12px] font-bold tracking-[0.1em] text-white hover:bg-[#A67C52] transition-colors duration-300 shadow-lg whitespace-nowrap"
                   >
                     <Pencil className="w-4 h-4" />
                     후기 작성
                   </button>
                </div>
            </div>

            <div className="mt-24 text-center max-w-2xl mx-auto">
              <p className="text-[#8E8E8E] font-medium font-sans text-base md:text-lg leading-relaxed">
                Lumière Skin과 함께한 고객들의 진솔한 경험담입니다.<br />
                당신의 피부 변화를 위해 우리는 매 순간 정성을 다합니다.
              </p>
            </div>
          </div>
       </section>

        {/* Single Image Review Section (Replaced with Custom Styled Cards) */}
        <section className="pb-32 px-6">
           <div className="max-w-6xl mx-auto space-y-10">
              {[
                {
                  id: 1,
                  initial: '김',
                  name: '김하나 님',
                  info: '20대 · 건성',
                  program: '웨딩 케어 패키지 이용',
                  title: '고질적인 기미 문제가 해결되었어요',
                  content: [
                    '수년 동안 색소 침착으로 고민하며 안 해본 게 없었습니다.',
                    'Lumière에서의 상담은 정말 철저했습니다.',
                    '단순히 피부를 가리는 게 아니라 근본 원인을',
                    '살피고 맞춤 프로그램을 추천해 주셨어요.',
                    '꾸준히 관리받은 결과, 피부 톤이 한층 밝아지고',
                    '거울 볼 때마다 만족감이 커요!'
                  ],
                  images: {
                    before: "https://postfiles.pstatic.net/MjAyNjA0MjZfMSAg/MDAxNzc3MTQwNTMzMDAy.vA7n8bC7v7z6IqL0Y-8Yk4S6b7o5V0G3S9jT5f.Vf_8B-pLz0W5Y8z0P5w.PNG/before1.png?type=w966",
                    after: "https://postfiles.pstatic.net/MjAyNjA0MjZfMiAg/MDAxNzc3MTQwNTMzMDAz.vA7n8bC7v7z6IqL0Y-8Yk4S6b7o5V0G3S9jT5f.Vf_8B-pLz0W5Y8z0P5w.PNG/after1.png?type=w966"
                  }
                },
                {
                  id: 2,
                  initial: '박',
                  name: '박민서 님',
                  info: '30대 · 복합성',
                  program: '리프팅 프로그램 이용',
                  title: '탁월한 서비스와 눈에 띄는 리프팅 효과',
                  content: [
                    '이곳의 리프팅 관리는 정말 차원이 달라요.',
                    '관리사분의 섬세한 테크닉과 1:1 맞춤 관리 덕분에',
                    '처진 라인이 정리되고 얼굴이 한층 또렷해졌어요.',
                    '피부 결, 탄력, 광까지 모두 만족스럽습니다.',
                    '꾸준히 받으면 더 큰 변화를 기대할 수 있을 것 같아요!'
                  ],
                  images: {
                    before: "https://postfiles.pstatic.net/MjAyNjA0MjZfMyAg/MDAxNzc3MTQwNTMzMDA0.vA7n8bC7v7z6IqL0Y-8Yk4S6b7o5V0G3S9jT5f.Vf_8B-pLz0W5Y8z0P5w.PNG/before2.png?type=w966",
                    after: "https://postfiles.pstatic.net/MjAyNjA0MjZfNCAg/MDAxNzc3MTQwNTMzMDA1.vA7n8bC7v7z6IqL0Y-8Yk4S6b7o5V0G3S9jT5f.Vf_8B-pLz0W5Y8z0P5w.PNG/after2.png?type=w966"
                  }
                }
              ].map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-[#E5E5E5]/40 overflow-hidden flex flex-col lg:flex-row"
                >
                  {/* Customer Sidebar */}
                  <div className="w-full lg:w-48 bg-[#FBF9F6]/50 p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#F0F0F0] text-center gap-6">
                    <div className="w-16 h-16 bg-[#D4B591]/20 rounded-full flex items-center justify-center text-[#D4B591] text-2xl font-serif">
                      {review.initial}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#1A1A1A]">{review.name}</p>
                      <p className="text-[10px] font-medium text-[#8E8E8E]">{review.info}</p>
                    </div>
                    <div className="flex text-[#A67C52] gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#A67C52]" />)}
                    </div>
                    <div className="bg-[#F5F5F5] px-3 py-1.5 rounded-full">
                      <p className="text-[9px] font-bold text-[#8E8E8E] whitespace-nowrap">{review.program}</p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="flex-1 space-y-6 relative">
                      <div className="absolute -top-4 -left-4 text-6xl font-serif text-[#D4B591]/10 pointer-events-none">“</div>
                      <h3 className="text-lg md:text-xl font-serif text-[#1A1A1A] leading-tight pt-4">
                        {review.title}
                      </h3>
                      <div className="space-y-2">
                        {review.content.map((line, i) => (
                          <p key={i} className="text-xs md:text-sm text-[#636363] leading-relaxed font-sans font-medium">{line}</p>
                        ))}
                      </div>
                      <div className="absolute -bottom-4 right-0 text-6xl font-serif text-[#D4B591]/10 pointer-events-none">”</div>
                    </div>

                  {/* Comparison Images */}
                    <div className="flex-shrink-0 w-full lg:w-auto">
                      <div className="relative group">
                        <img 
                          src={review.id === 1 
                            ? "https://postfiles.pstatic.net/MjAyNjA0MjZfMjYx/MDAxNzc3MTQxOTc4MjUw.wwfky5KmOzLe0lE3SBhu_HcvJHvsvjTOl4He02jS1Esg.xy5taDq-V586nHtGu_1VeQUSmVnk1kxq0opXur3fgLsg.JPEG/%EA%B8%B0%EB%AF%B8%EC%A0%84%ED%9B%84.JPG?type=w966" 
                            : "https://postfiles.pstatic.net/MjAyNjA0MjZfMTQz/MDAxNzc3MTQxOTc4MjUx.Ikm8y6WQuHNRbEikxfTwobFFc8iI6_CuzdFsEXWtt6sg.n9ToUVx9_-vG905raoCkxF5L1RF6b_W-JkaWJxCx6Qsg.JPEG/%EB%A6%AC%ED%94%84%ED%8C%85%EC%A0%84%ED%9B%84.JPG?type=w966"
                          } 
                          alt="Before & After Comparison" 
                          className="w-full lg:w-[420px] h-auto object-contain rounded-lg shadow-sm border border-[#E5E5E5]/50"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-20 text-center">
                 <button className="bg-[#1A1A1A] text-white px-16 py-5 rounded-sm font-serif text-sm tracking-[0.2em] shadow-xl hover:bg-[#A67C52] transition-all flex items-center gap-4 mx-auto group">
                    더 많은 후기 보러가기 <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                 </button>
              </div>
           </div>
        </section>

       {/* FAQ/Trust Section */}
       <section className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-[#E5E5E5]/40 mt-10">
          <h2 className="text-3xl font-serif text-[#2C2C2C] mb-12">Lumière는 약속합니다.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
             <div className="space-y-4 p-10 bg-white rounded-sm border border-[#E5E5E5]/50 shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl text-[#BE9B7B] font-serif">100% 리얼 후기</h4>
                <p className="text-[#555555] font-medium text-sm leading-relaxed font-sans">
                   조작 없는 실제 고객들의 경험만을 공유합니다. 모든 리뷰는 실제 본원에서 시술을 받으신 고객님들만 작성이 가능합니다.
                </p>
             </div>
             <div className="space-y-4 p-10 bg-white rounded-sm border border-[#E5E5E5]/50 shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl text-[#BE9B7B] font-serif">피드백의 존중</h4>
                <p className="text-[#555555] font-medium text-sm leading-relaxed font-sans">
                   고객님의 작은 의견 하나에도 귀 기울이며, 더 나은 서비스를 위해 끊임없이 개선하고 노력하겠습니다.
                </p>
             </div>
          </div>
       </section>
    </div>
  );
}
