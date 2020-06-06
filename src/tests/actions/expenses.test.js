import { addExpense,  editExpense, removeExpense } from '../../actions/expenses';

test('should remove an expense', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should edit an expense', () => {
    const action = editExpense('123abc', { notes: 'my updated notes!' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
           notes:'my updated notes!' 
        }
    })
})

test('should add an expense', () => {
    const expenseData = {
        description: 'Jest',
        amount: 100,
        createdAt: 1000,
        note: 'A Jest test'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add an expense with the default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})
