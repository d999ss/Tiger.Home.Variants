import * as React from "react"
import { cn } from "@/lib/utils"

// Form Container
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn("space-y-6", className)} {...props}>
      {children}
    </form>
  )
}

// Form Field Container
interface FormFieldProps {
  children: React.ReactNode
  className?: string
}

export function FormField({ children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  )
}

// Form Label
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export function FormLabel({ children, required, className, ...props }: FormLabelProps) {
  return (
    <label className={cn("block text-sm font-medium text-foreground", className)} {...props}>
      {children}
      {required && <span className="ml-1 text-brand">*</span>}
    </label>
  )
}

// Form Input
type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>

export function FormInput({ className, ...props }: FormInputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-[12px] border border-black/[0.06] bg-[#fbfcff] px-4 py-2.5 text-sm",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50",
        "transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

// Form Textarea
type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function FormTextarea({ className, ...props }: FormTextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full rounded-[12px] border border-black/[0.06] bg-[#fbfcff] px-4 py-2.5 text-sm",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50",
        "transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "min-h-[120px] resize-y",
        className
      )}
      {...props}
    />
  )
}

// Form Select
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export function FormSelect({ children, className, ...props }: FormSelectProps) {
  return (
    <select
      className={cn(
        "w-full rounded-[12px] border border-black/[0.06] bg-[#fbfcff] px-4 py-2.5 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50",
        "transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

// Form Button
interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  fullWidth?: boolean
}

export function FormButton({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: FormButtonProps) {
  return (
    <button
      className={cn(
        "rounded-[12px] px-6 py-2.5 text-sm font-semibold transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-brand text-brand-foreground hover:brightness-110 shadow-md": variant === "primary",
          "bg-card border border-black/[0.06] text-foreground hover:bg-accent": variant === "secondary",
          "border border-brand text-brand hover:bg-brand hover:text-brand-foreground": variant === "outline",
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// Form Helper Text
interface FormHelperTextProps {
  children: React.ReactNode
  error?: boolean
  className?: string
}

export function FormHelperText({ children, error, className }: FormHelperTextProps) {
  return (
    <p className={cn("text-xs", error ? "text-red-500" : "text-muted-foreground", className)}>
      {children}
    </p>
  )
}

// Form Error Message
interface FormErrorProps {
  children: React.ReactNode
  className?: string
}

export function FormError({ children, className }: FormErrorProps) {
  return (
    <p className={cn("text-xs text-red-500 mt-1", className)}>
      {children}
    </p>
  )
}
