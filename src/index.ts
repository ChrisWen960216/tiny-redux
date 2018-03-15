import Store from './Store';

function reducer(state: state, action: action) {
  switch (action.type) {
    case 'ADD': {
      return {...state, count: state.count + 1};
    }
    
    default: return state;  
  }
}

const store = new Store(reducer, { count: 0 });

const root = document.getElementById('root');
store.subscribe(() => {
  if (root) {
    root.innerText = store.getState().count;
  }
  return false;
});

store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });