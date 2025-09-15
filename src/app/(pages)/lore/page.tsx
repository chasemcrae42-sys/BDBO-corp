import Image from "next/image"

export default function LorePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-full h-screen">
        <Image
          src="/images/maxresdefault.jpg"
          alt="BDBO Lore"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  )
}