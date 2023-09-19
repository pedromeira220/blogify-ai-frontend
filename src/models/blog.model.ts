import { PrimaryColorType } from '@/interfaces/primary-color.interface'

export interface BlogDTO {
  id: string
  theme: string
  description: string
  name: string
  slug: string
  primaryColor: PrimaryColorType
  creationDate: string
}

export interface BlogProps {
  creationDate: Date
  description: string
  id: string
  name: string
  primaryColor: PrimaryColorType
  slug: string
  theme: string
}

export class Blog implements BlogProps {
  private _creationDate: Date
  private _description: string
  private _id: string
  private _name: string
  private _primaryColor: PrimaryColorType
  private _slug: string
  private _theme: string

  get creationDate() {
    return this._creationDate
  }

  get description() {
    return this._description
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get primaryColor() {
    return this._primaryColor
  }

  get slug() {
    return this._slug
  }

  get theme() {
    return this._theme
  }

  private constructor({
    creationDate,
    description,
    id,
    name,
    primaryColor,
    slug,
    theme,
  }: BlogProps) {
    this._creationDate = creationDate
    this._description = description
    this._id = id
    this._name = name
    this._primaryColor = primaryColor
    this._slug = slug
    this._theme = theme
  }

  static createFromDTO({
    id,
    theme,
    description,
    name,
    slug,
    primaryColor,
    creationDate,
  }: BlogDTO) {
    return new Blog({
      id,
      theme,
      description,
      name,
      slug,
      primaryColor,
      creationDate: new Date(creationDate),
    })
  }
}
