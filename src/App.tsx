import { JobCard, FilterContainer, Header } from './components'
import useFilterJobs from './hooks/useFilterJobs'

function App() {
  const { filters, setFilters, filteredJobs } = useFilterJobs()

  return (
    <>
      <Header />
      <div className='wrapper'>
        {filters.size ? <FilterContainer filters={filters} setFilters={setFilters} /> : null}

        {filteredJobs.map((job) => (
          <JobCard job={job} setFilters={setFilters} key={job.id} />
        ))}
      </div>
    </>
  )
}

export default App
