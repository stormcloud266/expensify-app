import selectExpesesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectExpesesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up single expense', () => {
  const res = selectExpesesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const res = selectExpesesTotal(expenses);
  expect(res).toBe(105790);
});
