import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] px-4 md:px-10 flex flex-col gap-12 py-12 md:py-20">
      <div className="@container">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="flex flex-col gap-6 flex-1 text-left">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              你好，我是夏好磊
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              本科数字出版专业，新闻与传播专业硕士，热衷于用户研究、内容策划与数字产品设计，善于将复杂信息转化为清晰的表达与体验
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-base font-bold transition-transform active:scale-95 hover:bg-slate-800 dark:hover:bg-slate-200">
                查看作品
              </Link>
              <Link to="/about" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold transition-transform active:scale-95 hover:bg-slate-300 dark:hover:bg-slate-700">
                关于我
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined text-primary text-sm">edit_note</span>
                <span className="text-primary text-sm font-semibold">新闻传播</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined text-primary text-sm">search</span>
                <span className="text-primary text-sm font-semibold">用户研究</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined text-primary text-sm">design_services</span>
                <span className="text-primary text-sm font-semibold">产品设计</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                <span className="material-symbols-outlined text-primary text-sm">content_paste</span>
                <span className="text-primary text-sm font-semibold">内容策划</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[35%] lg:w-[30%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <div
              className="w-full h-full bg-cover bg-[center_25%] transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url("/avatar.jpg")',
              }}
            ></div>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex items-end justify-between mb-8 px-2">
          <div>
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">精选项目</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">作品集精选案例展示</p>
          </div>
          <Link to="/portfolio" className="hidden md:flex items-center text-primary font-semibold hover:underline gap-1">
            查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/portfolio/1" state={{ from: 'home' }} className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="relative w-full aspect-video overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("/projects/bridge-website.png")',
                }}
              ></div>
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
                数字文旅
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">桥守以盼：数字文旅与古桥保护服务平台</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-3">
                融合地方历史人文与泛媒体电商模式，从 0 到 1 架构"古桥乡音"APP与"旅乡画桥"网站，用数字产品连接乡村文旅与现代受众。
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">APP 原型设计</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">交互体验</span>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/2" state={{ from: 'home' }} className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="relative w-full aspect-video overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("/projects/meme-app.png")',
                }}
              ></div>
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
                内容社区
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">梗百科 APP</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-3">
                针对网络热梗碎片化痛点，主导设计的集"专业解释+UGC创作+社交互动"于一体的青年文化科普社区。
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">竞品调研</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">原型落地</span>
              </div>
            </div>
          </Link>

          <Link to="/portfolio/3" state={{ from: 'home' }} className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="relative w-full aspect-video overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("/projects/intern-website.png")',
                }}
              ></div>
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
                B端系统
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">高校毕业实习管理系统</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-3">
                针对传统手工实习管理效率低下的痛点，主导设计涵盖学生、教师、管理员三端的全流程信息化管理系统。
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">业务流程图</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">多端协同</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-8 md:hidden flex justify-center">
          <Link to="/portfolio" className="flex items-center text-primary font-semibold hover:underline gap-1">
            查看全部项目 <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      <section className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">我的跨界之路</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              我的旅程始于新闻传播，在那里我学到每个故事都需要结构和受众。从撰写报道到策划专题，从分析数据到设计原型——我不断拓展自己的能力边界，将新闻传播的核心素养融入到用户研究、内容策划和产品设计等多个领域。
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              我相信，新闻学训练出的用户洞察力、信息架构思维和跨团队协作能力，能够在不同的工作场景中持续发挥价值。无论是深入的用户调研、精细的内容运营，还是从零到一的产品设计，我都乐于探索和实践。
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link to="/about" className="text-slate-900 dark:text-white font-bold hover:text-primary transition-colors flex items-center gap-2">
                阅读完整故事 <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
