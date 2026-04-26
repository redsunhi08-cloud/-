import { motion } from 'motion/react';
import { Sparkles, Heart, Zap, Sun, ShieldAlert, Check, User, Calendar, MessageCircle, Phone, Crown, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

const categories = [
  {
    name: '안티에이징',
    icon: Zap,
    items: [
      { name: '시그니처 리프팅 리추얼', price: '₩320,000', desc: '피부 윤곽을 복원하는 비침습적 고주파 리프팅 케어.', duration: '90분', tag: '콜라겐 부스트' },
      { name: '셀룰러 재생 테라피', price: '₩450,000', desc: '잔주름 개선을 위한 갈바닉 기술 기반의 고농축 펩타이드 주입.', duration: '120분', tag: '펩타이드 집중' },
    ]
  },
  {
    name: '브라이트닝',
    icon: Sun,
    items: [
      { name: '루미에르 글로우 테라피', price: '₩250,000', desc: '고농축 비타민 C 주입과 산소 테라피가 결합된 광채 케어.', duration: '75분', tag: '비타민 C+' },
      { name: '색소 침착 보정', price: '₩520,000', desc: '기미와 잡티 제거를 위한 정밀 메디컬 필링 솔루션.', duration: '60분', tag: '클리니컬' },
    ]
  },
  {
    name: '여드름 & 트러블',
    icon: ShieldAlert,
    items: [
      { name: '모공 클래리파잉 테라피', price: '₩210,000', desc: '초음파 클렌징과 블루 LED를 이용한 심층 압출 및 진정 케어.', duration: '90분', tag: '디톡스' },
      { name: '여드름 흉터 복원', price: '₩280,000', desc: '흉터 개선을 위한 마이크로니들링 및 성장인자 주입 프로그램.', duration: '60분', tag: '재생 케어' },
    ]
  }
];

export default function Pricing() {
  const { openReservation, openAnalysis, openPromotion, openWedding } = useReservation();
  return (
    <div className="pb-20 bg-[#FBF9F6]">
       {/* Header Section */}
       <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#BE9B7B] uppercase mb-10">PROGRAM & PRICING</span>
            
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 border-y border-[#E5E5E5]/40 py-16">
               {/* Left Spacing (Desktop) */}
               <div className="flex-1 hidden lg:block"></div>
               
               {/* Center Title */}
               <div className="flex-1 text-center space-y-3">
                 <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#1A1A1A] tracking-tight whitespace-nowrap">프로그램 & 가격 안내</h1>
                 <p className="text-[#636363] font-medium font-sans text-base tracking-wide">당신의 피부를 위한 정밀한 솔루션</p>
               </div>
               
                {/* Right Stats & Action */}
                <div className="flex-1 flex items-center justify-center md:justify-start gap-8 md:gap-10 md:pl-12 md:border-l border-[#D1D1D1]">
                   <div className="flex flex-col items-start space-y-0.5">
                     <div className="flex items-center gap-2">
                       <div className="w-10 h-10 border border-[#8E734D]/20 rounded-full flex items-center justify-center bg-white shadow-sm">
                         <Sparkles className="w-5 h-5 text-[#8E734D]" />
                       </div>
                       <span className="text-3xl md:text-4xl font-bold font-serif text-[#1A1A1A] flex items-baseline gap-1">
                         15+ <span className="text-xs font-sans text-[#A3A3A3] uppercase tracking-tighter">Prog</span>
                       </span>
                     </div>
                   </div>
                   
                   <button 
                     onClick={openAnalysis}
                     className="flex items-center gap-2 bg-[#1A1A1A] px-10 py-5 rounded-sm text-[12px] font-bold tracking-[0.1em] text-white hover:bg-[#8E734D] transition-colors duration-300 shadow-lg whitespace-nowrap"
                   >
                     <Sparkles className="w-4 h-4" />
                     피부 분석
                   </button>
                </div>
            </div>

            <div className="mt-24 text-center max-w-2xl mx-auto">
              <p className="text-[#8E8E8E] font-medium font-sans text-base md:text-lg leading-relaxed">
                메디컬 정밀함과 미학적 조화가 만나는 성소를 경험해 보세요.<br />
                당신의 유니크한 피부 여정을 위해 설계된 맞춤형 트리트먼트입니다.
              </p>
            </div>
          </div>
       </section>

      {/* Promotions */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={openPromotion}
            className="bg-primary-container p-12 text-white flex justify-between items-center group cursor-pointer shadow-2xl relative overflow-hidden"
          >
            <div className="z-10">
              <span className="text-[10px] font-bold tracking-widest opacity-60 uppercase">프로모션</span>
              <h3 className="text-3xl font-serif mt-2">첫 방문 고객 30% 할인</h3>
            </div>
            <Sparkles className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={openWedding}
            className="bg-secondary p-12 text-white flex justify-between items-center group cursor-pointer shadow-2xl relative overflow-hidden"
          >
            <div className="z-10">
              <span className="text-[10px] font-bold tracking-widest opacity-60 uppercase">특별 이벤트</span>
              <h3 className="text-3xl font-serif mt-2">웨딩 케어 패키지</h3>
            </div>
            <Heart className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10" />
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Program List */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        {categories.map((cat, idx) => (
          <div key={cat.name} className="space-y-12">
            <div className="flex items-center gap-6 border-b border-gray-100 pb-8">
              <cat.icon className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-serif text-[#1A1A1A]">{cat.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white border border-[#E5E5E5]/50 p-12 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:border-accent/40 transition-all duration-500 group rounded-sm">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-primary transition-colors">{item.name}</h4>
                    <span className="text-2xl font-serif text-[#1A1A1A] font-bold">{item.price}</span>
                  </div>
                  <div className="flex gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-bold tracking-widest uppercase">{item.duration}</span>
                    <span className="px-4 py-1.5 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase">{item.tag}</span>
                  </div>
                  <p className="text-on-surface font-sans font-medium opacity-70 mb-10 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Wedding Featured */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden min-h-[1050px] bg-white">
          {/* Left Content */}
          <div className="p-10 md:p-20 bg-[#FBF9F6]/40 space-y-12 flex flex-col justify-center border-r border-[#E5E5E5]/30">
            <div className="space-y-6 text-center">
               <div className="flex items-center gap-4 justify-center">
                 <div className="h-[1px] w-12 bg-[#D4B591]/50"></div>
                 <span className="text-[10px] font-bold tracking-[0.5em] text-[#D4B591] uppercase">Signature Wedding Care</span>
                 <div className="h-[1px] w-12 bg-[#D4B591]/50"></div>
               </div>
               <div className="space-y-4">
                 <h2 className="text-3xl font-serif text-[#2C2C2C] tracking-tight">웨딩 케어 패키지</h2>
                 <p className="text-[#555555] font-sans font-medium text-base mt-2">가장 특별한 날을 위한 3개월 집중 관리 프로그램</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-10 border border-[#E5E5E5] rounded-xl shadow-sm relative group flex flex-col min-h-[580px]"
              >
                <div className="text-center mb-10">
                  <div className="w-14 h-14 border border-[#BE9B7B]/20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white shadow-sm">
                    <Star className="w-6 h-6 text-[#BE9B7B] stroke-[1.5px]" />
                  </div>
                  <h4 className="text-lg font-serif text-[#2C2C2C] mb-2 leading-snug">눈부신 신부<br /><span className="text-xs text-[#8E8E8E] opacity-60">(4회 세션)</span></h4>
                  <div className="h-px w-24 bg-[#E5E5E5]/60 mx-auto my-5"></div>
                  <span className="text-2xl font-serif font-bold text-[#2C2C2C]">₩1,100,000</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-10">
                    {['딥 클렌징', '피부톤 개선 관리', '수분 집중 케어'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-[13px] font-medium text-[#666666]">
                        <div className="w-5 h-5 rounded-full border border-[#BE9B7B]/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#BE9B7B]" strokeWidth={4} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FBF9F6] p-5 rounded-xl flex items-center gap-4 mt-auto border border-[#E5E5E5]/30">
                   <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <User className="w-4 h-4 text-[#BE9B7B]" />
                   </div>
                   <div>
                     <p className="text-[9px] font-bold text-[#BE9B7B] uppercase tracking-widest mb-0.5">추천 대상</p>
                     <p className="text-[11px] text-[#2C2C2C] font-bold leading-tight">단기간 피부 컨디션 개선이 필요한 신부</p>
                   </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-10 border-2 border-[#BE9B7B]/30 rounded-xl shadow-[0_20px_50px_rgba(190,155,123,0.12)] relative group flex flex-col min-h-[580px]"
              >
                <div className="absolute top-0 right-6 -translate-y-1/2">
                   <div className="bg-[#BE9B7B] text-white w-10 py-4 rounded-b-sm flex flex-col items-center shadow-lg">
                     <Crown className="w-4 h-4 mb-0.5" />
                     <span className="text-[8px] font-bold tracking-tighter uppercase whitespace-nowrap">Best</span>
                   </div>
                </div>
                <div className="text-center mb-10">
                  <div className="w-14 h-14 border border-[#BE9B7B]/20 rounded-full flex items-center justify-center mx-auto mb-6 bg-white shadow-sm">
                    <Crown className="w-6 h-6 text-[#BE9B7B] stroke-[1.5px]" />
                  </div>
                  <h4 className="text-lg font-serif text-[#2C2C2C] mb-2 leading-snug">울티메이트 브라이덜 글로우<br /><span className="text-xs text-[#8E8E8E] opacity-60">(8회)</span></h4>
                  <div className="h-px w-24 bg-[#E5E5E5]/60 mx-auto my-5"></div>
                  <span className="text-2xl font-serif font-bold text-[#BE9B7B]">₩2,000,000</span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-10">
                    {['딥 클렌징 + 피부 재생 케어', '집중 수분 공급', '안티에이징 프로그램', '1:1 맞춤 컨설팅'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-[13px] font-medium text-[#666666]">
                        <div className="w-5 h-5 rounded-full border border-[#BE9B7B]/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#BE9B7B]" strokeWidth={4} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FBF9F6] p-5 rounded-xl flex items-center gap-4 mt-auto border border-[#E5E5E5]/30">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <User className="w-4 h-4 text-[#BE9B7B]" />
                  </div>
                   <div>
                     <p className="text-[9px] font-bold text-[#BE9B7B] uppercase tracking-widest mb-0.5">추천 대상</p>
                     <p className="text-[11px] text-[#2C2C2C] font-bold leading-tight">완벽한 피부 컨디션을 원하는 프리미엄 케어</p>
                   </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-white py-8 px-8 border border-[#E5E5E5] rounded-xl flex flex-col md:flex-row items-center shadow-[0_10px_30px_rgba(0,0,0,0.015)] mt-12">
               {[
                 { icon: Calendar, title: '3개월 집중 관리', desc: '웨딩 전 최적의 피부 컨디션 완성' },
                 { icon: User, title: '1:1 맞춤 솔루션', desc: '개인 피부 상태에 따른 맞춤 관리' },
                 { icon: Sparkles, title: '웨딩 전 피부 최적화', desc: '빛나는 순간을 위한 완벽한 준비' }
               ].map((item, idx) => (
                 <div key={idx} className={`flex items-center gap-4 flex-1 justify-center ${idx !== 2 ? 'md:border-r border-[#E5E5E5]/50' : ''} py-3 md:py-0 w-full`}>
                   <item.icon className="w-6 h-6 text-[#BE9B7B]/70 stroke-[1px]" />
                   <div className="text-left">
                     <p className="text-[11px] font-bold text-[#2C2C2C] mb-0.5">{item.title}</p>
                     <p className="text-[9px] text-[#8E8E8E] font-medium leading-tight whitespace-nowrap">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 pt-10">
               <button onClick={openReservation} className="bg-[#BE9B7B] text-white px-16 py-5 rounded-full font-serif text-sm tracking-[0.2em] shadow-[0_15px_30px_rgba(190,155,123,0.2)] hover:scale-105 transition-all flex items-center gap-4 justify-center group overflow-hidden">
                  <Calendar className="w-4 h-4" strokeWidth={2} /> <span>상담 예약하기</span> <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <a 
                href="https://open.kakao.com/me/오픈프로필"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2C2C2C] border border-[#E5E5E5] px-16 py-5 rounded-full font-serif text-sm tracking-[0.2em] shadow-sm hover:bg-[#FBF9F6] transition-all flex items-center gap-4 justify-center"
               >
                  <MessageCircle className="w-4 h-4 text-[#BE9B7B]" fill="currentColor" opacity={0.1} /> 카카오톡 상담 <ChevronRight className="w-4 h-4 opacity-30" />
               </a>
            </div>
            <p className="text-[11px] text-center text-[#8E8E8E] font-medium tracking-wide">전문 상담을 통해 나에게 맞는 맞춤 케어를 받아보세요.</p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative group overflow-hidden">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MjZfMTMg/MDAxNzc3MTMxMTMzNjg3._vfGqjAVM8FPNiFXt2ps9DdegEKIuz8H4-1Uir-nT4Qg.07ZqHn11ToUyOPCeJ8TpIJkwXr-ohtvcwT8WNT-nbUkg.JPEG/%EC%9B%A8%EB%94%A9.JPG?type=w966" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[1.15] contrast-[1.02] saturate-[1.1]"
              alt="Wedding Special Care"
              referrerPolicy="no-referrer"
            />
            {/* Window Frame Effect */}
            <div className="absolute inset-0 border-[40px] border-white/5 pointer-events-none"></div>
            

            
            <div className="absolute bottom-0 inset-x-0 p-12 pb-16 flex justify-around bg-gradient-to-t from-black/30 to-transparent">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mx-auto bg-white/10 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">프리미엄 케어</p>
                  <p className="text-[10px] text-white/80 font-medium leading-tight drop-shadow-md">검증된 프리미엄 <br />제품 사용</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mx-auto bg-white/10 backdrop-blur-sm">
                    <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">안전한 관리</p>
                  <p className="text-[10px] text-white/80 font-medium leading-tight drop-shadow-md">전문 테라피스트 <br />1:1 관리</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mx-auto bg-white/10 backdrop-blur-sm">
                    <Heart className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">높은 만족도</p>
                  <p className="text-[10px] text-white/80 font-medium leading-tight drop-shadow-md">다수의 웨딩 <br />고객 만족</p>
                </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-tight">당신만의 무드를 찾으세요</h2>
            <p className="text-[#636363] font-sans font-medium text-base max-w-2xl mx-auto opacity-70">
              전문 테라피스트의 세심한 손길로 당신의 일상에 특별한 휴식을 선물합니다.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <button onClick={openReservation} className="bg-[#1A1A1A] text-white px-16 py-6 rounded-sm font-serif text-[12px] font-bold tracking-[0.3em] shadow-xl hover:bg-[#8E734D] transition-all">
              상담 예약하기
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 items-center pt-8 border-t border-gray-100">
             <button onClick={openAnalysis} className="text-primary font-serif font-bold tracking-widest text-sm hover:text-accent transition-all flex items-center gap-3">
               <Sparkles className="w-5 h-5" /> 내 피부 타입 진단받기
             </button>
             <a href="https://naver.me/xQJoP60X" target="_blank" rel="noopener noreferrer" className="text-on-surface/60 font-serif font-medium tracking-widest text-sm hover:text-primary transition-all">
               클리닉 지점 확인하기
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
