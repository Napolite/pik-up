import Pikup from "components/pikup";
import React from "react";

function NewRequests({ pik }: any) {
  return (
    <div>
      {pik.map((p: any) => (
        <Pikup pik={p} />
      ))}
    </div>
  );
}

export default NewRequests;
