function CrachaAluno({ previewPhoto, name, expiration, idNumber }) {

    return (
        <div id="cracha" className="bg-[url('/funcionariomodelo.png')] bg-cover bg-white w-[638px] h-[1016px]">

            <div id="foto" className="flex justify-center bg-cover relative w-[297px] h-[393px] left-[172px] top-[388px] bg-black">
                <img src={previewPhoto} className='bg-cover w-full max-h-[100%] max-w-[100%]'></img>
            </div>

            <div className='relative left-[71px] top-[400px]'>
                <div className='text-[24px] text-red-500 '>Nome</div>
            </div>

            <div className='relative left-[72px] top-[391px]'>
                <div className='font-bold text-[32px] text-black '>{name}</div>
            </div>


            <div className='relative left-[71px] top-[422px]'>
                <div className='text-[24px] text-red-500 '>Matrícula</div>
            </div>

            <div className='relative left-[72px] top-[412px]'>
                <div className='font-bold text-[32px] text-black '>{idNumber}</div>
            </div>


            <div className='relative left-[295px] top-[338px]'>
                <div className='text-[24px] text-red-500 '>Validade</div>
            </div>

            <div className='relative left-[295px] top-[328px]'>
                <div className='font-bold text-[32px] text-black '>{expiration}</div>
            </div>

          


        </div>
    )
}

export default CrachaAluno;