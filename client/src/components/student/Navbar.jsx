import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');
  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  // New sleek logo with bold typography and modern design
  const logoUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNzAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDYyRjc7IiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZGRjsiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5OEZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFNUZGO3N0b3Atb3BhY2l0eTowLjkiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDUpIj48cGF0aCBmaWxsPSJ1cmwoI2dyYWQxKSIgZD0iTTAgMjBDMCAxMCAxMCAwIDIwIDBINDBDNTAgMCA2MCAxMCA2MCAyMFY0MEM2MCA1MCA1MCA2MCA0MCA2MEgyMEMxMCA2MCAwIDUwIDAgNDBWMjBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjxwYXRoIGZpbGw9InVybCgjZ3JhZDIpIiBkPSJNMTUgMTVIMzBWMjVIMTVWMTVaTTM1IDE1SDQ1VjI1SDM1VjE1Wk0xNSAzMEgzMFY0MEgxNVYzMFpNMzUgMzBINDVWNDBIMzVWMzBaIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjwvZz48dGV4dCB4PSI5MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbGw9IiMwMDYyRjciPkVEVTwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtd2VpZ2h0PSI5MDAiIGxldHRlci1zcGFjaW5nPSIxIiBmaWxsPSIjMDBCRkZGIj5MTVM8L3RleHQ+PC9zdmc+";

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator/dashboard');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } });
      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
        navigate('/educator/dashboard');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? 'bg-white' : 'bg-blue-50/70'}`}>
      <div className="flex items-center">
        <img 
          onClick={() => navigate('/')} 
          src={logoUrl} 
          alt="EduLMS" 
          className="w-28 lg:w-32 cursor-pointer hover:opacity-80 transition-all duration-200" 
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5 text-gray-600">
        <Link 
          to="/course-structure"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Course Structure
        </Link>

        {user && (
          <div className="flex items-center gap-5">
            <button 
              onClick={becomeEducator}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {isEducator ? (
                <Link to="/educator/dashboard" className="flex items-center gap-1">
                  Educator Dashboard
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                'Become Educator'
              )}
            </button>
            |
            <Link 
              to='/my-enrollments'
              className="hover:text-blue-600 transition-colors duration-200"
            >
              My Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button 
            onClick={() => openSignIn()} 
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-600'>
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          <Link 
            to="/course-structure"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Course Structure
          </Link>
          |
          <button 
            onClick={becomeEducator}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {isEducator ? 'Dashboard' : 'Become Educator'}
          </button>
          {user && (
            <>
              |
              <Link 
                to='/my-enrollments'
                className="hover:text-blue-600 transition-colors duration-200"
              >
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button 
            onClick={() => openSignIn()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;