import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDownloadModal({ isOpen, onClose }: ResumeDownloadModalProps) {
  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = async (type: 'PM' | 'OP') => {
    const url = type === 'PM' ? './resume_PM.pdf' : './resume_OP.pdf';
    const filename = type === 'PM' ? '夏好磊-北师大-产品.pdf' : '夏好磊-北师大-运营.pdf';

    try {
      // 1. 先用 fetch 把服务器上的 pdf 请求到浏览器内存里
      const response = await fetch(url);
      const blob = await response.blob();

      // 2. 将内存里的文件转换成一个本地的特殊链接 (blob:http://...)
      const localUrl = window.URL.createObjectURL(blob);

      // 3. 接下来就是你原本的代码，只是把 href 换成了本地链接
      const link = document.createElement('a');
      link.href = localUrl; // 关键改变：这里不用原来的 url 了
      link.download = filename; // 因为是本地链接，这个重命名命令现在 100% 会成功！

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 4. 下载完后释放内存
      window.URL.revokeObjectURL(localUrl);

    } catch (error) {
      console.error('下载失败', error);
      // 如果 fetch 失败，降级回老方法（哪怕名字不对，至少能下载）
      window.open(url, '_blank');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">选择简历版本</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <button
                  onClick={() => handleDownload('PM')}
                  className="flex flex-col items-start p-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:bg-blue-50/50 dark:hover:bg-primary/10 transition-all text-left group"
                >
                  <div className="flex items-center gap-3 w-full mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">design_services</span>
                    </div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">产品方向简历</span>
                    <span className="material-symbols-outlined ml-auto text-slate-400 group-hover:text-primary transition-colors">download</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 ml-[52px]">重点展示产品策划、需求分析与原型设计相关经历</p>
                </button>

                <button
                  onClick={() => handleDownload('OP')}
                  className="flex flex-col items-start p-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50/50 dark:hover:bg-orange-500/10 transition-all text-left group"
                >
                  <div className="flex items-center gap-3 w-full mb-1">
                    <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">campaign</span>
                    </div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">运营方向简历</span>
                    <span className="material-symbols-outlined ml-auto text-slate-400 group-hover:text-orange-500 transition-colors">download</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 ml-[52px]">重点展示内容运营、用户增长与活动策划相关经历</p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
