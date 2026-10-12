import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="h-[420px] rounded-3xl bg-gray-200" />

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Trusted Security & Staffing Solutions For Every Industry
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            P.T.P.G.S is committed to delivering reliable security, staffing,
            and facility management services tailored to the unique needs of
            businesses, residential communities, corporate offices, and
            institutions.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From security guards and housekeeping staff to manpower support and
            facility solutions, we provide dependable services that help
            organizations operate smoothly.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle className="text-yellow-500" size={20} />
              Professionalism
            </div>

            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle className="text-yellow-500" size={20} />
              Reliability
            </div>
          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-yellow-500 hover:text-black"
          >
            Read More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;