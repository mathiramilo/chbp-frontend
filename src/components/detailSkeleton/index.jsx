import React from 'react'

import './styles.css'

const DetailSkeleton = () => {
  return (
    <div className="detail-skeleton-container">
      <div className="detail-skeleton__goback"></div>

      <div className="detail-skeleton__main">
        <div className="detail-skeleton__img"></div>

        <div className="detail-skeleton__data">
          <div className="detail-skeleton-data__heading">
            <span></span>
            <div></div>
          </div>

          <div className="detail-skeleton-data__desc"></div>

          <div className="detail-skeleton-data__sizes">
            <span></span>
            <div className="detail-skeleton-data-sizes__options"></div>
          </div>

          <div className="detail-skeleton-data__btn"></div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkeleton
