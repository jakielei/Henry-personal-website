import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { honorsData, honorCategories, getHonorsByCategory } from '../data/honorsData';

export default function HonorsCollection() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location.hash]);

    return (
        <div className="layout-container flex h-full grow flex-col w-full">
            <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
                <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1">
                    {/* 返回 + 标题 */}
                    <div className="mb-8">
                        <Link
                            to="/about#honors"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium mb-6"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            返回关于我
                        </Link>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 dark:bg-slate-200 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white dark:text-slate-800 text-2xl">military_tech</span>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">荣誉与认证</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                                    共 {honorsData.length} 项，涵盖竞赛、证书、实践、实习与校园荣誉
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 分类区块 */}
                    <div className="flex flex-col gap-14">
                        {honorCategories.map((cat) => {
                            const items = getHonorsByCategory(cat.key);
                            if (items.length === 0) return null;
                            return (
                                <section key={cat.key}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className={`material-symbols-outlined text-2xl ${cat.color}`}>{cat.icon}</span>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{cat.key}</h2>
                                        <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">({items.length})</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {items.map((honor) => (
                                            <Link
                                                key={honor.id}
                                                id={`honor-${honor.id}`}
                                                to={`/honors/${honor.id}`}
                                                state={{ from: `/honors#honor-${honor.id}` }}
                                                className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                            >
                                                <div className="w-full shrink-0 aspect-[5/3] bg-slate-50 dark:bg-slate-700/50 overflow-hidden">
                                                    <img
                                                        src={honor.image}
                                                        alt={honor.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="p-4 flex flex-col flex-1">
                                                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                                                        {honor.title}
                                                    </h3>
                                                    <div className="flex items-center justify-between gap-2 mt-auto">
                                                        <span className="text-sm text-slate-500 dark:text-slate-400 flex-1 truncate" title={honor.issuer}>
                                                            {honor.issuer}
                                                        </span>
                                                        <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap font-medium">
                                                            {honor.date}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
