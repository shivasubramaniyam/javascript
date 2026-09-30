// Type the resolved value inside Promise<...>:
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return fetch(`/api/users/${id}`).then((res) => res.json());
}
async function logUser(id: number): Promise<void> {
  const user = await fetchUser(id);
  console.log(user);
}
async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}
