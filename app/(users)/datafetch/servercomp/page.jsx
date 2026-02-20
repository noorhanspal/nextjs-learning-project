import "./style.css";
import UserCard from "./UserCard";

export default async function Page({ searchParams }) {

  const params = await searchParams;   // ✅ important
  const userName = params?.name || "Noor";

  return (
    <div className="split-wrapper">

      <div className="left-side">
        <h1 className="heading">Server Component</h1>

        <p className="description">
          This component fetches data from:
        </p>

        <div className="api-box">
          https://api.genderize.io/?name={userName}
        </div>
      </div>

      <div className="right-side">
        <UserCard userName={userName} />
      </div>

    </div>
  );
}