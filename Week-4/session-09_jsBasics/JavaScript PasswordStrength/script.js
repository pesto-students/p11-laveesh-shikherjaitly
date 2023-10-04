function isStrongPassword(password) {
    if (password.length < 8) {
      return false; // Password is too short
    }
  
    if (password.toLowerCase().includes("password")) {
      return false; // Password contains "password"
    }
  
    if (!/[A-Z]/.test(password)) {
      return false; // Password does not contain an uppercase character
    }
  
    return true; // All conditions passed, password is strong
  }
  