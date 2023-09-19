import { Image, ImageDTO } from './image.model'

export interface PublicationDTO {
  id: string
  title: string
  subtitle: string
  slug: string
  blogId: string
  creationDate: Date
  content: string
  thumbnail: ImageDTO
}

export interface PublicationProps {
  id: string
  title: string
  subtitle: string
  slug: string
  blogId: string
  creationDate: Date
  content: string
  thumbnail: Image
}

export class Publication implements PublicationProps {
  private _id: string
  private _title: string
  private _subtitle: string
  private _slug: string
  private _blogId: string
  private _creationDate: Date
  private _content: string
  private _thumbnail: Image

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get subtitle() {
    return this._subtitle
  }

  get slug() {
    return this._slug
  }

  get blogId() {
    return this._blogId
  }

  get creationDate() {
    return this._creationDate
  }

  get content() {
    return this._content
  }

  get thumbnail() {
    return this._thumbnail
  }

  private constructor({
    id,
    title,
    subtitle,
    slug,
    blogId,
    creationDate,
    content,
    thumbnail,
  }: PublicationProps) {
    this._id = id
    this._title = title
    this._subtitle = subtitle
    this._slug = slug
    this._blogId = blogId
    this._creationDate = creationDate
    this._content = content
    this._thumbnail = thumbnail
  }

  static createFromDTO({
    id,
    title,
    subtitle,
    slug,
    blogId,
    creationDate,
    content,
    thumbnail,
  }: PublicationDTO) {
    return new Publication({
      id,
      title,
      subtitle,
      slug,
      blogId,
      creationDate,
      content,
      thumbnail: Image.createFromDTO(thumbnail),
    })
  }
}
