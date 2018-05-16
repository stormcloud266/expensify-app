import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235, 45, 33, 23454, 325, 2666, 6786}/>);
  expect(wrapper).toMatchSnapshot();
})
