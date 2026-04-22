"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Form,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  FormButton,
  FormHelperText,
} from "@/components/ui/form"
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    region: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="bg-[#efedea] min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-20 pb-20 md:pb-24 mt-16">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <h1 className="font-display font-light text-[#231010] text-4xl md:text-5xl mb-4">Contact Our Team</h1>
          <p className="text-[14.6px] font-light text-[#231010] leading-[26px] max-w-2xl">
            Get in touch with Tiger BioSciences. Our team is here to answer your questions and discuss how our solutions can meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="rounded-[12px] bg-[#fbfcff] p-8">
              <h2 className="font-display text-2xl font-light text-[#231010] mb-6">Send us a message</h2>
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField>
                    <FormLabel htmlFor="fullName" required>Full Name</FormLabel>
                    <FormInput
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </FormField>

                  <FormField>
                    <FormLabel htmlFor="email" required>Email Address</FormLabel>
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.smith@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormField>
                </div>

                <FormField>
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <FormInput
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField>
                    <FormLabel htmlFor="region" required>Region</FormLabel>
                    <FormSelect
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a region</option>
                      <option value="us">US</option>
                      <option value="row">Rest of World</option>
                    </FormSelect>
                  </FormField>

                  <FormField>
                    <FormLabel htmlFor="inquiryType" required>Inquiry Type</FormLabel>
                    <FormSelect
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Careers</option>
                      <option value="media">Media/Press</option>
                      <option value="other">Other</option>
                    </FormSelect>
                  </FormField>
                </div>

                <FormField>
                  <FormLabel htmlFor="message" required>Message</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <FormHelperText>
                    Please provide details about your inquiry so we can direct you to the right team.
                  </FormHelperText>
                </FormField>

                <FormButton type="submit" variant="primary" fullWidth>
                  Send Message
                </FormButton>

                <p className="text-xs text-[#231010]/50 text-center mt-4">
                  We typically respond within one business day (Monday-Friday, 9 AM - 5 PM ET)
                </p>
              </Form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Office Address */}
            <div className="rounded-[12px] bg-[#fbfcff] p-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-[8px] bg-[#231010]/5 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="size-5 text-[#231010]/40" />
                </div>
                <div>
                  <h3 className="font-display font-light text-[#231010] mb-2">Headquarters</h3>
                  <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px]">
                    555 E North Ln<br />
                    Suite 5000, Building D<br />
                    Conshohocken, PA 19428
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-[12px] bg-[#fbfcff] p-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-[8px] bg-[#231010]/5 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="size-5 text-[#231010]/40" />
                </div>
                <div>
                  <h3 className="font-display font-light text-[#231010] mb-2">Phone</h3>
                  <a
                    href="tel:+18886655005"
                    className="text-[14.6px] font-light text-[#231010]/70 hover:text-[#231010] transition-colors"
                  >
                    1-888-665-5005
                  </a>
                  <p className="text-xs text-[#231010]/50 mt-1">
                    Mon-Fri, 9 AM - 5 PM ET
                  </p>
                </div>
              </div>
            </div>

            {/* International Office */}
            <div className="rounded-[12px] bg-[#fbfcff] p-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-[8px] bg-[#231010]/5 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="size-5 text-[#231010]/40" />
                </div>
                <div>
                  <h3 className="font-display font-light text-[#231010] mb-2">International Office</h3>
                  <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-3">
                    Tiger BioSciences International GmbH<br />
                    Dürrheimer Straße 37<br />
                    Donaueschingen, 78166<br />
                    Germany
                  </p>
                  <a
                    href="mailto:info@tiger-international.eu"
                    className="text-[14.6px] font-light text-[#231010]/70 hover:text-[#231010] transition-colors flex items-center gap-2"
                  >
                    <MailIcon className="size-4" />
                    info@tiger-international.eu
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-[12px] bg-[#fbfcff] p-6">
              <h3 className="font-display font-light text-[#231010] mb-3">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/careers" className="block text-[#231010]/60 hover:text-[#231010] transition-colors cursor-pointer">
                  Careers
                </Link>
                <Link href="/press" className="block text-[#231010]/60 hover:text-[#231010] transition-colors cursor-pointer">
                  Press & Media
                </Link>
                <Link href="/company/overview" className="block text-[#231010]/60 hover:text-[#231010] transition-colors cursor-pointer">
                  About Us
                </Link>
                <Link href="/products" className="block text-[#231010]/60 hover:text-[#231010] transition-colors cursor-pointer">
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
