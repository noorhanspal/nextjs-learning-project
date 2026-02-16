"use client";

const ClientComp = () => {
  return (
    <>
      <h1>Client Comp</h1>
      <button
        className="bg-amber-400 text-black p-5"
        onClick={() => alert("hii")}
      >
        Click Me
      </button>
    </>
  );
};

export default ClientComp;
