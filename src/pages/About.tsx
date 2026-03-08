import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFeaturedHonors } from '../data/honorsData';
import ContactCTA from '../components/ContactCTA';

export default function About() {
  const location = useLocation();
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const featuredHonors = getFeaturedHonors();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => {
        setCopiedText(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-10 w-full">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto flex-1 gap-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4 flex flex-col gap-6">
            <div className="w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100 relative">
              <div
                className="absolute inset-0 bg-cover bg-[center_20%]"
                style={{
                  backgroundImage: 'url("/avatar.jpg")',
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">联系方式</h3>
              <button
                onClick={() => handleCopy('henryhsia@163.com')}
                className="flex items-center w-fit gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-left relative group"
                title="点击复制"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
                <span>henryhsia@163.com</span>
                {copiedText === 'henryhsia@163.com' ? (
                  <span className="ml-1 text-xs text-green-600 dark:text-green-500 font-bold bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">已复制!</span>
                ) : (
                  <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">content_copy</span>
                )}
              </button>
              <button
                onClick={() => handleCopy('17679055790')}
                className="flex items-center w-fit gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-left relative group"
                title="点击复制"
              >
                <span className="material-symbols-outlined text-xl">link</span>
                <span>17679055790</span>
                {copiedText === '17679055790' ? (
                  <span className="ml-1 text-xs text-green-600 dark:text-green-500 font-bold bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded">已复制!</span>
                ) : (
                  <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">content_copy</span>
                )}
              </button>
              <div className="flex items-center w-fit gap-3 text-slate-600 dark:text-slate-400 cursor-default">
                <span className="material-symbols-outlined text-xl">location_on</span>
                <span>北京, 中国</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">关于我</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                新闻传播学背景，热衷于用户研究、内容策划与数字产品设计，致力于构建有意义的数字体验。
              </p>
            </div>

            <div className="flex flex-col gap-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                在本科期间，我主修新闻传播大类下的数字出版专业。这段经历培养了我敏锐的观察力、深入的调研能力以及将复杂信息转化为引人入胜故事的技巧。我曾在校园媒体担任编辑，负责策划、报道、运营校园媒体公众号，这让我深刻理解了受众需求和信息传递的有效性。
              </p>
              <p>
                随着对数字媒体的深入了解，我逐渐意识到，仅仅讲述故事是不够的，如何构建承载这些故事的平台、如何优化用户获取信息的体验同样重要。这促使我不断拓展自己的能力边界，涉足用户研究、产品设计和数据分析等领域。
              </p>
              <p>
                新闻传播学的训练让我养成了深刻理解目标受众、在海量信息中提炼核心价值、以及协调不同团队共同达成目标的习惯。这些素养在用户调研、需求分析、内容策划和跨部门沟通等方面持续发挥着价值。
              </p>
              <p>
                我希望将新闻传播学视角与实际的产品实践相结合，不断探索内容、技术与用户体验的交汇点，创造既有商业价值又能真正解决用户痛点的作品。
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">核心能力</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">psychology</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">用户洞察</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    熟练运用深度访谈、问卷调查等方法，挖掘用户真实需求与痛点。
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">architecture</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">产品设计</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    能够独立完成竞品分析、需求文档（PRD）编写及原型设计（Axure/Figma）。
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">edit_note</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">内容策略</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    具备优秀的内容策划与文案撰写能力，善于通过文字传递产品价值。
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">forum</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">跨部门沟通</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    擅长与开发、设计、运营等团队进行高效沟通，推动项目顺利落地。
                  </p>
                </div>
              </div>
            </div>

            {/* 荣誉与认证 */}
            <div className="mt-8" id="honors">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white dark:text-slate-800 text-xl">military_tech</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">荣誉与认证</h2>
                <Link
                  to="/honors"
                  className="ml-auto inline-flex items-center gap-1.5 text-sm font-bold text-primary bg-primary/10 hover:bg-primary/20 px-4 py-1.5 rounded-full transition-all"
                >
                  查看全部
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredHonors.map((cert) => (
                  <Link
                    key={cert.id}
                    to={`/honors/${cert.id}`}
                    state={{ from: '/about#honors' }}
                    className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-full shrink-0 aspect-[5/3] bg-slate-50 dark:bg-slate-700/50 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between gap-2 mt-auto">
                        <span className="text-sm text-slate-500 dark:text-slate-400 flex-1 truncate" title={cert.issuer}>
                          {cert.issuer}
                        </span>
                        <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap font-medium">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactCTA title="对我的经历感兴趣吗？" />
      </div>
    </div>
  );
}
