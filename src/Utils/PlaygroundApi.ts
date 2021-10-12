import {IPlaygroundApi} from "./IPlaygroundApi";

export class PlaygroundApi implements IPlaygroundApi {
  private readonly _messageQueue: Array<string>

  constructor() {
    this._messageQueue = []
  }

  get messageQueue() {
    return this._messageQueue
  }

  pushMessage(message: string) {
    this._messageQueue.push(message)
  }
}