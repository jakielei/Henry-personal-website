import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, Bell, Briefcase, FileText, GraduationCap, MessageSquare, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: '首页', path: '/dashboard', icon: Home },
  {
    name: '个人中心',
    icon: User,
    children: [
      { name: '修改密码', path: '/profile/password' },
      { name: '个人信息', path: '/profile/info' },
    ],
  },
  {
    name: '公告信息管理',
    icon: Bell,
    children: [
      { name: '公告信息', path: '/announcements' },
    ],
  },
  {
    name: '实习信息管理',
    icon: Briefcase,
    children: [
      { name: '实习信息', path: '/internship' },
    ],
  },
  {
    name: '文件模板',
    icon: FileText,
    children: [
      { name: '模板列表', path: '/templates' },
    ],
  },
  {
    name: '学生成绩管理',
    icon: GraduationCap,
    children: [
      { name: '学生成绩', path: '/grades' },
    ],
  },
  {
    name: '留言板',
    icon: MessageSquare,
    children: [
      { name: '留言列表', path: '/messages' },
    ],
  },
];

export default function Layout() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['个人中心', '实习信息管理', '学生成绩管理', '公告信息管理']);

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const getBreadcrumb = () => {
    if (location.pathname.includes('password')) return '修改密码';
    if (location.pathname.includes('info')) return '个人信息';
    if (location.pathname.includes('internship')) return '实习计划';
    if (location.pathname.includes('grades')) return '学生成绩';
    if (location.pathname.includes('announcements')) return '公告信息';
    if (location.pathname.includes('templates')) return '模板列表';
    if (location.pathname.includes('messages')) return '留言板';
    return '首页';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="h-16 bg-[#A4CBB4] flex items-center justify-between px-8 shadow-sm z-10 shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">高校毕业实习管理信息系统</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-800 font-medium">
          <span>夏好磊 学生 学号1</span>
          <Link to="/login" className="hover:underline">退出登录</Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white overflow-y-auto flex-shrink-0 border-r border-gray-100 py-6">
          <nav className="space-y-4 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItems.includes(item.name);
              
              const isActive = item.path === location.pathname || 
                (hasChildren && item.children?.some(child => location.pathname.startsWith(child.path)));

              return (
                <div key={item.name} className="space-y-2">
                  {hasChildren ? (
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-r-full rounded-l-full bg-[#2D8061] text-white shadow-md hover:bg-[#23664d] transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-[#2D8061] p-1.5 rounded-full">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      to={item.path!}
                      className="w-full flex items-center px-4 py-3 rounded-r-full rounded-l-full bg-[#2D8061] text-white shadow-md hover:bg-[#23664d] transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white text-[#2D8061] p-1.5 rounded-full">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </Link>
                  )}

                  {hasChildren && isExpanded && (
                    <div className="space-y-1 mt-2 flex flex-col items-center">
                      {item.children?.map((child) => {
                        const isChildActive = location.pathname === child.path;
                        return (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={cn(
                              "block w-11/12 text-center py-2 text-sm transition-colors",
                              isChildActive
                                ? "bg-white text-gray-900 font-medium border-b-2 border-gray-800"
                                : "bg-gray-200 text-gray-600 hover:text-[#2D8061]"
                            )}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white relative">
          {/* Background watermark effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border-[20px] border-dashed border-gray-400 rotate-45"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            {/* Breadcrumb Area */}
            <div className="h-12 bg-[#A4CBB4] flex items-center px-6 text-sm text-gray-800 font-medium mb-6">
              首页 / <span className="ml-1 text-gray-600">{getBreadcrumb()}</span>
            </div>
            <div className="bg-white">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
