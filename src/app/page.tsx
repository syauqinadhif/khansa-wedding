import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ItinerarySection } from '@/components/sections/ItinerarySection'
import { CeremonySection } from '@/components/sections/CeremonySection'
import { RsvpSection } from '@/components/sections/RsvpSection'
import { RsvpFormSection } from '@/components/sections/RsvpFormSection'
import { StorySection } from '@/components/sections/StorySection'
import { GallerySection } from '@/components/sections/GallerySection'
import { MapSection } from '@/components/sections/MapSection'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <ItinerarySection />
        <CeremonySection />
        <RsvpSection />
        <RsvpFormSection />
        <StorySection />
        <GallerySection />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
