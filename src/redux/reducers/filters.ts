type actionType = {
  type: string,
  payload: number,
}

type stateType = {
  category: number,
}

const initialState: stateType = {
  category: 0,
};

const filters = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
