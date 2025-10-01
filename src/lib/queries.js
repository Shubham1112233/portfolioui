import groq from 'groq'

export const personalProjectsQuery = groq`
  *[_type == "personalProject"] | order(_createdAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    summary,
    tech,
    repoUrl,
    liveUrl,
    "mainImage": images[0].asset->{
      _id,
      url,
      "metadata": {
        "dimensions": metadata.dimensions,
        "lqip": metadata.lqip
      }
    }
  }
`

export const experienceQuery = groq`
  *[_type == "experience"] | order(startDate desc) {
    _id,
    role,
    company,
    location,
    startDate,
    endDate,
    current,
    summary,
    highlights,
    tech
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "body": body[0...2] // Limit body content for preview
  }
`

// Add optimized single post query
export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    body,
    "author": author->{
      name,
      image
    }
  }
`

// Add pagination support
export const postsWithPaginationQuery = groq`
  {
    "posts": *[_type == "post"] | order(publishedAt desc)[$start...$end] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt
    },
    "total": count(*[_type == "post"])
  }
`


