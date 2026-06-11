/* =============================================================
   CONFIGURAÇÃO DO CLIENTE — PREISLER ODONTOLOGIA
   =============================================================
   Acesso: seusite.com/?cliente=preisler

   Para criar um cliente novo:
     1. Copie a pasta /clientes/preisler/ para /clientes/<novo>/
     2. Substitua template.png pelo template do novo cliente
     3. Edite este arquivo (campos abaixo)
     4. Faça commit + deploy

   PROPRIEDADES DOS CAMPOS:
     id            → identificador único (use só letras minúsculas)
     label         → nome do campo no formulário lateral
     tipo          → "input" (1 linha) | "textarea" (várias) | "computado"
     placeholder   → texto de ajuda quando vazio
     valorPadrao   → valor inicial
     x, y          → coordenadas em px sobre o template original
                     (use null se o campo NÃO deve aparecer no canvas)
     fonte         → ex: "bold 52px Arial"
     cor           → "#1a1a1a", "black", etc.
     alinhamento   → "left" (padrão) | "center" | "right"
     maxLargura    → largura em px (ativa quebra automática de linha)
     alturaLinha   → distância em px entre linhas
     letterSpacing → espaçamento entre letras (para títulos)
     formato       → para tipo "computado": template com {ids}
                     ex: "{cidade}, {data}"
   ============================================================= */

window.CONFIG_CLIENTE = {

  nome: "Preisler Odontologia",
  template: "template.png",   // arquivo na MESMA pasta

  /* ----------------------------------------------------------
     CAMPOS — aparecem no formulário lateral e/ou no canvas
     ---------------------------------------------------------- */
  campos: [
    {
      id: 'nome',
      label: 'Nome do paciente',
      tipo: 'input',
      x: 707, y: 320,
      fonte: 'bold 52px Arial',
      cor: '#1a1a1a',
      alinhamento: 'center',
      maxLargura: 1000,
      alturaLinha: 64,
    },
    {
      id: 'profissional',
      label: 'Profissional',
      tipo: 'input',
      placeholder: 'Dra. Amanda Necker',
      valorPadrao: 'Dra. Amanda Necker',
      x: 707, y: 440,
      fonte: '26px Arial',
      cor: '#1a1a1a',
      alinhamento: 'center',
    },
    {
      id: 'procedimentos',
      label: 'Procedimentos',
      tipo: 'textarea',
      x: 160, y: 800,
      fonte: '26px Arial',
      cor: '#1a1a1a',
      maxLargura: 1100,
      alturaLinha: 38,
    },
    {
      id: 'detalhes',
      label: 'Detalhes do tratamento',
      tipo: 'textarea',
      placeholder: 'Ex: Aproximadamente 10 meses de tratamento.',
      x: 160, y: 1025,
      fonte: '26px Arial',
      cor: '#1a1a1a',
      maxLargura: 1100,
      alturaLinha: 38,
    },
    {
      id: 'observacoes',
      label: 'Observações',
      tipo: 'textarea',
      x: 160, y: 1235,
      fonte: '26px Arial',
      cor: '#1a1a1a',
      maxLargura: 1100,
      alturaLinha: 38,
    },
    {
      id: 'honorarios',
      label: 'Honorários do profissional',
      tipo: 'textarea',
      placeholder: 'Ex:\nEntrada 18x206,70\n• 3.000 de desconto\n• À vista R$9.000',
      x: 130, y: 1545,
      fonte: '26px Arial',
      cor: '#1a1a1a',
      maxLargura: 1250,
      alturaLinha: 48,
    },
    {
      id: 'cidade',
      label: 'Cidade',
      tipo: 'input',
      valorPadrao: 'Curitiba',
      x: null, y: null,        // não aparece no canvas (entra no rodapé)
    },
    {
      id: 'data',
      label: 'Data',
      tipo: 'input',
      x: null, y: null,        // não aparece no canvas (entra no rodapé)
    },
    {
      id: 'rodape',
      tipo: 'computado',
      formato: '{cidade}, {data}',
      x: 1290, y: 1920,
      fonte: '22px Arial',
      cor: '#1a1a1a',
      alinhamento: 'right',
    },
  ],

  /* ----------------------------------------------------------
     TEXTOS FIXOS — desenhados sempre, sem campo no formulário
     ---------------------------------------------------------- */
  textosFixos: [
    {
      texto: 'PLANO DE TRATAMENTO',
      x: 707, y: 615,
      fonte: '44px Arial',
      cor: '#555',
      alinhamento: 'center',
      letterSpacing: 14,
    },
  ],

  /* ----------------------------------------------------------
     PARSER — regex para auto-preencher ao colar texto bruto
     Cada chave envia para o campo com id correspondente em "destino".
     ---------------------------------------------------------- */
  parser: {
    nome: {
      regex: 'plano de tratamento\\s+(.+?)\\s+procedimento\\(?s?\\)?',
      flags: 'is',
      destino: 'nome',
    },
    procedimentos: {
      regex: 'procedimento\\(?s?\\)?\\s+(.+?)\\s+valor total',
      flags: 'is',
      destino: 'procedimentos',
      formato: 'fikc-lista',   // converte /a|b|c/d|e|f → bullets
    },
    honorarios: {
      regex: 'valor total do or[çc]amento\\s+(.+?)(?:\\s+observa|$)',
      flags: 'is',
      destino: 'honorarios',
      prefixo: 'Valor total: ',
    },
    observacoes: {
      regex: 'observa[çc][õo]es?\\s+do\\s+or[çc]amento\\s*(.*)$',
      flags: 'is',
      destino: 'observacoes',
    },
  },

};
