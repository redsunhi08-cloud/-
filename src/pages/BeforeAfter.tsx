import { motion } from 'motion/react';
import { Star, Verified, Quote, ChevronRight } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

const cases = [
  {
    id: 'LS-4922',
    title: '고농축 레이저 토닝',
    category: '색소 침착',
    desc: '호르몬성 기미 및 자외선으로 인한 색소 침착을 타겟으로 하는 정밀 치료.',
    before: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMTAx/MDAxNzc2OTk0OTUxODg5.LIAiUN7USdcPmvO2PAY2O1AE_qhJ77BShtDHAgZha2gg.9JqwmOjFzt4pM3UJgxej_jmn8bPEYICvjH9aOQJpylcg.PNG/Gemini_Generated_Image_xb0srvxb0srvxb0s.png?type=w966',
    after: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMTAx/MDAxNzc2OTk0OTUxODg5.LIAiUN7USdcPmvO2PAY2O1AE_qhJ77BShtDHAgZha2gg.9JqwmOjFzt4pM3UJgxej_jmn8bPEYICvjH9aOQJpylcg.PNG/Gemini_Generated_Image_xb0srvxb0srvxb0s.png?type=w966',
    timeline: '4주 소요'
  },
  {
    id: 'LS-8831',
    title: 'HIFU 울세라 리프팅',
    category: '리프팅',
    desc: '세밀한 턱선 정의와 중안면부 리프팅을 위한 비침습적 안면 컨투어링.',
    before: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMjAz/MDAxNzc2OTk0OTUxOTE3.XDek_LtVnWsGeRHNbcDocpbSS3Ds8GwUhUa10CRoNQgg.GQhOUoGeig90p0exIdIJGJURMPxrG5ShHLg5BXUjWwIg.PNG/Gemini_Generated_Image_unig7lunig7lunig.png?type=w966',
    after: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMjAz/MDAxNzc2OTk0OTUxOTE3.XDek_LtVnWsGeRHNbcDocpbSS3Ds8GwUhUa10CRoNQgg.GQhOUoGeig90p0exIdIJGJURMPxrG5ShHLg5BXUjWwIg.PNG/Gemini_Generated_Image_unig7lunig7lunig.png?type=w966',
    timeline: '1회 시술'
  },
  {
    id: 'LS-1104',
    title: '여드름 솔루션 프로그램',
    category: '트러블 케어',
    desc: '활동성 여드름과 염증 후 붉은 기 개선을 위한 원스톱 종합 케어.',
    before: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMTgg/MDAxNzc2OTk0OTUyMDU0.tsEArQ4uVANbu45YIrHVjjY0Yrvk8Nn757Hf_0N6k0og.6O8aL1ktvZ4vD6S4IsB0r7kdDqY0NABE6iFx05ETorYg.PNG/Gemini_Generated_Image_tmlsh4tmlsh4tmls.png?type=w966',
    after: 'https://postfiles.pstatic.net/MjAyNjA0MjRfMTgg/MDAxNzc2OTk0OTUyMDU0.tsEArQ4uVANbu45YIrHVjjY0Yrvk8Nn757Hf_0N6k0og.6O8aL1ktvZ4vD6S4IsB0r7kdDqY0NABE6iFx05ETorYg.PNG/Gemini_Generated_Image_tmlsh4tmlsh4tmls.png?type=w966',
    timeline: '8주 소요'
  }
];

const reviews = [
  {
     user: '김하나',
     role: '인증 고객',
     rating: 5,
     title: '고질적인 기미 문제가 해결되었어요',
     content: "수년 동안 색소 침착으로 고생하며 안 해본 게 없었습니다. Lumière에서의 상담은 정말 철저했습니다. 단순히 패키지를 파는 게 아니라 과학적인 원리를 설명해 주셨죠. 커스텀 레이저 프로그램 4회 만에 제 피부가 어느 때보다 맑아졌습니다. 안식처 같은 분위기 덕분에 방문할 때마다 휴식하는 기분이었어요.",
     treatment: '레이저 토닝'
  },
  {
     user: '박민서',
     role: '인증 고객',
     rating: 5,
     title: '탁월한 서비스와 눈에 띄는 리프팅 효과',
     content: "이곳의 울세라 시술은 다른 곳과 확실히 다릅니다. 관리사분이 제 민감한 부위를 매우 세심하게 케어해 주셨고 턱선 결과가 정말 놀랍습니다. 클리닉의 깔끔하고 미니멀한 디자인이 트리트먼트의 정밀함을 그대로 반영하는 것 같아 신뢰가 갑니다.",
     treatment: 'HIFU 리프팅'
  }
];

