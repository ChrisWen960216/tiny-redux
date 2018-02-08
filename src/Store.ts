class Store {
  private listeners: any[];
  private state: object;
  private reducer: any;

  constructor(reducer: any, state: object = {}) {
    this.state = state;
    this.listeners = [];
    this.reducer = reducer;
  }

  public dispatch(action: string): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener: any): void => listener());
  }

  public getState(): object {
    return this.state;
  }

  public subscribe(listener: any): void {
    this.listeners.push(listener);
  }
}

export default Store;