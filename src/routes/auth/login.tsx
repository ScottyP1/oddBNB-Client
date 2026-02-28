import { createFileRoute, useNavigate } from '@tanstack/react-router'
import LoginForm from '@/components/auth/LoginForm'
import type { FormState } from '@/components/auth/LoginForm'
import { useLogin } from '@/features/auth/useAuth'

export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
})

function LoginPage() {
  const loginMutation = useLogin()
  const navigate = useNavigate()

  const handleSubmit = (data: FormState) => {
    loginMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          navigate({ to: '/listings' })
        },
      },
    )
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      isLoading={loginMutation.isPending}
    />
  )
}
