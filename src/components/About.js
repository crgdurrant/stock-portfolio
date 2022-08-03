import React from "react";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="picker-header">About</h1>
      <div className="about-container">
        <p className="about-body">Portfolio Bud provides insight into how a portfolio comprised of selected 
        equities on the Johannesburg Stock Exchange has performed over the last few years. We do not provide 
        financial advice and our data is collected from 3rd parties. Please consult your a trusted financial 
        advisor before you buy or sell any publicly traded equities.</p>

        <p className="contact-text">If you have any questions or comments you can contact me on: 
        <span className="email-addy">crgdurrant@gmail.com</span>.</p>
      </div>
    </div>
  )
}