"use client";
import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  return <span className="text-red-500">{error.message}</span>;
};

export default ErrorPage;
