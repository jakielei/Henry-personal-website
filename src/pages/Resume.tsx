import ContactCTA from '../components/ContactCTA';

export default function Resume() {
  return (
    <div className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-10 w-full">
      <div className="layout-content-container flex flex-col max-w-[900px] w-full mx-auto flex-1 gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">个人简历</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">夏好磊 | 男 · 22岁 · 17679055790 · henryhsia@163.com</p>
          </div>
          <a
            href="/resume.pdf"
            download="夏好磊_简历.pdf"
            className="print:hidden flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold transition-transform active:scale-95 hover:bg-blue-600 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            下载 PDF
          </a>
        </div>

        <div className="flex flex-col gap-12">
          {/* 教育背景 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">school</span>
              教育背景
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">北京师范大学（985）</h3>
                  <p className="text-primary font-medium">新闻与传播专业学位硕士</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">荣誉/职务：保研至北京师范大学新闻传播学院，现任专硕班班长</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">GPA: 3.7/4.0</p>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap">
                  2025.09 至今
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">中南大学（985）</h3>
                  <p className="text-primary font-medium">数字出版</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">GPA: 90.62/100（12/89，前15%）</p>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm mt-2 space-y-1">
                    <li>核心课程：计算机程序设计基础(Python) (93)、数据库技术与应用 (93)、数据结构 (90)、网页设计和网站建设 (92)、计算机辅助音频编辑 (90)、电视图像与编辑制作 (91)、信息检索与利用 (92) 等</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap">
                  2021.09 - 2025.06
                </div>
              </div>
            </div>
          </section>

          {/* 实习经历 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work</span>
              实习经历
            </h2>
            <div className="flex flex-col gap-8">
              {/* 中央网络安全和信息化委员会办公室 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">中央网络安全和信息化委员会办公室（网信办）</h3>
                  <p className="text-primary font-medium mb-3">网络空间研究院实习生</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【内容评估】</strong>深度参与"2025中国正能量AI精品案例展播"项目，负责全国超1000份AIGC投稿作品的资质审核，建立多维度内容评估矩阵，完成作品初步评审评级，为高层复评提供可靠决策依据</li>
                    <li><strong>【合规排查】</strong>聚焦生成式AI合规管理，主导610份入围作品的专项排查，严格依据国家深度合成内容管理规范，逐一核验"AI生成合成标识"，确保展播内容100%合规</li>
                    <li><strong>【评审统筹】</strong>作为核心角色深度参与多轮内部评审会，负责会议流程推进与AI案例展示，协同跨部门人员及创作者进行意见反馈与沟通，保障项目评审流程高效落地</li>
                    <li><strong>【生态治理】</strong>针对当前主流UGC平台的审核漏洞开展定向研究，剖析网络博主利用"对抗性语言模糊策略"规避机器巡查的手段与传播机制，深度参与相关内参报告的撰写，从平台治理与算法迭代的视角输出监管建议</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2026.01 - 2026.03
                </div>
              </div>

              {/* 湖南广播电视台国际频道 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">湖南广播电视台国际频道</h3>
                  <p className="text-primary font-medium mb-3">国际业务部实习生</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【海外用户增长与多端运营】</strong>负责千万级粉丝传统文化IP"山白"的海外媒体账号矩阵运营，利用Meta BS平台整合了"山白"Facebook和Instagram账号，实现双端同步运营，通过分析海外公众画像与内容数据进行分发策略优化，最终实现Instagram账号粉丝突破10w+，YouTube账号涨粉超2w</li>
                    <li><strong>【海外市场调研与商业策划】</strong>为《唱响非洲》海外文娱项目进行前期商业化调研，探集并分析目标市场（肯尼亚）的用户基础、商业中心与KOL资源，独立输出项目前景分析报告，并策划产品表现形式与赛制链路，为项目冷启动提供决策支撑</li>
                    <li><strong>【大型项目统筹与落地执行】</strong>参与第四届长沙慈善榜及2024中国新媒体大会国际传播论坛筹备，作为场地统筹及志愿者负责人，管理多方人员调度及物料资产，保障千人级规模活动顺利落地</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2024.09 - 2024.11
                </div>
              </div>

              {/* 湖南日报社 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">湖南日报社</h3>
                  <p className="text-primary font-medium mb-3">经济频道实习记者</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【选题策划】</strong>结合宏观数据变化与社会热点事件，围绕居民消费、投资理财、就业创业等核心泛财经领域进行深度需求分析，精准捕捉受众痛点，累计主导完成10+次深度选题与策略输出</li>
                    <li><strong>【内容运营】</strong>协助运营湖南日报官方泛财经类机构公众号"侃财邦"，负责图文内容的视觉交互排版，累计完成公众号推文排版编辑10+篇；为"侃财邦"公众号供稿多篇，累计阅读量1w+次；为湖南日报新媒体平台"新湖南"经济要闻版块供通讯稿一篇，阅读量3w+次</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2023.07 - 2023.08
                </div>
              </div>
            </div>
          </section>

          {/* 校园经历 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">groups</span>
              校园经历
            </h2>
            <div className="flex flex-col gap-8">
              {/* 北京师范大学计算传播研究中心 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">北京师范大学计算传播研究中心</h3>
                  <p className="text-primary font-medium mb-3">内参撰写（中央网信办合作项目）</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【网络舆情洞察与数据分析】</strong>针对特定网络生态与突发舆情事件，进行多维度的数据抓取与信息清洗，通过提炼核心演化路径、受众情绪画像与潜在风险点，输出深度的舆情态势分析</li>
                    <li><strong>【风控策略提炼与智库支撑】</strong>将底层的舆情洞察转化为宏观的治理策略，参与撰写多份高质量智库内参，为国家级网络信息部门提供关于内容风控与网络生态治理的底层决策依据</li>
                    <li><strong>【高优成果交付】</strong>已有3篇内参报告成果获官方采纳与高度认可，并获得中央网信办网络空间研究院下发的官方感谢信（作为核心成员）</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2025.09 至今
                </div>
              </div>

              {/* 中南大学学生学习指导与发展中心 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">中南大学学生学习指导与发展中心</h3>
                  <p className="text-primary font-medium mb-3">新媒体中心干事</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【工作概况】</strong>主要负责"学在中南"微信公众号和视频号的管理与运营，参与线上线下宣传工作，含文案撰写、影像资料拍摄、新闻稿外宣稿撰写、宣传品制作、人物专访等内容</li>
                    <li><strong>【工作成果】</strong>累计产出微信公众号推送的文案撰写或排版50+篇，总计阅读点击量4w+；产出微信公众号海报或封面的宣传品40+张；获得中南大学2022年度勤工助学先进个人</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2021.10 - 2023.05
                </div>
              </div>
            </div>
          </section>

          {/* 项目经历 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">rocket_launch</span>
              项目经历
            </h2>
            <div className="flex flex-col gap-8">
              {/* 大学生创新创业训练计划省级立项项目 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">大学生创新创业训练计划省级立项项目</h3>
                  <p className="text-primary font-medium mb-3">核心成员</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【项目概况】</strong>项目《桥守以盼：新材料与大模型赋能古桥保护及乡村振兴》运用泛媒体电子商务模式充分发挥湖南省邵阳市隆回县、湖南省娄底市新化县自身的山水资源、历史人文等优势，搭建古桥乡音APP、旅乡画桥文旅网等服务平台，推动文旅产业与互联网融合发展，助力新化县、滩头镇乡村振兴</li>
                    <li><strong>【核心工作】</strong>负责APP、文旅网产品设计，使用Axure进行网页设计制作及APP程序设计，进行项目可行性分析，完成交互设计、视觉设计、功能设计等工作</li>
                    <li><strong>【成果】</strong>项目获得省级立项；入选中南大学2023年"青年红色筑梦之旅"项目</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2024.04 - 2025.03
                </div>
              </div>

              {/* 梗百科APP */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">"梗百科"APP——数字出版产品设计课程作业</h3>
                  <p className="text-primary font-medium mb-3">第一负责人</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【项目背景】</strong>针对网络梗文化内容分散、解释碎片化痛点，主导设计「梗百科」APP，构建集热梗查询、UGC创作、社交互动于一体的文化平台，覆盖4类核心用户</li>
                    <li><strong>【核心工作】</strong>需求与竞品分析，调研10+同类产品，提炼5大痛点，通过用户问卷证需求，明确"专业解释+UGC生态"定位；产品架构设计，规划7大核心板块（首页/发现/创建等），产出原型图及交互设计</li>
                    <li><strong>【成果】</strong>完成从需求到落地全流程，产出20页设计报告及使用说明书；作品获得92分的高分成绩</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2023.11 - 2023.12
                </div>
              </div>

              {/* 高校毕业实习管理信息系统 */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">高校毕业实习管理信息系统——信息系统分析与设计课程作业</h3>
                  <p className="text-primary font-medium mb-3">第一负责人</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li><strong>【项目背景】</strong>针对高校传统手工实习管理效率低下、信息不同步问题，主导设计B/S架构信息化系统，实现学生、教师、管理员三端协同管理，覆盖实习信息上传、审批、成绩管理全流程</li>
                    <li><strong>【核心工作】</strong>完成业务需求分析、业务流程分析、数据流程分析、系统功能结构设计、数据库设计、交互界面设计等从0到1的全流程产品设计，制作了需求分析表、业务流程图、数据流程图、系统功能结构图、22个交互界面等内容</li>
                    <li><strong>【成果】</strong>产出21页的产品设计报告；作品获得"良好"等级成绩</li>
                  </ul>
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm font-medium whitespace-nowrap mt-1 md:mt-0 md:ml-4">
                  2023.11 - 2023.12
                </div>
              </div>
            </div>
          </section>

          {/* 技能/荣誉 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">build</span>
              技能/荣誉
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">产品/数据技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">原型设计（Axure、墨刀等）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">数据分析（SPSS、Python）</span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">通用技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">英语（CET-6: 601, CET-4: 603）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">Office办公软件（计算机二级）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">视频剪辑（PR、剪映等）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">物料宣传制作（PS、Canva等）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">排版编辑（秀米编辑器、135编辑器等）</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">公众号运营</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">文案撰写</span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-700 dark:text-slate-300">摄影摄像</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">荣誉与奖项</h3>
              <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-400 text-sm space-y-2">
                <li>北京师范大学勤工助学优秀个人</li>
                <li>连续3年获秋中南大学校学年三等奖学金（前20%）</li>
                <li>2022年中南大学先进个人（前25%）</li>
                <li>"外研社·国才杯"全国大学生外语能力大赛校赛三等奖</li>
                <li>全国大学生延安精神志愿宣讲活动优秀文创奖等</li>
              </ul>
            </div>
          </section>
        </div>
        <ContactCTA title="对我的经历感兴趣吗？" />
      </div>
    </div>
  );
}
