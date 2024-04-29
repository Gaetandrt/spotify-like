import React from 'react'
import { Button, ButtonProps } from './button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

interface Props extends ButtonProps{
  toolText: string
}

function ButtonToolTip({toolText, children, variant, size}: Props) {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={variant} size={size}>{children}</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{toolText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default ButtonToolTip