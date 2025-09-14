'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Users, Zap, Trophy, Gamepad2, MessageCircle, Sparkles, Rocket, Beer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const discordInviteLink = "https://discord.gg/E8FscEVuhy"

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

            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed">
              Where bros unite, memes are currency, and taking shit seriously is strictly prohibited
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href={discordInviteLink} target="_blank">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all">
                  <MessageCircle className="mr-2" />
                  Join the Brotherhood
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-purple-600 dark:border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all duration-300">
                <Beer className="mr-2" />
                Learn the Lore
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
                <p className="text-2xl font-bold">420+ Bros</p>
                <p className="text-gray-600 dark:text-gray-400">Currently vibing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for fun */}
        <div className="absolute top-20 left-10 animate-bounce">
          <span className="text-6xl">🚀</span>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <span className="text-5xl">💎</span>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-150">
          <span className="text-4xl">🎮</span>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Why BDBO Hits Different
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            We're not your average Discord server, we're a lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Gamepad2 className="w-12 h-12 text-purple-400 mb-4" />
              <CardTitle className="text-2xl">Gaming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Daily gaming sessions where tryhard mode is banned and fun is mandatory
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <CardTitle className="text-2xl">Meme Economy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Our memes are so fire, they're basically a decentralized currency at this point
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Trophy className="w-12 h-12 text-amber-400 mb-4" />
              <CardTitle className="text-2xl">Pointless Competitions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Weekly contests for the most random shit. Last week: Best MS Paint artwork
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <CardTitle className="text-2xl">Voice Chaos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                24/7 voice channels where conversations range from deep philosophy to potato rankings
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Rocket className="w-12 h-12 text-red-400 mb-4" />
              <CardTitle className="text-2xl">Random Events</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                Spontaneous movie nights, roast battles, and whatever chaos we cook up at 3 AM
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
              <CardTitle className="text-2xl">Zero Drama Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                We're here to vibe, not to beef. Drama stays in your Netflix queue
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
            What The Bros Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            100% real testimonials (trust us bro)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "Joined for the memes, stayed for the absolutely unhinged 3 AM voice chats"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>XD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">xXBroMaxXx</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional Vibe Checker</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "This server cured my habit of taking things seriously. 10/10 would recommend"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>GG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">GigaChad69</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO of Chillin'</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                "My productivity dropped 90% but my happiness increased 420%. Worth it."
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>NG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">NoobGamer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Meme Economist</p>
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
              Ready to Join the Chaos?
            </h2>
            <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
              Stop reading this and get in here. We've got memes to share and games to throw.
            </p>
            <Link href={discordInviteLink} target="_blank">
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all">
                <MessageCircle className="mr-3" />
                Join BDBO Corporation
                <Rocket className="ml-3" />
              </Button>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mt-6">
              Warning: Side effects may include uncontrollable laughter and new friendships
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
            <p>A Discord server by bros, for bros 🤝</p>
          </div>
        </div>
      </footer>
    </main>
  )
}