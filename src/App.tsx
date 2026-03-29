/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Timer, 
  Heart, 
  AlertCircle, 
  ArrowRight, 
  Star,
  ShoppingBag,
  Check,
  Lock,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const faqData = [
  {
    q: "💬 E se eu não souber absolutamente nada sobre introdução alimentar?",
    a: "Perfeito — esse método foi feito justamente pra você. Você vai receber um passo a passo simples e direto, como se alguém estivesse te guiando em cada fase."
  },
  {
    q: "💬 Tenho muito medo de engasgo… isso me ajuda mesmo?",
    a: "Sim. Você vai ter acesso ao manual anti-engasgo + explicação do reflexo GAG, de forma simples, pra te dar mais segurança na hora de oferecer os alimentos."
  },
  {
    q: "💬 E se meu bebê já rejeita comida?",
    a: "Isso é mais comum do que parece. Você vai entender os erros que causam essa rejeição e como corrigir de forma prática já nas próximas refeições."
  },
  {
    q: "💬 É complicado de aplicar na rotina?",
    a: "Não. Tudo foi pensado para ser simples, rápido e fácil, mesmo pra mães com pouco tempo. Nada de receitas difíceis ou processos complicados."
  },
  {
    q: "💬 Como eu recebo o material?",
    a: "O acesso é 100% digital e imediato. Assim que a compra for confirmada, você já recebe tudo e pode começar na mesma hora."
  },
  {
    q: "💬 E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não fizer sentido pra você, é só pedir reembolso. Sem complicação."
  }
];

const previewImages = [
  "https://i.ibb.co/JP2fJGz/1.png",
  "https://i.ibb.co/KcrfsrhC/2.png",
  "https://i.ibb.co/ycmBDs9Z/3.png",
  "https://i.ibb.co/yFXkYPkh/4.png",
  "https://i.ibb.co/F4f8h1PH/5.png",
  "https://i.ibb.co/6R0jFPgb/6.png"
];

