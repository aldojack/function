import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-[#282B3A] text-[#91939F]">
      <div className="flex flex-col md:flex-row my-12 mx-6 md:ml-36 space-y-8 md:space-x-24 md:space-y-0">
        <div className="flex flex-col">
          <h3 className="text-white text-lg mb-3">Account</h3>
          <div className="flex flex-col space-y-1">
          <a href="#">Sign Up</a>
          <a href="#">Login</a>
          <a href="#">Redeem a Gift Card</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg mb-3">Company</h3>
          <div className="flex flex-col space-y-1">
          <a href="#">VIP Lounge Rewards</a>
          <a href="#">Reviews</a>
          <a href="#">Sustainability</a>
          <a href="#">Recycling Scheme</a>
          <a href="#">About Us</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Careers</a>
          <a href="#">Stocklists</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg mb-3">Get Help</h3>
          <div className="flex flex-col space-y-1">
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Shipping Information</a>
            <a href="#">Return Policy</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 py-16 space-x-4 text-white">
        <p>&copy; Function {currentYear}</p>
        <p>Site Map</p>
      </div>
    </footer>
  );
}
