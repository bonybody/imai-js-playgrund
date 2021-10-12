export interface IPlaygroundApi {
  messageQueue: Array<string>
  pushMessage(message: string): void
}