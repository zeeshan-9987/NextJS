type Props = {
  params: Promise<{
    slug1: string;
    slug2: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug1, slug2 } = await params;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Product Page</h1>

      <p>Category: {slug1}</p>
      <p>Product: {slug2}</p>
    </div>
  );
}