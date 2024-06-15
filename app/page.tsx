import Hero from "./components/Hero"
import Homepage from "./components/Homepage"

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Homepage />
    </main>
  )
}
