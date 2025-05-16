import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDYyRjc7IiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZGRjsiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5OEZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFNUZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDUpIj48cGF0aCBmaWxsPSJ1cmwoI2dyYWQxKSIgZD0iTTAgMjBDMCAxMCAxMCAwIDIwIDBINDBDNTAgMCA2MCAxMCA2MCAyMFY0MEM2MCA1MCA1MCA2MCA0MCA2MEgyMEMxMCA2MCAwIDUwIDAgNDBWMjBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjxwYXRoIGZpbGw9InVybCgjZ3JhZDIpIiBkPSJNMTUgMTVIMzBWMjVIMTVWMTVaTTM1IDE1SDQ1VjI1SDM1VjE1Wk0xNSAzMEgzMFY0MEgxNVYzMFpNMzUgMzBINDVWNDBIMzVWMzBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjwvZz48dGV4dCB4PSI5MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbGw9IiMwMDYyRjciPkVEVTwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtd2VpZ2h0PSI5MDAiIGxldHRlci1zcGFjaW5nPSIxIiBmaWxsPSIjMDBCRkZGIj5MTVM8L3RleHQ+PC9zdmc+" alt="logo" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 ©Edu LMS. All Right Reserved.
        </p>
      </div>
      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
