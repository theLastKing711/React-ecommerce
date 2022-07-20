import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardContent: React.FC<Props> = ({ children }) => {
  return <div className="card__content">{children}</div>;
};

export default CardContent;
