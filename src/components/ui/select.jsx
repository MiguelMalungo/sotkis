import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

// Native Select component for simple use cases
const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select
    className={cn(
      "flex h-10 w-full rounded-md border border-white bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </select>
))
Select.displayName = "Select"

const SelectOption = React.forwardRef(({ className, ...props }, ref) => (
  <option
    className={cn("text-white", className)}
    ref={ref}
    {...props}
  />
))
SelectOption.displayName = "SelectOption"

// Custom Select wrapper for use with SelectTrigger
const SelectRoot = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="relative" ref={ref}>
    {children}
  </div>
))
SelectRoot.displayName = "SelectRoot"

// SelectTrigger component for custom styling
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-white bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 !text-white chevron-down" />
  </div>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef(({ placeholder, ...props }, ref) => (
  <span ref={ref} {...props}>
    {placeholder}
  </span>
))
SelectValue.displayName = "SelectValue"

const SelectContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-white bg-popover text-popover-foreground shadow-md",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
))
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
))
SelectItem.displayName = "SelectItem"

export { Select, SelectOption, SelectRoot, SelectTrigger, SelectValue, SelectContent, SelectItem } 