const BASE_URL = 'http://localhost:3000/api/v1';

export const loginEmployee = async (credentials: { email: string; password: any }) => {
  const response = await fetch(`${BASE_URL}/auth/employee/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    // セッションCookieを扱うために必要
    credentials: 'include', 
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    // エラーメッセージを上位コンポーネントで処理できるように投げる
    throw {
      message: data.message || "認証に失敗しました",
      status: response.status
    };
  }

  return data;
};