import React from 'react';

const sharedClasses = {
  input: 'w-full px-4 py-2 border rounded-lg bg-zinc-200 dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 focus:outline-none focus:border-primary',
  button: 'bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg p-2',
  flexDivider: 'flex-grow h-px bg-zinc-300 dark:bg-zinc-600',
};

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="flex bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-4">
            <img src="https://placehold.co/100x40?text=Golobe" alt="Golobe logo" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Login</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Login to access your Golobe account</p>
          <form>
            <div className="mb-4">
              <label className="block text-zinc-700 dark:text-zinc-300">Email</label>
              <input type="email" className={sharedClasses.input} placeholder="john.doe@gmail.com" />
            </div>
            <div className="mb-4 relative">
              <label className="block text-zinc-700 dark:text-zinc-300">Password</label>
              <input type="password" className={sharedClasses.input} placeholder="******************" />
              <button type="button" className="absolute right-2 top-2 text-zinc-500 dark:text-zinc-400">
                <img aria-hidden="true" alt="eye-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👁" />
              </button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="form-checkbox text-primary mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80">Login</button>
          </form>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mt-6">Don't have an account? <a href="#" className="text-red-500 hover:underline">Sign up</a></p>
          <div className="flex items-center my-6">
            <div className={sharedClasses.flexDivider}></div>
            <span className="flex-shrink text-zinc-600 dark:text-zinc-400 px-4">Or login with</span>
            <div className={sharedClasses.flexDivider}></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className={sharedClasses.button}>
              <img aria-hidden="true" alt="Facebook logo" src="https://openui.fly.dev/openui/24x24.svg?text=📘" />
            </button>
            <button className={sharedClasses.button}>
              <img aria-hidden="true" alt="Google logo" src="https://openui.fly.dev/openui/24x24.svg?text=🟧" />
            </button>
            <button className={sharedClasses.button}>
              <img aria-hidden="true" alt="Apple logo" src="https://openui.fly.dev/openui/24x24.svg?text=🍏" />
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img className="object-cover w-full h-full rounded-r-lg" src="https://placehold.co/600x800" alt="Resort image" />
        </div>
      </div>
    </div>
  );
};

export default Login;