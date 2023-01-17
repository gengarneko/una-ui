'use client'

import * as React from 'react'

import type { VariantProps } from 'class-variance-authority'

import { Cross2Icon } from '@radix-ui/react-icons'
import * as ToastComponents from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const ToastProvider = ToastComponents.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Viewport>
>(({ className, ...props }, ref) => (
  <ToastComponents.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastComponents.Viewport.displayName

// eslint-disable-next-line tailwindcss/no-custom-classname
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Root>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastComponents.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastComponents.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Action>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Action>
>(({ className, ...props }, ref) => (
  <ToastComponents.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-12 hover:text-gray-1 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:bg-gray-2 group-[.destructive]:text-foreground group-[.destructive]:hover:bg-gray-4 group-[.destructive]:focus:ring-gray-12',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastComponents.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Close>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Close>
>(({ className, ...props }, ref) => (
  <ToastComponents.Close
    ref={ref}
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-gray-6 opacity-0 transition-colors hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-destructive-6 group-[.destructive]:hover:text-destructive-12 group-[.destructive]:focus:ring-destructive-12 group-[.destructive]:focus:ring-offset-destructive-10',
      className,
    )}
    toast-close=''
    {...props}
  >
    <Cross2Icon className='size-4' />
  </ToastComponents.Close>
))
ToastClose.displayName = ToastComponents.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Title>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Title>
>(({ className, ...props }, ref) => (
  <ToastComponents.Title
    ref={ref}
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastComponents.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastComponents.Description>,
  React.ComponentPropsWithoutRef<typeof ToastComponents.Description>
>(({ className, ...props }, ref) => (
  <ToastComponents.Description
    ref={ref}
    className={cn(
      'text-sm opacity-90 group-[.destructive]:font-medium group-[.destructive]:opacity-100',
      className,
    )}
    {...props}
  />
))
ToastDescription.displayName = ToastComponents.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

// Updated at Tue Jan 17 2023 12:01:42 GMT+0800 (China Standard Time)
// Random change for feat(ui)
