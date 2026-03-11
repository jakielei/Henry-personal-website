export interface ContactCTAProps {
    title?: string;
    description?: string;
    className?: string;
}
import { motion } from 'motion/react';
import { fadeInUp } from '../utils/motion-variants';

export default function ContactCTA({
    title = "对我的项目感兴趣吗？",
    description = "欢迎与我交流合作与实习机会，期待与你的连接。",
    className = ""
}: ContactCTAProps) {
    return (
        <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col items-center justify-center gap-6 px-4 py-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mt-8 ${className}`}
        >
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white max-w-2xl">
                    {title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-lg mx-auto">
                    {description}
                </p>
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
                联系我
            </motion.button>
        </motion.div>
    );
}
