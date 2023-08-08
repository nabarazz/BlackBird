import emailValidator from 'email-validator';
import { validateEmail } from './index.js';
 
describe('Email Validation', () => {
  it('should return true for a valid email', () => {
    const validEmail = 'valid@email.com';
    const result = validateEmail(validEmail);
    expect(result).toBe(true);
  });

  it('should return false for an invalid email', () => {
    const invalidEmail = 'invalid_email.com';
    const result = emailValidator(invalidEmail);
    expect(result).toBe(false);
  });
});