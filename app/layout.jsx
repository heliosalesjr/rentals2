import '@/assets/styles/globals.css'

export const metadata = {
    title: 'here we go again in the next few seconds ...',
    description: "This is Helio's stuff!!!",
    keywords: 'hot-stuff'
}

const MainLayout = ( {children}) => {
  return (
    <html lang="en">
      <body>
        <div>
         <main>{children}</main>
        </div>
        
      
      </body>
    </html>
  )
}

export default MainLayout