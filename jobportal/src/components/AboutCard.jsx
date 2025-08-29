import { ReactNode } from "react";

export default function AboutCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center space-y-3 hover:shadow-lg transition">
      <div className="text-primary text-3xl">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
