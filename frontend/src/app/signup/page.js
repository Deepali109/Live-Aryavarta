// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import { register as apiRegister, verifyOtp } from "@/lib/api";
// import axios from "axios";

// const Signup = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [step, setStep] = useState("register"); // "register" or "verify" or "done"
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await apiRegister(formData);
//       console.log(res);
//       if (res.data.success) {
//         setMessage("✅ Verification code sent to your email.");
//         setStep("verify"); // switch to OTP input view
//       } else {
//         setMessage(res.data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage(err.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await verifyOtp({ email: formData.email, code: otp });

//       if (res.data.success) {
//         setMessage("✅ Email verified successfully. Redirecting to home...");
//         setTimeout(() => {
//           router.push("/login");
//         }, 1000);
//         setStep("done");
//       } else {
//         setMessage(res.data.message || "Invalid OTP");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage(err.response?.data?.message || "Verification failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-100">
//       <Navbar />
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
//           {step === "register"
//             ? "Signup"
//             : step === "verify"
//             ? "Verify OTP"
//             : "Success"}
//         </h2>

//         {step === "register" && (
//           <form onSubmit={handleRegister} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               {loading ? "Sending OTP..." : "Register"}
//             </button>
//           </form>
//         )}

//         {step === "verify" && (
//           <form onSubmit={handleVerify} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </form>
//         )}

//         {step === "done" && (
//           <div className="text-center text-green-600 text-lg font-medium">
//             🎉 Your account is verified! You can now log in.
//           </div>
//         )}

//         {message && (
//           <p className="mt-4 text-center text-sm text-red-500">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Lock, Mail, Sparkles, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { register as apiRegister, verifyOtp } from "@/lib/api";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [step, setStep] = useState("register"); // "register" or "verify" or "done"
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await apiRegister(formData);
      console.log(res);
      if (res.data.success) {
        setMessage("✅ Verification code sent to your email.");
        setStep("verify"); // switch to OTP input view
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const res = await verifyOtp({ email: formData.email, code: otp });

      if (res.data.success) {
        setMessage("✅ Email verified successfully. Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
        setStep("done");
      } else {
        setMessage(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToRegister = () => {
    setStep("register");
    setOtp("");
    setMessage("");
  };

  const handleLoginRedirect = () => {
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
                Join Our Cultural Community
              </p>
              <div className="w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
              <p className="text-sm mt-4 opacity-75 max-w-md">
                {step === "register" && "Begin your journey through India's rich heritage and diverse traditions."}
                {step === "verify" && "We've sent a verification code to secure your account."}
                {step === "done" && "Welcome to the Aryavarta family! Your cultural adventure awaits."}
              </p>
            </div>
          </div>
          
          {/* Animated Lotus Pattern */}
          <div className="absolute bottom-10 right-10 opacity-30">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-white fill-current animate-pulse">
              <path d="M60 20 Q50 35 40 45 Q50 55 60 50 Q70 55 80 45 Q70 35 60 20 Z" />
              <path d="M60 50 Q45 60 30 65 Q45 70 60 65 Q75 70 90 65 Q75 60 60 50 Z" />
              <circle cx="60" cy="45" r="5" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full max-w-md">
            {/* Logo and Title */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {step === "register" && "Create Account"}
                {step === "verify" && "Verify Email"}
                {step === "done" && "Welcome!"}
              </h2>
              <p className="text-gray-600">
                {step === "register" && "Join our cultural heritage community"}
                {step === "verify" && "Enter the code sent to your email"}
                {step === "done" && "Your account has been verified successfully"}
              </p>
            </div>

            {/* Registration Form */}
            {step === "register" && (
              <form onSubmit={handleRegister} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
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
                      Sending OTP...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
            )}

            {/* OTP Verification Form */}
            {step === "verify" && (
              <form onSubmit={handleVerify} className="space-y-6">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handleBackToRegister}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Back to Registration
                </button>

                {/* Email Display */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    Verification code sent to:
                    <span className="font-semibold block">{formData.email}</span>
                  </p>
                </div>

                {/* OTP Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter 6-digit verification code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-center text-lg tracking-widest"
                  />
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Verifying...
                    </span>
                  ) : (
                    "Verify Email"
                  )}
                </button>
              </form>
            )}

            {/* Success State */}
            {step === "done" && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-green-700">Account Verified!</h3>
                  <p className="text-gray-600">You can now access all features of Aryavarta.</p>
                </div>
                <button
                  onClick={handleLoginRedirect}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg"
                >
                  Continue to Login
                </button>
              </div>
            )}

            {/* Already have account link */}
            {step === "register" && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={handleLoginRedirect}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            )}

            {/* Message Display */}
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
                message.includes('✅') 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            {/* Cultural Quote */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                "Sarve bhavantu sukhinah" - May all beings be happy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;