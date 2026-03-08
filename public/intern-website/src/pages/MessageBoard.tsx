import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, User } from 'lucide-react';

const mockMessages = [
  {
    id: 1,
    author: '张同学',
    time: '2023-06-01 14:30',
    content: '老师您好，请问实习报告的字数要求是多少？',
    reply: {
      author: '李老师',
      time: '2023-06-01 15:10',
      content: '同学你好，实习报告字数要求不少于3000字，具体格式请参考文件模板中的撰写规范。'
    }
  },
  {
    id: 2,
    author: '王同学',
    time: '2023-06-02 09:15',
    content: '实习单位的接收证明需要盖公章吗？如果没有公章只有人事部门的章可以吗？',
    reply: null
  },
  {
    id: 3,
    author: '赵同学',
    time: '2023-06-03 11:20',
    content: '系统里提交资料的时候提示文件过大，请问附件大小限制是多少？',
    reply: {
      author: '系统管理员',
      time: '2023-06-03 11:45',
      content: '附件大小限制为50MB，如果您的文件过大，建议压缩后再上传。'
    }
  }
];

export default function MessageBoard() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 留言输入区 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-[#2D8061]" />
          我要留言
        </h3>
        <textarea 
          className="w-full h-32 p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D8061] resize-none mb-4"
          placeholder="请输入您的留言内容，老师或管理员会尽快回复您..."
        ></textarea>
        <div className="flex justify-end">
          <Button className="bg-[#2D8061] hover:bg-[#23664d] rounded-full px-8">
            <Send className="w-4 h-4 mr-2" /> 发布留言
          </Button>
        </div>
      </div>

      {/* 留言列表区 */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">最新留言 ({mockMessages.length})</h3>
        
        {mockMessages.map(msg => (
          <div key={msg.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#A4CBB4] flex items-center justify-center text-white shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">{msg.author}</span>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                <p className="text-gray-700 mb-4">{msg.content}</p>
                
                {/* 回复区 */}
                {msg.reply ? (
                  <div className="bg-gray-50 p-4 rounded-md border-l-4 border-[#2D8061]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-[#2D8061]">{msg.reply.author} (回复)</span>
                      <span className="text-xs text-gray-500">{msg.reply.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{msg.reply.content}</p>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" className="text-[#2D8061] hover:text-[#23664d] hover:bg-[#A4CBB4]/20">
                      回复
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
