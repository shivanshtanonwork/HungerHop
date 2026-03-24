import { useState } from "react";

const inputBaseClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600";
const inputErrorClass = "border-red-500 focus:border-red-500 focus:ring-red-500";
const errorTextClass = "mt-1 text-xs text-red-600";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\d{10}$/.test(phone);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    return nextErrors;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
  };

  return (
    <form className="space-y-4" onSubmit={handleLoginSubmit} noValidate>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`${inputBaseClass} ${errors.email ? inputErrorClass : ""}`}
        />
        {errors.email ? <p className={errorTextClass}>{errors.email}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className={`${inputBaseClass} ${errors.password ? inputErrorClass : ""}`}
        />
        {errors.password ? <p className={errorTextClass}>{errors.password}</p> : null}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-purple-700 px-4 py-2 font-medium text-white shadow hover:bg-purple-800 transition-colors"
      >
        Login
      </button>
    </form>
  );
};

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!isValidPhone(phone)) {
      nextErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    return nextErrors;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
  };

  return (
    <form className="space-y-4" onSubmit={handleSignupSubmit} noValidate>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your name"
          className={`${inputBaseClass} ${errors.fullName ? inputErrorClass : ""}`}
        />
        {errors.fullName ? <p className={errorTextClass}>{errors.fullName}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`${inputBaseClass} ${errors.email ? inputErrorClass : ""}`}
        />
        {errors.email ? <p className={errorTextClass}>{errors.email}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="9876543210"
          className={`${inputBaseClass} ${errors.phone ? inputErrorClass : ""}`}
        />
        {errors.phone ? <p className={errorTextClass}>{errors.phone}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className={`${inputBaseClass} ${errors.password ? inputErrorClass : ""}`}
        />
        {errors.password ? <p className={errorTextClass}>{errors.password}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter password"
          className={`${inputBaseClass} ${errors.confirmPassword ? inputErrorClass : ""}`}
        />
        {errors.confirmPassword ? (
          <p className={errorTextClass}>{errors.confirmPassword}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 font-medium text-white shadow hover:opacity-90 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
};

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">Welcome to HungerHop</h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          {activeTab === "login"
            ? "Login to continue ordering your favorite meals."
            : "Create a new account to start exploring restaurants."}
        </p>

        <div className="mb-6 grid grid-cols-2 rounded-lg bg-gray-100 p-1">
          <button
            className={`rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "login" ? "bg-white text-purple-700 shadow" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "signup" ? "bg-white text-purple-700 shadow" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>
        </div>

        {activeTab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Auth;
