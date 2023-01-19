import { useState } from 'react'
import styles from './Paginator.module.css'
import left from './../../../assets/images/left.png'
import right from './../../../assets/images/right.png'
import components from './../../../assets/styles/styles.module.css'
import cn from 'classnames'


let Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber , setPortionNumber ] = useState(Math.floor(currentPage/10) + 1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize
  
  return <div className={styles.paginator}>
      {portionNumber > 1 &&
        <button className={components.arrows} onClick={() => { setPortionNumber(portionNumber - 1) }}><img className={styles.img} src={right} alt='стрелка' /></button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return <span className={cn({ [styles.selectedPage]: currentPage === p },
            styles.pageNumber)}
            key={p}
            onClick={(e) => { onPageChanged(p) }}>{p}</span>
        })}
      {portionCount > portionNumber &&
        <button className={components.arrows} onClick={() => { setPortionNumber(portionNumber + 1) }}><img className={styles.img} src={left} alt='стрелка' /></button>
      }</div>
}

export default Paginator

