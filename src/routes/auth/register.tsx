import RegisterForm from '@/components/RegisterForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return <RegisterForm />
}
