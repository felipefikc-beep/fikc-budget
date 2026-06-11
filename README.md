# FIKC — Gerador de Orçamentos

Ferramenta web que converte o texto copiado do FIKC App em um orçamento personalizado em PDF/PNG, usando o template visual do cliente.

## Como funciona

- **Dois modos de acesso:**
  - `seusite.com/` → modo **configurador** (sobe um template manualmente, ajusta coordenadas, gera o config). Use para criar configs de clientes novos.
  - `seusite.com/?cliente=preisler` → modo **produção** (template e config do cliente já carregados; a dentista só cola, revisa e baixa).

- Com o `vercel.json` configurado, `seusite.com/preisler` funciona igual a `?cliente=preisler` (URL limpa).

## Estrutura do projeto

```
/
├── index.html              ← gerador (não precisa editar pra clientes novos)
├── vercel.json             ← rewrites pra URLs limpas
└── clientes/
    └── preisler/
        ├── template.png    ← template A4 em branco
        └── config.js       ← coordenadas, campos, parser
```

## Como adicionar um cliente novo

1. Duplicar a pasta `clientes/preisler/` para `clientes/<novo-cliente>/`.
2. Substituir o `template.png` pelo template do novo cliente (PNG ou JPG; A4 recomendado em 1414×2000px ou maior).
3. Abrir o `config.js` e editar:
   - `nome` → nome amigável do cliente.
   - Coordenadas `x, y` de cada campo (use o **Modo Calibração** no site para descobrir).
   - Fontes, cores, valores padrão.
   - O parser, se o formato do texto do FIKC for diferente.
4. Commit + push. O Vercel/Netlify faz o deploy sozinho.
5. Mandar pra dentista: `seusite.com/<novo-cliente>`.

## Deploy no Vercel (passo a passo)

1. Criar conta gratuita em [vercel.com](https://vercel.com).
2. Subir essa pasta inteira para um repositório no GitHub.
3. No Vercel: **New Project** → importar o repositório → **Deploy**.
4. Pronto. URL fica `seuprojeto.vercel.app`.
5. (Opcional) Configurar domínio próprio em Settings → Domains.

Alternativa **sem GitHub**: zipa essa pasta inteira, vai em [vercel.com/new](https://vercel.com/new), arrasta o zip. Funciona, mas pra atualizar você precisa repetir o processo.

## Limitações conhecidas

- **Privacidade**: a URL é pública. Qualquer um que adivinhar o slug do cliente vê o template. Não tem dado sensível ali, mas se quiser camada extra, use slugs aleatórios (ex.: `preisler-x7k2m9`).
- **Quantidade variável de procedimentos**: o canvas tem coordenadas fixas. Se a lista de procedimentos for muito longa, vai vazar pra fora do espaço. A dentista pode editar manualmente o campo "Procedimentos" pra encurtar.
- **Fontes**: usa Arial por padrão (universal). Se o template usa uma fonte específica e você quer fidelidade pixel-perfect, vai precisar embarcar a fonte (Google Fonts ou .woff2 local).

## Atalhos do modo calibração

Quando algum texto estiver fora do lugar:
1. Clique em **🎯 Modo Calibração**.
2. Clique no ponto exato onde o texto deveria começar.
3. Anote o `x, y` mostrado.
4. Edite `clientes/<cliente>/config.js`, cole as novas coordenadas.
5. Commit + push → deploy automático.
