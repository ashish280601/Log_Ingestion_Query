export const fetchLogs = async (filters) => {
  const params = new URLSearchParams(filters).toString();
  const res = await fetch(`http://localhost:5000/logs?${params}`);
  return await res.json();
};
