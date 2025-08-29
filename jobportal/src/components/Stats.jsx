import React from "react";
import { Briefcase, Users, Building2 } from "lucide-react"; // using lucide-react icons

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 text-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Jobs */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <Briefcase className="mx-auto text-blue-700 w-12 h-12 mb-4" />
          <h2 className="text-4xl font-extrabold text-blue-900">25,850</h2>
          <p className="text-gray-600 mt-2">Jobs</p>
        </div>
        
        {/* Candidates */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <Users className="mx-auto text-green-600 w-12 h-12 mb-4" />
          <h2 className="text-4xl font-extrabold text-blue-900">10,250</h2>
          <p className="text-gray-600 mt-2">Candidates</p>
        </div>
        
        {/* Companies */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <Building2 className="mx-auto text-blue-700 w-12 h-12 mb-4" />
          <h2 className="text-4xl font-extrabold text-blue-900">18,400</h2>
          <p className="text-gray-600 mt-2">Companies</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
