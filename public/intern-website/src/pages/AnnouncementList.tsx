import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, FileText, Edit, Trash2, Plus } from 'lucide-react';

const mockData = [
  { id: '1111111111', title: '标题1', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人1' },
  { id: '2222222222', title: '标题2', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人2' },
  { id: '3333333333', title: '标题3', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人3' },
  { id: '4444444444', title: '标题4', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人4' },
  { id: '5555555555', title: '标题5', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人5' },
  { id: '6666666666', title: '标题6', attachment: '下载', time: '2022-04-10 11:29:55', publisher: '发布人6' },
];

export default function AnnouncementList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="标题" className="pl-9" />
        </div>
        <div className="relative w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="发布人" className="pl-9" />
        </div>
        <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">查询</Button>
      </div>

      <div className="flex space-x-2">
        <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">
          <Plus className="w-4 h-4 mr-2" /> 新增
        </Button>
        <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">
          <Trash2 className="w-4 h-4 mr-2" /> 删除
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"><input type="checkbox" /></TableHead>
              <TableHead>索引</TableHead>
              <TableHead>编号</TableHead>
              <TableHead>标题</TableHead>
              <TableHead>附件信息</TableHead>
              <TableHead>发布时间</TableHead>
              <TableHead>发布人</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell className="text-[#00c292] cursor-pointer hover:underline">{row.attachment}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.publisher}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center space-x-2">
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <FileText className="w-3 h-3 mr-1" /> 详情
                    </Button>
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <Edit className="w-3 h-3 mr-1" /> 修改
                    </Button>
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <Trash2 className="w-3 h-3 mr-1" /> 删除
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>共 6 条</span>
        <select className="border rounded px-2 py-1">
          <option>10条/页</option>
        </select>
        <div className="flex space-x-1">
          <button className="px-2 py-1 border rounded bg-gray-50 text-gray-400 cursor-not-allowed">&lt;</button>
          <button className="px-3 py-1 border rounded bg-[#00c292] text-white">1</button>
          <button className="px-2 py-1 border rounded bg-gray-50 text-gray-400 cursor-not-allowed">&gt;</button>
        </div>
      </div>
    </div>
  );
}
