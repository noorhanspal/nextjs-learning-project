export default async function UserCard({ userName }) {

  const res = await fetch(
    `https://api.genderize.io/?name=${userName}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const probabilityPercent = Math.round(data.probability * 100);

  return (
    <div className="card">

      <div className="avatar">
        <span className="avatar-icon">👤</span>
      </div>

      <h1 className="name">{data.name}</h1>

      <span className="gender-badge">
        {data.gender || "Not Found"}
      </span>

      <div className="section">
        <div className="row">
          <span>Confidence</span>
          <span>{probabilityPercent}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${probabilityPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="section">
        <div className="row">
          <span>Data Sample Size</span>
          <span>{data.count}</span>
        </div>
      </div>

      {probabilityPercent < 70 && (
        <div className="low-accuracy">
          ⚠ Low Accuracy
        </div>
      )}

    </div>
  );
}