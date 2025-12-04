export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

export const validatePassword = (password, minLength = 6) => {
  return password.length >= minLength;
};

export const validateLoginForm = (formData) => {
  const errors = [];

  if (!formData.email || !formData.email.trim()) {
    errors.push({
      field: "email",
      message: "Please enter your email or username",
    });
  }

  if (formData.email && formData.email.includes("@")) {
    if (!validateEmail(formData.email)) {
      errors.push({
        field: "email",
        message: "Please enter a valid email address",
      });
    }
  }

  if (!formData.password) {
    errors.push({
      field: "password",
      message: "Please enter your password",
    });
  }

  if (formData.password && formData.password.length < 6) {
    errors.push({
      field: "password",
      message: "Password must be at least 6 characters",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateSignupForm = (formData) => {
  const errors = [];

  if (!formData.firstName || !formData.firstName.trim()) {
    errors.push({
      field: "firstName",
      message: "Please enter your firstName",
    });
  }
  if (!formData.lastName || !formData.lastName.trim()) {
    errors.push({
      field: "lastName",
      message: "Please enter your lastName",
    });
  }

  if (!formData.email || !formData.email.trim()) {
    errors.push({
      field: "email",
      message: "Please enter your email",
    });
  } else if (!validateEmail(formData.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  if (!formData.password) {
    errors.push({
      field: "password",
      message: "Please enter a password",
    });
  } else if (formData.password.length < 8) {
    errors.push({
      field: "password",
      message: "Password must be at least 8 characters",
    });
  }

  if (!formData.confirmPassword) {
    errors.push({
      field: "confirmPassword",
      message: "Please confirm your password",
    });
  } else if (formData.password !== formData.confirmPassword) {
    errors.push({
      field: "confirmPassword",
      message: "Passwords do not match",
    });
  }

  if (!formData.ageConfirm) {
    errors.push({
      field: "ageConfirm",
      message: "You must be 18 years or older",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default {
  validateEmail,
  validateUsername,
  validatePassword,
  validateLoginForm,
  validateSignupForm,
};
