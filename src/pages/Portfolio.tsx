import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';
import { projectsData } from '../data/projectsData';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('全部');

  // 提取所有不重复的分类（由于项目类别较多，使用 subcategory 能更好地规整同类项目）
  const categories = ['全部', ...Array.from(new Set(projectsData.map((p) => p.subcategory)))];

  // 根据当前激活的 tab 过滤项目
  const filteredProjects =
    activeTab === '全部'
      ? projectsData
      : projectsData.filter((p) => p.subcategory === activeTab);

  return (
    <div className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-10 w-full">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full mx-auto flex-1 gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">我的项目</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
            以下是我在用户研究、内容策划、产品设计和数据分析等领域的实践项目。每个项目都体现了我将新闻传播素养与数字产品实践相结合的尝试。
          </p>
        </div>

        {/* 动态渲染分类按钮 */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-transform active:scale-95 ${activeTab === category
                  ? 'bg-primary text-white hover:scale-105'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:border-primary/50'
                }`}
            >
              <span className={`text-sm ${activeTab === category ? 'font-bold' : 'font-medium'}`}>
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* 动态渲染项目列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800 p-0 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${project.heroImage}")`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    查看案例研究
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2 px-5 pb-5 pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${project.categoryColor}`}
                  >
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    {project.subcategory}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
                  {project.tools.slice(0, 2).map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {tool.icon}
                      </span>{' '}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
