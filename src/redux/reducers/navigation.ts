type actionType = {
  type: string,
  payload: string,
}

type stateType = {
  menu: string,
}

const initialState: stateType = {
  menu: 'Каталог',
};

const navigation = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default navigation;
