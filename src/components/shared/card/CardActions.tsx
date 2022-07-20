import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardActions: React.FC<Props> = ({ children }) => {
  return <div className="card__actions">{children}</div>;
};

export default CardActions;
