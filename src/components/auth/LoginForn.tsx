import CustomInput from '../auth/CustomInput'
import ClickHereComponent from '../ClickHereComponent'

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-black/50 text-white p-12 rounded-lg ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <span className="text-sm">
          Enter your email and password to continue
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
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="***********"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ClickHereComponent
              label="Forgot Password?"
              href="/auth/PasswordReset"
            />
          </div>
          <button className="py-2 px-4 bg-linear-to-tr from-blue-500 to-white w-full rounded-lg text-xl hover:cursor-pointer hover:outline-1 font-bold">
            Submit
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ClickHereComponent
            label="Dont have an Account?"
            href="/auth/register"
          />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
