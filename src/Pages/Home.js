import React from 'react'

const Home = () => {
  return (
    <div className='containe flex flex-col h-screen'>
      <div className='h-1/3 relative'>
        <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" className='w-full h-full'/>
        <span className='text-lg absolute bottom-0 right-0 bg-black opacity-40 text-white p-1 rounded'>Thuany Nails</span>
      </div>
      <div className='bg-purple-600 h-full text-center p-5 flex flex-col justify-evenly'>
        <h2 className='text-3xl'>Meus parabéns por voce ter chegado(a) até aqui!</h2>
        <div className='bg-lime-50 py-4 px-4 rounded-md text-xl text-left'>
          <p className='block mb-1'><span className='font-bold'>1-</span> Iremos testar os seu conhecimento com esse pequeno quiz de 5 perguntas básicas.</p>
          <p className='block'><span className='font-bold'>2-</span> De acordo com o que foi ensinado na aula teórica e prática.</p>
        </div>
        <div className='h-1 border-b border-gray-800'></div>
        <button className='bg-lime-50 mx-auto px-7 py-4 rounded-md text-xl font-bold tracking-wide'>Iniciar quiz</button>
      </div>
    </div>
  )
}

export default Home