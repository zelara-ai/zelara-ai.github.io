import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zelara-AI Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md w-full bg-gray-100">
        <div>
          <span className="font-bold text-gray-700 text-sm">Logo</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-700 text-sm font-bold">About Us</a>
          <a href="#" className="text-gray-700 text-sm font-bold">Services</a>
          <a href="#" className="text-gray-700 text-sm font-bold">Contact</a>
          <a href="#" className="text-gray-700 text-sm font-bold">More</a>
          <a href="#" className="text-gray-700 text-sm font-bold">Learn</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold text-sm">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-4">
        {/* Hero Image */}
        <div className="w-full h-64 my-4 bg-gray-300">
          <img src="https://placehold.co/750x400" alt="Hero Image" className="w-full h-64 object-cover"/>
        </div>
        {/* Headline */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Revolutionize greenhouse management with Zelara-AI
        </h1>
        {/* Subheadline */}
        <p className="text-base font-normal text-gray-600 mt-4">
          Experience the power of advanced computer vision algorithms and GPT models for comprehensive plant analysis and personalized recommendations.
        </p>
        {/* Call-to-action buttons */}
        <div className="flex justify-center gap-4 my-4">
          <button className="bg-transparent text-blue-500 px-4 py-2 border border-blue-500 rounded-md font-bold text-sm">Learn More</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold text-sm">Sign Up</button>
        </div>
      </div>
    </>
  )
}
