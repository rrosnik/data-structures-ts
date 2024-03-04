export interface ICallbackOptions {
    once?: boolean
    priority?: number
}

export interface callStack<T extends (...args: any[]) => void> {
    register(channelName: string, callback: T, options: ICallbackOptions): void
    unregister(channelName: string): void
    call(channelName: string, ...args: Parameters<T>): void
    createChannel(channelName: string): void
}
