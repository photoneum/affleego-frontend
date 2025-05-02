import React from "react";

type Props = {
  params: {
    token: string;
  };
};

function PasswordResetWithTokenPage({ params }: Props) {
  return <div>PasswordResetWithTokenPage: {params.token}</div>;
}

export default PasswordResetWithTokenPage;
