import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-ui-bg-subtle">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-8 xsmall:flex-row items-start justify-between py-16 xsmall:py-20">
          {/* Brand Section */}
          <div className="flex flex-col gap-y-4 max-w-sm">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-base hover:text-ui-fg-interactive uppercase font-bold"
            >
              Evola
            </LocalizedClientLink>
            <Text className="text-ui-fg-subtle text-sm leading-relaxed">
              We believe that true quality starts with premium products. Evola's curated selection helps everyone live their best life.
            </Text>
          </div>

          {/* Navigation Links */}
          <div className="text-small-regular gap-8 md:gap-x-12 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base transition-colors duration-200",
                            children && "txt-small-plus font-medium"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base transition-colors duration-200"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small">
                  {collections?.slice(0, 4).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base transition-colors duration-200"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Company</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="hover:text-ui-fg-base transition-colors duration-200"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-ui-fg-base transition-colors duration-200"
                  >
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="hover:text-ui-fg-base transition-colors duration-200"
                  >
                    Shop All
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col xsmall:flex-row w-full py-8 border-t border-ui-border-base justify-between items-center gap-y-4 text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Evola. All rights reserved.
          </Text>
          <div className="flex items-center gap-x-6 text-xs">
            <LocalizedClientLink 
              href="/privacy" 
              className="hover:text-ui-fg-base transition-colors duration-200"
            >
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink 
              href="/terms" 
              className="hover:text-ui-fg-base transition-colors duration-200"
            >
              Terms of Service
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
