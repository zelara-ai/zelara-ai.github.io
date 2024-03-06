import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zelara-AI Landing Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="navbar">
        <div>
          <span>Logo</span>
        </div>
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">More</a>
          <a href="#">Learn</a>
        </div>
        <div className="cta-buttons">
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-image">
          <img src="https://placehold.co/750x400" alt="Hero Image" />
        </div>
        <h1 className="headline">
          Revolutionize greenhouse management with Zelara-AI
        </h1>
        <p className="subheadline">
          Experience the power of advanced computer vision algorithms and GPT models for comprehensive plant analysis and personalized recommendations.
        </p>
        <div className="call-to-action">
          <button className="learn-more">Learn More</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </>
  )
}