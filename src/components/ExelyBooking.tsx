'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

interface ExelyBookingProps {
  type: 'booking-form' | 'search-form';
  showBreadcrumb?: boolean;
}

export default function ExelyBooking({ type, showBreadcrumb = true }: ExelyBookingProps) {
  useEffect(() => {
    // Sayfa title'ı güncelle (sadece rezervasyon sayfası için)
    if (type === 'booking-form' && typeof window !== 'undefined') {
      document.title = 'Online Rezervasyon Inn Town Hotel, Eskisehir - Resmi site';
    }
  }, [type]);

  const containerId = type === 'booking-form' ? 'be-booking-form' : 'be-search-form';

  return (
    <>
      <Script
        id="exely-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,n){
              var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
              if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
              !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
              a.onerror=a.onload=function(n,i){return function(){e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
              ["tr-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
            }(window, [
              ["setContext", "BE-INT-inntownhotel_2023-05-25", "tr"],
              ["embed", "booking-form", { container: "be-booking-form" }],
              ["embed", "search-form", { container: "be-search-form" }]
            ]);
          `
        }}
      />

      <section className={type === 'booking-form' ? 'py-16' : ''}>
        <div className={type === 'booking-form' ? 'container mx-auto px-4' : ''}>
          {type === 'booking-form' ? (
            // Full Booking Form (rezervasyon sayfası için)
            <div id={containerId} className="min-h-[600px]">
              <div className="text-center py-12 text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                <p>Rezervasyon formu yükleniyor...</p>
              </div>
            </div>
          ) : (
            // Search Form (ana sayfa için)
            <div id="block-search">
              <div id={containerId} className="be-container container">
                <a 
                  href="https://exely.com/" 
                  rel="nofollow" 
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Hotel management software
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}