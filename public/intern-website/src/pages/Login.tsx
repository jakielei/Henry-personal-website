import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, GraduationCap } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Illustration & Branding */}
      <div className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden bg-[#1a4d3a]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students working together" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#2D8061]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#133829] via-transparent to-transparent opacity-90" />
        </div>

        {/* Content over image */}
        <div className="relative z-10 w-full max-w-xl p-12 text-white">
          <div className="mb-12">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 shadow-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              连接校园与职场<br />开启职业新篇章
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              为高校毕业生提供全方位的实习管理服务，助力学生顺利完成从校园到职场的过渡，实现高质量就业。
            </p>
          </div>

          {/* Decorative stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-white">10k+</div>
              <div className="text-sm text-white/70 font-medium">合作优质企业</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <div className="text-4xl font-bold mb-2 text-white">50k+</div>
              <div className="text-sm text-white/70 font-medium">成功实习案例</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#A4CBB4] rounded-l-[100px] shadow-[-20px_0_50px_-15px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-md p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">高校毕业实习管理信息系统</h1>
            <h2 className="text-2xl font-bold text-gray-900">登录</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D8061] sm:text-sm"
                placeholder="请输入用户名"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2D8061] sm:text-sm"
                placeholder="请输入密码"
                required
              />
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <span className="font-medium">角色</span>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-[#2D8061] focus:ring-[#2D8061]"
                />
                <span>管理员</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-[#2D8061] focus:ring-[#2D8061]"
                />
                <span>学生</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="teacher"
                  checked={role === 'teacher'}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-[#2D8061] focus:ring-[#2D8061]"
                />
                <span>教师</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-[#2D8061] hover:bg-[#23664d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D8061]"
            >
              登录
            </button>

            <div className="flex justify-between text-sm text-white px-2">
              <a href="#" className="hover:underline">注册学生</a>
              <a href="#" className="hover:underline">注册教师</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
