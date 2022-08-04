import React from "react";

import { useShareupdate } from "./Sharecontext";

const ButtonContainer = () => {
  const onAdd = useShareupdate();

  return <button onClick={onAdd}>Add</button>;
};

export default ButtonContainer;
