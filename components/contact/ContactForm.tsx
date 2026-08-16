'use client'

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

type ContactFormState = {
  fullName: string
  email: string
  subject: string
  message: string
  isLoading: boolean
}

const ContactForm = () => {
  const initialState: ContactFormState = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
    isLoading: false,
  }

  const [contactUs, setContactUs] = useState<ContactFormState>(initialState)
  const form = useRef<HTMLFormElement>(null)

  // Handles input changes
  const changeContactUs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setContactUs((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Sends the email
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setContactUs((prevData) => ({
      ...prevData,
      isLoading: true,
    }))

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '', // Ensure environment variables are defined
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || '',
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC || ''
      )
      .then(
        () => {
          setContactUs(initialState)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-700 text-center">
        Contact Us
      </h2>
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={contactUs.fullName}
          onChange={changeContactUs}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--secondary-color)] focus:outline-none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={contactUs.email}
          onChange={changeContactUs}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--secondary-color)] focus:outline-none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-600"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter the subject"
          value={contactUs.subject}
          onChange={changeContactUs}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--secondary-color)] focus:outline-none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={contactUs.message}
          onChange={changeContactUs}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--secondary-color)] focus:outline-none h-28 resize-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition-all ease-in-out duration-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        disabled={contactUs.isLoading}
      >
        {contactUs.isLoading ? 'Loading...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm
