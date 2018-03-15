import Store from './store';

function applyMiddleware(store: Store, ...args: any[]) {
  const enArr: any[] = args.map((middleware: any): any => middleware({
    dispatch: store.dispatch,
    getState: store.getState
  }));

  let of = store.dispatch;
  enArr.forEach((en: any) => { of = en(of); });
  store.dispatch = of;

}

export default applyMiddleware;