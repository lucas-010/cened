import React from 'react'
import ContentBottomPeni from '../components/ContentBottomPeni'
import ContentLoginPeni from '../components/ContentLoginPeni'
import ContentTopPeni from '../components/ContentTopPeni'
import HeaderPeni from '../components/HeaderPeni'

export default function Penitentiary() {
  return (
    <div>
        <HeaderPeni/>
        <ContentTopPeni/>
        <ContentLoginPeni/>
        <ContentBottomPeni/>
    </div>
  )
}
