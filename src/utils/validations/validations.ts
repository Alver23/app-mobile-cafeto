export const validateEmail = (value: string): boolean => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

export const minLength = (min: number, value: string): boolean => (value || '').length < min;
