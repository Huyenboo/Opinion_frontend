import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';
import ConfirmDialog from '../components/ConfirmDialog';


import { postSubmission } from '../api/submission'; 

const PostPage = () => {
  const { themeId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [tempData, setTempData] = useState<any>(null);

  const handleRequestSubmit = (formData: any) => {
    setTempData(formData);
    setIsModalOpen(true);
  };

  const handleConfirmYes = async () => {
    try {
     
      const result = await postSubmission({
        theme_id: tempData.theme_id || themeId,
        form_id: 'form_opinion_v1', 
        category_code: tempData.category || 'general',
        form_data: tempData 
      });

      console.log("保存成功、ID:", result.submission_id);
      
      setIsModalOpen(false);
      setIsCompleted(true);
    } catch (error: any) {
      console.error("Lỗi khi gửi bài:", error);
      
     
      if (error.error_code === 'AUTH_FAILED') {
        alert("セッションの有効期限が切れました。再度ログインしてください。");
      } else {
        alert("エラー: " + (error.message || "データを保存できませんでした。"));
      }
    }
  };

  // --- 完了状態 ---
  if (isCompleted) {
    return (
      <div className="layout-container">
        <div className="styled-card success-card">
          <div className="card-header-bar success-gradient"></div>
          
          <div className="content-padding text-center">
            <div className="success-visual">
              <div className="check-icon">✓</div>
            </div>
            
            <h2 className="complete-title">投稿が完了しました</h2>
            <p className="complete-sub">ご協力ありがとうございました。</p>
            
            <div className="instruction-box">
              <span className="instruction-badge">INFO</span>
              <p>このタブを閉じて終了してください。</p>
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
            font-family: -apple-system, sans-serif;
          }
          .styled-card {
            width: 100%;
            max-width: 480px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #e2e8f0;
            animation: fadeIn 0.4s ease-out;
          }
          .card-header-bar.success-gradient {
            height: 6px;
            background: linear-gradient(90deg, #10b981 0%, #059669 100%);
          }
          .content-padding { padding: 48px 32px; }
          .text-center { text-align: center; }
          .success-visual {
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
          }
          .check-icon {
            width: 64px;
            height: 64px;
            background: #ecfdf5;
            color: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
            border: 2px solid #d1fae5;
          }
          .complete-title {
            font-size: 20px;
            font-weight: 800;
            color: #1e293b;
            margin: 0 0 8px 0;
          }
          .complete-sub {
            font-size: 15px;
            color: #64748b;
            margin-bottom: 32px;
          }
          .instruction-box {
            background-color: #fff7ed;
            border: 1px solid #ffedd5;
            padding: 20px;
            border-radius: 10px;
            position: relative;
          }
          .instruction-badge {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: #f97316;
            color: white;
            font-size: 10px;
            font-weight: 800;
            padding: 2px 10px;
            border-radius: 20px;
          }
          .instruction-box p {
            margin: 0;
            font-size: 14px;
            font-weight: 700;
            color: #9a3412;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  // --- 入力状態 ---
  return (
    <>
      <DynamicForm initialThemeId={themeId} onConfirm={handleRequestSubmit} />
      
      <ConfirmDialog 
        isOpen={isModalOpen}
        title="投稿内容を保存します" 
        body="よろしいですか？"
        onYes={handleConfirmYes}
        onNo={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default PostPage;