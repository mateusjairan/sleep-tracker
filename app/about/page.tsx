import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Sobre o SleepTracker
        </h1>
        <p className='text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Seu companheiro definitivo para monitorar o sono e melhorar a saúde.
        </p>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-8 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Mission</h2>
        <p className='text-gray-600 max-w-3xl mx-auto text-center'>
          Na SleepTracker, nosso objetivo é ajudar as pessoas a alcançarem um sono melhor e mais bem-estar geral, oferecendo insights sobre seus padrões de sono. Dormir bem leva a uma vida mais saudável e feliz, e estamos aqui para acompanhar você em cada passo dessa jornada.
        </p>
      </section>

      {/* Features Section */}
      <section className='py-16 px-8 bg-gray-100'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Why Choose SleepTracker?
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>Comprehensive Tracking</h3>
            <p className='text-gray-600'>
              Monitor your sleep patterns and identify areas for improvement.
            </p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>Personalized Insights</h3>
            <p className='text-gray-600'>
             Receba recomendações personalizadas para melhorar a qualidade do seu sono.
            </p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <h3 className='text-xl font-bold mb-2'>User-Friendly Design</h3>
            <p className='text-gray-600'>
             Desfrute de uma experiência intuitiva e fluida em todos os dispositivos.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-16 px-8 bg-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Story</h2>
        <p className='text-gray-600 max-w-3xl mx-auto text-center'>
          A SleepTracker foi criada para atender à crescente necessidade de ferramentas eficazes para o gerenciamento do sono. Nossa equipe de especialistas em sono e tecnólogos desenvolveu uma plataforma que combina tecnologia de ponta com insights práticos. Desde o nosso lançamento, ajudamos inúmeros usuários a alcançar um sono melhor e a melhorar sua saúde geral.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className='py-16 px-8 bg-gray-100 text-center'>
        <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Ready to Sleep Better?
        </h2>
        <p className='text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Join SleepTracker today and take the first step towards better sleep
          and a healthier life.
        </p>
        <Link
          href='/sign-up'
          className='inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition'
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;