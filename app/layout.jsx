import '@/assets/styles/globals.css'
import Navbar from '../components/Navbar'

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
            <Navbar />
         <main>{children}</main>
        </div>
        
      
      </body>
    </html>
  )
}

export default MainLayout