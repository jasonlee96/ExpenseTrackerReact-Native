import { NAME_CHANGED, CATEGORY_CHANGED, MONEY_CHANGED, SUBMIT_EXPENSE, NEW_NAME_REQ } from './type';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
}

export const categoryChanged = (category) => {
    return {
        type: CATEGORY_CHANGED,
        payload: category
    };
}

export const moneyChanged = (value) => {
    return {
        type: MONEY_CHANGED,
        payload: value
    };
}

export const onSubmitExpense = (name, category, expense) =>{
    return{
        type: SUBMIT_EXPENSE
    }
}

export const newNameRequest = (isNew) => {
    return{
        type: NEW_NAME_REQ,
        payload: isNew
    }
}