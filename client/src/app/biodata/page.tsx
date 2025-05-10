"use client";

import React, { useEffect, useState } from "react";
import BiodataPage from "../components/biodata";
import MarriageLoader from "../components/loader";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2.2 seconds (or until data ready)
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MarriageLoader done={!loading} />
      {!loading && <BiodataPage />}
    </>
  );
};

export default Page;
