import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex items-center gap-6">
        <Image
          className="inline-block h-20 w-20 rounded-full"
          src="/me.jpg"
          alt=" "
          width={256}
          height={256}
        />
        <span className="text-center text-5xl font-medium">
          Hey there! <br className="sm:hidden" /> Im josh.
        </span>
      </div>
      <main className="max-w-2xl pt-5 text-gray-700">
        <div>
          Im a software engineer based out of Austin TX, currently CTO at
          Biblish, where we are building a home for literature in the 21st
          century. Check our current project, <a href='https://papertrail.biblish.com' className='text-blue-600 hover:underline'>Papertrail</a>!
        </div>
      </main>
    </>
  );
}
