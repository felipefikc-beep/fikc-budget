/* =============================================================
   Odontologia Kajevski — config.js (fikc-budget)
   Coordenadas estimadas via análise de pixels. Calibre com
   ?cliente=kajevski&edit=true após subir pro GitHub.
   ============================================================= */

window.CONFIG_CLIENTE = {
  "nome": "Odontologia Kajevski",
  "template": "template.png",
  "campos": [
    {
      "id": "data",
      "label": "Data",
      "tipo": "input",
      "placeholder": "Ex: 14/09/2026",
      "x": 1150,
      "y": 374,
      "fonte": "28px Arial",
      "cor": "#1a1a1a",
      "alinhamento": "left"
    },
    {
      "id": "nome",
      "label": "Nome do paciente",
      "tipo": "input",
      "x": null,
      "y": null
    },
    {
      "id": "procedimentos",
      "label": "Procedimentos",
      "tipo": "textarea",
      "x": 74,
      "y": 680,
      "fonte": "26px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1270,
      "alturaLinha": 38
    },
    {
      "id": "detalhes",
      "label": "Detalhes do tratamento",
      "tipo": "textarea",
      "placeholder": "Detalhes e observações sobre o tratamento",
      "x": 74,
      "y": 1185,
      "fonte": "26px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1270,
      "alturaLinha": 38
    },
    {
      "id": "honorarios",
      "label": "Honorários do profissional",
      "tipo": "textarea",
      "placeholder": "Ex: Valor Total: 2.180,00",
      "x": 74,
      "y": 1600,
      "fonte": "26px Arial",
      "cor": "#1a1a1a",
      "maxLargura": 1270,
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
