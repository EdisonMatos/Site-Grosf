import React, { useEffect, useState } from 'react'
import SectionHeader from '../sectionElements/SectionHeader'
import CarouselCuriosities from '../interactives/CarouselCuriosities'
import MotionDivLeftToRight from '../animation/MotionDivLeftToRight'

function Curiosities() {
  const curiosities = [
    'Você sabia que a palavra “piscina” deriva da palavra “piscis” que em latim quer dizer piscina?',
    'Você sabia que a primeira piscina tipo spa foi projetada e construída por um conselheiro político de Augusto César perto do início da era cristã?',
    'Você sabia que escavações realizadas no atual Paquistão revelaram um reservatório de água com cerca de 4 mil anos?',
    'Você sabia que as Termas de Diocleciano recebiam cerca de 3.000 banhistas por dia?',
    'Você sabia que o Titanic possuía a piscina mais luxuosa entre os transatlânticos da época?',
    'Você sabia que a primeira piscina pública do Brasil foi inaugurada em 1926 no Clube Pinheiros?',
    'Você sabia que o cloro age como um “soldado kamikaze”, eliminando micro-organismos e se consumindo no processo?',
    'Você sabia que o primeiro clarificante líquido para piscinas do Brasil foi desenvolvido em 1986?',
    'Você sabia que os primeiros cloros granulados no Brasil chegavam em baldes de lata?',
    'Você sabia que o primeiro veículo da Grosfestilo foi uma Belina 1978 emprestada?',
    'Você sabia que as Fiorinos fizeram parte da frota por 23 anos?',
    'Você sabia que uma Fiorino restaurada está em exposição permanente na empresa?',
    'Você sabia que em 2014 a Grosfestilo ultrapassou 1 milhão de kilos de produtos vendidos?',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % curiosities.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [curiosities.length])

  return (
    <div className="max-w-[1110px] w-[90%] py-[26px] phone3:py-[48px] mx-auto">
      <SectionHeader
        sectionHeaderTitleSecond="Curiosidades & História"
        sectionHeaderDescription="Você sabia que as piscinas contam histórias incríveis?"
      />

      <div className="max-w-[1215px] mx-auto border rounded-md text-secondary">
        <MotionDivLeftToRight>
          <CarouselCuriosities
            value={curiosities}
            renderItem={(text) => (
              <div className="border-1 surface-border border-round text-center py-5 px-3 mb-4">
                <p className="text-secondFont text-paragraph3 tablet1:text-title1 max-w-lg mx-auto">
                  {text}
                </p>
              </div>
            )}
          />
        </MotionDivLeftToRight>
      </div>
    </div>
  )
}

export default Curiosities
