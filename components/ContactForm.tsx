"use client";

import { startTransition, useState, ViewTransition } from "react";
import { interestAreas } from "@/lib/content";

type FormState = {
  nome: string;
  email: string;
  telefone: string;
  area: string;
  demanda: string;
};

const initial: FormState = {
  nome: "",
  email: "",
  telefone: "",
  area: "",
  demanda: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  const greetingName = values.nome
    .replace(/^(dra?\.|sra?\.|sr\.)\s+/i, "")
    .trim()
    .split(/\s+/)[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.nome.trim()) next.nome = "Informe o nome completo.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Informe um e-mail válido.";
    }
    if (!values.telefone.trim() || values.telefone.replace(/\D/g, "").length < 10) {
      next.telefone = "Informe um telefone com DDD.";
    }
    if (!values.area) next.area = "Selecione uma área de interesse.";
    return next;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    startTransition(() => setSent(true));
  }

  if (sent) {
    return (
      <ViewTransition enter="fade-in" exit="fade-out" default="none">
        <div
          className="rounded-lg border border-brand-lightline bg-brand-cream/60 p-8 sm:p-12"
          role="status"
        >
          <h3 className="font-headline text-2xl font-medium text-brand-navy">
            Solicitação recebida
          </h3>
          <p className="font-body mt-4 text-base leading-relaxed text-brand-muted">
            Agradecemos o contato
            {greetingName ? `, ${greetingName}` : ""}. Nossa recepção retornará
            de forma confidencial em até 24 horas úteis.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-brand-lightline px-5 py-2.5 text-sm font-medium text-brand-navy transition-editorial hover:border-brand-teal hover:text-brand-teal"
            onClick={() =>
              startTransition(() => {
                setSent(false);
                setValues(initial);
              })
            }
          >
            Enviar outra solicitação
          </button>
        </div>
      </ViewTransition>
    );
  }

  return (
    <div className="rounded-lg border border-brand-lightline bg-brand-cream/60 p-8 sm:p-12">
      <h3 className="font-headline mb-6 text-2xl font-medium text-brand-navy">
        Solicitação de Consulta
      </h3>
      <form className="space-y-6" onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field
            id="nome"
            label="Nome Completo *"
            error={errors.nome}
          >
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              placeholder="Ex: Dra. Juliana Silveira"
              value={values.nome}
              onChange={(e) => update("nome", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field
            id="email"
            label="E-mail Corporativo ou Pessoal *"
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="exemplo@dominio.com.br"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field
            id="telefone"
            label="Telefone / WhatsApp *"
            error={errors.telefone}
          >
            <input
              id="telefone"
              name="telefone"
              type="tel"
              autoComplete="tel"
              placeholder="+55 (11) 99999-0000"
              value={values.telefone}
              onChange={(e) => update("telefone", e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field
            id="area"
            label="Área de Interesse *"
            error={errors.area}
          >
            <select
              id="area"
              name="area"
              value={values.area}
              onChange={(e) => update("area", e.target.value)}
              className={inputClass}
            >
              <option value="">Selecione</option>
              {interestAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field id="demanda" label="Resumo da Demanda (Breve síntese)">
          <textarea
            id="demanda"
            name="demanda"
            rows={4}
            placeholder="Descreva em poucas linhas o contexto da consulta."
            value={values.demanda}
            onChange={(e) => update("demanda", e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </Field>
        <p className="font-body text-xs leading-relaxed text-brand-muted">
          Garantia irrestrita de sigilo profissional conforme Código de Ética da
          OAB.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand-navy px-8 py-3.5 text-sm font-medium tracking-wide text-brand-sand transition-editorial hover:bg-brand-teal sm:w-auto"
        >
          Enviar Solicitação
        </button>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-brand-lightline bg-brand-sand px-4 py-3 font-body text-sm text-brand-charcoal placeholder:text-brand-muted/50 transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-body mb-2 block text-xs font-medium tracking-wider text-brand-charcoal uppercase"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-rose-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
