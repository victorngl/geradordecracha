'use client'

import { useState } from 'react'
import * as htmlToImage from 'html-to-image';
import CrachaAluno from '@/components/CrachaAluno';


export default function Aluno() {
  const [name, setName] = useState<string>('Insira um nome')
  const [previewPhoto, setPreviewPhoto] = useState<string>('')
  const [idNumber, setIdNumber] = useState<string>('00/0000')
  const [expiration, setExpiration] = useState<string>('04/2030')

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
          Gerador de Carteirinha - Aluno
        </div>


        <div id="fundo" className='flex justify-center mb-10'>
            <CrachaAluno name={name} previewPhoto={previewPhoto} expiration={expiration} idNumber={idNumber} /> 
        </div>


        <div className='text-white border-dashed border-2 p-2 justify-center space-y-4 w-full'>
          <div>
            <label>Nome: </label>
            <input onChange={(e) => setName(e.target.value)} className="text-zinc-800" name="name" type='text' />
          </div>

          <div>
            <label>Matrícula: </label>
            <input onChange={(e) => setIdNumber(e.target.value)} className="text-zinc-800" name="name" type='text' />
          </div>

          <div>
            <label>Data de Validade: </label>
            <input onChange={(e) => setExpiration(e.target.value)} className="text-zinc-800" name="name" type='text' />
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
