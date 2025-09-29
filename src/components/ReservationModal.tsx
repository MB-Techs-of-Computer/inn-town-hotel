"use client";
import { useEffect, useRef } from "react";
import '@/styles/components/reservation.css';

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ReservationModal({ open, onClose }: ReservationModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const formInitializedRef = useRef(false);

  useEffect(() => {
    // Script'i sadece bir kez yükle
    const loadHopenAPIScript = () => {
      if (scriptLoadedRef.current) return Promise.resolve();
      
      return new Promise<void>((resolve) => {
        // Mevcut script varsa kaldır
        const existingScript = document.querySelector('script[src*="hopenapi.com"]');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          !function (e, n) {
            var t = "bookingengine", o = "integration", i = e[t] = e[t] || {}, a = i[o] = i[o] || {}, r = "__cq", c = "__loader", d = "getElementsByTagName";
            if (n = n || [], a[r] = a[r] ? a[r].concat(n) : n, !a[c]) {
              a[c] = !0; var l = e.document, g = l[d]("head")[0] || l[d]("body")[0];
              !function n(i) {
                if (0 !== i.length) {
                  var a = l.createElement("script"); a.type = "text/javascript", a.async = !0, a.src = "https://" + i[0] + "/integration/loader.js",
                    a.onerror = a.onload = function (n, i) { return function () { e[t] && e[t][o] && e[t][o].loaded || (g.removeChild(n), i()) } }(a, (function () { n(i.slice(1, i.length)) })), g.appendChild(a)
                }
              }(
                ["tr-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])
            }
          }(window, []);
        `;
        
        document.head.appendChild(script);
        scriptLoadedRef.current = true;

        // Script yüklendikten sonra kısa bir bekleme
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    };

    const initializeForm = () => {
      if (formInitializedRef.current || !containerRef.current) return;

      try {
        const windowObj = window as any;
        if (windowObj.bookingengine && windowObj.bookingengine.integration) {
          const be = windowObj.bookingengine.integration;
          
          // Önceki form varsa temizle
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }

          // Yeni form initialize et
          be.__cq = be.__cq || [];
          be.__cq.push([
            "setContext",
            "BE-INT-inntownhotel_2023-05-25",
            "tr"
          ]);

          be.__cq.push([
            "embed",
            "search-form",
            { container: "modal-search-form" }
          ]);

          formInitializedRef.current = true;
        }
      } catch (error) {
        console.error('Form initialization error:', error);
      }
    };

    if (open) {
      // Modal açıldığında formu initialize et
      loadHopenAPIScript().then(() => {
        // Script yüklendikten sonra formu initialize et
        const checkAndInit = () => {
          const windowObj = window as any;
          if (windowObj.bookingengine && windowObj.bookingengine.integration) {
            initializeForm();
          } else {
            setTimeout(checkAndInit, 500);
          }
        };
        checkAndInit();
      });

      // Body scroll'u kapat
      document.body.style.overflow = 'hidden';
    } else {
      // Modal kapandığında scroll'u aç ve form'u reset et
      document.body.style.overflow = 'auto';
      formInitializedRef.current = false;
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  const handleClose = () => {
    formInitializedRef.current = false;
    onClose();
  };

  if (!open) return null;

  return (
    <div className="reservation-overlay" onClick={handleClose}>
      <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Rezervasyon</h2>
          <button className="reservation-close" onClick={handleClose}>
            ✕
          </button>
        </div>
        
        <div className="modal-body">
          <div 
            id="modal-search-form" 
            ref={containerRef}
            className="be-container"
          >
            {/* HopenAPI formu buraya yüklenecek */}
          </div>
        </div>
      </div>
    </div>
  );
}