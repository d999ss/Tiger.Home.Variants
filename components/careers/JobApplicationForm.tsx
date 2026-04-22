"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardBody } from "@/components/ui/card";

interface JobApplicationFormProps {
  jobTitle: string;
  jobSlug?: string; // Optional for future use (tracking applications by job)
}

export function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    resume: null as File | null,
    coverLetter: "",
    startDate: "",
    salary: "",
    referral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        linkedIn: "",
        resume: null,
        coverLetter: "",
        startDate: "",
        salary: "",
        referral: "",
      });
    }, 1500);
  };

  if (submitStatus === "success") {
    return (
      <Card>
        <CardBody>
          <div className="text-center py-12">
            <div className="mx-auto size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <svg className="size-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-h2 font-medium mb-2">Application Submitted!</h3>
            <p className="text-foreground/70 mb-6">
              Thank you for applying to the {jobTitle} position. Our recruiting team will review your application and contact you if there&apos;s a match.
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="text-brand font-semibold hover:underline"
            >
              Submit Another Application
            </button>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-body font-medium mb-2">
                First Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-body font-medium mb-2">
                Last Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-body font-medium mb-2">
                Email Address <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-body font-medium mb-2">
                Phone Number <span className="text-brand">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-body font-medium mb-2">
                Current Location <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="City, State"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedIn" className="block text-body font-medium mb-2">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-body font-medium mb-2">
              Resume / CV <span className="text-brand">*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background file:mr-4 file:py-2 file:px-4 file:rounded-[12px] file:border-0 file:text-body file:font-semibold file:bg-brand file:text-brand-foreground hover:file:brightness-110"
            />
            <p className="mt-2 text-body text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <label htmlFor="coverLetter" className="block text-body font-medium mb-2">
              Cover Letter <span className="text-brand">*</span>
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              required
              rows={6}
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit for Tiger BioSciences..."
              className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 resize-y"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-body font-medium mb-2">
                Earliest Start Date <span className="text-brand">*</span>
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>

            {/* Salary Expectations */}
            <div>
              <label htmlFor="salary" className="block text-body font-medium mb-2">
                Salary Expectations
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., $120,000 - $140,000"
                className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
          </div>

          {/* Referral */}
          <div>
            <label htmlFor="referral" className="block text-body font-medium mb-2">
              How did you hear about this position?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-[12px] border border-black/[0.06] bg-background focus:outline-none focus:ring-2 focus:ring-brand/50"
            >
              <option value="">Select an option</option>
              <option value="linkedin">LinkedIn</option>
              <option value="indeed">Indeed</option>
              <option value="company-website">Company Website</option>
              <option value="referral">Employee Referral</option>
              <option value="recruiter">Recruiter</option>
              <option value="conference">Conference/Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-[12px] bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-[12px] border border-black/[0.06] bg-[#fbfcff] px-8 py-4 font-semibold transition-colors hover:bg-muted"
            >
              Cancel
            </button>
          </div>

          <p className="text-body text-muted-foreground text-center">
            By submitting this application, you agree to our{" "}
            <Link href="/privacy" className="text-brand hover:underline cursor-pointer">
              Privacy Policy
            </Link>{" "}
            and consent to the processing of your personal data.
          </p>
        </form>
      </CardBody>
    </Card>
  );
}
