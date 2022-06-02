import React from 'react'
import BoxInfo from './BoxInfo'

export default function DetailInfo() {
  return (
    <div className='p-4'>
			<BoxInfo title={'Matrícula do Interno / Custodiado'} text={'Faça a matrícula do Interno neste site. O pagamento poderá ser feito em cartão de crédito ou boleto bancário referente ao valor total do curso que você escolheu. O boleto poderá ser pago em qualquer banco ou em uma casa lotérica.'}/>

			<BoxInfo title={'Entrega do material didático ao Interno (apostila)'} text={'Confirmado o pagamento do curso, a Escola CENED etiquetará o material didático, identificando o nome completo e o endereço prisional do Interno. NO DISTRITO FEDERAL: O material didático será entregue, em mãos, ao Chefe do Núcleo de Ensino da Unidade Prisional onde se encontra o Interno. NOS OUTROS ESTADOS: O material didático será encaminhado, via Correios, aos cuidados do Chefe do Núcleo de Ensino ou Agente de Ensino da Unidade Prisional onde se encontra o Interno.'}/>

			<BoxInfo title={'Distribuição do material didático aos Internos'} text={'O Chefe do Núcleo de Ensino ou Agente de Ensino da Unidade Prisional repassará a cada Interno o seu material didático - apostila.'}/>

			<BoxInfo title={'Realização do curso'} text={'O Interno realizará o curso na própria cela. O curso consistirá no estudo sequencial dos módulos da apostila e realização de uma prova escrita final na unidade prisional.'}/>

			<BoxInfo title={'Acompanhamento do curso pelo familiar, visitante ou defensor'} text={'O familiar, visitante ou defensor poderá acompanhar, por meio do portal da Escola CENED, a realização do curso pelo Interno. No ato da inscrição on-line será criada a ÁREA DO ALUNO e neste ambiente o familiar ou visitante poderá acompanhar, passo- a-passo, em tempo real, a realização do curso: da confirmação da matrícula ao recebimento do certificado.'}/>

			<BoxInfo title={'Material didático - apostila'} text={'O material didático será composto por apostilas que se apresentarão em linguagem clara, simples, objetiva e acessível, que facilitará a autoaprendizagem. Os textos serão explicativos, exemplificando diversas situações características das profissões, além de disponibilizar orientações prático-teóricas que estimularão o raciocínio e o pensamento crítico.'}/>

			<BoxInfo title={'Avaliação presencial'} text={'O INTERNO realizará, ao final de cada curso, uma prova escrita obrigatória para aferição do seu rendimento. De acordo com cada curso e sua respectiva carga horária, a prova conterá entre 10 (dez) a 30 (trinta) questões objetivas, com 4 (quatro) ou 5 (cinco) alternativas de respostas identificadas com as letras (A), (B), (C), (D) e (E). O cursista/interno realizará uma única prova, quando obtiver a nota mínima para aprovação, que será de 60% (sessenta por cento) do total da pontuação. Quando o cursista/interno não obtiver a pontuação exigida, deverá realizar outra prova (recuperação da aprendizagem).'}/>

			<BoxInfo title={'Realização da prova final'}>
				<p className='text-white text-lg mt-5'>NO DISTRITO FEDERAL
					<br /> a) Aplicação: serão aplicadas aos Internos, na sua Unidade Prisional, as provas escritas relativas aos cursos concluídos. As provas serão aplicadas pelo Chefe do Núcleo de Ensino ou por quem o Diretor do estabelecimento prisional vier a designar, acompanhado de funcionário da Escola CENED.</p>
				
				<p className='text-white text-lg mt-5'>b) Ao final da aplicação: as provas serão recolhidas e encaminhadas pelo funcionário da Escola CENED para correção.</p>

				<p className='text-white text-lg mt-5'>NOS OUTROS ESTADOS
				<br />c) Recebimento: a escola CENED encaminhará, via Correios, com antecedência de 10 (dez) dias, as provas para serem aplicadas.</p>

				<p className='text-white text-lg mt-5'>d) Aplicação: serão aplicadas aos Internos, na sua Unidade Prisional, as provas escritas relativas aos cursos concluídos. As provas poderão ser aplicadas pelo Chefe do Núcleo de Ensino ou por quem o Diretor do estabelecimento prisional vier a designar</p>

				<p className='text-white text-lg mt-5'>e) Devolução: após realização, as provas serão encaminhadas, via Correios, à Escola CENED.</p>
			</BoxInfo>

			<BoxInfo title={'Correção e resultado das provas'}>
				<p className='text-white text-lg mt-5'>A Equipe Pedagógica da Escola CENED fará a correção das provas. O Interno que: </p>
				<p className='text-white text-lg mt-5'>a) Obtiver a nota mínima para aprovação, que será de 60% (sessenta por cento) do total da pontuação, receberá o Certificado expedido por esta Instituição Educacional;</p>
				<p className='text-white text-lg mt-5'>b) Não alcançar a média mínima, realizará outra prova, isento de pagamento, contendo todo o conteúdo do curso estudado, porém com questões diferentes da primeira. Após estas duas avaliações, as demais serão aplicadas mediante pagamento de taxa.</p>
			</BoxInfo>

			<BoxInfo title={'Entrega do certificado ao Núcleo de Ensino'}>
				<p className='text-white text-lg mt-5'>NO DISTRITO FEDERAL</p>

				<p className='text-white text-lg mt-5'>A Escola CENED entregará, em mãos, os certificados dos Internos aprovados, aos cuidados do Chefe do Núcleo de Ensino, que por sua vez, os repassarão às Assessorias Jurídicas das Unidades Prisionais para as providências quanto à confecção da certidão relativa ao estudo para fins de remição de pena, junto à Vara de Execuções Penais.</p>

				<p className='text-white text-lg mt-5'>NOS OUTROS ESTADOS</p>

				<p className='text-white text-lg mt-5'>A Escola CENED encaminhará, via Correios, os certificados dos Internos aprovados, aos cuidados do Chefe do Núcleo de Ensino, que por sua vez, os repassarão às Assessorias Jurídicas das Unidades Prisionais para as providências quanto à confecção da certidão relativa ao estudo para fins de remição de pena, junto à Execuções Penais ou Criminais.</p>
			</BoxInfo>

			<BoxInfo title={'Devolução das apostilas aos familiares/visitantes'} text={'Recebido o Certificado de conclusão do curso, o Núcleo de Ensino devolverá ao parente/visitante do Interno a apostila relativa ao curso concluído.'}/>

			<BoxInfo title={'Da remição de pena'}>
				<p className='text-white text-lg mt-5'>Conforme a Lei de Execução Penal, o aluno/reeducando poderá pleitear o benefício de 1 (um) dia de remição da pena a cada 12 (doze) horas de estudo ou seja, a cada 3 (três) dias de estudo, 1 (um) dia de remição da pena.</p>

				<p className='text-white text-lg mt-5'>Nos termos do artigo 126, parágrafo 2º, da Lei nº 7.210/84 (Lei de Execução Penal), a atividade de estudo desenvolvida a distância ou presencial tem o condão de remir parte do tempo de execução da pena se devidamente certificada pela instituição educacional competente e responsável pelos cursos realizados.</p>

				<p className='text-white text-lg mt-5'>Nos termos da LEP, para calcular os dias a serem remidos em razão do período estudado, desde que não ultrapasse 12 horas a cada três dias ou, em média, 4 horas/dia, será feito da seguinte forma: dividir-se-á a CARGA HORÁRIA TOTAL DO CURSO por 12 horas e encontrar-se-á o TEMPO A SER REMIDO.</p>

				<p className='text-white text-lg mt-5'>A Resolução nº 391/2021, do Conselho Nacional de Justiça, regulamenta o direito à remição de pena por meio de atividades educacionais em unidades de privação de liberdade, que podem ser ofertadas por instituições de ensino públicas ou privadas.</p>
			</BoxInfo>

			<BoxInfo title={'Devolução do original do certificado'} text={'O original do Certificado será devolvido pela Assessoria Jurídica aos parentes/visitantes dos Internos.'}/>

			<BoxInfo title={'Ação de cooperação educacional entre a Escola CENED e a unidade prisional'}>
				<p className='text-white text-lg mt-5'>Em síntese, a realização dos cursos pelos Internos será executada mediante a ação conjunta entre a Escola CENED e o Núcleo de Ensino do Estabelecimento Prisional, em cumprimento ao exercício do direito do preso à educação, com rotina semanal para:</p>

				<p className='text-white text-lg mt-5'>a) Entrega do material didático;</p>

				<p className='text-white text-lg mt-5'>b) Aplicação de provas; e</p>

				<p className='text-white text-lg mt-5'>c) Entrega dos certificados.</p>
			</BoxInfo>

			<BoxInfo title={'Matrícula em um novo curso'} text={'Será realizado um curso de cada vez, sendo que o início de um ocorrerá subsequentemente ao término de outro. O aluno/reeducando poderá ser matriculado em mais de um curso: o PRIMEIRO CURSO será ativado e os demais ficarão agendados no sistema, aguardando conclusão do curso em realização. Na hipótese de matrícula em mais de um curso, será encaminhado à Unidade Prisional o material didático, individualmente, de cada curso, conforme a sua conclusão.'}/>
    </div>
  )
}
