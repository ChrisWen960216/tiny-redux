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

  public dispatch(action: action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener: any) => listener());
  }

  public getState() {
    return this.state;
  }

  public subscribe(listener: any) {
    this.listeners.push(listener);
  }
}

export default Store;