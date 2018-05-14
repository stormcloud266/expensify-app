import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense( '123456', { note: 'new' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123456',
    updates: {
      note: 'new'
    }
  });
});

test('should set up add expense action object with provided values', () => {

  const expenseData = {
    description: 'rent',
    note: 'money bye bye',
    amount: 123123123,
    createdAt: 1000
  }

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
