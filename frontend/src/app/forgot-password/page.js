// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import axios from "axios";
// import { forgotPassword } from "@/lib/api";
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleForgot = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await forgotPassword({ email });
//       if (res.data.success) {
//         setMessage("✅ Reset link or OTP sent to your email.");
//       } else {
//         setMessage(res.data.message || "Failed to send reset info.");
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-50">
//       <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
//           Forgot Password
//         </h2>
//         <form onSubmit={handleForgot} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your registered email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {loading ? "Sending..." : "Send Reset Info"}
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-sm text-red-500">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Sparkles, ArrowLeft, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import { forgotPassword } from "@/lib/api";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await forgotPassword({ email });
      if (res.data.success) {
        setMessage("✅ Reset link or OTP sent to your email.");
      } else {
        setMessage(res.data.message || "Failed to send reset info.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.push("/login");
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
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute inset-4 border-2 border-white/30 rounded-full">
                <div className="absolute inset-4 border border-white/40 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-20 right-20 text-white/60 animate-bounce">
              <Sparkles size={24} />
            </div>
            <div className="absolute top-40 left-32 text-white/40 animate-bounce" style={{animationDelay: '0.3s'}}>
              <Sparkles size={16} />
            </div>
            <div className="absolute bottom-32 right-16 text-white/50 animate-bounce" style={{animationDelay: '0.7s'}}>
              <Sparkles size={20} />
            </div>
            
            {/* Cultural Patterns */}
            <div className="absolute bottom-20 left-20 w-40 h-40 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current animate-pulse">
                <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 55 L30 65 L35 45 L20 30 L40 30 Z" />
              </svg>
            </div>
          </div>
          
          {/* Cultural Content Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                ARYAVARTA
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Reset Your Password
              </p>
              <div className="w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
              <p className="text-sm mt-4 opacity-75 max-w-md">
                Don't worry, it happens to the best of us. Enter your email and we'll send you instructions to reset your password.
              </p>
            </div>
          </div>
          
          {/* Animated Key Pattern */}
          <div className="absolute bottom-10 right-10 opacity-30">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-white fill-current animate-pulse">
              <path d="M30 40 Q20 30 30 20 Q40 30 50 40 L70 40 Q80 30 90 40 Q80 50 70 40 L50 40 Q40 50 30 40 Z" />
              <circle cx="35" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="65" y="35" width="8" height="10" />
              <rect x="75" y="35" width="4" height="10" />
              <rect x="85" y="35" width="4" height="10" />
            </svg>
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full max-w-md">
            {/* Back to Login */}
            <button
              onClick={handleBackToLogin}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Login
            </button>

            {/* Logo and Title */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
              <p className="text-gray-600">
                No worries! Enter your email and we'll help you reset it.
              </p>
            </div>

            {/* Reset Form */}
            <form onSubmit={handleForgot} className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                />
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
                    Sending...
                  </span>
                ) : (
                  "Send Reset Instructions"
                )}
              </button>
            </form>

            {/* Message Display */}
            {message && (
              <div className={`mt-6 p-4 rounded-lg text-center text-sm ${
                message.includes('✅') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            {/* Additional Help */}
            <div className="mt-8 text-center">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">
                  Need more help?
                </h3>
                <p className="text-xs text-blue-700">
                  If you don't receive the email within 5 minutes, check your spam folder or try again with a different email address.
                </p>
              </div>
            </div>

            {/* Remember Password Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <button
                  onClick={handleBackToLogin}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Sign in here
                </button>
              </p>
            </div>

            {/* Cultural Quote */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                "Kshama veerasya bhushanam" - Forgiveness is virtue of the virtuous
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;