'use client'

import { Inter } from 'next/font/google'
import { useState } from 'react'
import * as htmlToImage from 'html-to-image';
import CrachaFuncionario from '@/components/CrachaFuncionario';

const inter = Inter({ subsets: ['latin'] })


export default function Funcionario() {
  const [name, setName] = useState<string>('Insira um nome')
  const [previewPhoto, setPreviewPhoto] = useState<string>('')

  const handleSubmitPhoto = (e) => {
    if (e?.target?.files?.[0]) {

      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result as string);
      }
      reader.readAsDataURL(file);
    }
  }

  const handleGenerete = (e) => {

    var download = require("downloadjs");

    var element = document.getElementById('cracha');

    htmlToImage.toPng(element as HTMLElement)
      .then(function (dataUrl) {
        download(dataUrl, 'cracha - ' + name + '.png');
      });
  }


  return (
    <div className='bg-gray-400 w-screen  flex justify-center md:p-10 p-2'>
      <div className='bg-zinc-800 rounded-lg w-full p-2'>
        <div className='text-white text-2xl p-4 font-bold justify-center flex mb-10 border-b-2'>
          Gerador de Carteirinha - Funcionário
        </div>


        <div id="fundo" className='flex justify-center mb-10'>
            <CrachaFuncionario name={name} previewPhoto={previewPhoto} /> 
        </div>


        <div className='text-white border-dashed border-2 p-2 justify-center space-y-4 w-full'>
          <div>
            <label>Insira um nome: </label>
            <input onChange={(e) => setName(e.target.value)} className="text-zinc-800" name="name" type='text' />
          </div>

          <div>
            <label>Insira uma foto: </label>
            <input onChange={(e) => handleSubmitPhoto(e)} name="photo" type='file' />
          </div>

          <button className='p-2 rounded text-white bg-blue-700' onClick={e => handleGenerete(e)} type='button'>Gerar Crachá</button>
        </div>
      </div>
    </div >
  )
}
