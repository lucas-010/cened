import React, { useState } from 'react'

export default function SelectContent() {
	const [currentBox, setCurrentBox] = useState(1)
	const boxContents = [
		{
			text: 'O QUE É',
			active: true,
			id: 1
		},

		{
			text: 'OBJETIVO GERAL',
			active: false,
			id: 2
		},

		{
			text: 'OBJETIVOS ESPECÍFICOS',
			active: false,
			id: 3
		},

		{
			text: 'FUNDAMENTAÇÃO LEGAL',
			active: false,
			id: 4
		},

		{
			text: 'COMO FUNCIONA',
			active: false,
			id: 5
		},

		{
			text: 'REMIÇÃO DE PENA',
			active: false,
			id: 6
		}

	]
  return (
    <div className='p-4 mt-2 w-screen'>
			<div className='flex flex-col items-center lg:flex-row justify-center'>
				{boxContents.map((bx, key)=>{
					return(
						<div onClick={()=> setCurrentBox(bx.id)} key={bx.id} className={`${currentBox === bx.id ? 'bg-transparent border-black text-black' : 'bg-[#0000FF] text-white'} rounded-lg w-4/5 md:w-1/4 lg:w-1/5 p-2 text-center mt-5 lg:mt-0 text-lg lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 hover:text-black transition-colors`}>
							<span>{bx.text}</span>
						</div>
					)
				})}
			</div>

			<div className='mt-0 m-auto'>
				<div className={`text-black text-xl ${currentBox === 1 ? 'block' : 'hidden'}`}>
					<p className='mt-10'>O Programa Educacional desenvolvido pela Escola CENED consiste na oferta de cursos de qualificação profissional, ministrado por meio da educação a distância, em todos os níveis de escolaridade, aos Internos do Sistema Prisional Brasileiro</p>

					<p className='mt-10'>O programa objetiva a reintegração social do preso, através de sua capacitação profissional, durante o cumprimento da pena, e sua (re)inclusão no mercado de trabalho após a saída do Sistema Penitenciário, quando da sua liberdade ou benefício amparado pela lei.</p>

					<p className='mt-10'>A ESCOLA CENED acredita no fato de que a educação é a principal ferramenta para mobilidade social e, no que se refere ao sistema prisional é, também, um mecanismo efetivo para reintegrar ou reabilitar os internos/reeducandos.</p>

					<p className='mt-10'>A instituição tem convicção que a educação é o único processo capaz de transformar o potencial das pessoas em competências, capacidades e habilidades; compreende que educar é o ato de criar espaços para que o educando, situado organicamente no mundo, empreenda a construção do seu ser em termos individuais e sociais. Partindo deste princípio, crê que o espaço carcerário, mesmo com todas as suas peculiaridades, deve ser entendido como um espaço educativo, um ambiente socioeducativo.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 2 ? 'block' : 'hidden'}`}>
					<p className='mt-10'>Oferecer aos internos do sistema prisional de regime fechado e semiaberto das penitenciárias masculinas e femininas, oportunidades de qualificação profissional inicial e continuada – EAD, adaptadas às exigências atuais do mercado de trabalho e às necessidades dos alunos, visando à requalificação e a (re)inclusão no mundo do trabalho nas mais diversas áreas em que atuam/atuavam ou venham a atuar, em diferenciados setores produtivos, motivando-os a não reincidir no crime, dando-lhes os subsídios necessários à prática profissional.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 3 ? 'block' : 'hidden'}`}>
					<ul>
						<li className='mt-10'>● Estabelecer programa de qualificação profissional aos internos do sistema penitenciário, de forma a assegurar o direito do apenado à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento;</li>

						<li className='mt-10'>● Atingir grande número de pessoas e grupos, mesmo separados por distâncias geográficas, sociais e sem condições de frequentarem cursos presenciais, como oportunidades de crescimento intelectual;</li>

						<li className='mt-10'>● Contribuir para a elevação do nível de escolaridade dos internos;</li>

						<li className='mt-10'>● Favorecer a aquisição de conhecimentos por meio da leitura;</li>

						<li className='mt-10'>● Promover o crescimento pessoal e profissional do interno durante o cumprimento da sua pena, visando à recuperação da sua dignidade;</li>

						<li className='mt-10'>● Possibilitar a recuperação da autoestima do interno por meio dos estudos que o qualificarão para o exercício de uma profissão útil à sociedade;</li>

						<li className='mt-10'>● Promover a reinserção do reeducando ao convívio social;</li>

						<li className='mt-10'>● Qualificar os egressos do sistema prisional para a (re)inserção no mercado de trabalho, para que não voltem a reincidir no crime;</li>

						<li className='mt-10'>● Desenvolver e aprimorar as habilidades profissionais do público-alvo deste programa;</li>

						<li className='mt-10'>● Abrir canteiros de trabalho no interior das unidades penais, compatíveis com a qualificação profissional realizada, tendo em vista a permanente qualificação do aluno/preso e o suprimento das necessidades do próprio Sistema Penal;</li>

						<li className='mt-10'>● Possibilitar aos internos a pleitear o benefício de remição da pena pelo estudo, previsto na Lei nº 7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.</li>
					</ul>
				</div>

				<div className={`text-black text-xl ${currentBox === 4 ? 'block' : 'hidden'}`}>
					<p className='mt-10'>No Brasil, o direito à educação do preso está disciplinado de maneira direta ou transversal na Constituição Federal, no Código Penal (Lei 2.848/40 e posteriores alterações), na Lei de Execução Penal (Lei nº. 7.210/84), nas resoluções e orientações do Conselho Nacional de Política Criminal e Penitenciária (CNPCP) e de maneira particular nos textos normativos penitenciários de cada unidade da federação, tendo em vista a descentralização da execução penal no país por força da competência concorrente entre União e Estados para legislar em matéria de direito penitenciário (CF/88 Art. 24, I).</p>

					<p className='mt-10'>Assim, a Carta Magna de 1988, ao contemplar em seu artigo 205 o princípio da universalidade do direito à educação, beneficiou necessariamente os indivíduos em privação de liberdade. No mesmo sentido, o artigo 38 do Código Penal dispõe que “o preso conserva todos os direitos não atingidos pela perda da liberdade”, e de maneira análoga, a Lei de Execuções Penais traz no bojo de seu artigo 3º que “ao condenado e ao internado são assegurados todos os direitos não atingidos pela sentença ou pela lei”.</p>

					<p className='mt-10'>Sob o título de “assistência educacional”, o legislador pátrio contemplou ainda na Lei de Execução Penal (7.210/84), o disciplinamento do direito à educação do preso no ordenamento jurídico brasileiro, admitindo em seu artigo 10º sua importância nas funções de prevenção do crime e orientação do retorno do apenado à convivência em sociedade, a saber: </p>

					<div className='italic p-2 w-4/5 border-black border-l-2 border-b-2 mt-10'>
						<i>Art. 17. A assistência educacional compreenderá a instrução escolar e a formação profissional do preso e do internado. Art. 18. O ensino de 1º grau será obrigatório, integrando-se no sistema escolar da Unidade Federativa. Art. 19. O ensino profissional será ministrado em nível de iniciação ou de aperfeiçoamento técnico. Parágrafo Único. A mulher condenada terá ensino profissional adequado à sua condição. Art. 20. As atividades educacionais podem ser objeto de convênio com entidades públicas ou particulares, que instalem escolas ou ofereçam cursos especializados. Art. 21. Em atendimento às condições locais, dotar-se-á cada estabelecimento de uma biblioteca, para uso de todas as categorias de reclusos, provida de livros instrutivos, recreativos e didáticos. (...) Art. 41. Constituem direitos do preso: (...) XV- Contato com o mundo exterior por meio de correspondência escrita, da leitura e de outros meios de informação que não comprometam a moral e os bons costumes. (...) Art. 83. O estabelecimento penal, conforme a sua natureza, deverá contar em suas dependências com áreas e serviços destinados a dar assistência, educação, trabalho, recreação e prática esportiva. (...) Art. 122. Os condenados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária do estabelecimento, sem vigilância direta, nos seguintes casos: (...) II- frequência a curso supletivo profissionalizante, bem como de instrução do 2º grau ou superior, na comarca do Juízo da Execução.</i>
					</div>
				</div>

				<div className={`text-black text-xl ${currentBox === 5 ? 'block' : 'hidden'}`}>
					<p className='mt-10'>Na tela inicial do site, no botão <a className='text-blue-500' href="/comofunciona">COMO FUNCIONA</a> você encontrará todas as informações sobre a realização dos cursos: da matrícula à certificação.</p>
				</div>

				<div className={`text-black text-xl ${currentBox === 6 ? 'block' : 'hidden'}`}>
					<p className='mt-10'>A <b>REMIÇÃO DA PENA PELO ESTUDO</b> e pelo trabalho está prevista na Lei Federal nº 12.433/2011. Conforme a lei, o aluno/interno terá o benefício de 1(um) dia de remição da pena a cada 12 (doze) horas de estudo ou, a cada 3 (três) dias de estudo, 1(um) dia de remição da pena.</p>

					<p className='mt-10'>Dessa forma, a título de exemplo, o aluno/interno que CONCLUI um curso de 180 horas e as atividades educacionais sendo reconhecidas pela Judiciário, poderá ser beneficiado com 15 (quinze) dias de remição da sua pena, conforme prevê o artigo 126, parágrafo 1º, inciso I, da Lei nº 7.210/84.</p>
				</div>
			</div>
    </div>
  )
}
