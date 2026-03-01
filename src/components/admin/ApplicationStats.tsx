type ApplicationStatsProps = {
  users?: unknown
}

const ApplicationStats = ({ users }: ApplicationStatsProps) => {
  const totalAccounts = Array.isArray(users)
    ? users.length
    : users
      ? Object.keys(users as Record<string, unknown>).length
      : 0

  return (
    <div className="text-white flex flex-col">
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col border border-white p-4 rounded-lg">
          <h3>Total Accounts</h3>
          <span>{totalAccounts}</span>
        </div>
        <div className="flex flex-col border border-white p-4 rounded-lg">
          <h3>Total Accounts</h3>
          <span>{totalAccounts}</span>
        </div>
        <div className="flex flex-col border border-white p-4 rounded-lg">
          <h3>Total Accounts</h3>
          <span>{totalAccounts}</span>
        </div>
      </div>
    </div>
  )
}

export default ApplicationStats
