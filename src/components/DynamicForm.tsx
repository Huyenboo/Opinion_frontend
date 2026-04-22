import { useState, useEffect } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import type { RJSFSchema, UiSchema } from '@rjsf/utils';
import { useNavigate } from 'react-router-dom';

interface DynamicFormProps {
  initialThemeId?: string;
  onConfirm: (formData: any) => void; 
}

const DynamicForm = ({ initialThemeId, onConfirm }: DynamicFormProps) => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<{ schema: RJSFSchema; uiSchema: UiSchema } | null>(null);
  const [loading, setLoading] = useState(true);

  const initialFormData = {
    theme_id: initialThemeId || "550e8400-e29b-41d4-a716-446655440000", 
    status: "completed"
  };

  useEffect(() => {
    const loadSchema = async () => {
      try {
        const res = await fetch('/schemas/form_post_v1.json');
        const data = await res.json();
        setConfig({ schema: data.schema, uiSchema: data.uiSchema });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadSchema();
  }, []);

  const onSubmit = ({ formData }: any) => {
    onConfirm(formData); 
  };

  if (loading || !config) return null;

  return (
    <div className="form-wrapper">
      <div className="form-container">
        
        <div className="form-brand-header">
          <h1>{config.schema.title}</h1>
        </div>

        <div className="form-content">
          <Form
            schema={config.schema}
            uiSchema={config.uiSchema}
            validator={validator}
            formData={initialFormData}
            showErrorList={false}
            onSubmit={onSubmit}
          >
            <div className="button-group">
              <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
                閉じる
              </button>
              <button type="submit" className="btn-primary">
                投稿する
              </button>
            </div>
          </Form>
        </div>
      </div>

      <style>{`
        .form-wrapper {
          display: flex;
          justify-content: center;
          padding: 40px 16px;
          background-color: #f4f7f9;
          min-height: 100vh;
          font-family: "Inter", -apple-system, sans-serif;
        }

        .form-container {
          width: 100%;
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

     
        .form-brand-header {
          background: #ffffff;
          padding: 24px 40px;
          border-bottom: 2px solid #f1f5f9;
        }

        .form-brand-header h1 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 800; /* Chữ siêu đậm cho tiêu đề chính */
          color: #0f172a;
          letter-spacing: -0.025em;
        }

        .form-content {
          padding: 40px;
        }

        /* --- PHẦN BẠN CẦN: LÀM TIÊU ĐỀ MỤC RÕ RÀNG --- */
        .control-label {
          display: block;
          font-size: 15px;
          font-weight: 700 !important; /* Ép tiêu đề (Category, Comment) đậm lên */
          color: #334155;
          margin-bottom: 12px;
          position: relative;
        }

        /* Thêm một dấu gạch nhỏ bên cạnh tiêu đề để tạo bố cục chuyên nghiệp */
        .control-label::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 16px;
          background: #3b82f6;
          margin-right: 8px;
          vertical-align: middle;
          border-radius: 2px;
        }

        .form-group {
          margin-bottom: 32px !important; /* Tăng khoảng cách giữa các mảng nội dung */
        }

        /* Input & Textarea */
        input, select, textarea {
          width: 100% !important;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.2s ease;
          background: #fcfcfc;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        textarea {
          min-height: 350px;
          line-height: 1.6;
        }

        /* Footer & Buttons */
        .button-group {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #f1f5f9;
        }

        .btn-secondary {
          flex: 1;
          padding: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-primary {
          flex: 2;
          padding: 14px;
          background: #2563eb;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        fieldset { border: none; padding: 0; margin: 0; }
      `}</style>
    </div>
  );
};

export default DynamicForm;