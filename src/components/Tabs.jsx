import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-8 border-t border-gray-200">
      <div className="flex flex-col border-b border-gray-200 md:flex-row">
        <h3
          className={`cursor-pointer px-4 py-2 text-base font-semibold md:text-lg ${
            activeTab === "description"
              ? "border-b-2 border-orange-500 text-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </h3>
        <h3
          className={`cursor-pointer px-4 py-2 text-base font-semibold md:text-lg ${
            activeTab === "delivery"
              ? "border-b-2 border-orange-500 text-black"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setActiveTab("delivery")}
        >
          Delivery & Returns
        </h3>
      </div>
      <div className="py-4">
        {activeTab === "description" && (
          <p className="text-gray-600">{data.description}</p>
        )}
        {activeTab === "delivery" && (
          <p className="text-gray-600">{data.returns}</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
