import { Phone, Mail, MessageCircle, Link, GitBranch, ArrowRight } from 'lucide-react';

const contacts = [
  { icon: <Phone size={18} />, label: 'Llamar', value: '+57 350 686 4396', href: 'tel:+573506864396', color: 'text-accent bg-accent/10' },
  { icon: <Mail size={18} />, label: 'Email', value: 'david25barragan@gmail.com', href: 'https://mail.google.com/mail/u/0/?to=david25barragan@gmail.com&fs=1&tf=cm', color: 'text-blue-400 bg-blue-400/10' },
  { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: 'Enviar mensaje', href: 'https://bit.ly/whatsapp-davidbarragan', color: 'text-green-400 bg-green-400/10' },
  { icon: <Link size={18} />, label: 'LinkedIn', value: 'david-barragán', href: 'https://www.linkedin.com/in/david-barrag%C3%A1n-9a353b1b9/', color: 'text-sky-400 bg-sky-400/10' },
  { icon: <GitBranch size={18} />, label: 'GitHub', value: 'David-BarraganP', href: 'https://github.com/David-BarraganP', color: 'text-purple-400 bg-purple-400/10' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">05. contacto</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">Hablemos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Links */}
          <div>
            <p className="font-body text-soft text-base leading-relaxed mb-8">
              Estoy disponible a través de múltiples canales. Ya sea un proyecto, una oportunidad laboral o simplemente conectar.
            </p>
            <div className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <a key={i} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/20 hover:-translate-x-1 transition-all duration-200 no-underline">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.color}`}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-muted text-xs mb-0.5">{c.label}</p>
                    <p className="font-body text-soft text-sm group-hover:text-light transition-colors truncate">{c.value}</p>
                  </div>
                  <ArrowRight size={14} className="text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none orb-green" style={{ filter: 'blur(40px)' }} />
              <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">¿Listo para empezar?</p>
              <h3 className="font-display text-light text-2xl font-bold mb-4">Convirtamos tus ideas en realidad</h3>
              <p className="font-body text-dim text-sm leading-relaxed mb-6">
                Desde interfaces limpias hasta APIs robustas, estoy aquí para ayudarte a construir productos digitales de calidad.
              </p>
              <a href="https://mail.google.com/mail/u/0/?to=david25barragan@gmail.com&fs=1&tf=cm"
                target='_blank'
                rel='noreferrer'
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-display font-semibold rounded-full text-sm hover:bg-accent-dim transition-all duration-200 hover:scale-105 no-underline">
                Enviar email <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