const testimonialImages = [
  "https://i.ibb.co/RkWjRgvp/instagram-dm.png",
  "https://i.ibb.co/Kcw6LfvX/instagram-dm-2.png",
  "https://i.ibb.co/hJ4WPF4X/instagram-dm-1.png",
  "https://i.ibb.co/whqXgx89/whatsapp-chat.png"
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const trackPixelEvent = (eventName: string, params?: object) => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', eventName, params);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3">
        <span>Oferta válida somente HOJE</span>
        <div className="bg-white/20 px-2 py-0.5 rounded flex items-center gap-1">
          <Timer size={14} />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-8 md:pt-12 pb-16 md:pb-20 px-4 overflow-hidden bg-slate-50">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/LTbCEvG.jpg" 
            alt="Background" 
            className="w-full h-full object-cover blur-md opacity-30"
            referrerPolicy="no-referrer"
            decoding="async"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-center lg:text-left">
            <div className="flex-1 order-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 md:mb-6 text-slate-900"
              >
                Tenha em mãos o método simples que está ajudando milhares de mães a fazer a <span className="text-brand-rose">introdução alimentar do jeito certo</span>
              </motion.h1>

              {/* Mockup Image for Mobile (between title and subtitle) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:hidden mb-6 max-w-[280px] mx-auto"
              >
                <img 
                  src="https://i.ibb.co/MkHGqvXh/mockup-br.png" 
                  alt="Mockup NutriBebê" 
                  className="w-full h-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  loading="eager"
                />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm md:text-base lg:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Mais de <span className="font-bold text-red-500">78% das mães erram</span> na introdução alimentar e acabam dificultando a relação do bebê com a comida sem perceber.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#pricing" className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3.5 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  QUERO GARANTIR AGORA <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Mockup Image for Desktop (side by side) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block flex-1 order-2"
            >
              <img 
                src="https://i.ibb.co/MkHGqvXh/mockup-br.png" 
                alt="Mockup NutriBebê" 
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
                decoding="async"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emotional Opening */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <span className="text-3xl mb-4 block">👶</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Se você chegou até aqui… provavelmente só quer uma coisa: <span className="italic text-brand-rose">fazer o melhor pelo seu bebê.</span></h2>
            <p className="text-base text-slate-600">Mas na prática, não é tão simples assim…</p>
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            <motion.div {...fadeIn} className="flex flex-col sm:flex-row gap-4 items-start p-6 rounded-2xl bg-slate-50 border-l-4 border-red-400">
              <div className="bg-red-100 p-2 rounded-full text-red-500 shrink-0">
                <AlertCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Porque ninguém te ensina de verdade.</h3>
                <p className="text-sm text-slate-600 italic mb-4">E aí começam as dúvidas que tiram o sono:</p>
                <ul className="space-y-2.5">
                  {["“Será que ele pode comer isso?”", "“E se ele engasgar?”", "“Por que ele não quer comer nada?”", "“Será que eu estou fazendo errado?”"].map((q, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-bold text-red-600 flex items-center gap-2 text-sm">
                  👉 insegurança… medo… e até culpa
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="text-center py-8 md:py-10">
              <h3 className="text-xl font-bold mb-4 text-slate-800">A introdução alimentar não é só sobre dar comida.</h3>
              <p className="text-sm text-slate-600 mb-8">Ela define a relação dele com a comida, os hábitos pra vida e a saúde no futuro.</p>
              <div className="bg-brand-yellow/30 p-5 md:p-6 rounded-2xl border border-brand-yellow/50">
                <p className="text-brand-rose-dark font-bold text-sm md:text-base">
                  👉 Quando feita da forma errada, pode gerar rejeição, dificuldade pra comer e estresse todos os dias.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Method Presentation */}
      <section className="py-16 md:py-20 px-4 bg-brand-rose text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6">Mas a verdade é: você não precisa passar por isso no escuro.</h2>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white rounded-3xl p-6 md:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 md:mb-8 text-center">Com o método NutriBebê, você vai:</h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "Saber exatamente o que dar em cada fase",
                "Entender como evitar engasgos (sem paranoia)",
                "Fazer seu bebê aceitar melhor os alimentos",
                "Ter mais segurança em cada refeição",
                "Parar de se sentir perdida"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-brand-green/20 p-1 rounded-full text-brand-green shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <p className="font-semibold text-slate-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Background baby image placeholder feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/baby-eating/1920/1080?blur=2" 
            alt="Bebê comendo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Veja um pouco do que você vai receber</h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Material completo, organizado e ilustrado para facilitar o seu dia a dia.
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing">
              {previewImages.map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] snap-center"
                >
                  <div className="bg-slate-50 rounded-2xl p-2 shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={src} 
                      alt={`Preview ${i + 1}`} 
                      className="w-full h-auto rounded-xl"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Indicator for scrolling */}
            <div className="flex justify-center gap-2 mt-2 lg:hidden">
              <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold animate-pulse">
                <ChevronLeft size={12} /> Arraste para o lado <ChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Moved and Updated) */}
      <section className="py-16 md:py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl font-black mb-4">O que as mamães estão dizendo...</h2>
            <div className="flex justify-center gap-1 text-brand-yellow-dark mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </motion.div>

          {/* Horizontal Scroll Container for Testimonials */}
          <div className="relative group">
            <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing">
              {testimonialImages.map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] snap-center"
                >
                  <div className="bg-slate-50 rounded-2xl p-1 shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={src} 
                      alt={`Depoimento ${i + 1}`} 
                      className="w-full h-auto rounded-xl"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Indicator for scrolling */}
            <div className="flex justify-center gap-2 mt-2 lg:hidden">
              <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold animate-pulse">
                <ChevronLeft size={12} /> Arraste para o lado <ChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Offers */}
      <section id="pricing" className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Escolha o seu Kit da Mamãe</h2>
            <p className="text-sm text-slate-600">Invista na saúde e no futuro do seu bebê hoje mesmo.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Essential Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-slate-100 flex flex-col"
            >
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-brand-green font-bold mb-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-brand-green"></div> KIT ESSENCIAL
                </div>
                <h3 className="text-xl font-black mb-4">Kit Essencial da Mamãe</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-slate-400 line-through text-base">R$ 97</span>
                  <span className="text-3xl font-black text-slate-900">R$ 17</span>
                </div>
                <p className="text-slate-600 text-xs">Tudo o que você precisa pra começar do jeito certo.</p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {[
                  "Guia completo de introdução alimentar",
                  "Lista de alimentos permitidos e proibidos",
                  "Manual anti-engasgo + reflexo GAG",
                  "🎁 Bônus: lista de compras pronta"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-xs font-medium">
                    <CheckCircle2 size={16} className="text-brand-green shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  setShowUpsell(true);
                  trackPixelEvent('InitiateCheckout', { content_name: 'Kit Essencial' });
                }}
                className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
              >
                QUERO O ESSENCIAL <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Complete Plan (Featured) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-brand-rose relative flex flex-col transform md:scale-105 z-20"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-rose text-white px-6 py-1.5 rounded-full font-black text-xs tracking-widest uppercase shadow-lg">
                MAIS ESCOLHIDO 🔥
              </div>

              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-brand-rose font-bold mb-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-brand-rose"></div> KIT COMPLETO
                </div>
                <h3 className="text-xl font-black mb-4">Kit Completo NutriBebê</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-slate-400 line-through text-base">R$ 147</span>
                  <span className="text-3xl font-black text-slate-900">R$ 27</span>
                </div>
                <p className="text-slate-600 text-xs">Pra quem quer fazer tudo do jeito certo, sem erros.</p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                <li className="font-bold text-brand-rose text-xs mb-2">Tudo do essencial +</li>
                {[
                  "🚨 O erro silencioso que faz o bebê rejeitar comida",
                  "😣 Como aliviar o desconforto da dentição",
                  "🥣 Receitas por idade (6 a 24 meses)",
                  "⚠️ Introdução alimentar mesmo com alergias",
                  "🛒 Lista de compras estratégica"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-xs font-medium">
                    <CheckCircle2 size={16} className="text-brand-rose shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.wiapy.com/69c9a53d63055551269a0665"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('InitiateCheckout', { content_name: 'Kit Completo' })}
                className="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-black rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 animate-pulse text-sm"
              >
                QUERO O COMPLETO AGORA <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">PERGUNTAS FREQUENTES</h2>
            <p className="text-sm text-slate-600">Clique nas perguntas para ver as respostas.</p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {faqData.map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className={`font-bold text-sm md:text-base lg:text-lg transition-colors ${openFaq === i ? "text-brand-rose" : "text-slate-900"}`}>
                    {item.q}
                  </h3>
                  <div className={`shrink-0 ml-4 p-1 rounded-full transition-all ${openFaq === i ? "bg-brand-rose text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 md:py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
          <div className="bg-white/10 p-5 md:p-6 rounded-full">
            <ShieldCheck size={60} className="md:w-20 md:h-20 text-brand-green" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Garantia Incondicional de 7 Dias</h2>
            <p className="text-sm text-slate-400 mb-4">
              Você tem 7 dias pra testar. Se não gostar, devolvemos seu dinheiro. Sem complicação e sem perguntas.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-brand-green font-bold text-sm">
              <Lock size={14} /> Compra 100% Segura
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-brand-rose text-white text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-6">Você não precisa ser perfeita. Só precisa ter a orientação certa.</h2>
            <p className="text-base md:text-lg opacity-90 mb-8 md:mb-10">E é exatamente isso que você vai encontrar aqui.</p>
            <a href="#pricing" className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white font-black py-4 px-8 rounded-full text-base md:text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
              <ShoppingBag size={20} /> QUERO GARANTIR AGORA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-slate-50 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2026 Método NutriBebê. Todos os direitos reservados.</p>
      </footer>

      {/* Upsell Popup */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpsell(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] p-8 md:p-10 max-w-md w-full relative z-10 shadow-2xl border-4 border-brand-yellow"
            >
              <div className="text-center">
                <div className="inline-block bg-brand-yellow text-brand-rose-dark font-black px-4 py-1 rounded-full text-xs mb-6 uppercase tracking-widest">
                  OFERTA ÚNICA E EXCLUSIVA 🎁
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  ESPERE! <br />
                  <span className="text-brand-rose">NÃO VÁ AINDA!</span>
                </h2>
                <p className="text-slate-600 text-sm md:text-base mb-8">
                  Vimos que você se interessou pelo Kit Essencial. Que tal levar o <span className="font-bold text-slate-900">Kit Completo (Premium)</span> com todos os bônus exclusivos por um valor especial?
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                  <p className="text-slate-400 line-through text-sm mb-1">De R$ 147,00</p>
                  <p className="text-slate-500 text-xs mb-2">Por apenas</p>
                  <div className="text-4xl font-black text-brand-green">
                    R$ 23,00
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://pay.wiapy.com/RJIlwag6t"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPixelEvent('InitiateCheckout', { content_name: 'Upsell Kit Completo' })}
                    className="w-full py-4 bg-brand-green hover:bg-brand-green-dark text-white font-black rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 animate-bounce text-base"
                  >
                    SIM! QUERO O COMPLETO POR R$ 23 <ArrowRight size={20} />
                  </a>
                  <a 
                    href="https://pay.wiapy.com/kxDP3w0KLw"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPixelEvent('InitiateCheckout', { content_name: 'Kit Essencial (After Upsell)' })}
                    className="block text-slate-400 hover:text-slate-600 text-xs font-medium underline transition-colors"
                  >
                    Não, obrigado. Quero apenas o Kit Essencial por R$ 17.
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
