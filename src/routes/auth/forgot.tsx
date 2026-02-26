import { createFileRoute } from '@tanstack/react-router'
import PasswordResetForm from '@/components/auth/PasswordResetForm'

export const Route = createFileRoute('/auth/forgot')({
  component: ForgotPasswordPage,
})

function ForgotPasswordPage() {
  return <PasswordResetForm />
}
