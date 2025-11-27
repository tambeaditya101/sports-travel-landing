"use client";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function LeadFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const res = await fetch("http://localhost:4000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        toast.success("Thanks! We'll reach out shortly.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  const watchName = watch("name");
  const watchEmail = watch("email");
  const watchPhone = watch("phone");
  const watchMessage = watch("message");

  return (
    <section
      id="lead-form"
      className="relative py-24 bg-gradient-to-b from-white via-orange-50/20 to-white"
    >
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

      <div className="max-w-lg mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-100 p-10">
          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-8 text-orange-600 text-center tracking-tight">
            Contact / Enquire
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            {/* NAME */}
            <div className="relative">
              <input
                {...register("name", { required: "Name is required" })}
                autoComplete="name"
                onBlur={() => trigger("name")}
                className={`
                  peer w-full px-4 pb-2 pt-6 text-lg font-sans rounded-xl bg-white 
                  border-2 outline-none transition-all
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-slate-300 focus:border-orange-500"
                  }
                `}
              />

              <label
                className={`
                  absolute left-4 top-3 text-slate-500 font-sans transition-all pointer-events-none
                  peer-focus:text-orange-600 peer-focus:-top-3 peer-focus:text-sm
                  ${watchName ? "-top-3 text-sm text-orange-600" : ""}
                `}
              >
                Full Name
              </label>

              {errors.name && (
                <p className="text-red-600 text-sm mt-1 font-sans">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                autoComplete="email"
                onBlur={() => trigger("email")}
                className={`
                  peer w-full px-4 pb-2 pt-6 text-lg font-sans rounded-xl bg-white
                  border-2 outline-none transition-all
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-slate-300 focus:border-orange-500"
                  }
                `}
              />

              <label
                className={`
                  absolute left-4 top-3 text-slate-500 font-sans transition-all pointer-events-none
                  peer-focus:text-orange-600 peer-focus:-top-3 peer-focus:text-sm
                  ${watchEmail ? "-top-3 text-sm text-orange-600" : ""}
                `}
              >
                Email Address
              </label>

              {errors.email && (
                <p className="text-red-600 text-sm mt-1 font-sans">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div className="relative">
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Minimum 10 digits" },
                })}
                autoComplete="tel"
                inputMode="numeric"
                onBlur={() => trigger("phone")}
                className={`
                  peer w-full px-4 pb-2 pt-6 text-lg font-sans rounded-xl bg-white 
                  border-2 outline-none transition-all
                  ${
                    errors.phone
                      ? "border-red-500"
                      : "border-slate-300 focus:border-orange-500"
                  }
                `}
              />

              <label
                className={`
                  absolute left-4 top-3 text-slate-500 transition-all pointer-events-none font-sans
                  peer-focus:text-orange-600 peer-focus:-top-3 peer-focus:text-sm
                  ${watchPhone ? "-top-3 text-sm text-orange-600" : ""}
                `}
              >
                Phone Number
              </label>

              {errors.phone && (
                <p className="text-red-600 text-sm mt-1 font-sans">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                {...register("message")}
                onBlur={() => trigger("message")}
                className={`
                  peer w-full px-4 pb-2 pt-6 text-lg font-sans rounded-xl bg-white min-h-[110px]
                  border-2 border-slate-300 outline-none focus:border-orange-500 transition-all resize-none
                `}
              />

              <label
                className={`
                  absolute left-4 top-3 text-slate-500 font-sans transition-all pointer-events-none
                  peer-focus:text-orange-600 peer-focus:-top-3 peer-focus:text-sm
                  ${watchMessage ? "-top-3 text-sm text-orange-600" : ""}
                `}
              >
                Message (optional)
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-heading bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl text-lg font-bold shadow-lg
                hover:shadow-xl hover:scale-[1.03] active:scale-95
                transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
