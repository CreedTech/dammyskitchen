/* eslint-disable react/prop-types */
// SEO.jsx or SEO.tsx
import { Helmet } from 'react-helmet';
import { assets } from '../assets/assets';

const SEO = ({
  title = 'Order Nigerian Food in London | DammysKitchen',
  description = 'Get fast, affordable Nigerian meals delivered in London. Order online now from DammysKitchen.',
  url = 'https://dammyskitchen.vercel.app',
  image = assets.logo,
  keywords = 'Nigerian food London, order Nigerian food online, African meals delivery, DammysKitchen, food delivery London',
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
    <link rel="icon" href="/favicon.ico" />
  </Helmet>
);

export default SEO;
