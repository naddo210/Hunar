import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'HUNAR Creative Studio — Bespoke Art, Branding & Digital Production',
  description = 'HUNAR is a premier creative studio offering bespoke art commissions, brand identity design, custom web development, murals, and creative digital products.',
  canonicalUrl,
  schema,
  ogType = 'website',
  ogImage = '/og-image.jpg',
}) {
  const siteUrl = 'https://hunarstudio.com';
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);

  const defaultOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HUNAR Creative Studio',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Premier creative atelier offering bespoke artwork, brand design, web development, and architectural murals.',
    sameAs: [
      'https://instagram.com/hunarstudio',
      'https://linkedin.com/company/hunar-creative-studio',
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultOrgSchema)}
      </script>
    </Helmet>
  );
}
