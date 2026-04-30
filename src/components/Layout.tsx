import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, MapPin, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useReservation } from '@/src/context/ReservationContext';

const navLinks = [
  { name: '홈', path: '/' },
  { name: '소개', path: '/about' },
  { name: '프로그램', path: '/program' },
  { name: '임상 결과', path: '/before-after' },
  { name: '고객 후기', path: '/review' },
  { name: '예약 안내', path: '/price' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openReservation } = useReservation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface/90 backdrop-blur-xl py-0 shadow-md' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-on-surface">
        <Link to="/" className="flex items-center group -ml-4">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA0MjRfNDQg/MDAxNzc2OTc4ODI5MjA1.12Kg-f9DcmHjYnP9_gA8_WRR4z32OivLBaNn2TW2p-cg.nViSk81eLh8hPu_IOFVz145nSeX8nT6xNT-ixsgc6YYg.PNG/2%EA%B0%95_%EB%A1%9C%EA%B3%A0(%ED%88%AC%EB%AA%85).png?type=w966" 
            alt="Lumière Skin Logo" 
            className="h-28 md:h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12 text-[18px] leading-[28px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-bold tracking-[0.2em] transition-all duration-300 hover:text-primary uppercase ${location.pathname === link.path ? 'text-primary border-b border-primary pb-1' : 'text-on-surface/50'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={openReservation}
            className="bg-[#1A1A1A] text-white px-10 py-4 font-serif text-[11px] font-bold tracking-[0.2em] hover:bg-[#8E734D] transition-all active:scale-95 shadow-lg shadow-black/5 uppercase"
          >
            상담 예약
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-t border-primary/5 py-8 px-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-bold tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-on-surface/60'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  openReservation();
                }}
                className="bg-primary text-white w-full py-4 font-serif tracking-widest text-sm"
              >
                예약 문의하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-primary/5 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="inline-block -ml-6">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MjRfNDQg/MDAxNzc2OTc4ODI5MjA1.12Kg-f9DcmHjYnP9_gA8_WRR4z32OivLBaNn2TW2p-cg.nViSk81eLh8hPu_IOFVz145nSeX8nT6xNT-ixsgc6YYg.PNG/2%EA%B0%95_%EB%A1%9C%EA%B3%A0(%ED%88%AC%EB%AA%85).png?type=w966" 
              alt="Lumière Skin Logo" 
              className="h-28 md:h-32 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="space-y-8">
            <p className="text-on-surface/80 font-medium text-sm md:text-base max-w-md leading-[1.8]">
              임상적 탁월함과 미학적 안식처의 만남. 과학적 근거에 기반한 트리트먼트와 세심한 케어를 통해 당신의 피부가 가진 본연의 빛을 찾아드립니다.
            </p>
          </div>
        </div>
        
        <div className="lg:pt-10 space-y-8">
          <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-primary pb-2 border-b border-primary/10">소통 창구</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant/80 font-medium">
            <li><a href="https://open.kakao.com/me/오픈프로필" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">카카오톡 상담하기</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">인스타그램</a></li>
            <li><a href="https://naver.me/xQJoP60X" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">매장 위치 안내</a></li>
          </ul>
        </div>

        <div className="lg:pt-10 space-y-8">
          <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-primary pb-2 border-b border-primary/10">법률 정책</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant/80 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">개인정보처리방침</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">이용약관</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">쿠키 정책</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/30 font-bold">
          © 2024 Lumière Skin. Clinical Excellence & Aesthetic Sanctuary.
        </p>
        <Link to="/admin" className="text-[10px] uppercase tracking-[0.2em] text-primary/20 hover:text-primary transition-colors font-bold">
          Management Portal
        </Link>
      </div>
    </footer>
  );
}
