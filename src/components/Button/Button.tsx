import React from "react";

interface IProps {
  label: string;
  onClick: Function;
}

export default function Button(props: IProps) {
  const { label, onClick } = props;

  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
}
