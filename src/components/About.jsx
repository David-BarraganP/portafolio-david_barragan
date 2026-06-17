import { Zap, Heart, Target, Lightbulb } from 'lucide-react';

const traits = [
  { icon: <Zap size={18} />, title: 'Adaptabilidad', desc: 'Mi formación en ambientes tecnológicos dinámicos ha perfeccionado mi capacidad de adaptarme rápido.' },
  { icon: <Heart size={18} />, title: 'Pasión', desc: 'Abordo los proyectos con fervor y compromiso, con el objetivo de superar expectativas.' },
  { icon: <Target size={18} />, title: 'Compromiso', desc: 'Garantizo entregas en tiempo con atención al detalle y enfoque en los objetivos.' },
  { icon: <Lightbulb size={18} />, title: 'Visión Innovadora', desc: 'Busco constantemente estrategias innovadoras para enfrentar desafíos técnicos.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">01. sobre mí</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">Quién soy</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text */}
          <div>
            <p className="font-body text-soft text-base leading-relaxed mb-6">
              He participado en el desarrollo de distintas aplicaciones web, especializándome progresivamente en el área del back-end. 
              Disfruto diseñando soluciones que sean fiables, escalables y fáciles de mantener, cuidando tanto la arquitectura como la calidad del código.
              Mi experiencia incluye la construcción de APIs REST con Node.js y Express, modelado de bases de datos con PostgreSQL e integración de servicios que permiten que los productos funcionen de forma eficiente detrás de escena.
            </p>
            <p className="font-body text-dim text-sm leading-relaxed">
              Aunque cuento con experiencia en el desarrollo full stack, actualmente estoy enfocado en profundizar mis conocimientos en 
              ingeniería back-end y en crear sistemas sólidos que aporten valor real.
              
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: '1+', label: 'Proyectos' },
                { num: '2+', label: 'Años exp.' },
                { num: '100%', label: 'Compromiso' },
              ].map(s => (
                <div key={s.label} className="text-center p-4 bg-surface border border-border rounded-xl">
                  <div className="font-display text-2xl font-bold text-gradient">{s.num}</div>
                  <div className="font-body text-dim text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ boxShadow: undefined }}>
                <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-3">
                  {t.icon}
                </div>
                <h3 className="font-display text-light font-semibold text-sm mb-1.5">{t.title}</h3>
                <p className="font-body text-dim text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
