# Costa & Mendes Advocacia

Landing institucional do escritório Costa & Mendes, implementada a partir do protótipo [Stitch](https://stitch.google.com/projects/17519411593214645174) com Next.js App Router, parallax de scroll e React View Transitions.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Produção

```bash
npm run build
npm start
```

## Deploy na Vercel

O projeto é detectado automaticamente como Next.js. Na raiz:

```bash
npx vercel login
npx vercel
```

Ou importe o repositório no [dashboard da Vercel](https://vercel.com/new). Não há variáveis de ambiente obrigatórias.

Deploy temporário anônimo (expira em cerca de 1h; reclame com login):

```bash
npx vercel deploy --yes --temporary
```
