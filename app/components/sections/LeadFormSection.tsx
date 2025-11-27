"use client";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

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
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const res = await fetch(`${BACKEND_URL}api/leads`, {
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
          <h2 className="font-heading text-4xl font-extrabold mb-10 text-orange-600 text-center tracking-tight">
            Contact / Enquire
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-9"
          >
            {/* ---- INPUT FIELDS ---- */}
            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                rules: { required: "Name is required" },
                watch: watchName,
                err: errors.name?.message,
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                rules: {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                },
                watch: watchEmail,
                err: errors.email?.message,
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                rules: {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Minimum 10 digits" },
                },
                watch: watchPhone,
                err: errors.phone?.message,
              },
            ].map((field) => (
              <div key={field.id} className="relative">
                <input
                  {...register(field.id as keyof Inputs, field.rules)}
                  type={field.type}
                  onBlur={() => trigger(field.id as keyof Inputs)}
                  className={`
                    peer w-full px-4 pt-6 pb-2 text-lg font-sans rounded-xl bg-white
                    border-2 outline-none transition-all
                    ${
                      field.err
                        ? "border-red-500"
                        : "border-slate-300 focus:border-orange-500"
                    }
                  `}
                />

                {/* Floating Label */}
                <label
                  className={`
                    absolute left-4 pointer-events-none font-sans text-slate-500 transition-all
                    ${
                      field.watch
                        ? "-top-5 text-xs text-orange-600"
                        : "top-3 text-base"
                    }
                    peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange-600
                  `}
                >
                  {field.label}
                </label>

                {field.err && (
                  <p className="text-red-600 text-sm mt-1 font-sans">
                    {field.err}
                  </p>
                )}
              </div>
            ))}

            {/* ---- MESSAGE FIELD ---- */}
            <div className="relative">
              <textarea
                {...register("message")}
                onBlur={() => trigger("message")}
                className={`
                  peer w-full px-4 pt-6 pb-2 text-lg font-sans rounded-xl min-h-[110px]
                  bg-white border-2 outline-none transition-all resize-none
                  border-slate-300 focus:border-orange-500
                `}
              />

              <label
                className={`
                  absolute left-4 pointer-events-none font-sans text-slate-500 transition-all
                  ${
                    watchMessage
                      ? "-top-5 text-xs text-orange-600"
                      : "top-3 text-base"
                  }
                  peer-focus:-top-5 peer-focus:text-xs peer-focus:text-orange-600
                `}
              >
                Message (optional)
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-heading bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl text-lg font-bold shadow-lg
                hover:shadow-xl hover:scale-[1.03] active:scale-95
                transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
