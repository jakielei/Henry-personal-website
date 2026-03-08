import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, FileText, Edit, Trash2 } from 'lucide-react';

const mockData = [
  {
    id: '1',
    title: '资料标题1',
    teacherAccount: '教师账号1',
    teacherName: '教师姓名1',
    studentId: '学号1',
    studentName: '姓名1',
    score: '1',
    date: '2022-04-10',
  }
];

export default function GradeList() {
  // We'll simulate teacher view to show all buttons
  const isTeacher = true;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="资料标题" className="pl-9" />
        </div>
        <div className="relative w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="教师姓名" className="pl-9" />
        </div>
        <div className="relative w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="姓名" className="pl-9" />
        </div>
        <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">查询</Button>
      </div>

      {isTeacher && (
        <div className="flex space-x-2">
          <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-6">
            <Trash2 className="w-4 h-4 mr-2" /> 删除
          </Button>
        </div>
      )}

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"><input type="checkbox" /></TableHead>
              <TableHead>索引</TableHead>
              <TableHead>资料标题</TableHead>
              <TableHead>教师账号</TableHead>
              <TableHead>教师姓名</TableHead>
              <TableHead>学号</TableHead>
              <TableHead>姓名</TableHead>
              <TableHead>分数</TableHead>
              <TableHead>评分日期</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell><input type="checkbox" /></TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.teacherAccount}</TableCell>
                <TableCell>{row.teacherName}</TableCell>
                <TableCell>{row.studentId}</TableCell>
                <TableCell>{row.studentName}</TableCell>
                <TableCell>{row.score}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center space-x-2">
                    <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                      <FileText className="w-3 h-3 mr-1" /> 详情
                    </Button>
                    {isTeacher && (
                      <>
                        <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                          <Edit className="w-3 h-3 mr-1" /> 修改
                        </Button>
                        <Button size="sm" className="bg-[#2D8061] hover:bg-[#23664d] rounded-full h-8 px-4 text-xs">
                          <Trash2 className="w-3 h-3 mr-1" /> 删除
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <span>共 1 条</span>
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
