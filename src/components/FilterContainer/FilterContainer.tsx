import { Dispatch, SetStateAction } from 'react'
import styles from './FilterContainer.module.css'

interface FilterContainerProps {
  filters: Set<string>
  setFilters: Dispatch<SetStateAction<Set<string>>>
}

function FilterContainer({ filters, setFilters }: FilterContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tagContainer}>
        {[...filters].map((filter) => (
          <FilterTag key={filter} filter={filter} setFilters={setFilters} />
        ))}
      </div>
      <span className={styles.clearFilter} onClick={() => setFilters(new Set())}>
        clear
      </span>
    </div>
  )
}

function FilterTag({ filter, setFilters }: { filter: string; setFilters: Dispatch<SetStateAction<Set<string>>> }) {
  return (
    <div className={styles.tag}>
      <span className={styles.tagText}>{filter}</span>
      <span
        className={styles.tagRemove}
        onClick={() =>
          setFilters((prev) => {
            const tempFilters = new Set([...prev])
            tempFilters.delete(filter)
            return tempFilters
          })
        }
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
          <path
            fill='#FFF'
            fillRule='evenodd'
            d='M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z'
          />
        </svg>
      </span>
    </div>
  )
}

export default FilterContainer
