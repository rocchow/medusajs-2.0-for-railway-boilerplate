import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import PromoBanner from "@modules/layout/components/promo-banner"
import { getBaseURL } from "@lib/util/env"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <PromoBanner />
      <div className="pt-12">
        <Nav />
        {props.children}
        <Footer />
      </div>
    </>
  )
}
