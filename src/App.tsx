import { ArrowUpRight, Menu, X, Play, ShieldCheck } from "lucide-react";
import { useEffect, useId, useState } from "react";
import {
  CHECKOUT_URL,
  VSL_URL,
  assets,
  audience,
  exclusions,
  faq,
  included,
  journey,
  metrics,
  navLinks,
  philosophySteps,
} from "./content";

function CtaLink({ children, className = "" }: { children: string; className?: string }) {
  return (
    <a className={`button ${className}`} href={CHECKOUT_URL}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="EstratégIA">
        <strong>EstratégIA</strong>
        <span>Plataforma de Implementação</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <CtaLink className="header-cta">Quero acessar</CtaLink>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div className="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <CtaLink>Quero acessar</CtaLink>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Plataforma de Implementação</p>
        <h1>
          Seu primeiro infoproduto para vender em{" "}
          <em>60 dias ou menos</em>
        </h1>
        <p className="hero-subtitle">
          Para quem quer ter um curso online, mas não sabe por onde começar nem o
          que vender. A metodologia de mais de 200 funis de vendas, agora dentro
          de uma plataforma de IA que transforma seu conhecimento em vendas
          diárias.
        </p>
        <CtaLink>Quero acessar agora</CtaLink>
      </div>
      <div className="hero-media" aria-label="Retrato de Rebeca Geller">
        <img
          src={assets.rebecaHero}
          alt="Rebeca Geller sentada em retrato editorial"
          width="1290"
          height="2293"
          fetchPriority="high"
        />
      </div>
      <div className="metric-strip" aria-label="Métricas">
        {metrics.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function VslSection() {
  return (
    <section className="section dark vsl-section" id="metodo">
      <div className="section-head narrow">
        <p className="eyebrow">Conheça o método</p>
        <h2>Veja como transformar seu conhecimento em um infoproduto estruturado</h2>
      </div>
      <div className="vsl-frame">
        {VSL_URL ? (
          <iframe
            src={VSL_URL}
            title="Vídeo de vendas EstratégIA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="vsl-cover" aria-label="Capa do vídeo de vendas">
            <button type="button" aria-label="Vídeo em breve">
              <Play aria-hidden="true" fill="currentColor" />
            </button>
          </div>
        )}
      </div>
      <CtaLink>Quero acessar agora</CtaLink>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section light" id="para-quem">
      <div className="split-head">
        <p className="eyebrow">Para quem é</p>
        <h2>Este método é para você se...</h2>
      </div>
      <div className="editorial-grid five">
        {audience.map((item, index) => (
          <article className="line-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExclusionSection() {
  return (
    <section className="section dark exclusion">
      <div>
        <p className="eyebrow">Critério</p>
        <h2>Não é para você se...</h2>
      </div>
      <div className="exclusion-list">
        {exclusions.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <CtaLink>Quero acessar o EstratégIA</CtaLink>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section story" id="historia">
      <div className="story-media">
        <img
          src={assets.rebecaTrajetoria}
          alt="Retrato de Rebeca Geller em blazer escuro"
          width="1290"
          height="2293"
          loading="lazy"
        />
        <span>Rebeca Geller</span>
      </div>
      <div className="story-copy">
        <p className="eyebrow">A história por trás do método</p>
        <h2>A trajetória de Rebeca Geller</h2>
        <p>
          Durante seis anos nos bastidores do mercado digital, Rebeca atuou como
          coprodutora e participou da estruturação de mais de 200 funis de
          vendas em mais de 50 nichos e especialidades.
        </p>
        <p>
          Ao lado de especialistas de áreas diferentes, ela acompanhou a criação
          de ofertas, páginas, mensagens, aulas, criativos, validações e
          decisões comerciais que determinavam se uma ideia ficaria parada ou
          ganharia mercado.
        </p>
        <blockquote>
          Não se trata de uma IA genérica que gera textos superficiais.
        </blockquote>
        <p>
          O padrão encontrado foi claro: antes de escalar, contratar equipe ou
          investir pesado, era preciso estruturar o conhecimento, validar a
          promessa e transformar a experiência do especialista em uma oferta
          compreensível.
        </p>
        <p>
          A coprodução sempre entregou esse processo, mas com um custo alto e
          uma barreira de entrada para quem ainda estava começando. O EstratégIA
          nasce da codificação dessa metodologia em frameworks, inteligência de
          negócios e uma jornada guiada dentro de uma plataforma de IA.
        </p>
        <div className="story-metrics">
          {metrics.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section light philosophy">
      <div className="section-head">
        <p className="eyebrow">Filosofia</p>
        <h2>A filosofia: primeiro valide, depois escale</h2>
        <p>
          O EstratégIA parte de uma premissa simples: produto digital não começa
          pela gravação de aulas, começa por clareza estratégica. Primeiro você
          transforma conhecimento em estrutura. Depois testa a oferta no mundo
          real. Só então faz sentido aumentar investimento, equipe e escala.
        </p>
      </div>
      <div className="philosophy-grid">
        {philosophySteps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
      <p className="statement">Primeiro valide. Depois escale.</p>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="section product">
      <div className="split-head">
        <p className="eyebrow">Plataforma</p>
        <h2>O que é o EstratégIA?</h2>
      </div>
      <div className="product-grid">
        <div>
          <p>
            O EstratégIA é uma plataforma de implementação de quatro meses que
            conduz especialistas pela criação do primeiro infoproduto, reunindo
            a metodologia de Rebeca Geller, análise das respostas, organização
            das ideias, geração dos materiais e orientação de cada etapa.
          </p>
          <p>
            Em vez de entregar apenas aulas para assistir, a plataforma conduz
            uma jornada guiada. Você responde, a inteligência interpreta, os
            frameworks organizam e os materiais necessários para colocar a
            oferta no ar são gerados com base no seu conhecimento.
          </p>
        </div>
        <div className="formula" aria-label="Fórmula editorial">
          <span>Conhecimento</span>
          <b>+</b>
          <span>Metodologia</span>
          <b>+</b>
          <span>Inteligência artificial</span>
          <b>=</b>
          <em>Infoproduto estruturado</em>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section dark" id="jornada">
      <div className="section-head">
        <p className="eyebrow">Jornada de quatro meses</p>
        <h2>Como funciona a jornada de 4 meses</h2>
      </div>
      <div className="journey-list">
        {journey.map((item, index) => (
          <article key={item.title}>
            <span>Passo {String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="section light" id="incluido">
      <div className="split-head">
        <p className="eyebrow">Entregáveis</p>
        <h2>Tudo o que está incluído no seu acesso</h2>
      </div>
      <div className="included-list">
        {included.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
      <CtaLink>Quero ter acesso a tudo isso</CtaLink>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="section dark bonus">
      <div>
        <p className="eyebrow accent">Bônus exclusivo</p>
        <h2>Bônus exclusivo <em>apenas para os 10 primeiros</em></h2>
      </div>
      <div>
        <p>
          Os 10 primeiros participantes terão acesso a uma aula ao vivo com
          Rebeca Geller sobre esteira de produtos, funil internacional e
          expansão além das fronteiras.
        </p>
        <p>
          O encontro terá espaço para dúvidas ao vivo, será gravado e ficará
          disponível na plataforma. É um encontro exclusivo para os primeiros
          participantes que decidirem implementar agora.
        </p>
        <CtaLink>Quero garantir minha vaga entre os 10 primeiros</CtaLink>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section offer" id="oferta">
      <div className="offer-copy">
        <p className="eyebrow">Sua oportunidade</p>
        <h2>EstratégIA — Plataforma de Implementação do seu Primeiro Infoproduto</h2>
        <ul>
          <li>4 meses de acesso completo</li>
          <li>Metodologia de implementação</li>
          <li>Entregáveis para página, criativos e conteúdo</li>
          <li>Aulas de apoio para validação orgânica e tráfego pago</li>
        </ul>
      </div>
      <div className="price-panel">
        <p className="old-price">De: R$ 1.997,00</p>
        <p className="price">R$ 997,00</p>
        <p>ou em até 12x no cartão</p>
        <CtaLink>Quero acessar por R$ 997</CtaLink>
        <small>
          O valor retornará ao preço original de R$ 1.997,00 assim que a meta
          da turma de lançamento for atingida, sem aviso prévio.
        </small>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="section guarantee">
      <div className="guarantee-number">07</div>
      <div>
        <p className="eyebrow">Garantia incondicional</p>
        <h2>7 dias de risco zero</h2>
        <p>
          Você tem 7 dias para acessar a plataforma, conhecer a estrutura e
          decidir com tranquilidade. Se entender que o EstratégIA não é para o
          seu momento, basta solicitar o reembolso dentro do prazo.
        </p>
        <p className="guarantee-highlight">
          <ShieldCheck aria-hidden="true" size={24} strokeWidth={1.5} />
          Devolvemos 100% do seu investimento de forma integral.
        </p>
        <CtaLink>Quero garantir minha vaga agora</CtaLink>
      </div>
    </section>
  );
}

function FaqItem({ item, index }: { item: (typeof faq)[number]; index: number }) {
  const id = useId();
  const [open, setOpen] = useState(index === 0);
  return (
    <article className="faq-item">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{item.question}</strong>
        <i aria-hidden="true">{open ? "−" : "+"}</i>
      </button>
      <div id={id} hidden={!open}>
        <p>{item.answer}</p>
      </div>
    </article>
  );
}

function FAQSection() {
  return (
    <section className="section faq" id="faq">
      <div className="split-head">
        <p className="eyebrow">FAQ</p>
        <h2>Perguntas frequentes</h2>
      </div>
      <div className="faq-list">
        {faq.map((item, index) => (
          <FaqItem key={item.question} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section dark final-cta">
      <p className="eyebrow">Decisão</p>
      <h2>Você tem duas escolhas.</h2>
      <div className="choice-grid">
        <p>
          Continuar com o conhecimento parado, dependendo da agenda e esperando
          o momento perfeito para começar.
        </p>
        <p>
          Acessar a metodologia, estruturar seu infoproduto e usar processo e
          inteligência artificial para fazer o que precisa ser feito.
        </p>
      </div>
      <p className="statement">Faça o que tem que ser feito.</p>
      <p className="signature">Rebeca Geller</p>
      <CtaLink>Quero acessar por R$ 997</CtaLink>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Expert Digital</strong>
        <span>Plataforma de Implementação — Rebeca Geller</span>
      </div>
      <nav aria-label="Links legais">
        <a href="#privacidade">Política de Privacidade</a>
        <a href="#termos">Termos de Uso</a>
        <a href="#contato">Contato</a>
        <a href="#legal">Informações legais</a>
      </nav>
      <p>
        © {new Date().getFullYear()} Expert Digital. Dados legais, contato,
        CNPJ e links oficiais devem ser configurados no código antes da
        publicação.
      </p>
    </footer>
  );
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      setVisible(Boolean(hero && window.scrollY > hero.offsetHeight - 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`mobile-sticky ${visible ? "is-visible" : ""}`} href={CHECKOUT_URL}>
      Quero acessar por R$ 997
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VslSection />
        <AudienceSection />
        <ExclusionSection />
        <StorySection />
        <PhilosophySection />
        <ProductSection />
        <JourneySection />
        <IncludedSection />
        <BonusSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
