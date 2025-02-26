import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-gray-800"></div>
    </div>
  );
};

export default loading;
