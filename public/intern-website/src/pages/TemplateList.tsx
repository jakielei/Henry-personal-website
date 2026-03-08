import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Download, Eye, Plus, Trash2 } from 'lucide-react';

const mockData = [
  { id: '1', name: '毕业实习鉴定表模板.doc', size: '45KB', time: '2023-05-10 10:00:00', uploader: '教务处' },
  { id: '2', name: '毕业实习报告撰写规范.pdf', size: '1.2MB', time: '2023-05-12 14:30:00', uploader: '教务处' },
  { id: '3', name: '实习单位接收证明模板.docx', size: '30KB', time: '2023-05-15 09:15:00', uploader: '教务处' },
  { id: '4', name: '优秀实习生推荐表.doc', size: '38KB', time: '2023-05-18 11:20:00', uploader: '教务处' },
];

export default function TemplateList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="搜索模板名称" className="pl-9" />
          </div>
          <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">查询</Button>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">
            <Plus className="w-4 h-4 mr-2" /> 上传模板
          </Button>
          <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">
            <Trash2 className="w-4 h-4 mr-2" /> 批量删除
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"><input type="checkbox" /></TableHead>
              <TableHead>索引</TableHead>
              <TableHead>模板名称</TableHead>
              <TableHead>文件大小</TableHead>
              <TableHead>上传时间</TableHead>
              <TableHead>上传者</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium text-[#2D8061] hover:underline cursor-pointer">{row.name}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.uploader}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center space-x-2">
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <Eye className="w-3 h-3 mr-1" /> 预览
                    </Button>
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <Download className="w-3 h-3 mr-1" /> 下载
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>共 {mockData.length} 条</span>
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
