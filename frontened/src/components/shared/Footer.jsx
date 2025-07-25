import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About us</h2>
          <p className="text-slate-400 text-sm">
            We are committed to delivering the best service and information. Our
            mission is to enrich lives through exceptional digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"about/"}>About us</Link>
            </li>
            <li>
              <Link to={"/news"}>News Articles</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* Contact us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact us</h2>
          <p className="text-slate-400 text-sm">
            Pranveer Singh Institute of Technology, NH-19, Kanpur
          </p>
          <p className="text-slate-400 text-sm">Email:amanp7381@gmail.com</p>
          <p className="text-slate-400 text-sm">Phone no. (+91) 7408818418</p>
        </div>
      </div>

      {/* Social media */}
      <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()}  Morning Dispatch. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
