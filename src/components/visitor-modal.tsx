import { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';

// 定义 Visitor 类型
interface Visitor {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  school: string;
  fatherName: string;
  motherName: string;
  source: string;
  responsible: string;
  interest: string;
  visitDate: string;
  nextAppointment: string;
  status: 'new' | 'contacted';
}

// 定义 Note 类型
interface Note {
  id: string;
  content: string;
  createdAt: string;
}

export default function VisitorModal({ visitor, onClose }: { visitor: Visitor; onClose: () => void }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  // 模拟获取最近备注数据
  useEffect(() => {
    // 这里可以替换为实际从 API 获取数据的逻辑
    const mockNotes: Note[] = [
      { id: '1', content: 'Khách hàng quan tâm đến khóa học tiếng Anh cấp tốc.', createdAt: '2024-06-10T10:30:00Z' },
      { id: '2', content: 'Đã hẹn gặp vào thứ Ba tuần tới để tư vấn chi tiết.', createdAt: '2024-06-08T15:45:00Z' },
    ];
    setNotes(mockNotes);
  }, []);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now().toString(),
        content: newNote,
        createdAt: new Date().toISOString(),
      };
      setNotes([note, ...notes]);
      setNewNote('');
      setIsAddingNote(false);
    }
  };

  const handleCancelAddNote = () => {
    setNewNote('');
    setIsAddingNote(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">{visitor.name}</h2>
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${visitor.status === 'contacted' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}>
              {visitor.status === 'contacted' ? 'Đã liên hệ' : 'Mới'}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <XIcon />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-400">ĐIỆN THOẠI</p>
            <p className="text-white">{visitor.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">EMAIL</p>
            <p className="text-white">{visitor.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">NGÀY SINH</p>
            <p className="text-white">{visitor.birthDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">TRƯỜNG</p>
            <p className="text-white">{visitor.school}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">BỐ</p>
            <p className="text-white">{visitor.fatherName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">MẸ</p>
            <p className="text-white">{visitor.motherName}</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-blue-400 mb-3">THÔNG TIN TƯ VẤN</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">NGUỒN</p>
              <p className="text-white">{visitor.source}</p>
            </div>
            <div>
              <p className="text-gray-400">PHỤ TRÁCH</p>
              <p className="text-white">{visitor.responsible}</p>
            </div>
            <div>
              <p className="text-gray-400">QUAN TÂM</p>
              <p className="text-white">{visitor.interest}</p>
            </div>
            <div>
              <p className="text-gray-400">NGÀY GHÉ</p>
              <p className="text-white">{visitor.visitDate}</p>
            </div>
            <div>
              <p className="text-gray-400">HẸN LẦN SAU</p>
              <p className="text-red-500">{visitor.nextAppointment}</p>
            </div>
          </div>
        </div>

        // 新增：最近备注区域
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-blue-400 mb-3">NOTED GẦN NHẤT</h3>
          {notes.length > 0 ? (
            <ul className="space-y-2">
              {notes.map((note: Note) => (
                <li key={note.id} className="text-sm text-gray-300 p-2 bg-gray-800 rounded">
                  <p>{note.content}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(note.createdAt).toLocaleString('vi-VN')}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Chưa có ghi chú nào.</p>
          )}
        </div>

        // 新增：快速添加备注按钮
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setIsAddingNote(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Thêm nhanh Note
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Đóng
          </button>
        </div>

        // 新增：快速添加备注弹窗
        {isAddingNote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Thêm ghi chú</h3>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Nhập nội dung ghi chú..."
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleCancelAddNote}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddNote}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}