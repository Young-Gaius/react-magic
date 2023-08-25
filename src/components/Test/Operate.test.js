import operate from '../../logic/operate';

describe('operation', () => {
  it('Add two numbers', () => {
    expect(operate(5, 5, '+')).toBe('10');
  });

  it('Subtract two numbers', () => {
    expect(operate(10, 3, '-')).toBe('7');
  });
  it('Subtract two numbers', () => {
    expect(operate(14, 20, '-')).toBe('-6');
  });
  it('Multiplay two numbers', () => {
    expect(operate(10, 15, 'x')).toBe('150');
  });
  it('Divide by Zero', () => {
    expect(operate(7, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('Divide two numbers', () => {
    expect(operate(21, 3, '÷')).toBe('7');
  });
  it('Modulo of two numbers', () => {
    expect(operate(24, 4, '%')).toBe('0');
  });
  it('Modulo by zero', () => {
    expect(operate(12, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  it('For Unknown Operation', () => {
    expect(() => operate(8, 2, '#')).toThrowError("Unknown operation '#'");
  });
});
