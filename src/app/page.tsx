import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='bg-white w-screen flex justify-center md:p-10 p-2'>
      <div className='bg-gray-500 rounded-lg w-4/12 p-2 '>
        <div className='text-white text-2xl p-4 font-bold justify-center flex mb-10 border-b-2'>
          Gerador de Carteirinha 
        </div>

        <div className='text-white border-dashed border-2 p-2 justify-center w-full flex flex-col text-center space-y-2'>
         <Link className='font-bold p-2 rounded-lg bg-blue-500' href="/aluno">Criar crachá de aluno</Link>
         <Link className='font-bold p-2 rounded-lg bg-red-500' href="/funcionario">Criar crachá de funcionário</Link>
        </div>

      </div>
    </div >
  )
}
