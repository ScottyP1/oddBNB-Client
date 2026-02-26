import { createFileRoute } from '@tanstack/react-router'

import PasswordResetForm from '@/components/auth/PasswordResetForm'

export const Route = createFileRoute('/auth/PasswordReset')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PasswordResetForm />
}
