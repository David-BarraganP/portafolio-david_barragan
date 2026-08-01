import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

const PHONE = '573506864396';
const MESSAGE = 'Hola David, me interesa hablar sobre un proyecto  👋';
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden">
          {/* Header verde */}
          <div className="bg-[#25d366] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">DB</span>
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">David Barragán</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-white rounded-full opacity-80 animate-pulse" />
                  <p className="font-body text-white/80 text-xs">En línea</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white bg-transparent border-none cursor-pointer transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Burbuja de mensaje */}
          <div className="bg-[#e5ddd5] px-4 py-5">
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
              <p className="font-body text-[#2d3748] text-sm leading-relaxed">
                👋 ¡Hola! Estoy disponible para hablar sobre tu proyecto. ¿En qué puedo ayudarte?
              </p>
              <p className="font-mono text-[10px] text-gray-400 text-right mt-1">Ahora</p>
            </div>
          </div>

          {/* Botón CTA */}
          <div className="bg-white px-4 py-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25d366] text-white font-body font-semibold text-sm rounded-full no-underline hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle size={16} />
              Iniciar conversación
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-200 border-none cursor-pointer relative"
      >
        {/* <MessageCircle size={26} color="white" fill="white" /> */}
        <img src="/whatsapp.png" alt="whatsapp" className="w-12 h-12 rounded-full  " />
        {/* Punto de notificación */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent rounded-full border-2 border-bg animate-pulse" />
        )}
      </button>
    </div>
  );
}