
export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

      const { id } = await params;

           const a = await fetch('https://jsonplaceholder.typicode.com/todos/'+id)
           const b = await a.json() 

    // console.log(params)
  return <h1>ID Page:{b.title} {process.env.WEATHER_KEY}</h1>;
}