import "./style.css";

export default function Loading() {
  return (
    <div className="split-wrapper">

      <div className="left-side">
        <h1 className="heading">Server Component</h1>

        <p className="description">
          This component fetches data directly from the server 
          using the Genderize API.
        </p>

        <div className="api-box">
          Loading API...
        </div>
      </div>

      <div className="right-side">
        <div className="sphere-loader-container">
          <div className="sphere-wrapper">
            <div className="sphere">
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            </div>
          </div>
          <h2 className="loading-text">Loading...</h2>
        </div>
      </div>

    </div>
  );
}