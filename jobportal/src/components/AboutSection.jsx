export default function AboutSection() {
  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Connecting Talent with Opportunity
          </h2>
          <p className="text-gray-600">
            TalentHub is your go-to job portal, bridging the gap between talented professionals and leading companies. 
            We provide a seamless platform where job seekers can explore opportunities that match their skills, experience, and career goals.
          </p>
          <p className="text-gray-600">
            For employers, TalentHub simplifies hiring by giving access to a wide pool of qualified candidates. 
            From startups to established enterprises, we help companies find the right talent efficiently, ensuring growth and success for both parties.
          </p>
          <p className="text-gray-600">
            Our mission is to empower careers and foster meaningful connections in the job market, making recruitment and job search easier, faster, and more effective for everyone.
          </p>
        </div>


        {/* Image */}
        <div className="w-full">
          <img
            src="data:image/png;base64,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"
            alt="About"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
