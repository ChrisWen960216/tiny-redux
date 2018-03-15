function combineReducer(reducers: any) {
  return (state: any, action: action) => {
    const keys = Object.keys(reducers);
    const newState: any = {};
    keys.forEach((key: string) => {
      newState[key] = reducers[key](state[key], action);
    });
    return newState;
  };
}

export default combineReducer;