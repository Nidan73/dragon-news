import React, { Suspense } from "react";
import Category from "../Category";

const Leftaside = () => {
  return (
    <div>
      <Suspense fallback={"loading...."}>
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default Leftaside;
