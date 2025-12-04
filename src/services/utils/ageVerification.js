/**
 * Age Verification Utilities
 * Functions to validate user age for gambling/lottery platforms
 */

/**
 * Calculate age from date of birth
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @returns {number} - Age in years
 */
export const calculateAge = (day, month, year) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // month is 0-indexed in Date

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday hasn't occurred this year yet, subtract 1
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

/**
 * Check if user is 18 years or older
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @param {number} minimumAge - Minimum required age (default: 18)
 * @returns {boolean} - True if user meets minimum age requirement
 */
export const isAgeVerified = (day, month, year, minimumAge = 18) => {
  // Validate inputs
  if (!day || !month || !year) {
    return false;
  }

  const age = calculateAge(day, month, year);
  return age >= minimumAge;
};

/**
 * Validate date of birth fields
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validateDateOfBirth = (day, month, year) => {
  // Check if all fields are provided
  if (!day || !month || !year) {
    return {
      isValid: false,
      error: "Please select your complete date of birth",
    };
  }

  // Convert to numbers
  const d = parseInt(day);
  const m = parseInt(month);
  const y = parseInt(year);

  // Validate day range
  if (d < 1 || d > 31) {
    return {
      isValid: false,
      error: "Invalid day selected",
    };
  }

  // Validate month range
  if (m < 1 || m > 12) {
    return {
      isValid: false,
      error: "Invalid month selected",
    };
  }

  // Validate year range (reasonable range: 1900 to current year)
  const currentYear = new Date().getFullYear();
  if (y < 1900 || y > currentYear) {
    return {
      isValid: false,
      error: "Invalid year selected",
    };
  }

  // Check if date is valid (e.g., Feb 30 doesn't exist)
  const testDate = new Date(y, m - 1, d);
  if (
    testDate.getDate() !== d ||
    testDate.getMonth() !== m - 1 ||
    testDate.getFullYear() !== y
  ) {
    return {
      isValid: false,
      error: "Invalid date selected",
    };
  }

  // Check if date is not in the future
  const today = new Date();
  if (testDate > today) {
    return {
      isValid: false,
      error: "Date of birth cannot be in the future",
    };
  }

  return {
    isValid: true,
    error: null,
  };
};

/**
 * Complete age verification with error messages
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @param {number} minimumAge - Minimum required age (default: 18)
 * @returns {object} - {isVerified: boolean, age: number, error: string}
 */
export const verifyAge = (day, month, year, minimumAge = 18) => {
  // First validate the date of birth
  const validation = validateDateOfBirth(day, month, year);

  if (!validation.isValid) {
    return {
      isVerified: false,
      age: null,
      error: validation.error,
    };
  }

  // Calculate age
  const age = calculateAge(day, month, year);

  // Check minimum age requirement
  if (age < minimumAge) {
    return {
      isVerified: false,
      age: age,
      error: `You must be at least ${minimumAge} years old to register`,
    };
  }

  // Check maximum reasonable age (e.g., 120 years)
  if (age > 120) {
    return {
      isVerified: false,
      age: age,
      error: "Please enter a valid date of birth",
    };
  }

  return {
    isVerified: true,
    age: age,
    error: null,
  };
};

/**
 * Format date of birth for display
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @returns {string} - Formatted date (e.g., "January 15, 1990")
 */
export const formatDateOfBirth = (day, month, year) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month - 1]} ${day}, ${year}`;
};

/**
 * Get years until user turns 18 (for underage users)
 * @param {number} day - Day of birth (1-31)
 * @param {number} month - Month of birth (1-12)
 * @param {number} year - Year of birth
 * @returns {number} - Years until 18th birthday
 */
export const yearsUntilEligible = (day, month, year) => {
  const age = calculateAge(day, month, year);
  if (age >= 18) return 0;
  return 18 - age;
};

export default {
  calculateAge,
  isAgeVerified,
  validateDateOfBirth,
  verifyAge,
  formatDateOfBirth,
  yearsUntilEligible,
};
