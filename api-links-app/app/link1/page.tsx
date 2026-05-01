export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <>
      <h1>Link 1</h1>
      <p>User ID: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed.toString()}</p>
    </>
  );
}