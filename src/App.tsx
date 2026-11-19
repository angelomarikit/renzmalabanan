import { MotionConfig } from 'framer-motion'
import { ContactModal } from './components/ContactModal'
import { ContactProvider } from './context/ContactContext'
import { QuoteProvider } from './context/QuoteContext'
import { Home } from './pages/Home'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <QuoteProvider>
        <ContactProvider>
          <Home />
          <ContactModal />
        </ContactProvider>
      </QuoteProvider>
    </MotionConfig>
  )
}
