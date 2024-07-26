import React from 'react'
import SectionWrapper from '../molecules/SectionWrapper'
import HonorAndAwardsData from '../../data/honor_and_awards.json'

type Props = {}

export default function HonorAndAwards({}: Props) {
  return (
    <SectionWrapper sectionTitle={`Honor\n& Awards`}>
      {HonorAndAwardsData.map((award, index) => (
        <div key={`award_${index}`} className="flex gap-4">
          <span>{award.date}</span>
          <span>{award.content}</span>
        </div>
      ))}
    </SectionWrapper>
  )
}