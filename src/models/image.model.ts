export interface ImageDTO {
  id: string
  src: string
}

export interface ImageProps {
  id: string
  src: string
}

export class Image implements ImageProps {
  private _id: string
  private _src: string

  get id() {
    return this._id
  }

  get src() {
    return this._src
  }

  private constructor({ id, src }: ImageProps) {
    this._id = id
    this._src = src
  }

  static createFromDTO({ id, src }: ImageDTO) {
    return new Image({
      id,
      src,
    })
  }
}
