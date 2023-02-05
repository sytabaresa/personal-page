import Author from './author'

type PostType = {
  title: string
  description: string
  draft?: boolean
  slug?: string
  date?: string
  coverImage?: string
  author?: Author
  ogImage?: {
    url: string
  }
  content?: string
}

export default PostType
