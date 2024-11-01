'use client'

import * as React from 'react'

import * as SwitchComponents from '@radix-ui/react-switch'

import { cn } from '@/utils/cn'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchComponents.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchComponents.Root>
>(({ className, ...props }, ref) => (
  <SwitchComponents.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchComponents.Thumb
      className={cn(
        'pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchComponents.Root>
))
Switch.displayName = SwitchComponents.Root.displayName

export { Switch }
