import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-gray-100 pt-20'>
        <div className='flex-1 mb-8 xl:pl-10'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Bem vindo ao SleepTracker
          </h1>
          <p className='md:text-xl mb-6'>
            Monitore seu sono, melhore sua saúde e acorde se sentindo renovado com o SleepTracker.
          </p>
          <SignInButton>
            <button className='w-full md:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>
              Comece agora
            </button>
          </SignInButton>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img
            src='sleep-tracker.png'
            alt='SleepTracker Illustration'
            className='w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Frequently Asked Questions Section */}
      <div className='py-16 px-8 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Perguntas Frequentes
        </h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div>
            <h3 className='text-xl font-bold'>O que é o SleepTracker?</h3>
            <p className='text-gray-600'>
             SleepTracker é uma ferramenta poderosa projetada para ajudá-lo a monitorar seus padrões de sono e melhorar sua saúde geral.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Como funciona?</h3>
            <p className='text-gray-600'>
              O SleepTracker analisa seus dados de sono e fornece insights personalizados para ajudá-lo a ter uma qualidade de sono melhor.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Como o SleepTracker Funciona?</h3>
            <p className='text-gray-600'>
              Sim, o SleepTracker oferece um plano gratuito com funcionalidades básicas. Planos premium estão disponíveis para quem deseja acessar insights avançados e análises mais detalhadas.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Testimonials Section */}
      <div className='py-16 px-8 bg-gray-100'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          O Que Nossos Usuarios Dizem
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;O SleepTracker transformou completamente minha rotina de sono. Agora me sinto mais energizado todos os dias!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Sarah L.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;Os insights do SleepTracker me ajudaram a identificar e corrigir meus problemas de sono. Recomendo fortemente!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- John D.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker é super fácil de usar e fornece dados precisos
              É#39; indispensável para quem quer melhorar a qualidade do sono!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;