import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Headset,
  Navigation,
} from "lucide-react";

import QuoteForm from "../components/home/QuoteForm";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+91 88001 74283",
    secondaryValue: "8700104667",
    href: "+91 88001 74283",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your requirements",
    value: "jaiprakash02800@gmail.com",
    href: "mailto:jaiprakash02800@gmail.comn",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Our business location",
    value:
      "H-8 G/F, Khata No - 51/21, Jai Vihar Phase -1, Najafgarh, New Delhi, South West Delhi- 110043, Delhi",
    href: "https://www.google.com/maps/search/H-8+G%2FF,+Khata+No+-+51%2F21,+Jai+Vihar+Phase+-1,+Najafgarh,+New+Delhi,+South+West+Delhi-+110043,+Delhi/@28.6103797,76.9717853,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

const Contact = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#101d30]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1728]/95 via-[#101d30]/90 to-[#172b43]/75" />

        <div className="absolute -right-20 top-0 -z-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm">
              <MessageCircle size={15} />
              Contact Us
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let's Start a{" "}
              <span className="text-amber-400">Conversation</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Looking for reliable manpower, staffing or facility management
              services? Get in touch with our team. We are here to understand
              your requirements and help you find the right solution.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-md bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#111827] transition hover:bg-amber-300"
              >
                Send an Enquiry
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919716380301"
                className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-amber-400 hover:text-amber-300"
              >
                <Phone size={17} />
                Call Our Team
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-amber-400" />
                Professional Support
              </div>

              <div className="flex items-center gap-2">
                <Headset size={18} className="text-amber-400" />
                Client-Focused Service
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} className="text-amber-400" />
                Quick Enquiry Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="relative z-10 -mt-8 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#15263b] text-amber-400 transition group-hover:bg-amber-400 group-hover:text-[#111827]">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-600">
                      {item.title}
                    </p>

                    <h2 className="mt-2 text-lg font-bold text-[#15263b]">
                      {item.description}
                    </h2>

                    <a
                      href={item.href}
                      target={item.title === "Visit Our Office" ? "_blank" : undefined}
                      rel={item.title === "Visit Our Office" ? "noreferrer" : undefined}
                      className="mt-3 block break-words text-sm leading-6 text-slate-600 transition hover:text-amber-700"
                    >
                      {item.value}
                    </a>

                    {item.secondaryValue && (
                      <a
                        href="tel:+919217305046"
                        className="mt-1 block text-sm text-slate-600 transition hover:text-amber-700"
                      >
                        {item.secondaryValue}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM + INTRODUCTION */}
      <section
        id="contact-form"
        className="bg-gradient-to-b from-white to-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-24">
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              <span className="h-[2px] w-8 bg-amber-500" />
              Get In Touch
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#15263b] sm:text-4xl lg:text-5xl">
              We're Here to Help You{" "}
              <span className="text-amber-500">Anytime.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Get in touch with our team for enquiries, service details or
              partnership opportunities. We are committed to providing
              professional support for your business requirements.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Whether you need staffing solutions, manpower services,
              security personnel or facility management, our team is ready
              to discuss your needs.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#15263b]">
                    Tailored Business Solutions
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Discuss your staffing and operational requirements
                    directly with our team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#15263b]">
                    Clear Communication
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Share your enquiry and the services you are looking for.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=25+Foota+Road+Jai+Vihar+Delhi"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#15263b] transition hover:text-amber-600"
            >
              <Navigation size={17} className="text-amber-500" />
              Find us on Google Maps
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-2xl border-r-2 border-t-2 border-amber-400/70 sm:-right-5 sm:-top-5" />

            <div className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-[0_20px_65px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
              <div className="mb-7 border-b border-slate-200 pb-6">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  Contact Our Team
                </span>

                <h3 className="mt-3 text-2xl font-extrabold text-[#15263b] sm:text-3xl">
                  Tell Us What You Need
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form below and share your requirements with us.
                </p>
              </div>

              <QuoteForm />
            </div>

            <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-bl-2xl border-b-2 border-l-2 border-amber-400/70 sm:-bottom-5 sm:-left-5" />
          </div>
        </div>
      </section>

      {/* OFFICE LOCATION */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#15263b] p-7 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Our Location
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Visit Our Office
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Connect with our team to discuss your business needs and
                explore our service offerings.
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-bold">Office Address</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    H-8 G/F, Khata No. 51/21,
                    <br />
                    Jai Vihar Phase-1, Najafgarh,
                    <br />
                    New Delhi, Delhi - 110043
                  </p>
                </div>
              </div>

              <a
                // href="https://www.google.com/maps/search/H-8+G%2FF,+Khata+No+-+51%2F21,+Jai+Vihar+Phase+-1,+Najafgarh,+New+Delhi,+South+West+Delhi-+110043,+Delhi/@28.6103797,76.9717853,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"

                href="https://www.google.com/maps/dir/?api=1&destination=H-8%20G%2FF%2C%20Khata%20No%2051%2F21%2C%20Jai%20Vihar%20Phase%201%2C%20Najafgarh%2C%20New%20Delhi%20110043"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-bold text-[#111827] transition hover:bg-amber-300"
              >
                Get Directions
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="min-h-[320px] bg-slate-200 sm:min-h-[400px]">
              {/* <iframe
                title="JIS Security office location"
                src="https://www.google.com/maps/search/H-8+G%2FF,+Khata+No+-+51%2F21,+Jai+Vihar+Phase+-1,+Najafgarh,+New+Delhi,+South+West+Delhi-+110043,+Delhi/@28.6103797,76.9717853,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              /> */}

              <iframe
  title="JIS Security Office Location"
  src="https://maps.google.com/maps?q=H-8%20G%2FF%2C%20Khata%20No%2051%2F21%2C%20Jai%20Vihar%20Phase%201%2C%20Najafgarh%2C%20New%20Delhi%20110043&t=&z=15&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "320px" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
