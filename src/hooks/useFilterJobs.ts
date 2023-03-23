import { useState } from 'react'
import jobs from '../data/jobs.json'
import filterChecker from '../utils/filterChecker'

const useFilterJobs = () => {
  const [filters, setFilters] = useState<Set<string>>(new Set())

  const filteredJobs = jobs.filter((job) => {
    if (!filters.size) return true

    const tags = [job.role, job.level, ...job.languages]
    return filterChecker(tags, [...filters])
  })
  
  return { filters, setFilters, filteredJobs }
}

export default useFilterJobs
