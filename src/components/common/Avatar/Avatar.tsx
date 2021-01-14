import React, { ImgHTMLAttributes } from 'react'
import { AvatarWrapper } from './Avatar.styles'

const Avatar: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (
  props
): JSX.Element => {
  const { src } = props

  return <AvatarWrapper src={src} />
}

export { Avatar }
