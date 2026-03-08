import React from 'react';
import { Briefcase, FileText, Bell, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: '我的实习', value: '进行中', icon: Briefcase, color: 'bg-blue-500' },
    { title: '已交材料', value: '3/5', icon: FileText, color: 'bg-green-500' },
    { title: '未读公告', value: '2', icon: Bell, color: 'bg-amber-500' },
    { title: '成绩状态', value: '未评定', icon: CheckCircle, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#2D8061] to-[#4aa382] rounded-xl p-8 text-white shadow-md">
        <h2 className="text-3xl font-bold mb-2">欢迎回来，夏好磊！</h2>
        <p className="text-white/80">今天是 {new Date().toLocaleDateString()}，祝您实习顺利。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`p-4 rounded-full text-white ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">最新公告</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-700 hover:text-[#2D8061] cursor-pointer truncate pr-4">关于提交实习中期检查报告的通知</span>
              <span className="text-gray-400 shrink-0">2023-05-20</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-700 hover:text-[#2D8061] cursor-pointer truncate pr-4">2023届毕业生实习安全须知</span>
              <span className="text-gray-400 shrink-0">2023-05-18</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-700 hover:text-[#2D8061] cursor-pointer truncate pr-4">优秀实习生评选办法公布</span>
              <span className="text-gray-400 shrink-0">2023-05-15</span>
            </li>
            <li className="flex justify-between items-center text-sm">
              <span className="text-gray-700 hover:text-[#2D8061] cursor-pointer truncate pr-4">实习系统使用指南及常见问题解答</span>
              <span className="text-gray-400 shrink-0">2023-05-10</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">待办事项</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-sm">
              <input type="checkbox" className="mr-3 rounded text-[#2D8061] focus:ring-[#2D8061]" />
              <span className="text-gray-700">提交实习周记 (第3周)</span>
            </li>
            <li className="flex items-center text-sm">
              <input type="checkbox" className="mr-3 rounded text-[#2D8061] focus:ring-[#2D8061]" />
              <span className="text-gray-700">联系校内指导老师汇报进度</span>
            </li>
            <li className="flex items-center text-sm">
              <input type="checkbox" checked readOnly className="mr-3 rounded text-[#2D8061] focus:ring-[#2D8061]" />
              <span className="text-gray-400 line-through">上传实习单位接收证明</span>
            </li>
            <li className="flex items-center text-sm">
              <input type="checkbox" checked readOnly className="mr-3 rounded text-[#2D8061] focus:ring-[#2D8061]" />
              <span className="text-gray-400 line-through">完善个人基本信息</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
