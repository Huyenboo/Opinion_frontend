interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;        // P04-LBL-TITLE
  body: string;         // P04-LBL-BODY
  onYes: () => void;    // P04-BTN-YES
  onNo: () => void;     // P04-BTN-NO
}

const ConfirmDialog = ({ isOpen, title, body, onYes, onNo }: ConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="styled-modal-card">

        <div className="card-header-bar"></div>
        
        <div className="modal-content-padding">
          <h2 className="modal-title-text">{title}</h2>
          
          <div className="modal-body-text">
            {body.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="modal-footer-actions">
            <button className="btn-no-action" onClick={onNo}>
              いいえ
            </button>
            <button className="btn-yes-action" onClick={onYes}>
              はい
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.6); /* Slate-900 với độ trong suốt */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999; /* Đảm bảo luôn nằm trên cùng */
          padding: 20px;
          backdrop-filter: blur(4px); /* Làm mờ nhẹ nền phía sau cho chuyên nghiệp */
        }

        .styled-modal-card {
          background: #ffffff;
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-header-bar {
          height: 6px;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
        }

        .modal-content-padding {
          padding: 32px;
        }

        .modal-title-text {
          font-size: 18px;
          font-weight: 800; /* Đậm đồng nhất với tiêu đề P01, P02, P03 */
          color: #1e293b;
          margin: 0 0 16px 0;
          text-align: center;
          line-height: 1.4;
        }

        /* Thêm dấu gạch trang trí nhỏ dưới title để đồng bộ */
        .modal-title-text::after {
          content: "";
          display: block;
          width: 30px;
          height: 3px;
          background: #3b82f6;
          margin: 12px auto 0;
          border-radius: 2px;
        }

        .modal-body-text {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 32px;
          text-align: center;
        }

        .modal-body-text p {
          margin: 0;
        }

        .modal-footer-actions {
          display: flex;
          gap: 12px;
        }

        /* Nút bấm đồng bộ style */
        .btn-no-action {
          flex: 1;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-no-action:hover {
          background: #f1f5f9;
        }

        .btn-yes-action {
          flex: 1;
          padding: 12px;
          background: #2563eb;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
        }

        .btn-yes-action:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }

        @keyframes modalSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ConfirmDialog;