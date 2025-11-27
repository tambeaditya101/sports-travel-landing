const steps = [
  {
    title: "Step 1",
    desc: "Select your event & package",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-orange-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25H9m10.06-4.81l-1.32 1.32a2.25 2.25 0 01-3.18 0L8.13 1.94a2.25 2.25 0 00-3.18 0L3.62 3.28a2.25 2.25 0 000 3.18l6.43 6.43a2.25 2.25 0 003.18 0l3.18-3.18a2.25 2.25 0 010-3.18l1.32-1.32a2.25 2.25 0 013.18 0l1.34 1.34a2.25 2.25 0 010 3.18l-5.19 5.19a6.75 6.75 0 01-9.55 0L2.81 12.5"
        />
      </svg>
    ),
  },
  {
    title: "Step 2",
    desc: "Submit enquiry, get personalized proposal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-orange-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-9m19.5 0l-9.75 6.75L2.25 7.5m19.5 0L12 14.25"
        />
      </svg>
    ),
  },
  {
    title: "Step 3",
    desc: "Confirm booking, enjoy trip!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-orange-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 13.5v4.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 18V6A2.25 2.25 0 014.5 3.75h9a.75.75 0 01.53.22l7.5 7.5a.75.75 0 010 1.06l-2.01 2.01"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-10 w-72 h-72 bg-orange-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-red-300/40 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 tracking-tight">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="
              relative bg-white border border-gray-200 rounded-3xl shadow-md 
              hover:shadow-xl transition-all p-10 
              w-full max-w-sm mx-auto
            "
            >
              {/* Voucher perforation left */}
              <div className="absolute top-0 bottom-0 -left-3 flex flex-col justify-around">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 bg-gray-50 border border-gray-200 rounded-full"
                  />
                ))}
              </div>

              {/* Voucher perforation right */}
              <div className="absolute top-0 bottom-0 -right-3 flex flex-col justify-around">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 bg-gray-50 border border-gray-200 rounded-full"
                  />
                ))}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{step.icon}</div>

              <h3 className="font-heading text-2xl font-bold text-slate-800">
                {step.title}
              </h3>

              <p className="mt-3 font-sans text-gray-600 text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
