import http from "./http";

// Auth endpoints
export const register = (data) => http.post("/api/auth/register", data);
export const verifyOtp = (data) => http.post("/api/auth/verify-otp", data);
export const login = (data) => http.post("/api/auth/login", data);
export const forgotPassword = (data) =>
  http.post("/api/auth/forgot-password", data);
export const resetPassword = (token, data) =>
  http.post(`/api/auth/reset-password/${token}`, data);
