import { useEffect, useState, useRef } from 'react'
import Buttons from '../interactives/Buttons'

export default function CalculaFacilGrosf() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! O que você deseja calcular?' },
  ])
  const [step, setStep] = useState('start') // start, format, measures, productOption, circum
  const [userChoice, setUserChoice] = useState(null)
  const [format, setFormat] = useState(null)
  const [inputs, setInputs] = useState({
    comprimento: '',
    largura: '',
    profundidade: '',
    diametro: '',
  })
  const [volume, setVolume] = useState(null)
  const [treatmentOption, setTreatmentOption] = useState(null)
  const [phValue, setPhValue] = useState(7.5)
  const [fundoVisivel, setFundoVisivel] = useState(true)

  const delayResponse = (text, callback) => {
    setMessages((prev) => [...prev, { from: 'bot', text: '...' }])
    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), { from: 'bot', text }])
      if (callback) callback()
    }, 3000) // 3 segundos de delay para exemplo
  }

  const handleStartChoice = (choice) => {
    setMessages((prev) => [...prev, { from: 'user', text: choice }])
    setUserChoice(choice)
    if (choice === 'Somente o volume da piscina') {
      setStep('format')
      delayResponse('Qual o formato da sua piscina?', null)
    } else {
      setStep('productOption')
      delayResponse('Você deseja qual tipo de tratamento?', null)
    }
  }

  const handleTreatmentOption = (option) => {
    setMessages((prev) => [...prev, { from: 'user', text: option }])
    setTreatmentOption(option)

    if (volume) {
      // Primeiro mostra a mensagem de delay
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: `Usando o volume calculado: ${volume.toFixed(
            3
          )} lts. Calculando produtos...`,
        },
      ])

      setTimeout(() => {
        // Depois mostra os produtos
        calcularProdutos(volume)
      }, 2000) // tempo de espera antes de exibir os produtos
    } else {
      // Volume ainda não calculado, pedimos medidas
      setStep('format')
      delayResponse('Qual o formato da sua piscina?', null)
    }
  }

  const handleFormatChoice = (fmt) => {
    setMessages((prev) => [...prev, { from: 'user', text: fmt }])
    setFormat(fmt)
    setStep('measures')
  }

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const calcularVolume = () => {
    // Verifica se todos os campos necessários foram preenchidos
    if (
      (format === 'Quadrada ou retangular' || format === 'Oval') &&
      (!inputs.comprimento || !inputs.largura || !inputs.profundidade)
    ) {
      alert('Por favor insira as medidas para prosseguirmos com o cálculo')
      return // impede continuar
    }

    if (format === 'Redonda' && (!inputs.diametro || !inputs.profundidade)) {
      alert('Por favor insira as medidas para prosseguirmos com o cálculo')
      return // impede continuar
    }
    let v = 0
    if (format === 'Quadrada ou retangular') {
      const { comprimento, largura, profundidade } = inputs
      v = comprimento * largura * profundidade
    } else if (format === 'Redonda') {
      const { diametro, profundidade } = inputs
      v = diametro * diametro * profundidade * 0.785
    } else if (format === 'Oval') {
      const { comprimento, largura, profundidade } = inputs
      v = comprimento * largura * profundidade * 0.785
    }
    setVolume(v)

    if (userChoice === 'Somente o volume da piscina') {
      delayResponse(`O volume da piscina é ${v.toFixed(3)} lts.`, () =>
        setStep('askProducts')
      )
    } else {
      // Option2: calcular produtos
      delayResponse(
        `O volume da piscina é ${v.toFixed(2)} lts. Calculando produtos...`,
        () => calcularProdutos(v)
      )
    }
  }

  const calcularProdutos = (vol) => {
    const volumeM3 = vol
    const produtos = []
    const volumeAC = vol

    if (format === 'Quadrada ou retangular') {
      produtos.push(
        `- Se usar Cloro Granulado Tradicional: ${Math.round(
          14 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Dicloro Puro ou Multifunções: ${Math.round(
          10 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Cloro Granulado 10 em 1: ${Math.round(
          18 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Algicida de choque: ${Math.round(7 * volumeAC).toLocaleString(
          'pt-BR'
        )} ml.`
      )
      produtos.push(
        `- Clarificante: ${Math.round(6 * volumeM3).toLocaleString(
          'pt-BR'
        )} ml.`
      )
      produtos.push(
        `- Elimina óleo: ${Math.round(14 * volumeM3).toLocaleString(
          'pt-BR'
        )} ml.`
      )
    } else if (format === 'Oval') {
      produtos.push(
        `- Se usar Cloro Granulado Tradicional: ${Math.round(
          14 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Dicloro Puro ou Multifunções: ${Math.round(
          10 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Cloro Granulado 10 em 1: ${Math.round(
          18 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `Algicida de choque: ${Math.round(7 * volumeAC).toLocaleString(
          'pt-BR'
        )} ml.`
      )
      produtos.push(
        `Clarificante: ${Math.round(6 * volumeM3).toLocaleString('pt-BR')} ml.`
      )
      produtos.push(
        `Elimina óleo: ${Math.round(14 * volumeM3).toLocaleString('pt-BR')} ml.`
      )
    } else if (format === 'Redonda') {
      produtos.push(
        `- Se usar Cloro Granulado Tradicional: ${Math.round(
          12 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Dicloro Puro ou Multifunções: ${Math.round(
          9 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `- Se usar Cloro Granulado 10 em 1: ${Math.round(
          16 * volumeM3
        ).toLocaleString('pt-BR')} gramas.`
      )
      produtos.push(
        `Algicida de choque: ${Math.round(7 * volumeAC).toLocaleString(
          'pt-BR'
        )} ml.`
      )
      produtos.push(
        `Clarificante: ${Math.round(5 * volumeM3).toLocaleString('pt-BR')} ml.`
      )
      produtos.push(
        `Elimina óleo: ${Math.round(12 * volumeM3).toLocaleString('pt-BR')} ml.`
      )
    }

    // Adiciona produtos na mensagem
    setMessages((prev) => [
      ...prev,
      {
        from: 'bot',
        text: produtos.join('\n'), // \n será interpretado no JSX com whitespace-pre-line
      },
    ])

    // Passa para perguntar sobre produtos circunstanciais
    setStep('askCircunstancial')
  }

  const calc = (quantidadePor1000) => {
    return (((volume * 1000) / 1000) * quantidadePor1000).toLocaleString(
      'pt-BR'
    )
  }

  const handleReset = () => {
    setMessages([{ from: 'bot', text: 'Olá! O que você deseja calcular?' }])
    setStep('start')
    setUserChoice(null)
    setFormat(null)
    setInputs({ comprimento: '', largura: '', profundidade: '', diametro: '' })
    setVolume(null)
    setTreatmentOption(null)
  }

  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth', // rolagem suave
      })
    }
  }, [messages])

  return (
    <div className="flex flex-col max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white phone1:text-paragraph2 phone2:text-paragraph3 tablet1:text-paragraph4">
      <p className="font-serif flex justify-center pb-4 text-black/50">
        Versão_01
      </p>
      <div
        ref={containerRef}
        className="flex flex-col space-y-4 h-72 overflow-y-auto phone1:pt-[280px] phone2:pt-[230px] mb-4 border-2 p-2 rounded-md"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.from === 'bot'
                ? 'bg-gray-200 self-start whitespace-pre-line'
                : 'bg-primary text-white self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {step === 'start' && (
        <div className="flex flex-col space-y-2">
          <Buttons
            onClick={() => handleStartChoice('Somente o volume da piscina')}
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Somente o volume da piscina"
            size="small"
          ></Buttons>
          <Buttons
            onClick={() => handleStartChoice('Volume + produtos')}
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name=" Volume + produtos"
          ></Buttons>
        </div>
      )}

      {step === 'productOption' && (
        <div className="flex flex-col space-y-2">
          <Buttons
            onClick={() =>
              handleTreatmentOption(
                'Primeiro tratamento ou longo período de abandono'
              )
            }
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Primeiro tratamento ou longo período de abandono"
          ></Buttons>
          <Buttons
            onClick={() =>
              handleTreatmentOption('Apenas manutenção ou preventivo')
            }
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Apenas manutenção ou preventivo"
          ></Buttons>
        </div>
      )}

      {step === 'format' && (
        <div className="flex flex-col space-y-2">
          <Buttons
            onClick={() => handleFormatChoice('Quadrada ou retangular')}
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Quadrada ou retangular"
          ></Buttons>
          <Buttons
            onClick={() => handleFormatChoice('Redonda')}
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Redonda"
          ></Buttons>
          <Buttons
            onClick={() => handleFormatChoice('Oval')}
            className="btn-primary w-full bg-primary p-2 rounded-md text-white"
            name="Oval"
          ></Buttons>
        </div>
      )}

      {step === 'measures' && (
        <div className="flex flex-col space-y-2 mt-2">
          {format !== 'Redonda' && (
            <>
              <input
                type="number"
                name="comprimento"
                placeholder="Comprimento (m)"
                value={inputs.comprimento}
                onChange={handleInputChange}
                className="input-field border-2 rounded-md p-2 outline-none"
              />
              <input
                type="number"
                name="largura"
                placeholder="Largura (m)"
                value={inputs.largura}
                onChange={handleInputChange}
                className="input-field border-2 rounded-md p-2 outline-none"
              />
            </>
          )}
          {format === 'Redonda' && (
            <input
              type="number"
              name="diametro"
              placeholder="Diâmetro (m)"
              value={inputs.diametro}
              onChange={handleInputChange}
              className="input-field border-2 rounded-md p-2 outline-none"
            />
          )}
          <input
            type="number"
            name="profundidade"
            placeholder="Profundidade média (m)"
            value={inputs.profundidade}
            onChange={handleInputChange}
            className="input-field border-2 rounded-md p-2 outline-none"
          />
          <Buttons
            onClick={calcularVolume}
            className="btn-primary w-full mt-2 bg-primary rounded-md p-2 outline-none text-white"
            name="Calcular volume e produtos"
          ></Buttons>
        </div>
      )}

      {step === 'askProducts' && (
        <div className="space-y-2">
          <p>
            Gostaria de saber os produtos a serem utilizados na sua piscina?
          </p>
          <div className="flex flex-col gap-2">
            <Buttons
              className="px-6 py-2 w-full bg-primary text-white rounded-lg"
              onClick={() => {
                setStep('productOption')
                delayResponse('Você deseja qual tipo de tratamento?', null)
              }}
              name="Sim"
            ></Buttons>
            <Buttons
              className="px-6 py-2 w-full bg-gray-400 text-white rounded-lg"
              onClick={() => {
                setStep('reset')
                setMessages((prev) => [
                  ...prev,
                  {
                    from: 'bot',
                    text: 'Está bem, aqui encerramos o cálculo, espero ter ajudado.',
                  },
                ])
              }}
              name="Não"
            ></Buttons>
          </div>
        </div>
      )}

      {step === 'askCircunstancial' && (
        <div className="space-y-2">
          <p>Gostaria de saber também os produtos circunstanciais?</p>
          <div className="flex flex-col gap-2">
            <Buttons
              className="px-6 py-2 w-full bg-primary text-white rounded-lg"
              onClick={() => {
                const msgs = [
                  `Produtos Circunstanciais:`,

                  `Redutor de pH:
                  Se pH estiver entre 7ppm e 8ppm: ${calc(5)} ml.
                  Se pH estiver acima de 8ppm: ${calc(10)} ml.`,

                  `Elevador de pH em pó:
                  Se pH estiver entre 6,8ppm e 7ppm: ${calc(5)} gramas.
                  Se pH estiver abaixo de 6,8ppm: ${calc(10)} gramas.`,

                  `Elevador de pH líquido:
                  Se pH estiver entre 6,8ppm e 7ppm: ${calc(15)} ml.
                  Se pH estiver abaixo de 6,8ppm: ${calc(20)} ml.`,

                  `Elevador de alcalinidade em pó:
                  ${calc(17)}g até elevar a alcalinidade para 100ppm em média.`,

                  `Auxiliar de aspiração:
                  ${calc(6)} ml.`,

                  `Água turva, elimina manchas ou inibidor de manchas:
                  Se o fundo da piscina estiver visível: ${calc(15)} ml.
                  Se o fundo estiver invisível: ${calc(50)} ml.`,

                  `Eliminador de metais:
                  Se o fundo da piscina estiver visível: ${calc(15)} ml.
                  Se o fundo estiver invisível: ${calc(50)} ml.`,

                  `Eliminador de algas (preventivo):
                  ${calc(10)} ml sempre que necessário.`,

                  `Limpa bordas:
                  Utilizar quantidade razoável numa esponja.`,

                  `Aqui encerramos o cálculo, espero ter ajudado.`,
                ]

                setMessages((prev) => [
                  ...prev,
                  ...msgs.map((m) => ({
                    from: 'bot',
                    text: m,
                  })),
                ])

                setStep('reset')
              }}
              name="Sim"
            />
            <Buttons
              className="px-6 py-2 w-full bg-gray-400 text-white rounded-lg"
              onClick={() => {
                setStep('reset')
                setMessages((prev) => [
                  ...prev,
                  {
                    from: 'bot',
                    text: 'Está bem, aqui encerramos o cálculo, espero ter ajudado.',
                  },
                ])
              }}
              name="Não"
            ></Buttons>
          </div>
        </div>
      )}

      {step === 'reset' && (
        <Buttons
          onClick={handleReset}
          className="btn-primary w-full mt-4 bg-primary p-2 rounded-md text-white"
          name="Reiniciar cálculo"
        ></Buttons>
      )}
    </div>
  )
}
