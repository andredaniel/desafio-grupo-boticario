import React from 'react'
import { AppBar } from '../../core/AppBar'
import { NavBar } from '../../core/NavBar'
import { AppContent, PanelWrapper } from './Panel.styles'

const Panel: React.FC = ({ children }): JSX.Element => {
  return (
    <PanelWrapper>
      <NavBar />
      <AppBar />
      <AppContent>{children}</AppContent>
    </PanelWrapper>
  )
}

export { Panel }
