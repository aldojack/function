import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#282B3A] text-[#91939F]">
      <div className="flex flex-col md:flex-row my-12 mx-6 md:mx-36 sm:space-y-8 md:space-x-8 md:space-y-0">
        <div className="flex flex-col">
          <h3 className="text-white text-lg">Account</h3>
          <a>Login</a>
          <a>Sign Up</a>
          <a>Redeem a Gift Card</a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg">Company</h3>
          <a>VIP Lounge Rewards</a>
          <a>Reviews</a>
          <a>Sustainability</a>
          <a>Recycling Scheme</a>
          <a>About Us</a>
          <a>Become an Affiliate</a>
          <a>Careers</a>
          <a>Stocklists</a>


        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg">Get Help</h3>
          <a>Contact Us</a>
          <a>FAQs</a>
          <a>Shipping Information</a>
          <a>Return Policy</a>
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 py-16 space-x-4 text-white">
        <p>&copy; Function 2023</p>
        <p>Site Map</p>
      </div>
    </footer>
  );
}
