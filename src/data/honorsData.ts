export interface HonorItem {
    id: string;
    category: '竞赛获奖' | '考试证书' | '社会实践获奖' | '实习证明' | '学校荣誉';
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string;
    featured?: boolean;
}

export const honorCategories = [
    { key: '竞赛获奖', icon: 'emoji_events', color: 'text-amber-500' },
    { key: '考试证书', icon: 'workspace_premium', color: 'text-blue-500' },
    { key: '社会实践获奖', icon: 'volunteer_activism', color: 'text-rose-500' },
    { key: '实习证明', icon: 'business_center', color: 'text-emerald-500' },
    { key: '学校荣誉', icon: 'school', color: 'text-violet-500' },
] as const;

export const honorsData: HonorItem[] = [
    // ======== 竞赛获奖 (3) ========
    {
        id: 'waiyanshe-english-competition',
        category: '竞赛获奖',
        title: '“外研社·国才杯”全国大学生外语能力大赛三等奖',
        issuer: '中南大学创新与创业教育办公室',
        date: '2023',
        image: '/honors/外研社国才杯图片.jpg',
        description:
            '在2023“外研社·国才杯”“理解当代中国”全国大学生外语能力大赛校赛中，以扎实的英语阅读功底与语言综合运用能力，荣获英语组阅读赛项三等奖。',
        featured: true,
    },
    {
        id: 'dachuang-excellent-project',
        category: '竞赛获奖',
        title: '大学生创新创业训练计划省级优秀项目',
        issuer: '中南大学创新与创业教育办公室',
        date: '2025.05',
        image: '/honors/大创省级优秀项目.jpg',
        description:
            '作为项目成员参与的大创（大学生创新创业训练计划）省级项目“桥守以盼：新材料与大模型赋能古桥保护及乡村振兴”，经学校专家工作组评审，顺利结题并获评“优秀项目”。该项目利用前沿数字技术探索了文旅产业赋能古桥文化保护的新路径。',
    },
    {
        id: 'network-culture-festival',
        category: '竞赛获奖',
        title: '大学生网络文化节“其他类网络创新作品”优秀奖',
        issuer: '中南大学学生工作部（处）、共青团中南大学委员会',
        date: '2023.12',
        image: '/honors/网络文化节.jpg',
        description:
            '参与创作的作品在“争做校园好网民，汇聚网络正能量，挺膺担当建新功”中南大学第七届大学生网络文化节“其他类网络创新作品大赛”中表现突出，经评审荣获优秀奖。',
    },

    // ======== 考试证书 (3) ========
    {
        id: 'ncre-level-2',
        category: '考试证书',
        title: '全国计算机等级考试二级合格证书',
        issuer: '教育部教育考试院',
        date: '2022.09',
        image: '/honors/0001.jpg',
        description:
            '通过参加由教育部教育考试院主办的全国计算机等级考试（NCRE），成绩合格，获得二级 WPS Office 高级应用与设计合格证书。该证书证明了在日常办公和设计中能够熟练运用 WPS Office 软件的高级功能。',
        featured: true,
    },
    {
        id: 'cet4',
        category: '考试证书',
        title: '全国大学英语四级考试（CET4）成绩单',
        issuer: '教育部考试中心',
        date: '2021.12',
        image: '/honors/CET4.jpg',
        description:
            '参加由教育部主办的全国统一考试——全国大学英语四级考试（CET4），成绩总分为603分。其中英语听力234分，阅读215分，写作和翻译154分，体现了扎实的英语综合应用能力。',
    },
    {
        id: 'cet6',
        category: '考试证书',
        title: '全国大学英语六级考试（CET6）成绩单',
        issuer: '教育部教育考试院',
        date: '2024.06',
        image: '/honors/CET6.JPG',
        description:
            '参加由教育部主办的全国统一考试——全国大学英语六级考试（CET6），成绩总分达601分，具备优秀的英语听、说、读、写、译等语言技能，能熟练地使用英语进行日常交流和专业领域文献的阅读。',
        featured: true,
    },

    // ======== 社会实践获奖 (7) ========
    {
        id: 'mandarin-promotion',
        category: '社会实践获奖',
        title: '大学生暑期社会实践“推普助力乡村振兴”三等奖',
        issuer: '国家语言文字推广基地（中南大学）',
        date: '2024.09',
        image: '/honors/推普助力乡村振兴三等奖.png',
        description:
            '作为“童心推普，多彩乌石”实践团队成员，参与中南大学2024年“推普助力乡村振兴”大学生暑期社会实践志愿服务活动。在活动中表现优异，通过推普实践为乡村教育贡献力量，荣获三等奖。',
        featured: true,
    },
    {
        id: 'civilization-journey-individual',
        category: '社会实践获奖',
        title: '“以青春之名 行文明之旅”全国大学生文明旅游暑期实践活动优秀实践个人',
        issuer: '文化和旅游部市场管理司、教育部思想政治工作司、共青团中央青年发展部',
        date: '2024.09',
        image: '/honors/文明之旅优秀实践个人.png',
        description:
            '在由多部委联合主办的2024年“以青春之名 行文明之旅”全国大学生文明旅游暑期实践活动中表现优异，被评为“优秀实践个人”。在实践过程中积极传播文明旅游理念，展现了新时代大学生的责任与担当。',
    },
    {
        id: 'two-bombs-one-satellite',
        category: '社会实践获奖',
        title: '2024年全国大学生“两弹一星”精神志愿宣讲项目优秀团队',
        issuer: '团中央青年志愿者行动指导中心、中国青年志愿者协会秘书处',
        date: '2025.02',
        image: '/honors/两弹一星志愿宣讲优秀团队.png',
        description:
            '作为“文小鹿”宣讲团成员，参与2024年全国大学生“两弹一星”精神志愿宣讲项目。在宣讲活动中圆满完成各项任务，展现了优秀的团队协作能力。因成绩突出、为志愿服务作出积极贡献，所在团队被评为“优秀团队”。',
    },
    {
        id: 'two-bombs-one-satellite-individual',
        category: '社会实践获奖',
        title: '2024年全国大学生“两弹一星”精神志愿宣讲项目个人证书',
        issuer: '团中央青年志愿者行动指导中心、中国青年志愿者协会秘书处',
        date: '2025.02',
        image: '/honors/两弹一星个人证书.png',
        description:
            '在2024年全国大学生“两弹一星”精神志愿宣讲项目中，积极参与并圆满完成各项志愿服务任务。因在弘扬“两弹一星”精神及参与志愿服务过程中作出的积极贡献，获得个人荣誉证书表彰。',
    },
    {
        id: 'yanan-spirit-individual',
        category: '社会实践获奖',
        title: '2024年全国大学生延安精神志愿宣讲活动个人证书',
        issuer: '团中央青年志愿者行动指导中心、中国青年志愿者协会秘书处',
        date: '2024.07',
        image: '/honors/延安精神志愿宣讲个人证明_1.JPG',
        description:
            '在2024年全国大学生延安精神志愿宣讲活动中积极表现，圆满完成了各项志愿服务任务。因在弘扬延安精神及宣讲活动中为志愿服务作出的积极贡献，特获此证。',
    },
    {
        id: 'yanan-spirit-creative',
        category: '社会实践获奖',
        title: '2024年全国大学生延安精神志愿宣讲活动优秀文创',
        issuer: '团中央青年志愿者行动指导中心、中国青年志愿者协会秘书处',
        date: '2024.03',
        image: '/honors/延安精神志愿宣讲优秀文创_1.JPG',
        description:
            '作为“文小鹿”宣讲团成员参与2024年全国大学生延安精神志愿宣讲活动，团队圆满完成宣讲任务。在活动中展现出了较强的团队创新能力，创作的文创作品经评审被评为“优秀文创”。',
    },
    {
        id: 'new-era-lei-feng-performance',
        category: '社会实践获奖',
        title: '《新时代 新雷锋》文艺晚会演出纪念证书',
        issuer: '中共湖南省委宣传部',
        date: '2023.03',
        image: '/honors/新时代-新雷锋文艺晚会演出证明.jpg',
        description:
            '参演《新时代 新雷锋》——纪念毛泽东等老一辈革命家为雷锋同志题词六十周年文艺晚会，于2023年3月5日在湖南广播电视台节目生产基地七彩盒子演出圆满成功。为晚会的成功举办作出了积极努力和贡献。',
    },

    // ======== 实习证明 (3) ========
    {
        id: 'hunan-broadcasting-internship',
        category: '实习证明',
        title: '湖南广播电视台国际频道实习证明',
        issuer: '湖南广播电视台国际频道',
        date: '2024.10',
        image: '/honors/湖南广电国际频道实习证明（中文）.png',
        description:
            '在湖南广播电视台国际频道进行了为期8周的实习。实习期间参与了活动执行、新媒体运营等多种任务，表现出深厚的专业素养和优秀品德，工作细心踏实，出色完成了各项工作。',
    },
    {
        id: 'hunan-daily-internship',
        category: '实习证明',
        title: '湖南日报社经济频道实习证明',
        issuer: '湖南日报社',
        date: '2023.07',
        image: '/honors/湖南日报实习证明（中文）.png',
        description:
            '于2023年7月在湖南日报社经济频道实习，实习时长1个月。实习期间表现优秀，工作情况属实，特获此实习证明。',
    },
    {
        id: 'rong-media-center-internship',
        category: '实习证明',
        title: '中南大学融媒体发展研究中心实习证明',
        issuer: '中南大学人文学院',
        date: '2024.07',
        image: '/honors/融媒体研究中心实习证明.png',
        description:
            '自2023年10月至2024年7月，在中南大学融媒体发展研究中心实习，从事新媒体编辑相关工作。在将近一年的实习期间，态度积极且认真负责，得到了学院老师的一致认可。',
    },

    // ======== 学校荣誉 (6) ========
    {
        id: 'cac-adoption-certificate',
        category: '学校荣誉',
        title: '内参采纳证明',
        issuer: '中国网络空间研究院',
        date: '2026.03',
        image: '/honors/内参采纳证明.jpg',
        description:
            '参与撰写的涉及数字文化交流的相关材料被中国网络空间研究院内参报告采纳，并上报中央网信办领导参阅，为相关工作提供了支持。',
        featured: true,
    },
    {
        id: 'cac-thank-you-letter',
        category: '学校荣誉',
        title: '中国网络空间研究院感谢信',
        issuer: '中国网络空间研究院',
        date: '2025.12',
        image: '/honors/网空院感谢信.jpg',
        description:
            '在2025年《中国网信年鉴 2025》编纂等重难点协作重点任务中，倾力配合、通力协作。因付出辛劳并作出积极贡献，收到了中国网络空间研究院致北京师范大学新闻传播学院的感谢信特别致谢。',
        featured: true,
    },
    {
        id: 'academic-scholarship',
        category: '学校荣誉',
        title: '2021-2022学年奖学金三等奖',
        issuer: '中南大学学生工作部（处）',
        date: '2022.11',
        image: '/honors/学年奖学金（1）.jpg',
        description:
            '在2021—2022学年中，因学习成绩优良、综合表现突出，荣获中南大学学年奖学金三等奖。',
    },
    {
        id: 'academic-scholarship-2',
        category: '学校荣誉',
        title: '2022-2023学年奖学金三等奖',
        issuer: '中南大学学生工作部（处）',
        date: '2023.11',
        image: '/honors/学年奖学金（2）.jpg',
        description:
            '在2022—2023学年中表现优异，荣获中南大学2022—2023学年奖学金三等奖。过去的一个学年中，在学业成绩和综合表现上均取得了良好的成绩。',
    },
    {
        id: 'academic-scholarship-3',
        category: '学校荣誉',
        title: '2023-2024学年奖学金三等奖',
        issuer: '中南大学学生工作部（处）',
        date: '2024.12',
        image: '/honors/学年奖学金（3）.jpg',
        description:
            '荣获中南大学2023—2024学年奖学金三等奖，这是对过去一学年中优异的学业成绩和良好的综合素质的充分肯定。',
    },
    {
        id: 'work-study-advanced-individual',
        category: '学校荣誉',
        title: '中南大学2022年度勤工助学先进个人',
        issuer: '中南大学勤工助学指导中心',
        date: '2022.12',
        image: '/honors/勤工助学先进个人图片.jpg',
        description:
            '在勤工助学岗位上工作认真负责，尽职尽责完成各项任务，展现了良好的工作态度和能力。因表现优异，被中南大学勤工助学指导中心评为2022年度“勤工助学先进个人”。',
    },
];

export function getHonorsByCategory(category: string): HonorItem[] {
    return honorsData.filter((h) => h.category === category);
}

export function getFeaturedHonors(): HonorItem[] {
    return honorsData.filter((h) => h.featured);
}
