{/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthForm = () => {
  console.log("AuthForm Rendered!"); // Debugging log

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:4000/api/auth";
  
  // Use useNavigate to redirect after successful login
  const navigate = useNavigate(); // Initialize the navigation hook

  // Handle Signup
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(`${API_URL}/signup`, { email, password });

      console.log("✅ User signed up successfully:", response.data);
      setIsLogin(true); // Switch to login after successful signup
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
      console.error("❌ Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(`${API_URL}/login`, { email, password });

      console.log("✅ User logged in successfully:", response.data);
      alert("Login successful!"); // Handle authentication state properly in real projects

      // Redirect to the Home page after successful login
      navigate('/header'); // Adjust path as needed

    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
      console.error("❌ Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleSignup();
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h2>
      
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button className="w-full bg-black text-white py-2 rounded mt-2" disabled={loading}>
          {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <p className="text-center text-sm mt-2 cursor-pointer text-blue-500" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default AuthForm;
*/}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase/firebase'; // Update path as needed
import axios from 'axios';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const API_URL = "http://localhost:4000/api/auth";
  const navigate = useNavigate();

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${API_URL}/signup`, { email, password });
      console.log("✅ User signed up:", response.data);
      setIsLogin(true);
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${API_URL}/login`, { email, password });
      console.log("✅ User logged in:", response.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Google user:", user);
      navigate('/dashboard');
    } catch (err) {
      console.error("❌ Google login failed:", err);
      setError("Google login failed.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleSignup();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          {isLogin ? 'Welcome Back 👋' : 'Join Us Today 🎉'}
        </h2>

        {user ? (
          <div className="text-center">
            <p className="mb-4 text-gray-700">Logged in as {user.email}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 w-full text-white py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
              <button
                type="submit"
                className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <p className="text-sm text-center mt-4">
              {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </span>
            </p>

            <div className="mt-6 flex items-center justify-center">
              <div className="border-b w-1/4 border-gray-300"></div>
              <p className="mx-2 text-gray-500 text-sm">or</p>
              <div className="border-b w-1/4 border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full mt-4 flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded shadow hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google icon"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
