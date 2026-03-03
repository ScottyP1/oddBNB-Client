import { getUsers } from '@/api/users.api'

import { useQuery } from '@tanstack/react-query'

export function useAllUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await getUsers()
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })
}
