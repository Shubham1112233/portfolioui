import { sanityClient } from './sanity.client'
import { 
  personalProjectsQuery, 
  experienceQuery, 
  postsQuery,
  singlePostQuery,
  postsWithPaginationQuery 
} from './queries'

// Cache for client-side data
const cache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

function isCacheValid(timestamp) {
  return Date.now() - timestamp < CACHE_DURATION
}

// Optimized data fetching with caching
export async function fetchWithCache(key, fetchFn) {
  const cached = cache.get(key)
  
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data
  }
  
  const data = await fetchFn()
  cache.set(key, {
    data,
    timestamp: Date.now()
  })
  
  return data
}

// Homepage data fetching
export async function getHomepageData() {
  return fetchWithCache('homepage', async () => {
    try {
      const [projects, experience, posts] = await Promise.all([
        sanityClient.fetch(personalProjectsQuery).catch(() => []),
        sanityClient.fetch(experienceQuery).catch(() => []),
        sanityClient.fetch(postsQuery).catch(() => [])
      ])
      
      return { projects, experience, posts }
    } catch (error) {
      console.warn('Failed to fetch homepage data:', error)
      // Return empty data to prevent build failure
      return { projects: [], experience: [], posts: [] }
    }
  })
}

// Single post fetching
export async function getPost(slug) {
  return fetchWithCache(`post-${slug}`, () => 
    sanityClient.fetch(singlePostQuery, { slug })
  )
}

// Paginated posts
export async function getPostsWithPagination(start = 0, end = 6) {
  return fetchWithCache(`posts-${start}-${end}`, () => 
    sanityClient.fetch(postsWithPaginationQuery, { start, end })
  )
}

// Clear cache when needed
export function clearCache() {
  cache.clear()
}

// Preload critical data
export async function preloadCriticalData() {
  try {
    await getHomepageData()
  } catch (error) {
    console.warn('Failed to preload data:', error)
  }
}
