"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  });

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setValue("subject", subjectParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccess(false);
    try {
      const response = await fetch("https://api.kodersolution.com/api/v1/contact-maksudur-dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-App-Authorization": process.env.NEXT_PUBLIC_CONTACT_API_KEY || "maksudur-dev-secure-contact-key-2026",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 p-8 rounded-2xl sticky top-24">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center gap-3 text-sm">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="John Doe"
              className="w-full bg-slate-100 border border-slate-200 dark:bg-[#0B1120] dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="john@company.com"
              className="w-full bg-slate-100 border border-slate-200 dark:bg-[#0B1120] dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
          <input
            type="text"
            {...register("subject")}
            placeholder="Project Inquiry"
            className="w-full bg-slate-100 border border-slate-200 dark:bg-[#0B1120] dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.subject && <p className="text-red-400 text-xs">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea
            rows={5}
            {...register("message")}
            placeholder="Tell me about your project..."
            className="w-full bg-slate-100 border border-slate-200 dark:bg-[#0B1120] dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          ></textarea>
          {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Sending Message...</>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
