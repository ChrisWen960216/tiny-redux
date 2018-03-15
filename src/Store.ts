class Store {
  private listeners: any[];
  private state: any;
  private reducer: any;

  constructor(reducer: any, state: any ) {
    this.state = state;
    this.listeners = [];
    this.reducer = reducer;

    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  public dispatch(action: action): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener: any): void => listener());
  }

  public getState(): any {
    return this.state;
  }

  public subscribe(listener: any): void {
    this.listeners.push(listener);
  }
}

function applyMiddleware(store: Store, ...args: any[]): void {
  const enArr: any[] = args.map((middleware: any): any => middleware({
    dispatch: store.dispatch,
    getState: store.getState
  }));
}

export default Store;