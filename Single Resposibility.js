//  ❌ Bad Example (violates SRP)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Handles user data ✅
  getUserInfo() {
    return `${this.name} - ${this.email}`;
  }

  // Sends email ❌ (shouldn’t be User’s job)
  sendEmail(message) {
    console.log(`Sending email to ${this.email}: ${message}`);
  }
}


// ✅ Good Example (follows SRP)


// User only cares about user data
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `${this.name} - ${this.email}`;
  }
}

// Email service handles email logic
class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

// Usage
const user = new User("Mohamed", "mohamed@example.com");
const emailService = new EmailService();

console.log(user.getUserInfo());
emailService.sendEmail(user, "Welcome to our platform!");

//  ❌ Bad Example (violates SRP)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Handles user data ✅
  getUserInfo() {
    return `${this.name} - ${this.email}`;
  }

  // Sends email ❌ (shouldn’t be User’s job)
  sendEmail(message) {
    console.log(`Sending email to ${this.email}: ${message}`);
  }
}


// ✅ Good Example (follows SRP)


// User only cares about user data
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `${this.name} - ${this.email}`;
  }
}

// Email service handles email logic
class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

// Usage
const user = new User("Mohamed", "mohamed@example.com");
const emailService = new EmailService();

console.log(user.getUserInfo());
emailService.sendEmail(user, "Welcome to our platform!");
