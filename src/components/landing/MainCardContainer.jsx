import React from 'react'

const MainCardContainer = ({children}) => {
  return (
    <main className='overflow-hidden relative w-full min-h-[80vh] h-full flex items-center justify-center sm:p-2'>
    <section className="landing-section w-full h-full flex !justify-start min-h-[100dvh] p-4">
        <div className="w-full flex items-center justify-center sm:px-4">
          <div className="w-full flex items-center justify-center">
            <div className="w-full grid items-center justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {children}
            </div>
          </div>
        </div>
      </section>
      </main>
  )
}

export default MainCardContainer