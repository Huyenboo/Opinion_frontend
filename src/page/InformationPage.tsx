import { useNavigate } from 'react-router-dom';

const InformationPage = () => {
  // 画面遷移用フック（React Router）
  const navigate = useNavigate();

  // 表示用の固定データ（本来はAPIから取得する想定）
  const infoData = {
    theme_id: "550e8400-e29b-41d4-a716-446655440000",
    theme_title: "職場環境の改善について",
    service_description: "社内コンシェルジュは、従業員の皆様がより働きやすい環境を作るための意見投稿プラットフォームです。"
  };

  // 「同意する」ボタン押下時の処理
  const handleAgree = () => {
    // 認証画面へ遷移（テーマIDをURLパラメータとして渡す）
    navigate(`/auth/${infoData.theme_id}`);
  };

  return (
    // 画面全体のレイアウトコンテナ（中央配置）
    <div className="layout-container">
      {/* カードUI（情報表示エリア） */}
      <div className="styled-card">
        {/* システム全体で統一されたグラデーションヘッダー */}
        <div className="card-header-bar"></div>
        
        <div className="content-padding">
          {/* ヘッダーエリア（テーマ表示） */}
          <header className="info-header">
            <label className="control-label">テーマ</label>
            {/* テーマタイトル表示 */}
            <h2 className="theme-title">{infoData.theme_title}</h2>
          </header>
          
          {/* 説明文エリア */}
          <div className="info-content">
            {/* サービス説明 */}
            <p className="description-text">{infoData.service_description}</p>
            
            {/* 注意事項表示ボックス */}
            <div className="agreement-notice">
              <span className="notice-icon">ℹ️</span>
              <p>
                {/* 投稿ルールの注意喚起 */}
                投稿内容は匿名で処理されますが、公序良俗に反する内容は禁止されています。
              </p>
            </div>
          </div>

          {/* フッター（ボタンエリア） */}
          <div className="form-footer-actions">
            {/* 閉じるボタン（ウィンドウを閉じる） */}
            <button className="btn-cancel" onClick={() => window.close()}>
              閉じる
            </button>

            {/* 同意ボタン（次画面へ遷移） */}
            <button className="btn-submit" onClick={handleAgree}>
              同意する
            </button>
          </div>
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
          max-width: 500px;
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

        .content-padding {
          padding: 40px;
        }

        .info-header {
          margin-bottom: 24px;
        }

        .control-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #3b82f6; /* 強調用の青色 */
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .theme-title {
          margin: 0;
          font-size: 22px;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.4;
        }

        /* タイトル前の装飾ライン（視覚的強調） */
        .theme-title::before {
          content: "";
          display: block;
          width: 40px;
          height: 4px;
          background: #3b82f6;
          margin-bottom: 12px;
          border-radius: 2px;
        }

        .info-content {
          margin-bottom: 32px;
        }

        .description-text {
          font-size: 15px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* 注意事項ボックス（ユーザーへの警告・補足情報） */
        .agreement-notice {
          display: flex;
          gap: 12px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 16px;
          border-radius: 8px;
        }

        .notice-icon {
          font-size: 18px;
        }

        .agreement-notice p {
          margin: 0;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        /* ボタンエリア（操作系UI） */
        .form-footer-actions {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
        }

        .btn-cancel {
          flex: 1;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-submit {
          flex: 2;
          padding: 12px;
          background: #2563eb;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
        }

        .btn-submit:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </div>
  );
};

export default InformationPage;