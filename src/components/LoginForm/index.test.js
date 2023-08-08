import emailValidator from 'email-validator';
import { validateEmail } from './index.js';

 
describe('Email Validation', () => {
  it('should return true for a valid email', () => {
    const validEmail = 'valid@email.com';
    const result = emailValidator.validate(validEmail);
    expect(result).toBe(true);
  });

  it('should return false for an invalid email', () => {
    const invalidEmail = 'invalid_email.com';
    const result = emailValidator.validate(invalidEmail);
    expect(result).toBe(false);
  });
});

describe('Password validation', () => {
  it('should return true for a valid password', ()=> {
    const validPassword = 'AsdF@@12';
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const result = passwordRegex.test(validPassword)
    expect(result).toBe(true)

  })
})
