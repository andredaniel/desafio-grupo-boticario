import React from 'react'
import { FiClock, FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { IStatus, StatusTypes } from '../../types/status.interface'
import { StatusWrapper } from './Status.styles'

const Status: React.FC<IStatus> = (props): JSX.Element => {
  const { type } = props

  const Icon = (): JSX.Element => {
    switch (type) {
      case StatusTypes.APPROVED:
        return <FiThumbsUp />

      case StatusTypes.DISAPPROVED:
        return <FiThumbsDown />

      case StatusTypes.IN_VALIDATION:
        return <FiClock />

      default:
        return <span />
    }
  }

  return (
    <StatusWrapper {...props}>
      <Icon /> {type}
    </StatusWrapper>
  )
}

export { Status }
