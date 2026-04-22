src/
├── app/                      # Next.js App Router (P01-M03)
│   ├── (user)/               # Group dành cho luồng Nhân viên
│   │   ├── info/page.tsx     # P01: Information Page
│   │   ├── login/page.tsx    # P02: Auth Page (投稿)
│   │   └── post/page.tsx     # P03: Submission Page
│   ├── (admin)/              # Group dành cho luồng Quản trị
│   │   ├── dashboard/page.tsx # M01: Dashboard
│   │   ├── login/page.tsx    # M02: Auth Page (管理者)
│   │   └── list/page.tsx     # M03: Submission List
│   ├── layout.tsx            # Root Layout (Bao gồm Provider, Font)
│   └── globals.css           # Tailwind CSS config
├── components/               # Chứa các Component tái sử dụng
│   ├── dynamic/              # BỘ MÁY RENDER CHÍNH (Trái tim của dự án)
│   │   ├── ComponentLoader.tsx # Router điều hướng type (header, textbox...)
│   │   ├── FormFields.tsx    # Các nguyên tử: Textbox, Select, Textarea
│   │   ├── Layouts.tsx      # Định nghĩa single-column, modal, admin-list
│   │   └── DialogManager.tsx # P04: Xử lý các Confirm Dialog
│   ├── shared/               # UI dùng chung (Button, Card, Table)
│   └── layout/               # Header/Footer của Employee và Admin
├── constants/                # Lưu trữ các bản Chính (正本)
│   ├── schemas/              # JSON Schema (form_post_v1.ts...)
│   ├── ui-schemas/           # UI Schema (ui_schema_json.ts...)
│   └── code-list.ts          # Mã nguồn từ bản "コード値一覧"
├── hooks/                    # Custom hooks (useAuth, useCrypto)
├── lib/                      # Thư viện dùng chung
│   ├── api-client.ts         # Cấu hình Axios/Fetch gọi API
│   └── crypto.ts             # Logic xử lý AES-256-GCM (nếu có ở client)
└── types/                    # Định nghĩa TypeScript (Interface/Enum)