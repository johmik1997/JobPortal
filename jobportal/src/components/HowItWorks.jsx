import AboutCard from "./AboutCard";
import { FaUserPlus, FaFileAlt, FaSearch, FaPaperPlane } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How it works
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id scelerisque rhoncus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <AboutCard
            icon={<FaUserPlus />}
            title="Create Account"
            description="Nunc sed at nisi purus. Nibh dis faucibus proin lacus."
          />
          <AboutCard
            icon={<FaFileAlt />}
            title="Upload Resume"
            description="Felis eu ultricies a sed massa. Commodo fringilla sed tempor."
          />
          <AboutCard
            icon={<FaSearch />}
            title="Find Jobs"
            description="Commodo fringilla sed tempor risus laoreet ultricies ipsum."
          />
          <AboutCard
            icon={<FaPaperPlane />}
            title="Apply Job"
            description="Nisi enim feugiat enim volutpat. Sem quis viverra."
          />
        </div>
      </div>
    </section>
  );
}
