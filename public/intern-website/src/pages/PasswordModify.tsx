import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function PasswordModify() {
  return (
    <div className="max-w-2xl">
      <form className="space-y-6">
        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>原密码
          </label>
          <div className="flex-1">
            <Input type="password" />
          </div>
        </div>
        
        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>新密码
          </label>
          <div className="flex-1">
            <Input type="password" />
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-32 text-right pr-4 text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>确认密码
          </label>
          <div className="flex-1">
            <Input type="password" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-32 pr-4"></div>
          <Button type="submit" className="bg-[#00c292] hover:bg-[#00a37a] text-white px-8">确定</Button>
        </div>
      </form>
    </div>
  );
}
