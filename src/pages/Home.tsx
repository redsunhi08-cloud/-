import { motion } from 'motion/react';
import { Star, Verified } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

export default function Home() {
  const { openReservation } = useReservation();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface">
          <motion.img 
            src="https://postfiles.pstatic.net/MjAyNjA0MjVfOTYg/MDAxNzc3MTI4MzE4ODQ1._th6lzaqs5lkgFZgxFi5JtGXDow5kgW7b6poILv20OEg.6FYy3fR5oRTEf1dcadrJeG7ncWSdvTS0dUMyrJWCxwgg.PNG/2%EA%B0%95_%EC%A0%84%EA%B2%BD.png?type=w3840" 
            alt="Sanctuary Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            animate={{ scale: [1.05, 1.15, 1.05] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/20 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-on-surface mb-10 tracking-tight leading-[1.2]">
            "겉이 아닌, <br className="md:hidden" /> 근본적인 피부 변화를 <br className="md:hidden" /> 약속드립니다."
          </h1>
          <p className="font-medium text-base md:text-lg text-on-surface/70 max-w-2xl mx-auto leading-relaxed">
            Lumière Skin은 임상적 정밀함과 심미적 안식처를 결합하여, 과학적 원칙과 맞춤형 케어를 통해 당신의 피부가 가진 본연의 빛을 드러냅니다.
          </p>
        </motion.div>
        
      </section>

      {/* Clinical Excellence */}
      <section className="py-32 px-6 md:px-12 marble-texture">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="border-l border-primary/20 pl-10">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#BE9B7B] uppercase mb-4 block">Clinical Excellence</span>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">임상적 탁월함</h2>
              <p className="text-[#636363] font-medium text-sm">확실한 변화를 위한 과학적 근거 기반의 프로토콜.</p>
            </div>
            <p className="text-[#636363] leading-[1.8] font-medium max-w-xl text-sm md:text-base">
              우리의 철학은 단순한 미용을 넘어섭니다. Lumière Skin은 최첨단 메디컬 테크놀로지와 숙련된 전문가의 손길을 결합하여, 피부 본연의 건강함을 되찾는 것에 집중합니다. 모든 프로그램은 철저한 임상 데이터를 바탕으로 설계되었습니다.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="space-y-3 cursor-default group"
              >
                <span className="text-4xl font-serif text-primary block transition-transform duration-500 group-hover:scale-110 origin-left">15+</span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">전문가의 숙련도</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="space-y-3 cursor-default group"
              >
                <span className="text-4xl font-serif text-primary block transition-transform duration-500 group-hover:scale-110 origin-left">20k+</span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">만족한 고객 수</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative group lg:pl-12"
          >
            <div className="absolute -inset-6 border border-primary/5 rounded-2xl group-hover:inset-0 transition-all duration-700"></div>
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MjRfMjEz/MDAxNzc2OTc1OTEyMjMx.ivVcKVLC8JCIi9RvOaaOwcUh0r-gKJI2pnBI7C91YVYg.AC_Ey2VQCsldT2QAsRBtR7wqkJUnjZpN7RqpH4ha4Fkg.PNG/Untitled-20260424-045414-2648-2x.png?type=w966" 
              alt="Clinical Environment"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Aesthetic Sanctuary */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MjRfMTQg/MDAxNzc2OTc1OTExMDY2.OD_f1_Yc-j7cdi4Eu1lem0-y6Zitgt4MFG-qBpJ4rSAg.I5sZFx6fgnSdhovb5IMhl7xf2c0sPKKanJsFSsUyT58g.PNG/Untitled-20260424-045901-2734-2x.png?type=w966" 
              alt="트리트먼트 룸"
              className="w-full aspect-[3/4] object-cover rounded-full shadow-lumiere"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="border-l border-primary/20 pl-10">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#BE9B7B] uppercase mb-4 block">Aesthetic Sanctuary</span>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">미학적 안식처</h2>
              <p className="text-[#636363] font-medium text-sm">감각과 영혼을 위한 진정한 휴식.</p>
            </div>
            <p className="text-[#636363] leading-[1.8] font-medium max-w-xl text-sm md:text-base">
              복잡한 도심 속에서 찾은 온전한 휴식. Lumière Skin의 공간은 고객님의 프라이버시를 최우선으로 하며, 시각적, 청각적, 촉각적으로 완벽한 평온함을 제공합니다. 이곳은 단순한 피부 관리를 넘어 지친 영혼이 회복되는 성소입니다.
            </p>
            <ul className="space-y-8">
              {['프라이빗 트리트먼트 스위트', '맞춤형 아로마 테라피', '스페셜 마블 라운지'].map((item) => (
                <li key={item} className="flex items-center space-x-6 group">
                  <div className="h-[1px] w-12 bg-accent group-hover:w-20 transition-all duration-500"></div>
                  <span className="font-serif text-primary text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Director Intro */}
      <section className="py-40 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-12 md:p-24 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-64 h-80 flex-shrink-0 bg-surface-container overflow-hidden shadow-inner hover:scale-105 transition-all duration-1000">
                <img 
                  src="https://postfiles.pstatic.net/MjAyNjA0MjVfNyAg/MDAxNzc3MTI4MzI5NzM3.zn641cj59tqpRcXLC1UDVnJv6xCp4b-1DeU2LZwenwgg.vbhTG7E9te9wnk69pRnLRNvq4sENJq_QFwtYOcTcN4Eg.PNG/%EC%9B%90%EC%9E%A5%EC%9D%B4%EB%AF%B8%EC%A7%80.png?type=w966" 
                  alt="최루미 대표원장"
                  className="w-full h-full object-cover grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">대표 원장</span>
                  <h3 className="text-3xl font-serif text-primary mt-4">최루미 (Lumi Choi)</h3>
                </div>
                <p className="text-on-surface font-medium leading-relaxed text-lg">
                  "다년간의 임상 경험과 전문 교육을 바탕으로, 각 개인의 피부 고민에 대한 가장 과학적이고 예술적인 해답을 제안해 드립니다."
                </p>
                <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row items-center gap-8 justify-between">
                  <div className="flex items-center gap-4">
                    <Verified className="text-secondary w-6 h-6" />
                    <span className="text-[10px] font-bold text-on-surface tracking-widest uppercase">메디컬 에스테틱 보드 인증 전문가</span>
                  </div>
                  <button 
                    onClick={openReservation}
                    className="bg-[#1A1A1A] text-white px-10 py-4 rounded-sm text-[12px] font-bold tracking-[0.2em] hover:bg-[#8E734D] transition-all duration-300"
                  >
                    상담 예약
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Space Gallery */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-serif text-primary">미학적 안식처, 공간 소개</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 row-span-2 aspect-[4/5] md:aspect-auto overflow-hidden group">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MjRfMjYx/MDAxNzc2OTc4OTQ0ODMz.7kCG_TdN2GTmz4QDiDwVdIPvqNNFILYvxmG_NDU7-3cg.-D_T4cwacUZP-Mg6OAyGWdbR9_9Jal-x9GvZpRrsllcg.PNG/Untitled-20260424-050131-3889-2x.png?type=w966" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden group">
               <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MzBfMTcg/MDAxNzc3NTUzMDQ0NzUy.rlyF-oqZ4sDXJUaBVD9k8P2Ijhk8fL9GYPeuK23CMvIg.X7jFspLWqajL4tiRTX5VYuw4d7GCm-RA477Q5RaLV8cg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_09_30_15.png?type=w3840" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden group">
               <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MjVfOTYg/MDAxNzc3MTI4MzE4ODQ1._th6lzaqs5lkgFZgxFi5JtGXDow5kgW7b6poILv20OEg.6FYy3fR5oRTEf1dcadrJeG7ncWSdvTS0dUMyrJWCxwgg.PNG/2%EA%B0%95_%EC%A0%84%EA%B2%BD.png?type=w966" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="공간 갤러리 3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Journey */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-20 text-center">Lumière의 세심한 서비스 여정</h2>
          <div className="flex flex-col md:flex-row gap-0">
            {/* Experience Journey cards with interaction effects */}
            {[
              { id: '01', title: '심층 분석', desc: 'AI 피부 스캐닝과 정밀 임상 평가를 통해 당신만의 케어 지도를 작성합니다.' },
              { id: '02', title: '감각의 준비', desc: '아로마 테라피와 웰컴 터치를 통해 신체와 마음의 긴장을 완화합니다.' },
              { id: '03', title: '정밀 트리트먼트', desc: '최첨단 피부 과학 솔루션을 당신의 유니크한 상태에 맞춰 적용합니다.' }
            ].map((step, idx) => (
              <motion.div 
                key={step.id} 
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`flex-1 px-12 py-16 ${idx !== 2 ? 'md:border-r border-white/10' : ''} border-b md:border-b-0 cursor-default transition-colors duration-500`}
              >
                <span className="text-6xl font-serif opacity-10 block mb-6 transition-opacity duration-500 group-hover:opacity-20">{step.id}</span>
                <h4 className="text-2xl font-serif mb-4">{step.title}</h4>
                <p className="text-white font-medium text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
