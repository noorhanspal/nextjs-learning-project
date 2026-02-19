"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";

const DataFetchClient = () => {

  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Noor";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.genderize.io/?name=${name}`
      );
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [name]);

  if (loading) {
    return <div className="main-container">Loading...</div>;
  }

  const probabilityPercent = Math.round(data.probability * 100);

  return (
    <div className="main-container">
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
    </div>
  );
};

export default DataFetchClient;
