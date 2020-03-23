abstract class Storage {
  protected storage: string;
  constructor(storage: string) {
    this.storage = storage;
  }
  abstract select(model: model): any;
}

class DB extends Storage {
  private static instance: DB;
  constructor() {
    if (DB.instance instanceof DB) return DB.instance;
    const connectTo: string = "/data/items.json";
    super(connectTo);
    DB.instance = this;
  }
  public select(model: model): Promise<any> {
    switch (model) {
      case "item":
        return fetch(this.storage);
      default:
        return Promise.reject("Unexpected model");
    }
  }
}

export default new DB();
