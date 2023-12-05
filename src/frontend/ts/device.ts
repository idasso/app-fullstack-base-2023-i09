class Device{
    id: number;
    name: string;
    description: string;
    state: boolean;
    type: number;

    constructor (name: string, description: string, state: boolean, type: number) {
      this.name = name;
      this.description = description;
      this.state = state;
      this.type = type;
    }
  }