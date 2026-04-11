import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jose Perez', role: 'Desarrollador web Full-stack', avatar: './assets/img/imaden-sobremi.png',
    message: 'Con una pasión por la excelencia demuestra una habilidad para crear aplicaciones web dinámicas y atractivas que superan las expectativas del cliente.',
  },
  {
    name: 'Daniela Vargas', role: 'Frontend Developer', avatar: './assets/img/dani.jpg',
    message: 'Demuestra una destreza excepcional en el manejo de tecnologías web clave, diseñando interfaces atractivas y funcionales que satisfacen las necesidades de cada proyecto.',
  },
  {
    name: 'Fabiola Rodriguez', role: 'Líder de búsqueda de trabajo', avatar: './assets/img/fabiola.jpeg',
    message: 'Reconozco la pasión y dedicación que David refleja en cada uno de sus proyectos. Nos llena de satisfacción que alguien como él represente la excelencia en programación.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">04. testimonios</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">Reseñas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i}
              className="p-6 bg-card border border-border rounded-2xl flex flex-col hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <Quote size={20} className="text-accent/20 mb-4" />
              <p className="font-body text-soft text-sm leading-relaxed flex-1 mb-6">"{r.message}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img src={r.avatar} alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-border"
                  onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${r.name}&background=16161f&color=6ee7b7&bold=true`; }} />
                <div>
                  <p className="font-display text-light text-sm font-semibold">{r.name}</p>
                  <p className="font-body text-muted text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
