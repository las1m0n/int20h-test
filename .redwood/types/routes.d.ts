
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                itemPage: () => "/item-page/{id:Int}"
home: () => "/"
              }
            }

            import type FatalErrorPageType from 'D:\work\int20h-test\web\src\pages\FatalErrorPage\FatalErrorPage'
import type HomePageType from 'D:\work\int20h-test\web\src\pages\HomePage\HomePage'
import type ItemPagePageType from 'D:\work\int20h-test\web\src\pages\ItemPagePage\ItemPagePage'
import type NotFoundPageType from 'D:\work\int20h-test\web\src\pages\NotFoundPage\NotFoundPage'
            declare global {
              const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const ItemPagePage: typeof ItemPagePageType
const NotFoundPage: typeof NotFoundPageType
            }
          