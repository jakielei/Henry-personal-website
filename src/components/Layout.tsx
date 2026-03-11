import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenContact = () => setIsContactModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenContact);
    return () => window.removeEventListener('open-contact-modal', handleOpenContact);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '作品集', path: '/portfolio' },
    { name: '关于我', path: '/about' },
    { name: '简历', path: '/resume' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <header className={`print:hidden sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 md:px-10 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
          <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">夏好磊</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium'
                    } text-sm leading-normal`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-sm hover:shadow-md"
          >
            <span className="truncate">联系我</span>
          </button>
        </nav>
        <button
          className="md:hidden text-slate-900 dark:text-white p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[73px] z-40 bg-white dark:bg-slate-900 md:hidden flex flex-col border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive
                    ? 'text-primary font-bold'
                    : 'text-slate-700 dark:text-slate-300 font-medium'
                    } text-xl leading-normal`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-sm"
              >
                <span className="truncate">联系我</span>
              </button>
            </div>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col items-center w-full">
        <Outlet />
      </main>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">联系方式</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">欢迎随时与我联系，探讨产品、设计或合作机会。</p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-slate-900 dark:text-white font-medium truncate">henryhsia@163.com</span>
                </div>
                <button
                  onClick={() => handleCopy('henryhsia@163.com')}
                  className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                  title="复制邮箱"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {copiedText === 'henryhsia@163.com' ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="material-symbols-outlined text-primary">phone_iphone</span>
                  <span className="text-slate-900 dark:text-white font-medium truncate">17679055790</span>
                </div>
                <button
                  onClick={() => handleCopy('17679055790')}
                  className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                  title="复制电话"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {copiedText === '17679055790' ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      <footer className="print:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">夏好磊</h3>
            <p className="text-slate-500 text-sm">打造有故事的产品。</p>
          </div>
          <div className="flex gap-6 items-center">
            {/* WeChat */}
            <div className="relative group/tooltip flex items-center justify-center">
              <button
                onClick={() => handleCopy('Henry_Hsia')}
                className="text-slate-500 hover:text-[#07C160] transition-colors focus:outline-none"
                aria-label="复制微信号"
              >
                {copiedText === 'Henry_Hsia' ? (
                  <span className="material-symbols-outlined text-[24px] text-[#07C160]">check</span>
                ) : (
                  <img src="/微信.svg" alt="WeChat" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
                )}
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800">
                {copiedText === 'Henry_Hsia' ? '已复制！' : 'Henry_Hsia'}
              </div>
            </div>

            {/* QQ */}
            <div className="relative group/tooltip flex items-center justify-center">
              <button
                onClick={() => handleCopy('2742300660')}
                className="text-slate-500 hover:text-[#12B7F5] transition-colors focus:outline-none"
                aria-label="复制QQ号"
              >
                {copiedText === '2742300660' ? (
                  <span className="material-symbols-outlined text-[24px] text-[#12B7F5]">check</span>
                ) : (
                  <img src="/qq.svg" alt="QQ" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
                )}
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800">
                {copiedText === '2742300660' ? '已复制！' : 'QQ: 2742300660'}
              </div>
            </div>

            {/* Email */}
            <div className="relative group/tooltip flex items-center justify-center">
              <a
                href="mailto:henryhsia@163.com"
                className="text-slate-500 hover:text-primary transition-colors focus:outline-none flex items-center justify-center"
                aria-label="发送邮件"
              >
                <img src="/邮箱.svg" alt="Email" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-slate-800">
                henryhsia@163.com
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-xs">
          © 2026 夏好磊 个人网站. 保留所有权利.
        </div>
      </footer>
    </div>
  );
}
