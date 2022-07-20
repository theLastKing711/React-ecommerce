import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardHeader: React.FC<Props> = ({ children }) => {
  return <header className="card__header">{children}</header>;
};

export default CardHeader;
