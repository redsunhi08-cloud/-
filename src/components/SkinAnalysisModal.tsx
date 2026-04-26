import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, Droplets, Sun, Zap, ShieldAlert } from 'lucide-react';
import { useReservation } from '@/src/context/ReservationContext';

interface SkinAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'intro' | 'question1' | 'question2' | 'question3' | 'result';

export function SkinAnalysisModal({ isOpen, onClose }: SkinAnalysisModalProps) {
  const { openReservation } = useReservation();
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState({
    condition: '',
    sensitivity: '',
    goal: ''
  });

  const reset = () => {
    setStep('intro');
    setAnswers({ condition: '', sensitivity: '', goal: '' });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const getResult = () => {
    if (answers.condition === '건성' && answers.goal === '수분') return {
      type: '탈수형 건성 피부',
      desc: '피부 속 수분이 부족하여 피부 장벽이 약해진 상태입니다.',
      recommend: '루미에르 글로우 테라피',
      icon: Droplets
    };
    if (answers.condition === '지성' && answers.goal === '트러블') return {
      type: '염증성 지성 피부',
      desc: '과도한 피지 분비로 인해 모공 정화와 진정이 필요한 상태입니다.',
      recommend: '모공 클래리파잉 테라피',
      icon: ShieldAlert
    };
    if (answers.goal === '탄력') return {
      type: '초기 노화 진행 피부',
      desc: '콜라겐 감소로 인해 미세 주름과 탄력 저하가 관찰되는 상태입니다.',
      recommend: '시그니처 리프팅 리추얼',
      icon: Zap
    };
    return {
      type: '복합성 밸런스 필요 피부',
      desc: '부위별 유수분 밸런스가 불균형하여 체계적인 관리가 필요한 상태입니다.',
      recommend: '시그니처 커스텀 케어',
      icon: Sun
    };
  };

  const result = getResult();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-primary/20 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-surface shadow-2xl rounded-sm overflow-hidden min-h-[500px] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-primary/5 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Skin Analysis AI</span>
              </div>
              <button onClick={handleClose} className="text-on-surface/40 hover:text-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow p-8 md:p-12 overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === 'intro' && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center space-y-8 py-12"
                  >
                    <h2 className="text-2xl font-serif text-primary leading-tight">당신의 피부가 <br />들려주는 이야기에 귀 기울여보세요.</h2>
                    <p className="text-on-surface/60 font-medium">3가지 질문을 통해 당신에게 가장 필요한 <br />최적의 에스테틱 솔루션을 제안해 드립니다.</p>
                    <button
                      onClick={() => setStep('question1')}
                      className="bg-primary text-white px-12 py-4 font-serif text-base tracking-widest hover:bg-primary-container transition-all group inline-flex items-center gap-3"
                    >
                      진단 시작하기 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 'question1' && (
                  <motion.div
                    key="q1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <span className="text-accent font-serif text-lg">01.</span>
                      <h3 className="text-3xl font-serif text-primary">세안 직후 당신의 피부 상태는 어떤가요?</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {['건성 (당김이 심함)', '지성 (금방 번들거림)', '복합성 (일부만 당기거나 번들거림)'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setAnswers({ ...answers, condition: opt.split(' ')[0] });
                            setStep('question2');
                          }}
                          className="w-full text-left p-6 border border-primary/10 hover:border-accent hover:bg-surface-container-low transition-all group flex justify-between items-center"
                        >
                          <span className="text-on-surface font-medium">{opt}</span>
                          <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 'question2' && (
                  <motion.div
                    key="q2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                       <span className="text-accent font-serif text-lg">02.</span>
                       <h3 className="text-3xl font-serif text-primary">외부 환경(온도, 화장품)에 민감하게 반응하나요?</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {['매우 민감함', '때때로 민감함', '비교적 건강함'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setAnswers({ ...answers, sensitivity: opt });
                            setStep('question3');
                          }}
                          className="w-full text-left p-6 border border-primary/10 hover:border-accent hover:bg-surface-container-low transition-all group flex justify-between items-center"
                        >
                          <span className="text-on-surface font-medium">{opt}</span>
                          <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep('question1')} className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-colors">
                      <ChevronLeft className="w-4 h-4" /> 이전 단계로
                    </button>
                  </motion.div>
                )}

                {step === 'question3' && (
                  <motion.div
                    key="q3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                       <span className="text-accent font-serif text-lg">03.</span>
                       <h3 className="text-3xl font-serif text-primary">현재 가장 개선하고 싶은 고민은 무엇인가요?</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {['수분/보습', '트러블/모공', '탄력/주름', '미백/잡티'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setAnswers({ ...answers, goal: opt.split('/')[0] });
                            setStep('result');
                          }}
                          className="w-full text-left p-6 border border-primary/10 hover:border-accent hover:bg-surface-container-low transition-all group flex justify-between items-center"
                        >
                          <span className="text-on-surface font-medium">{opt}</span>
                          <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep('question2')} className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-colors">
                      <ChevronLeft className="w-4 h-4" /> 이전 단계로
                    </button>
                  </motion.div>
                )}

                {step === 'result' && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-10"
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
                      <result.icon className="w-20 h-20 text-accent relative z-10 mx-auto" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-bold tracking-[0.4em] text-accent uppercase">분석 결과</p>
                      <h2 className="text-4xl font-serif text-primary">{result.type}</h2>
                      <p className="text-on-surface/60 font-medium max-w-md mx-auto">{result.desc}</p>
                    </div>
                    <div className="bg-surface-container-low p-8 border border-primary/5 rounded-sm shadow-xl">
                      <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-4">추천 프로그램</p>
                      <h4 className="text-2xl font-serif text-on-surface mb-2">{result.recommend}</h4>
                      <p className="text-xs text-on-surface/40 leading-relaxed">이 진단은 AI 기반의 기초 분석이며, 방문 시 <br />원장님의 정밀 진단을 통해 최종 솔루션이 확정됩니다.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <button
                        onClick={() => {
                          handleClose();
                          openReservation();
                        }}
                        className="flex-1 bg-primary text-white py-4 font-serif tracking-widest hover:bg-primary-container transition-all"
                      >
                        상담 예약하기
                      </button>
                      <button
                        onClick={reset}
                        className="flex-1 border border-primary text-primary py-4 font-serif tracking-widest hover:bg-primary hover:text-white transition-all"
                      >
                        다시 진단하기
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Progress Bar */}
            {step !== 'intro' && step !== 'result' && (
              <div className="h-1 w-full bg-primary/5">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: step === 'question1' ? '33%' : step === 'question2' ? '66%' : '100%' 
                  }}
                />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