export default function BeforeAfter() {
  const { openReservation } = useReservation();
  return (
    <div className="pb-20 bg-[#FBF9F6]">
       {/* Header Section */}
       <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#BE9B7B] uppercase mb-10">CLINICAL RESULTS</span>
            
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 border-y border-[#E5E5E5]/40 py-16">
               {/* Left Spacing (Desktop) */}
               <div className="flex-1 hidden lg:block"></div>
               
               {/* Center Title */}
               <div className="flex-1 text-center space-y-3">
                 <h1 className="text-4xl md:text-5xl font-semibold font-serif text-[#1A1A1A] tracking-tight whitespace-nowrap">변화의 미학 (Results)</h1>
                 <p className="text-[#636363] font-medium font-sans text-base tracking-wide">수치와 변화로 증명되는 전문성</p>
               </div>
               
               {/* Right Stats & Action */}
               <div className="flex-1 flex flex-col md:flex-row items-center gap-10 md:pl-12 md:border-l border-[#D1D1D1]">
                  <div className="flex flex-col items-center md:items-start space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-[#8E734D]/20 rounded-full flex items-center justify-center bg-white shadow-sm">
                        <Verified className="w-5 h-5 text-[#8E734D]" />
                      </div>
                      <span className="text-3xl font-serif font-bold text-[#1A1A1A] flex items-baseline gap-1">
                        1,200+ <span className="text-xs font-sans text-[#A3A3A3] uppercase tracking-tighter">Cases</span>
                      </span>
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#737373] uppercase">프리미엄 관리 누적 건수</p>
                  </div>
                  
                  <button 
                    onClick={openReservation}
                    className="flex items-center gap-2 bg-[#1A1A1A] px-10 py-5 rounded-sm text-[12px] font-bold tracking-[0.1em] text-white hover:bg-[#8E734D] transition-colors duration-300 shadow-lg whitespace-nowrap"
                  >
                    <Verified className="w-4 h-4" />
                    상담 예약
                  </button>
               </div>
            </div>

            <div className="mt-24 text-center max-w-2xl mx-auto">
              <p className="text-[#8E8E8E] font-medium font-sans text-base md:text-lg leading-relaxed">
                Lumière Skin의 임상적 전문성이 증명하는 정교한 시술 결과를 확인해 보세요.<br />
                모든 사진은 고객님의 동의 하에 공개되며, 보정 없는 실제 결과입니다.
              </p>
            </div>
          </div>
       </section>

       {/* Cases Grid */}
       <section className="max-w-7xl mx-auto px-6 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cases.map((cs) => (
              <motion.div 
                key={cs.id}
                whileHover={{ y: -10 }}
                className="bg-white border border-[#E5E5E5]/50 rounded-sm overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:border-accent/40 transition-all duration-500 p-4"
              >
                <div className="flex h-64 mb-6 relative group">
                  <div className="w-full relative overflow-hidden">
                    <img src={cs.before} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="시술 내역" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="px-4 py-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-serif text-[#1A1A1A]">{cs.title}</h3>
                    <span className="text-[9px] font-bold tracking-tighter text-[#BE9B7B] uppercase border border-[#BE9B7B]/30 px-2 py-0.5 rounded">{cs.category}</span>
                  </div>
                  <p className="text-[#636363] font-medium text-sm leading-relaxed">{cs.desc}</p>
                  <div className="pt-4 border-t border-[#E5E5E5]/60 flex items-center text-[#BE9B7B] font-bold text-[10px] tracking-widest uppercase">
                    <Verified className="w-3 h-3 mr-2" />
                    식별 코드: {cs.id}
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
       </section>
    </div>
  );
}
