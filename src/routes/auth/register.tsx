import { createFileRoute, useNavigate } from '@tanstack/react-router'
import RegisterForm from '@/components/auth/RegisterForm'
import { useRegister } from '@/features/auth/useAuth'

import type { FormState } from '@/components/auth/RegisterForm'

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  const registerMutation = useRegister()
  const navigator = useNavigate()

  const handleSubmit = (data: FormState) => {
    const [firstName, ...rest] = data.name.trim().split(' ')
    const lastName = rest.join(' ')

    registerMutation.mutate({
      firstName,
      lastName,
      email: data.email,
      password: data.password,
    })

    navigator({ to: '/listings' })
  }

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      isLoading={registerMutation.isPending}
    />
  )
}
