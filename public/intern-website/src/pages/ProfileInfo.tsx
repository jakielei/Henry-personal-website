import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfileInfo() {
  return (
    <div className="max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">个人基本信息</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">学号/工号</label>
            <Input value="20220001" disabled className="bg-gray-50 text-gray-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">姓名</label>
            <Input defaultValue="夏好磊" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">性别</label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">联系电话</label>
            <Input placeholder="请输入手机号" defaultValue="13800138000" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">所属学院</label>
            <Input value="计算机科学与工程学院" disabled className="bg-gray-50 text-gray-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">专业班级</label>
            <Input value="软件工程2201班" disabled className="bg-gray-50 text-gray-500" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">电子邮箱</label>
            <Input placeholder="请输入邮箱" defaultValue="student@university.edu.cn" />
          </div>
        </div>
        <div className="pt-6 flex justify-center">
          <Button type="submit" className="bg-[#2D8061] hover:bg-[#23664d] px-12 rounded-full text-lg h-12">保存修改</Button>
        </div>
      </form>
    </div>
  );
}
