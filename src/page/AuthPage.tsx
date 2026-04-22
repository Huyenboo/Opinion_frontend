import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { loginEmployee } from '../api/auth'; 

const AuthPage = () => {
  const { themeId } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // API
      await loginEmployee({ email, password });

      // 成功＝＞遷移
      navigate(`/post/${themeId}`);
    } catch (err: any) {
      // APIエラー処理
      setError(err.message || "サーバーに接続できません。");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="layout-container">
      <div className="styled-card">
        <div className="card-header-bar"></div>
        
        <div className="content-padding">
          <div className="auth-header">
            <h3>認証ページ</h3>
            <p className="guide-text">社員メールとパスワードで認証してください。</p>
          </div>

          <form onSubmit={handleAuth}>
            <div className="form-group">
              <label className="control-label">社員メール</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@company.co.jp"
                required 
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label className="control-label">パスワード</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="●●●●●●●●"
                required 
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="error-container">
                <span className="error-icon">⚠️</span>
                <p className="error-msg">{error}</p>
              </div>
            )}

            <div className="form-footer-actions">
              <button 
                type="button" 
                className="btn-cancel" 
                onClick={() => navigate(-1)}
                disabled={isLoading}
              >
                戻る
              </button>
              <button 
                type="submit" 
                className="btn-submit" 
                disabled={!email || !password || isLoading}
              >
                {isLoading ? '認証中...' : '認証'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .layout-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 16px;
          background-color: #f1f5f9;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .styled-card {
          width: 100%;
          max-width: 450px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .card-header-bar {
          height: 6px;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
        }
        .content-padding { padding: 40px; }
        .auth-header { text-align: center; margin-bottom: 32px; }
        .auth-header h3 { margin: 0 0 8px 0; font-size: 20px; font-weight: 800; color: #1e293b; }
        .guide-text { font-size: 14px; color: #64748b; margin: 0; }
        .form-group { margin-bottom: 24px; }
        .control-label { display: block; font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 10px; }
        .control-label::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 14px;
          background: #3b82f6;
          margin-right: 8px;
          vertical-align: middle;
          border-radius: 2px;
        }
        input {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 16px;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
          color: #334155;
          transition: all 0.2s ease;
        }
        input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          background-color: #f8fafc;
        }
        .error-container {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #fef2f2;
          border: 1px solid #fee2e2;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .error-msg { color: #ef4444; font-size: 13px; font-weight: 600; margin: 0; }
        .form-footer-actions { display: flex; gap: 12px; margin-top: 32px; }
        .btn-cancel {
          flex: 1;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-submit {
          flex: 2;
          padding: 12px;
          background: #2563eb;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-submit:disabled { background: #94a3b8; cursor: not-allowed; }
        .btn-submit:not(:disabled):hover { background: #1d4ed8; transform: translateY(-1px); }
      `}</style>
    </div>
  );
};

export default AuthPage;