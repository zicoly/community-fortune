// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Username validation (alphanumeric, underscore, 3-20 chars)
export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

// Password validation
export const validatePassword = (password, minLength = 6) => {
  return password.length >= minLength;
};

// Strong password validation (uppercase, lowercase, number, special char)
export const validateStrongPassword = (password) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

// Phone number validation (basic international format)
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

// URL validation
export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Login form validation
export const validateLoginForm = (formData) => {
  const errors = [];

  // Check if email/username is empty
  if (!formData.email || !formData.email.trim()) {
    errors.push({
      field: "email",
      message: "Please enter your email",
    });
  }

  // If it looks like an email, validate email format
  if (formData.email && formData.email.includes("@")) {
    if (!validateEmail(formData.email)) {
      errors.push({
        field: "email",
        message: "Please enter a valid email address",
      });
    }
  }

  // Check if password is empty
  if (!formData.password) {
    errors.push({
      field: "password",
      message: "Please enter your password",
    });
  }

  // Check minimum password length
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

// Signup form validation
export const validateSignupForm = (formData) => {
  const errors = [];

  // First name validation
  if (!formData.firstName || !formData.firstName.trim()) {
    errors.push({
      field: "firstName",
      message: "Please enter your first name",
    });
  }

  // Last name validation
  if (!formData.lastName || !formData.lastName.trim()) {
    errors.push({
      field: "lastName",
      message: "Please enter your last name",
    });
  }

  // Email validation
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

  // Password validation
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

  // Confirm password validation
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

  // Date of birth validation (all fields must be selected)
  if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
    errors.push({
      field: "dob",
      message: "Please select your complete date of birth",
    });
  }

  // Nationality validation
  if (!formData.nationality) {
    errors.push({
      field: "nationality",
      message: "Please select your nationality",
    });
  }

  // Age confirmation checkbox
  if (!formData.ageConfirm) {
    errors.push({
      field: "ageConfirm",
      message: "You must confirm you are 18 years or older",
    });
  }

  // Terms agreement checkbox
  if (!formData.termsAgree) {
    errors.push({
      field: "termsAgree",
      message: "You must agree to the Terms & Conditions",
    });
  }

  // Responsible gaming checkbox
  if (!formData.responsibleGaming) {
    errors.push({
      field: "responsibleGaming",
      message: "You must agree to responsible gaming policies",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Generic field validator
export const validateField = (fieldName, value, rules = {}) => {
  const errors = [];

  // Required check
  if (rules.required && (!value || !value.trim())) {
    errors.push(`${fieldName} is required`);
    return errors;
  }

  // Min length check
  if (rules.minLength && value.length < rules.minLength) {
    errors.push(`${fieldName} must be at least ${rules.minLength} characters`);
  }

  // Max length check
  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(
      `${fieldName} must be no more than ${rules.maxLength} characters`
    );
  }

  // Email check
  if (rules.email && !validateEmail(value)) {
    errors.push(`Please enter a valid email address`);
  }

  // Custom regex pattern
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(rules.patternMessage || `${fieldName} format is invalid`);
  }

  return errors;
};

export default {
  validateEmail,
  validateUsername,
  validatePassword,
  validateStrongPassword,
  validatePhone,
  validateURL,
  validateLoginForm,
  validateSignupForm,
  validateField,
};
