export class KuroEventDispatchMulti<T extends Element | Window> {
  private _target: T
  private _definedEvents: string[]

  constructor(target: T, events: string[]) {
    this._target = target
    this._definedEvents = events
  }

  public fire(callback: (e?: unknown) => void, callOnInit?: boolean) {
    this._definedEvents.forEach((event) =>
      this._target.addEventListener(event, callback)
    )

    if (callOnInit) callback()
  }

  public clean(callback: (e?: unknown) => void) {
    this._definedEvents.forEach((event) =>
      this._target.removeEventListener(event, callback)
    )
  }
}
