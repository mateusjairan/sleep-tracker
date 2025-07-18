import Guest from '@/components/guest';
import AddNewRecord from '@/components/addNewRecord';
import RecordChart from '@/components/recordChart';
import AverageSleep from '@/components/averageSleep';
import BestWorstSleep from '@/components/bestWorstSleep';
import RecordHistory from '@/components/recordHistory';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
   return <Guest/>
  }
  return (
    <main className='bg-gray-100 text-gray-800 font-sans min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            {/* User Image */}
            <img
              src={user.imageUrl}
              alt={`${user.firstName}&#39;s profile`}
              className='w-24 h-24 rounded-full border border-gray-300 shadow-md'
            />

            {/* User Details */}
            <div className='flex-1'>
              <h2 className='text-2xl md:text-3xl font-bold text-purple-600 mb-2'>
                Bem vindo(a), {user.firstName} 👋
              </h2>
              <p className='text-gray-600 mb-4'>
                Aqui está uma visão rápida da sua atividade recente de sono. Mantenha-se por dentro dos insights dos seus dados e gerencie suas tarefas com eficiência!!
              </p>
              <div className='space-y-2'>
                <p className='text-gray-600'>
                  <span className='font-semibold text-gray-800'>Se juntou em:</span>{' '}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-600'>
                  <span className='font-semibold text-gray-800'>
                    Ultima vez ativo(a):
                  </span>{' '}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          {/* Placeholder for AddSleepRecord */}
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          {/* Placeholder for RecordStats, RecentRecord, and Insights */}
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>
      {/* Placeholder for SleepHistory */}
      <div className='max-w-7xl mx-auto'>
        <RecordHistory />
      </div>
    </main>
    
  )
}
