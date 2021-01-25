
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                itemPage: () => "/item-page/{id:Int}"
home: () => "/"
              }
            }

            import type FatalErrorPageType from 'C:\Users\bonda\WebstormProjects\int20h\hakaton\web\src\pages\FatalErrorPage\FatalErrorPage'
import type HomePageType from 'C:\Users\bonda\WebstormProjects\int20h\hakaton\web\src\pages\HomePage\HomePage'
import type ItemPagePageType from 'C:\Users\bonda\WebstormProjects\int20h\hakaton\web\src\pages\ItemPagePage\ItemPagePage'
import type NotFoundPageType from 'C:\Users\bonda\WebstormProjects\int20h\hakaton\web\src\pages\NotFoundPage\NotFoundPage'
            declare global {
              const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const ItemPagePage: typeof ItemPagePageType
const NotFoundPage: typeof NotFoundPageType
            }
          