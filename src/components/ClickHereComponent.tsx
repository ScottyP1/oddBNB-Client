import { Link } from '@tanstack/react-router'

type Props = {
  label: string
  href: string
}
const ClickHereComponent = ({ label, href }: Props) => {
  return (
    <span className="text-sm mt-2">
      {label} Click&nbsp;
      <Link to={href} className="text-blue-400">
        here
      </Link>
    </span>
  )
}

export default ClickHereComponent
