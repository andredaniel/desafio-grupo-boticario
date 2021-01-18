import React from 'react'
import { FiClock, FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { IStatus, StatusTypes } from '../../types/status.interface'
import { StatusWrapper } from './Status.styles'

const statusString: any = {
  IN_VALIDATION: 'Em validação',
  DISAPPROVED: 'Reprovado',
  APPROVED: 'Aprovado',
}

const Status: React.FC<IStatus | any> = (props): JSX.Element => {
  const { type } = props

  const Icon = (): JSX.Element => {
    switch (type) {
      case 'APPROVED':
        return <FiThumbsUp />

      case 'DISAPPROVED':
        return <FiThumbsDown />

      case 'IN_VALIDATION':
        return <FiClock />

      default:
        return <span />
    }
  }

  return (
    <StatusWrapper {...props}>
      <Icon /> {statusString[type]}
    </StatusWrapper>
  )
}

export { Status }
