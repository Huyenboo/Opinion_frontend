const BASE_URL = 'http://localhost:3000/api/v1';

// 投稿データをサーバーに送信する関数（完了処理用API）
export const postSubmission = async (data: any) => {
  // fetch APIを使用してバックエンドにPOSTリクエストを送信
  const response = await fetch(`${BASE_URL}/submission/complete`, {
    method: 'POST', // HTTPメソッド（データ作成・送信）
    headers: { 'Content-Type': 'application/json' }, // JSON形式で送信することを指定
    credentials: 'include', // Cookie（セッション情報）を含めて送信（認証対応）
    body: JSON.stringify(data), // 送信データをJSON文字列に変換
  });

  // レスポンスが正常（status 200-299）でない場合のエラーハンドリング
  if (!response.ok) {
    // サーバーから返されたエラーレスポンスを取得
    const error = await response.json();

    // エラー内容 + HTTPステータスコードをまとめてthrow
    throw { ...error, status: response.status };
  }

  // 正常時：レスポンスボディをJSONとして返却
  return response.json();
};