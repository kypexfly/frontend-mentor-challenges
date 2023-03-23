import { Job } from '../../types'
import styles from './JobCard.module.css'
import { Dispatch, SetStateAction } from 'react'

interface JobProps {
  job: Job
  setFilters: Dispatch<SetStateAction<Set<string>>>
}

function JobCard({ job, setFilters }: JobProps) {
  const tags = [job.role, job.level, ...job.languages]
  return (
    <div className={`${styles.jobCard} ${job.new ? styles.featuredCard : ''} `}>
      <div className={styles.description}>
        <img className={styles.companyLogo} src={job.logo} alt={job.company} />
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.25em'}}>
          <div style={{ display: 'flex', alignItems: 'center', }}>
            <span className={styles.company}>{job.company}</span>
            {job.new && <span className={styles.new}>NEW!</span>}
            {job.featured && <span className={styles.featured}>FEATURED</span>}
          </div>
          <span className={styles.position}>{job.position}</span>
          <div className={styles.list}>
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <ul className={styles.list}>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() =>
              setFilters((prev) => {
                const newSet = new Set([...prev]).add(tag)
                return newSet
              })
            }
            className={styles.listItem}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobCard
