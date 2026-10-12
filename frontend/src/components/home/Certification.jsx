const certifications = [
  "Udyam Registration Certificate",
  "GST Registration Certificate",
  "Certificate of Incorporation",
  "Startup India Recognition",
  "Security Training & Service Certificate",
  "NCVET Upskilling Certification",
];

const Certifications = () => {
  return (
    <section className="bg-[#111827] px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            Certifications
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Trusted & Certified
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black">
                ✓
              </div>

              <h3 className="font-semibold">{item}</h3>

              <p className="mt-2 text-sm text-gray-400">
                Verified professional certification
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;