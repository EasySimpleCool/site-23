import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between p-10">
        <div className='flex bg-slate-900'><div>icon</div></div>
        <div className='flex grow justify-center items-center bg-slate-800'><h1>welcome</h1></div>
        <div className='flex bg-slate-900 justify-end'>
          <div className='flex'>
            <div>design</div>
            <div>print</div>
            <div>code</div>
          </div>
        </div>
      </div>
    </>
  )
}