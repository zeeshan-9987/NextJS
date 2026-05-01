type Props = {
  params: Promise<{
    id: string;
    id2: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id, id2 } = await params;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dynamic Route Working</h1>
      <p>First ID: {id}</p>
      <p>Second ID: {id2}</p>
    </div>
  );
}