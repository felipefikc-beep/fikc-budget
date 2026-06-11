/* =============================================================
   CONFIGURAÇÃO EXPORTADA EM 11/06/2026, 20:18:45
   Substitua o arquivo clientes/<cliente>/config.js por este.
   ============================================================= */

window.CONFIG_CLIENTE = {
  "nome": "Centro Odontológico Cicala",
  "template": "template.png",
  "campos": [
    {
      "id": "data",
      "label": "Data",
      "tipo": "input",
      "placeholder": "Ex: 11/06/2026",
      "x": 1160,
      "y": 374,
      "fonte": "30px Arial",
      "cor": "#1a1a1a",
      "alinhamento": "left",
      "valorPadrao": "11/06/2026"
    },
    {
      "id": "nome",
      "label": "Nome do paciente",
      "tipo": "input",
      "x": 707,
      "y": 312,
      "fonte": "bold 36px Arial",
      "cor": "#1a1a1a",
      "alinhamento": "center",
      "maxLargura": 1100,
      "alturaLinha": 46
    },
    {
      "id": "procedimentos",
      "label": "Procedimentos",
      "tipo": "textarea",
      "x": 92,
      "y": 679,
      "fonte": "28px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1240,
      "alturaLinha": 42
    },
    {
      "id": "detalhes",
      "label": "Detalhes do tratamento",
      "tipo": "textarea",
      "placeholder": "Detalhes e observações sobre o tratamento",
      "x": 85,
      "y": 1191,
      "fonte": "28px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1240,
      "alturaLinha": 42
    },
    {
      "id": "honorarios",
      "label": "Honorários do profissional",
      "tipo": "textarea",
      "placeholder": "Ex: Valor Total: 2.180,00",
      "x": 85,
      "y": 1592,
      "fonte": "28px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1240,
      "alturaLinha": 42
    }
  ],
  "textosFixos": [],
  "parser": {
    "nome": {
      "regex": "plano de tratamento\\s+(.+?)\\s+procedimento\\(?s?\\)?",
      "flags": "is",
      "destino": "nome"
    },
    "procedimentos": {
      "regex": "procedimento\\(?s?\\)?\\s+(.+?)\\s+valor total",
      "flags": "is",
      "destino": "procedimentos",
      "formato": "fikc-lista"
    },
    "honorarios": {
      "regex": "valor total do or[çc]amento\\s+(.+?)(?:\\s+observa|$)",
      "flags": "is",
      "destino": "honorarios",
      "prefixo": "Valor Total: "
    },
    "observacoes": {
      "regex": "observa[çc][õo]es?\\s+do\\s+or[çc]amento\\s*(.*)$",
      "flags": "is",
      "destino": "detalhes"
    }
  }
};
