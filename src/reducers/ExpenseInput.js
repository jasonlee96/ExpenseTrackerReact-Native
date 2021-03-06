import { NAME_CHANGED, CATEGORY_CHANGED, MONEY_CHANGED, SUBMIT_EXPENSE, SUBMIT_FAILED, SUBMIT_SUCCESS, NEW_NAME_REQ } from '../actions/type';


const INITIAL_STATE = {
    name: '',
    category: '',
    expense: '0.00',
    loading: false,
    error: '',
    isNew: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case NEW_NAME_REQ:
            return{ ...state, isNew: action.payload};
        case NAME_CHANGED:
            return { ...state , name: action.payload};
        case CATEGORY_CHANGED:
            return { ...state , category: action.payload};
        case MONEY_CHANGED:
            return { ...state , expense: action.payload};
        case SUBMIT_EXPENSE:
            return { ...state, loading: true }; //revise
        case SUBMIT_SUCCESS:
            return { ...state, ...INITIAL_STATE, error: "Expense Updated"};
        case SUBMIT_FAILED:
            return { ...state, ...INITIAL_STATE, error: "Unexpected Error Occur"};
        default:
            return state;
    }

};