import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const fromHome = (location.state as { from?: string })?.from === 'home';
  const backTo = fromHome ? '/' : '/portfolio';
  const backLabel = fromHome ? '返回首页' : '返回作品集';

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Find next project (circular)
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="layout-container flex h-full grow flex-col w-full">
      <div className="px-5 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="mb-6">
            <Link to={backTo} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {backLabel}
            </Link>
          </div>

          {/* Hero Section */}
          <div className="@container">
            <div className="flex flex-col gap-6 py-4 @[480px]:gap-8 @[864px]:flex-row">
              <div
                className="w-full bg-slate-200 dark:bg-slate-800 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2 overflow-hidden relative group"
                style={{ backgroundImage: `url("${project.heroImage}")` }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col justify-center gap-6 @[480px]:min-w-[400px] @[480px]:gap-6 @[864px]:w-1/2">
                <div className="flex flex-col gap-3 text-left">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">{project.category} · {project.subcategory}</span>
                  <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <div key={tag} className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-xs font-medium text-slate-500 dark:text-slate-400">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-8"></div>

          {/* Background & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-8">
            <div className="md:col-span-4">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                项目背景
              </h3>
            </div>
            <div className="md:col-span-8 flex flex-col gap-10">
              <div>
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-4">背景</h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {project.background}
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-4">问题陈述</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-medium italic leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            </div>
          </div>

          {/* Research & Data */}
          <div className="py-12">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-sm">search</span>
              </span>
              调研与数据
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {project.stats.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="text-primary text-4xl font-black mb-2">{stat.value}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.text}</p>
                </div>
              ))}
            </div>
            {project.quotes.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">关键洞察</h3>
                <div className="space-y-4">
                  {project.quotes.map((quote, i) => (
                    <div key={i}>
                      {i > 0 && <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-4"></div>}
                      <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-primary mt-1">format_quote</span>
                        <div>
                          <p className="text-slate-700 dark:text-slate-300 font-medium">{quote.text}</p>
                          <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">{quote.author}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solution */}
          <div className="py-12">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-sm">design_services</span>
              </span>
              解决方案
            </h2>
            <p
              className="text-slate-600 dark:text-slate-300 text-base mb-8 max-w-2xl"
              dangerouslySetInnerHTML={{
                __html: project.solutionText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {project.solutionImages.map((img, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative group">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url("${img.url}")` }}
                    ></div>
                    <div className={`absolute bottom-4 left-4 ${img.labelColor || 'bg-black/70'} text-white text-xs px-2 py-1 rounded`}>
                      {img.label}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">{img.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {project.demoLink && (
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border border-primary/20 dark:border-primary/30 rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                      <span className="material-symbols-outlined text-2xl">devices</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-lg">{project.demoLinkLabel || '成果展示'}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{project.demoLinkDesc || '点击查看在线交互原型，体验完整产品设计方案'}</p>
                    </div>
                  </div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    {project.demoLinkText || '查看原型演示'}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Results & Reflection */}
          <div className="py-12 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight mb-8 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </span>
              结果与反思
            </h2>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3">项目成果</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base mb-4 leading-relaxed">
                  {project.results.text}
                </p>
                <ul className="space-y-3">
                  {project.results.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-green-500 text-xl shrink-0">check_circle</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-3">我的收获</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base mb-4 leading-relaxed">
                  {project.reflection}
                </p>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className="py-12 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">下一个项目</span>
              <Link to={`/portfolio/${nextProject.id}`} className="text-slate-900 dark:text-white text-xl font-bold hover:text-primary transition-colors flex items-center gap-2">
                {nextProject.title}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
