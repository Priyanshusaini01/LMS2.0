import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDYyRjc7IiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZGRjsiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5OEZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFNUZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDUpIj48cGF0aCBmaWxsPSJ1cmwoI2dyYWQxKSIgZD0iTTAgMjBDMCAxMCAxMCAwIDIwIDBINDBDNTAgMCA2MCAxMCA2MCAyMFY0MEM2MCA1MCA1MCA2MCA0MCA2MEgyMEMxMCA2MCAwIDUwIDAgNDBWMjBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjxwYXRoIGZpbGw9InVybCgjZ3JhZDIpIiBkPSJNMTUgMTVIMzBWMjVIMTVWMTVaTTM1IDE1SDQ1VjI1SDM1VjE1Wk0xNSAzMEgzMFY0MEgxNVYzMFpNMzUgMzBINDVWNDBIMzVWMzBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjwvZz48dGV4dCB4PSI5MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbGw9IiMwMDYyRjciPkVEVTwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtd2VpZ2h0PSI5MDAiIGxldHRlci1zcGFjaW5nPSIxIiBmaWxsPSIjMDBCRkZGIj5MTVM8L3RleHQ+PC9zdmc+" alt="logo" className="w-32 lg:w-36" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm" type="email" placeholder="Enter your email" />
            <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © 
        LMS2.0. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
