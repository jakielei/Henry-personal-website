import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { honorsData } from '../data/honorsData';
import { motion } from 'motion/react';
import { scaleIn, staggerContainer, fadeInUp } from '../utils/motion-variants';

export default function HonorDetail() {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const honor = honorsData.find((h) => h.id === id);

    if (!honor) {
        return <Navigate to="/honors" replace />;
    }

    const backPath = location.state?.from || '/honors';
    const backText = backPath.includes('/about') ? '返回关于我' : '返回荣誉与认证';

    return (
        <div className="layout-container flex h-full grow flex-col w-full">
            <div className="px-5 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
                <div className="layout-content-container flex flex-col max-w-[800px] w-full flex-1">
                    {/* 返回按钮 */}
                    <div className="mb-8">
                        <Link
                            to={backPath}
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium"
                        >
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            {backText}
                        </Link>
                    </div>

                    {/* 证书图片 */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm mb-8"
                    >
                        <img
                            src={honor.image}
                            alt={honor.title}
                            className="w-full h-auto object-contain"
                            style={{ minHeight: '300px' }}
                        />
                    </motion.div>

                    {/* 信息区域 */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1">
                                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                                    {honor.category}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                                    {honor.title}
                                </h1>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">apartment</span>
                                    <span className="text-lg text-slate-600 dark:text-slate-400">
                                        {honor.issuer}
                                    </span>
                                </div>
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full whitespace-nowrap font-semibold self-start">
                                {honor.date}
                            </span>
                        </motion.div>

                        <div className="h-px w-full bg-slate-200 dark:bg-slate-700"></div>

                        <motion.div variants={fadeInUp}>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">description</span>
                                详细介绍
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                                {honor.description}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
