import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InformationPage from './page/InformationPage';
import AuthPage from './page/AuthPage';
import PostPage from './page/PostPage';
import ListPage from './page/ListPage';// Trang chứa DynamicForm.tsx của bạn

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* インフォメーション画面 - P01 */}
        <Route path="/" element={<InformationPage />} />

        {/* 認証画面 - P02 （P01からthemeIdを受けとる */}
        <Route path="/auth/:themeId" element={<AuthPage />} />

        {/* 投稿画面 - P03 (P02からthemeIdを受けとる) */}
        <Route path="/post/:themeId" element={<PostPage />} />

        {/* リスト 画面（テストするため */}
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;