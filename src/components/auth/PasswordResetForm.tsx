import CustomInput from './CustomInput'
import { Link } from '@tanstack/react-router'

const PasswordResetForm = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-black/50 text-white p-12 rounded-lg ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">Password Reset</h1>
        <span className="text-sm">
          Enter the email associated with your account
        </span>
        <span className="text-sm text-green-500">
          You will receive a 6-digit code
        </span>
      </div>

      <form>
        <div className="flex flex-col gap-4 w-sm">
          <div className="flex flex-col gap-4">
            <CustomInput
              label="Email"
              name="email"
              type="email"
              autoFocus={true}
              placeholder="you@email.com"
            />
          </div>
          <button className="py-2 px-4 bg-linear-to-tr from-blue-500 to-white w-full rounded-lg text-xl hover:cursor-pointer hover:outline-1 font-bold">
            Send Code
          </button>
          <div className="flex justify-center text-sm">
            <Link to="/auth/login" className="hover:cursor-pointer">
              Back to login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PasswordResetForm
