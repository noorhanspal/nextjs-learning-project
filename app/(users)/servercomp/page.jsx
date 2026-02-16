async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-[#0f172a] px-10 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Users Directory
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-cyan-400">
              {user.name}
            </h2>

            <p className="text-gray-300 mb-2">
              📧 {user.email}
            </p>

            <p className="text-gray-400 text-sm">
              🏢 {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
