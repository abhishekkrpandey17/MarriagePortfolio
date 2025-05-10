"use client";

import React, { useEffect, useState } from "react";
import MarriageLoader from "../components/loader";
import LetterPage from "../components/letter";


const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MarriageLoader done={!loading} />
      {!loading && <LetterPage />}
    </>
  );
};

export default Page;
