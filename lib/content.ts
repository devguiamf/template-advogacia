export const firm = {
  name: "Costa & Mendes",
  legalName: "Costa & Mendes Advocacia",
  tagline: "São Paulo • Prática Jurídica Estratégica",
  headline: "Clareza jurídica para decisões que importam",
  support:
    "Aconselhamento atencioso, rigor técnico e condução estratégica focados em resultados com dignidade humana.",
  oab: "OAB/SP 12.345",
  address: {
    label: "Endereço em São Paulo",
    lines: [
      "Av. Brigadeiro Faria Lima, 3477 - 14º andar",
      "Itaim Bibi, São Paulo - SP, 04538-133",
    ],
  },
  phone: {
    label: "Telefone Institucional",
    display: "+55 11 3045-8800",
    href: "tel:+551130458800",
  },
  email: {
    label: "E-mail Institucional",
    display: "contato@costamendes.adv.br",
    href: "mailto:contato@costamendes.adv.br",
  },
} as const;

export const navLinks = [
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#metodo", label: "Método" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#contato", label: "Contato" },
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "trabalhista",
    title: "Direito Trabalhista Estratégico",
    eyebrow: "Contencioso de Alto Escalão · Prevenção Corporativa",
    summary:
      "Assessoria preventiva e contenciosa especializada para executivos e estruturas corporativas em reestruturações e litígios sensíveis. Condução técnica de passivos complexos perante os Tribunais Regionais e o TST.",
    detail: [
      "Diagnóstico de passivos e políticas de remuneração variável antes de reestruturações.",
      "Defesa e contencioso estratégico em TRTs e no Tribunal Superior do Trabalho.",
      "Negociação coletiva e acordos com sindicatos em operações sensíveis.",
      "Acompanhamento próximo de executivos em litígios de alto perfil.",
    ],
  },
  {
    slug: "familia",
    title: "Direito de Família & Sucessões",
    eyebrow: "Planejamento Patrimonial · Pacificação Familiar",
    summary:
      "Planejamento patrimonial familiar, inventários complexos e acordos com proteção emocional e discrição absoluta. Alinhamento multigeracional para preservação de legado com segurança fiscal e jurídica.",
    detail: [
      "Planejamento sucessório em vida com holdings e instrumentos de governança familiar.",
      "Mediação de conflitos patrimoniais com foco em pacificação e discrição.",
      "Inventários de alta complexidade e partilhas com múltiplos interesses.",
      "Proteção de legado com alinhamento fiscal responsável entre gerações.",
    ],
  },
  {
    slug: "empresarial",
    title: "Direito Empresarial & Contratos",
    eyebrow: "Governança Corporativa · Fusões · Arbitragem",
    summary:
      "Estruturação societária, fusões, governança e negociação de contratos vitais de alta complexidade. Proteção patrimonial para acionistas e empresas em momentos de expansão ou rearranjo societário.",
    detail: [
      "Estruturação societária e governança para empresas em expansão.",
      "Operações de M&A, joint ventures e rearranjos de controle.",
      "Negociação e revisão de contratos comerciais de alta complexidade.",
      "Arbitragens comerciais nacionais e internacionais.",
    ],
  },
];

export const methodSteps = [
  {
    id: "01",
    title: "Escuta Profunda",
    body: "Compreensão minuciosa dos fatos, contexto econômico e implicações pessoais envolvidas. Entendemos os objetivos fundamentais antes de redigir a primeira linha processual.",
  },
  {
    id: "02",
    title: "Diagnóstico & Riscos",
    body: "Mapeamento detalhado de cenários jurídicos com probabilidade e viabilidade técnica clara. Apontamos riscos com franqueza irrestrita para embasar decisões com total previsibilidade.",
  },
  {
    id: "03",
    title: "Estratégia Sob Medida",
    body: "Elaboração de teses e planos de ação personalizados para resolução amigável ou defesa litigiosa sólida. Construção artesanal de peças e acordos respaldados pela doutrina mais avançada.",
  },
  {
    id: "04",
    title: "Acompanhamento Próximo",
    body: "Comunicação transparente e relatórios executivos em cada marco processual. Acesso permanente aos sócios condutores e linguagem acessível para total alinhamento das partes.",
  },
] as const;

export const results = [
  {
    quote:
      "Acordo amigável de dissolução societária preservando a continuidade operacional de holding familiar avaliada em R$ 45 milhões.",
    title: "Holding Patrimonial Familiar",
    meta: "São Paulo · Mediação Privada",
  },
  {
    quote:
      "Reversão integral de passivo trabalhista em instância superior com restabelecimento de jurisprudência benéfica à atividade do cliente.",
    title: "Setor de Logística & Saúde",
    meta: "Tribunal Superior do Trabalho (TST)",
  },
  {
    quote:
      "Planejamento sucessório multigeracional com pacificação de interesses e otimização tributária responsável para três gerações.",
    title: "Agroindústria & Participações",
    meta: "Estruturação Sucessória em Vida",
  },
] as const;

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  longBio: string;
};

export const team: TeamMember[] = [
  {
    slug: "ana-luisa-costa",
    name: "Dra. Ana Luísa Costa",
    role: "Sócia Fundadora · OAB/SP 142.890",
    focus: "Direito de Família e Sucessões",
    bio: "Mestre em Direito Civil pela Universidade de São Paulo (USP). Especialista em planejamento patrimonial, mediação de conflitos familiares e sucessão em empresas familiares. Autora de artigos doutrinários sobre governança de holdings.",
    longBio:
      "Conduz mandatos de família e sucessões com ênfase em discrição e alinhamento multigeracional. Atua em planejamentos patrimoniais, inventários complexos e mediações que preservam relações familiares e a continuidade de negócios.",
  },
  {
    slug: "ricardo-mendes",
    name: "Dr. Ricardo Mendes",
    role: "Sócio Fundador · OAB/SP 138.455",
    focus: "Direito Empresarial e Arbitragem",
    bio: "Graduado e Especialista pela Pontifícia Universidade Católica de São Paulo (PUC-SP). Mais de duas décadas de experiência em litígios societários, operações de M&A e arbitragens comerciais nacionais e internacionais.",
    longBio:
      "Lidera a prática empresarial do escritório, com foco em governança, fusões e arbitragem. Acompanha acionistas e empresas em momentos de expansão, rearranjo societário e resolução de conflitos comerciais.",
  },
  {
    slug: "beatriz-alencar",
    name: "Dra. Beatriz Alencar",
    role: "Associada Sênior · OAB/SP 312.604",
    focus: "Direito Trabalhista Estratégico",
    bio: "Pós-graduada em Direito Material e Processual do Trabalho pela EPD e FGV Direito SP. Atuação focada no contencioso trabalhista de executivos, adequação de políticas de remuneração variável e acordos coletivos sindicais.",
    longBio:
      "Especialista em contencioso trabalhista de alto escalão e prevenção corporativa. Assessora estruturas empresariais em reestruturações, políticas de remuneração e litígios sensíveis perante tribunais regionais e o TST.",
  },
];

export const interestAreas = [
  { value: "trabalhista", label: "Direito Trabalhista Estratégico" },
  { value: "familia", label: "Direito de Família & Sucessões" },
  { value: "empresarial", label: "Direito Empresarial & Contratos" },
  { value: "outro", label: "Outro / Ainda não definido" },
] as const;

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getTeamMember(slug: string) {
  return team.find((member) => member.slug === slug);
}
