
const BASE_URL = 'http://localhost:3000/api'; 

export const fetchOpinions = async () => {
  const response = await fetch(`${BASE_URL}/opinions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', 
  });

  const data = await response.json();

  if (!response.ok) {
    throw { message: data.message || "データ取得に失敗しました", status: response.status };
  }

  return data;
};