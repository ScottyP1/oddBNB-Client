import CustomInput from './CustomInput'
import ClickHereComponent from './ClickHereComponent'

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-black/50 text-white p-12 rounded-lg ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <span className="text-sm">
          Enter your information below to continue
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
            <CustomInput
              label="Confirm Password"
              name="confirm_password"
              type="password"
              placeholder="***********"
            />
          </div>
          <button className="py-2 px-4 bg-linear-to-tr from-blue-500 to-white w-full rounded-lg text-xl hover:cursor-pointer hover:outline-1 font-bold mt-6">
            Register
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ClickHereComponent
            label="Already have an Account?"
            href="/auth/login"
          />
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
