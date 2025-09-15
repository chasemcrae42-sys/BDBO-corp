// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/generate-static-metadata';
export const metadata = generateStaticMetadata('(home)');

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Zap, Trophy, Gamepad2, MessageCircle, Sparkles, Rocket, Beer } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const discordInviteLink = "/invite"

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="relative container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
              BDBO
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> CORPORATION</span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400">
                Big Dick Beat Off
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed">
                Keep Calm and Beat Off™
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Where chimps unite, pies are sacred, and we're all absolutely fried
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href={discordInviteLink}>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all">
                  <MessageCircle className="mr-2" />
                  Join the Brotherhood
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-purple-600 dark:border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all duration-300">
                <Beer className="mr-2" />
                Smash Some Cold Ones
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-2 border-purple-600">
                    <AvatarFallback>BR{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">420+ Chimps</p>
                <p className="text-gray-600 dark:text-gray-400">Currently fried</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for fun */}
        <div className="absolute top-20 left-10 animate-bounce">
          <span className="text-6xl">🥧</span>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <span className="text-5xl">🍺</span>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-150">
          <span className="text-4xl">🦍</span>
        </div>
        <div className="absolute top-60 left-3/4 animate-pulse delay-300">
          <span className="text-5xl">🍆</span>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Why BDBO Goes <span className="text-purple-600">HARD</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            We're not just apes, we're airborne chimp aids spreading joy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Gamepad2 className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-2xl">Ape Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Get absolutely fried with the chimps. Sweating is forbidden, beating off encouraged
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="text-2xl">Pie Appreciation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Weekly pie rankings, pie eating contests, and heated debates about cream vs fruit pies
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Trophy className="w-12 h-12 text-amber-400 mb-4" />
              <CardTitle className="text-2xl">Beat Off Battles</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Competitive beating off (in games, obviously). Loser buys the pies
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <CardTitle className="text-2xl">Chimp Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                24/7 voice chaos where "Hey" and "Sure" are complete conversations
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Rocket className="w-12 h-12 text-red-400 mb-4" />
              <CardTitle className="text-2xl">Cold Ones & Chaos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Smashing beers, eating pies, and spreading airborne chimp aids at 3 AM
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
              <CardTitle className="text-2xl">Get Fried Together</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                We're all absolutely fried here. Join us in our collective brain cell shortage
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            What The <span className="text-purple-600">Chimps</span> Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            100% real apes spreading the good word
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "Hey. Sure. That's it, that's the whole conversation. 10/10 would chimp again"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">ApeMaximus</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Chief Pie Inspector</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "Got airborne chimp aids, ate 17 pies, absolutely fried. Perfect Discord server"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>BD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">BigDickBeatOff420</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional Beat Offer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "Came for the beat off jokes, stayed to smash cold ones with the chimps. We're all fried here."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">FriedChimp</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Beer & Pie Sommelier</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
        <Card className="shadow-xl border-2 border-purple-500/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Time to <span className="text-purple-600">Beat Off</span> With Us?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
              Stop reading, start beating (off). We've got pies to eat and cold ones to smash.
            </p>
            <Link href={discordInviteLink} target="_blank">
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all">
                <MessageCircle className="mr-3" />
                Join the Beat Off Brotherhood
                <Rocket className="ml-3" />
              </Button>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mt-6">
              Warning: Side effects include airborne chimp aids, chronic pie addiction, and getting absolutely fried
            </p>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-lg mb-2">BDBO Corporation © {new Date().getFullYear()}</p>
            <p className="text-md mb-2">Big Dick Beat Off - Keep Calm and Beat Off™</p>
            <p>A Discord server by chimps, for apes 🦍 🥧 🍺</p>
          </div>
        </div>
      </footer>
    </main>
  )
}