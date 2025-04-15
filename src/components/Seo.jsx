/* eslint-disable react/prop-types */
// SEO.jsx or SEO.tsx
import { Helmet } from 'react-helmet';
import { assets } from '../assets/assets';

const SEO = ({
  title = 'Order Nigerian Food in London | DammysKitchen',
  description = 'Get fast, affordable Nigerian meals delivered in London. Order online now from DammysKitchen.',
  url = 'https://dammyskitchen.vercel.app',
  image = assets.logo,
  keywords = 'Nigerian food London, order Nigerian food online, African meals delivery, DammysKitchen, food delivery London, Nigerian meals London, Nigerian cuisine London, African food delivery London, Nigerian restaurant London, jollof rice London, suya delivery London, Nigerian takeout London, best Nigerian food London, Nigerian food near me, traditional Nigerian meals, spicy Nigerian food London, Nigerian fast food London, Afro-Caribbean food London, Nigerian food home delivery, Nigerian catering London, egusi soup London, pounded yam London, efo riro London, jollof rice London, fried rice London, amala delivery London, eba and soup London, nkwobi London, pepper soup London, moi moi London, asun delivery London, Nigerian snacks London, gizdodo London, Nigerian stew delivery London, African dishes UK, authentic Nigerian meals London, Nigerian food for parties London, Nigerian delicacies UK, order African food London, Nigerian breakfast London, Nigerian lunch delivery, Nigerian dinner delivery',
  twitterHandle = '@dammyskitchen',
}) => (
  <Helmet>
    {/* Basic SEO */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="DammysKitchen" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="DammysKitchen" />
    <meta property="og:image:alt" content={description} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:creator" content={twitterHandle} />

    {/* Mobile/Browser Friendly */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ff9900" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />

    {/* Canonical */}
    <link rel="canonical" href={url} />

    {/* Favicon */}
    <link rel="icon" href={assets.logo} />
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "DeliveryRestaurant",
        "@id": "https://dammyskitchen.vercel.app",
        "name": "DammysKitchen",
        "image": "https://dammyskitchen.vercel.app/logo.png",
        "url": "https://dammyskitchen.vercel.app",
        "logo": "https://dammyskitchen.vercel.app/logo.png",
        "description": "DammysKitchen offers delicious, authentic Nigerian food delivered fast across London. Order online today.",
        "telephone": "+44-20-1234-5678",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Nigerian St",
          "addressLocality": "London",
          "addressCountry": "GB",
          "postalCode": "E1 6AN"
        },
        "sameAs": [
          "https://www.facebook.com/dammyskitchen",
          "https://www.instagram.com/dammyskitchen",
          "https://twitter.com/dammyskitchen"
        ],
        "menu": "https://dammyskitchen.vercel.app/collection",
        "acceptsReservations": "True",
        "servesCuisine": "Nigerian",
        "priceRange": "££",
        "openingHours": "Mo-Su 10:00-22:00"
      }
    `}
    </script>
  </Helmet>
);

export default SEO;
