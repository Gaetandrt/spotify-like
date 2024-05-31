import React from 'react'
import { Slider } from '../ui/slider'
import { cn } from '@/lib/utils'
import moment from 'moment'

type Props = {
  totalSeconds: number
  currentSeconds: number[]
  onValueChange?: (e: number[]) => void
}

const TimeSlider = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-center text-white font-light gap-2 text-xs'>
      <p>{moment.unix(props.currentSeconds[0]).format('mm:ss')}</p>
      <Slider
        defaultValue={[0]}
        max={props.totalSeconds}
        value={props.currentSeconds}
        step={1}
        className={cn("w-[100%] rounded-full")}
        {...props}
      />
      <p>{moment.unix(props.totalSeconds).format('mm:ss')}</p>
    </div>

  )
}

export default TimeSlider