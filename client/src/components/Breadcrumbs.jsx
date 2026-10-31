import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hunarstudio.com/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://hunarstudio.com${item.href || ''}`,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs text-charcoal/60 font-sans">
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link to="/" className="hover:text-emerald transition font-medium">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-beige-dark" />
            {item.href && idx < items.length - 1 ? (
              <Link to={item.href} className="hover:text-emerald transition font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-emerald font-bold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
