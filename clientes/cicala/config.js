/* =============================================================
   CONFIGURAÇÃO DO CLIENTE — CENTRO ODONTOLÓGICO CICALA
   Dra. Mayra Cicala — CROSP 101583
   =============================================================
   Acesso: seusite.com/?cliente=cicala
   Para calibrar: seusite.com/?cliente=cicala&edit=true

   COORDENADAS estimadas a partir do template preenchido (1414×2000).
   Ajuste fino no Modo Edição.

   DIFERENÇAS EM RELAÇÃO À PREISLER:
   - Sem campo "Observações" separado — o conteúdo de Observações
     do FIKC vai junto com "Detalhes do Tratamento"
   - Sem campo "Profissional" (já implícito nas linhas de procedimentos)
   - Sem campo "Cidade" (em stand by — template não tem essa info)
   - Sem texto fixo "PLANO DE TRATAMENTO" (o template já tem impresso)
   - Tem campo "Data" para o "DATA: ____" do topo direito
   ============================================================= */

window.CONFIG_CLIENTE = {

  nome: "Centro Odontológico Cicala",
  template: "template.png",

  /* ----------------------------------------------------------
     CAMPOS — aparecem no formulário lateral e/ou no canvas
     ---------------------------------------------------------- */
  campos: [
    {
      // Preenche o "DATA: _________" do topo direito.
      // O texto cai EM CIMA da linha (alinhamento alphabetic).
      id: 'data',
      label: 'Data',
      tipo: 'input',
      placeholder: 'Ex: 11/06/2026',
      x: 1085, y: 365,
      fonte: '30px Arial',
      cor: '#1a1a1a',
      alinhamento: 'left',
    },
    {
      // Nome do paciente — não aparece no template preenchido de exemplo,
      // mas vem do FIKC. Colocamos no espaço entre cabeçalho e "DATA:".
      // Se a Cicala não usar, basta apagar este campo do config.
      id: 'nome',
      label: 'Nome do paciente',
      tipo: 'input',
      x: 707, y: 305,
      fonte: 'bold 36px Arial',
      cor: '#1a1a1a',
      alinhamento: 'center',
      maxLargura: 1100,
      alturaLinha: 46,
    },
    {
      // Logo abaixo da faixa "Procedimentos"
      id: 'procedimentos',
      label: 'Procedimentos',
      tipo: 'textarea',
      x: 85, y: 670,
      fonte: '28px Arial',
      cor: '#1a1a1a',
      maxLargura: 1240,
      alturaLinha: 42,
    },
    {
      // Logo abaixo da faixa "Detalhes do Tratamento"
      // Recebe TAMBÉM o conteúdo de "Observações do orçamento" do FIKC
      id: 'detalhes',
      label: 'Detalhes do tratamento',
      tipo: 'textarea',
      placeholder: 'Detalhes e observações sobre o tratamento',
      x: 85, y: 1145,
      fonte: '28px Arial',
      cor: '#1a1a1a',
      maxLargura: 1240,
      alturaLinha: 42,
    },
    {
      // Logo abaixo da faixa "Honorários do Profissional"
      id: 'honorarios',
      label: 'Honorários do profissional',
      tipo: 'textarea',
      placeholder: 'Ex: Valor Total: 2.180,00',
      x: 85, y: 1815,
      fonte: '28px Arial',
      cor: '#1a1a1a',
      maxLargura: 1240,
      alturaLinha: 42,
    },
  ],

  /* ----------------------------------------------------------
     TEXTOS FIXOS — vazio. O template da Cicala já tem todos
     os elementos visuais impressos (PLANO DE TRATAMENTO, faixas).
     ---------------------------------------------------------- */
  textosFixos: [],

  /* ----------------------------------------------------------
     PARSER — formato do FIKC App.
     OBS: Observações vão para o campo "detalhes" (unificado).
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
      formato: 'fikc-lista',
    },
    honorarios: {
      regex: 'valor total do or[çc]amento\\s+(.+?)(?:\\s+observa|$)',
      flags: 'is',
      destino: 'honorarios',
      prefixo: 'Valor Total: ',
    },
    observacoes: {
      regex: 'observa[çc][õo]es?\\s+do\\s+or[çc]amento\\s*(.*)$',
      flags: 'is',
      destino: 'detalhes',   // <-- unificado com Detalhes do Tratamento
    },
  },

};
