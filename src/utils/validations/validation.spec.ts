import { validateEmail, minLength } from "./validations";

describe('Validations', () => {
    describe('validateEmail', () => {
        it('should return true when email is valid', () => {
            expect(validateEmail('dede@dede.com')).toBeTruthy();
        });
        it('should return false when email is invalid', () => {
            expect(validateEmail('dededede.com')).toBeFalsy();
        });
    });

    describe('minLength',() => {
        it('should return true when the value less than 3', () => {
            expect(minLength(3, '12')).toBeTruthy();
        });

        it('should return false when the value greater than 3', () => {
            expect(minLength(3, '1244d')).toBeFalsy();
        });

        it('should return true when the value is empty', () => {
            expect(minLength(3, null)).toBeTruthy();
        });
    });
});
