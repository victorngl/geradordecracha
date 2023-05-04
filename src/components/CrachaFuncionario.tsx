function CrachaFuncionario({ previewPhoto, name }) {

    return (
        <div id="cracha" className="bg-[url('/funcionariomodelo.png')] bg-cover bg-white w-[638px] h-[1016px]">

            <div id="foto" className="flex justify-center bg-cover relative w-[297px] h-[393px] left-[172px] top-[388px] bg-black">
                <img src={previewPhoto} className='bg-cover w-full max-h-[100%] max-w-[100%]'></img>
            </div>


            <div className='text-black font-bold flex justify-center relative top-[430px]'>
                <p className='text-[32px]'>{name}</p>
            </div>
        </div>
    )
}

export default CrachaFuncionario;