import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Phone, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

export default function Reservation() {
  const { openReservation } = useReservation();
  const steps = [
    { title: '상담 예약', desc: '온라인 예약 시스템 또는 카카오톡/전화를 통해 원하시는 방문 일정을 예약합니다.', icon: Calendar },
    { title: '사전 분석', desc: '방문 시 전문 상담가와 함께 AI 피부 측정기로 정밀 상태 분석을 진행합니다.', icon: CheckCircle2 },
    { title: '시술 진행', desc: '분석 결과를 바탕으로 원장님의 맞춤형 처방을 통해 프라이빗 룸에서 케어가 진행됩니다.', icon: Clock },
  ];

  return (
    <div className="pb-20 bg-[#FBF9F6]">
       {/* Header Section */}
       <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#BE9B7B] uppercase mb-10">RESERVATION GUIDE</span>
            
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 border-y border-[#E5E5E5]/40 py-16">
               {/* Left Spacing (Desktop) */}
               <div className="flex-1 hidden lg:block"></div>
               
               {/* Center Title */}
               <div className="flex-1 text-center space-y-3">
                 <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#1A1A1A] tracking-tight whitespace-nowrap">예약 및 방문 안내</h1>
                 <p className="text-[#636363] font-medium font-sans text-base tracking-wide">당신을 위한 프라이빗한 휴식의 시작</p>
               </div>
               
               {/* Right Stats & Action */}
               <div className="flex-1 flex flex-col md:flex-row items-center gap-10 md:pl-12 md:border-l border-[#D1D1D1]">
                  <div className="flex flex-col items-center md:items-start space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-[#8E734D]/20 rounded-full flex items-center justify-center bg-white shadow-sm">
                        <Calendar className="w-5 h-5 text-[#8E734D]" />
                      </div>
                      <span className="text-3xl font-serif font-bold text-[#1A1A1A] flex items-baseline gap-1">
                        100% <span className="text-xs font-sans text-[#A3A3A3] uppercase tracking-tighter">Res</span>
                      </span>
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#737373] uppercase">전담 케어 시스템</p>
                  </div>
                  
                  <button 
                    onClick={openReservation}
                    className="flex items-center gap-2 bg-[#1A1A1A] px-10 py-5 rounded-sm text-[12px] font-bold tracking-[0.1em] text-white hover:bg-[#8E734D] transition-colors duration-300 shadow-lg whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4" />
                    실시간 예약
                  </button>
               </div>
            </div>

            <div className="mt-24 text-center max-w-2xl mx-auto">
              <p className="text-[#8E8E8E] font-medium font-sans text-base md:text-lg leading-relaxed">
                Lumière Skin은 100% 사전 예약제로 운영됩니다.<br />
                고객님의 프라이빗한 휴식과 일관된 케어 품질을 위해 최선을 다하고 있습니다.
              </p>
            </div>
          </div>
       </section>

      {/* Reservation Process */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif text-primary">에스테틱 여정</h2>
            <p className="text-on-surface font-medium mt-4 text-base">예약부터 케어 종료까지의 과정입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-surface-container-low p-12 rounded-sm border border-primary/5 hover:border-accent/40 transition-all duration-500 shadow-lumiere">
                  <step.icon className="w-12 h-12 text-accent mb-8 opacity-80" />
                  <h3 className="text-2xl font-serif text-primary mb-4">{step.title}</h3>
                  <p className="text-on-surface font-normal text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-10">
                    <div className="w-12 h-[1px] bg-accent/20"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-serif text-primary">진료 시간 및 연락처</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="flex items-center gap-3 font-serif text-lg text-primary">
                  <Clock className="w-5 h-5 text-accent" /> 운영 시간
                </h4>
                <ul className="text-sm text-on-surface space-y-2 font-medium leading-relaxed">
                  <li>평일: 10:00 AM - 08:00 PM</li>
                  <li>토요일: 10:00 AM - 04:00 PM</li>
                  <li className="text-accent font-bold">일요일 및 공휴일: 휴진</li>
                  <li className="pt-2 text-xs">런치 타임: 01:00 PM - 02:00 PM</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="flex items-center gap-3 font-serif text-lg text-primary">
                  <Phone className="w-5 h-5 text-accent" /> 연락처
                </h4>
                <ul className="text-sm text-on-surface space-y-2 font-medium leading-relaxed">
                  <li>대표 전화: 02-1234-5678</li>
                  <li>카카오톡: @LumiereSkin</li>
                  <li className="pt-4 flex gap-4">
                    <button className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"><Phone className="w-4 h-4" /></button>
                    <a 
                      href="https://open.kakao.com/me/오픈프로필"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FAE100] text-[#3C1E1E] p-3 rounded-full hover:opacity-80 transition-all inline-flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 glass-effect border-accent/20 rounded-sm">
               <h4 className="flex items-center gap-3 font-serif text-lg text-primary mb-4">
                  <AlertCircle className="w-5 h-5 text-accent" /> 예약 취소 및 노쇼 정책 (Cancellation Policy)
                </h4>
                <p className="text-on-surface font-medium text-sm leading-relaxed">
                  원활한 진료를 위해 예약 변경 및 취소는 최소 24시간 전까지 연락 주시기 바랍니다. <br />
                  당일 노쇼(No-Show) 발생 시 다음 예약에 제한이 있을 수 있음을 양해 부탁드립니다.
                </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-primary">오시는 길</h2>
            <div className="aspect-video w-full bg-surface-container-high rounded-sm overflow-hidden shadow-2xl relative">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MjRfODMg/MDAxNzc2OTc2ODU4MzUy._AUsJ_oqunMXf7GZPM0iONj0wmy_YVVfPhCvrtuWnvcg.QCO02h3Ttvp8z_3f4DSOVv_zhhpXQ0RMwhjSDjcWGysg.JPEG/2%EA%B0%95_%EC%A7%80%EB%8F%84.JPG?type=w966"
                className="absolute inset-0 w-full h-full object-cover"
                alt="지도"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group">
                 <div className="absolute bottom-8 left-8 right-8 p-6 bg-surface shadow-xl z-20">
                   <p className="text-primary font-bold mb-1">서울특별시 강남구 테헤란로 123</p>
                   <p className="text-on-surface text-sm font-medium">루미에르 스킨 럭셔리 타워 7층 (강남역 5번 출구 앞)</p>
                 </div>
              </div>
            </div>
            <div className="flex gap-4">
               <a 
                 href="https://naver.me/xQJoP60X" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-grow py-4 bg-white border border-primary/10 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-all uppercase text-center"
               >
                 네이버 지도
               </a>
               <a 
                 href="https://naver.me/xQJoP60X" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-grow py-4 bg-white border border-primary/10 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-all uppercase text-center"
               >
                 카카오 맵
               </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-12">지금 바로 당신의 빛을 예약하세요.</h2>
        <button 
          onClick={openReservation}
          className="bg-[#1A1A1A] text-white px-20 py-6 rounded-sm font-serif text-[12px] font-bold tracking-[0.2em] shadow-2xl hover:bg-[#8E734D] transition-all"
        >
          실시간 상담 예약
        </button>
      </section>
    </div>
  );
}
