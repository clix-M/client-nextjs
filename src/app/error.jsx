'use client'
import Link from 'next/link'


const error = ({error, reset}) => {
    return (
        <main className=" grid min-h-full place-items-center px-6 py-24 sm:y-32 lg:px-8 bg-slate-900">
            <div className=" text-center">
                <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
                    There was a problem
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {error.message || 'Something went wrong'}
                </h1>
                <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    Please try again later or contact support
                    if the problem persists.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button onClick={reset}>Try again</button>
                    <Link href='/'
                        className= 'text-base font-semibold text-emerald-700 dark:text-emerald-500'
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default error