const DataFetchServer = async ({ searchParams }) => {
  const params = await searchParams;   // 👈 important line
  const userName = params?.name || "Noor";

  const res = await fetch(
    `https://api.genderize.io/?name=${userName}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div>
      <h1>Server Component - Search Params</h1>
      <p>Name: {data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Probability: {data.probability}</p>
    </div>
  );
};

export default DataFetchServer;
