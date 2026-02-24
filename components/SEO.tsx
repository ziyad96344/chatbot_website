import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    noindex?: boolean;
    structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = '',
    canonicalUrl,
    ogImage = 'https://xotbot.com/logo/xotbot-og.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    structuredData,
}) => {
    const siteUrl = 'https://xotbot.com';
    const fullTitle = title.includes('XotBot') ? title : `${title} | XotBot`;
    const canonical = canonicalUrl || siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonical} />
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="XotBot" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="author" content="XotBot" />
            <meta name="theme-color" content="#6366f1" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
