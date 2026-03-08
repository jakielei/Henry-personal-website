import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PasswordModify from './pages/PasswordModify';
import ProfileInfo from './pages/ProfileInfo';
import InternshipList from './pages/InternshipList';
import GradeList from './pages/GradeList';
import AnnouncementList from './pages/AnnouncementList';
import TemplateList from './pages/TemplateList';
import MessageBoard from './pages/MessageBoard';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile/password" element={<PasswordModify />} />
          <Route path="profile/info" element={<ProfileInfo />} />
          <Route path="internship" element={<InternshipList />} />
          <Route path="grades" element={<GradeList />} />
          <Route path="announcements" element={<AnnouncementList />} />
          <Route path="templates" element={<TemplateList />} />
          <Route path="messages" element={<MessageBoard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
