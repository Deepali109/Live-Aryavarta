// "use client";

// import { useState } from "react";

// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await login({ email, password });
//       console.log("dataa", res.data);
//       if (res.data.message == "login Successfull") {
//         // Save access + refresh token
//         localStorage.setItem("accessToken", res.data.accessToken);
//         localStorage.setItem("refreshToken", res.data.refreshToken);
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         setMessage("✅ Login successful!");
//         router.push("/"); // Redirect to home
//       } else {
//         setMessage(res.data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage(error.response?.data?.message || "Login error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="text-sm mt-4 text-center">
//           Forgot your password?{" "}
//           <span
//             className="text-blue-600 hover:underline cursor-pointer"
//             onClick={() => router.push("/forgot-password")}
//           >
//             Reset here
//           </span>
//         </p>
//         {message && (
//           <p className="mt-4 text-center text-sm text-red-500">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Lock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { login } from "@/lib/api";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await login({ email, password });
      console.log("dataa", res.data);
      if (res.data.message == "login Successfull") {
        // Save access + refresh token
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage("✅ Login successful!");
        router.push("/"); // Redirect to home
      } else {
        setMessage(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex overflow-hidden">
        {/* Left Side - Dynamic Background */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400 via-blue-500 to-indigo-600 opacity-80 animate-pulse"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0">
            {/* Mandala Pattern */}
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute inset-4 border-2 border-white/30 rounded-full">
                <div className="absolute inset-4 border border-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Floating Sparkles */}
            <div className="absolute top-20 right-20 text-white/60 animate-bounce">
              <Sparkles size={24} />
            </div>
            <div className="absolute top-40 left-32 text-white/40 animate-bounce" style={{ animationDelay: '0.3s' }}>
              <Sparkles size={16} />
            </div>
            <div className="absolute bottom-32 right-16 text-white/50 animate-bounce" style={{ animationDelay: '0.7s' }}>
              <Sparkles size={20} />
            </div>

            {/* Cultural Patterns */}
            <div className="absolute bottom-20 left-20 w-40 h-40 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current animate-pulse">
                <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 55 L30 65 L35 45 L20 30 L40 30 Z" />
              </svg>
            </div>
          </div>

          {/* Cultural Images Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                ARYAVARTA
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Explore the Rich Indian Culture and Heritage
              </p>
              <div className="w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
              <p className="text-sm mt-4 opacity-75 max-w-md">
                Discover a country dotted with stunning wildlife diversity, vibrant festivals, and ancient traditions that continue to thrive in modern times.
              </p>
            </div>
          </div>

          {/* Animated Elephant Silhouette */}
          <div className="absolute bottom-10 right-10 opacity-30">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-white fill-current animate-pulse">
              <path d="M20 60 Q15 45 25 40 Q35 35 45 40 L50 35 Q55 30 65 35 Q75 40 85 45 Q95 50 100 60 Q95 70 85 65 Q75 60 65 65 Q55 70 45 65 Q35 70 25 65 Q15 70 20 60 Z" />
              <circle cx="70" cy="45" r="3" />
              <path d="M85 50 Q95 55 90 65" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full max-w-md">
            {/* Logo and Title */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to continue your cultural journey</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Additional Options */}
            <div className="space-y-4 mt-6">
              {/* Forgot Password Link */}
              <div className="text-center">
                <button
                  onClick={handleForgotPassword}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Message Display */}
              {message && (
                <div className={`mt-4 p-3 rounded-lg text-center text-sm ${message.includes('✅')
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                  {message}
                </div>
              )}


              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-500">
                    Don't have an account?
                  </span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <button
                  onClick={handleSignupRedirect}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Create new account
                </button>
              </div>
            </div>


            {/* Cultural Quote */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                "Vasudhaiva Kutumbakam" - The world is one family
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;