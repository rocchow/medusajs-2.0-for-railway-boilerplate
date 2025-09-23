import { Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="w-full border-b border-ui-border-base bg-white">
      <div className="content-container py-16 xsmall:py-20 small:py-24">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <Heading
            level="h1"
            className="text-4xl xsmall:text-5xl small:text-6xl leading-tight text-ui-fg-base font-bold"
          >
            Welcome to Evola/Tely!
          </Heading>
          <Text className="text-lg xsmall:text-xl text-ui-fg-subtle max-w-lg leading-relaxed">
            买咗Dylan货，包你冇搞错！<br />
            拼咗Tely图，肯定有前途！
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Hero
