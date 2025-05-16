import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {
  const { isEducator } = useContext(AppContext);
  const { user } = useUser();

  // New sleek logo with bold typography and modern design
  const logoUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDYyRjc7IiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZGRjsiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5OEZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFNUZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDUpIj48cGF0aCBmaWxsPSJ1cmwoI2dyYWQxKSIgZD0iTTAgMjBDMCAxMCAxMCAwIDIwIDBINDBDNTAgMCA2MCAxMCA2MCAyMFY0MEM2MCA1MCA1MCA2MCA0MCA2MEgyMEMxMCA2MCAwIDUwIDAgNDBWMjBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjxwYXRoIGZpbGw9InVybCgjZ3JhZDIpIiBkPSJNMTUgMTVIMzBWMjVIMTVWMTVaTTM1IDE1SDQ1VjI1SDM1VjE1Wk0xNSAzMEgzMFY0MEgxNVYzMFpNMzUgMzBINDVWNDBIMzVWMzBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjwvZz48dGV4dCB4PSI5MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbGw9IiMwMDYyRjciPkVEVTwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtd2VpZ2h0PSI5MDAiIGxldHRlci1zcGFjaW5nPSIxIiBmaWxsPSIjMDBCRkZGIj5MTVM8L3RleHQ+PC9zdmc+";

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 ${bgColor || 'bg-blue-50/70'}`}>
      <Link to="/">
        <img src={logoUrl} alt="Logo" className="w-32 lg:w-36 hover:opacity-90 transition-opacity duration-200" />
      </Link>
      <div className="flex items-center gap-5 text-gray-600">
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;