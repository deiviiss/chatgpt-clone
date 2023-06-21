export const arrayItems = [
  {
    name: 'Q&A',
    id: 'q&a',
    description: 'Responder preguntas basadas en el conocimiento existente.',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }
  },
  // {
  //   name:"Grammer Correction",
  //   id:"grammerCorrection",
  //   description:"Corrects sentences into standard English.",
  //   option:{
  //     model:"text-davinci-003",
  //     temperature:0,
  //     max_tokens:100,
  //     top_p:1,
  //     frequency_penalty:0.0,
  //     presence_penalty:0.0,
  //   }
  // },
  // {
  //   name:"Summarize for a 2nd grader",
  //   id:"summary",
  //   description:"Translates diffigult text into simpler concepts.",
  //   option:{
  //     model:"text-davinci-003",
  //     temperature:0.7,
  //     max_tokens:64,
  //     top_p:1.0,
  //     frequency_penalty:0.0,
  //     presence_penalty:0.0,
  //   }
  // },
  // {
  //   name:"Movie to Emoji",
  //   id:"movieToEmoji",
  //   description:"Convert movie titles into emoji.",
  //   option:{
  //     model:"text-davinci-003",
  //     temperature:0,
  //     max_tokens:100,
  //     top_p:1,
  //     frequency_penalty:0.0,
  //     presence_penalty:0.0,
  //   }
  // },
  // {
  //   name:"Explain code",
  //   id:"explainCode",
  //   description:"Explain a complicated piece of code.",
  // },
  // {
  //   name:"JavaScript to Python",
  //   id:"jstopy",
  //   description:"Convert simple JavaScript expressions into Python.",
  // },
  {
    name: 'Generar imagen',
    id: 'gimage',
    description: 'Genera una imagen a partir de un texto dado.',
    option: {
      n: 1,
      size: '1024x1024'
    }

  }
]
