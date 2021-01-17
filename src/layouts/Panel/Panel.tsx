import React from 'react'
import { AppBar } from '../../containers/AppBar'
import { NavBar } from '../../containers/NavBar'
import { AppContent, PanelWrapper } from './Panel.styles'

const Panel: React.FC<{ overflow?: string }> = (props): JSX.Element => {
  const { children, overflow } = props

  return (
    <PanelWrapper>
      <NavBar />
      <AppBar />
      <AppContent overflow={overflow}>{children}</AppContent>
    </PanelWrapper>
  )
}

export { Panel }
