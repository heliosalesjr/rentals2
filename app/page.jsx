import Link from 'next/link'

const HomePage = () => {
    return (
        <div>
            <h1 className="text-4xl text-pink-500 font-semibold">Hey!</h1>
            <Link href='/properties' className="text-lg text-slate-800 underline hover:text-blue-500">Show Properties</Link>
        </div>
    )
}

export default HomePage