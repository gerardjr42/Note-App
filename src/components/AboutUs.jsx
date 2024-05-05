import React from "react";
import data from "../data/data.json";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={data.profilePic}
                alt={`Profile of ${data.name}`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
            </div>
            <p className="text-gray-700 mb-2"><b>Title</b>: {data.title}</p>
            <p className="text-gray-700 mb-2"><b>Skills</b>: {data.skills}</p>
            <p className="text-gray-700"><b> Bio</b>: {data.bio}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}