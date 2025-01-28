// Elementos do DOM
const partner1Input = document.getElementById('partner1');
const partner2Input = document.getElementById('partner2');
const partner1CPFInput = document.getElementById('partner1CPF');
const partner2CPFInput = document.getElementById('partner2CPF');
const clauseInput = document.getElementById('clauseInput');
const addClauseButton = document.getElementById('addClauseButton');
const contractPreview = document.getElementById('contractPreview');
const generatePDFButton = document.getElementById('generatePDFButton');
const contractTypeSelector = document.getElementById('contractType');

// Frases de introdução para cada tipo de contrato
const introText = {
    formal: `Este contrato de relacionamento é celebrado de forma consciente e mútua entre [Parceiro 1], portador do CPF [CPF do Parceiro 1], e [Parceiro 2], portador do CPF [CPF do Parceiro 2]. 
As partes reconhecem que este documento reflete o compromisso de agir com respeito, responsabilidade e parceria em todas as circunstâncias. 
Ambas as partes declaram que compreendem as cláusulas aqui descritas e se comprometem a cumpri-las de forma plena e transparente. 
A seguir, estão listadas as cláusulas acordadas, que guiarão o relacionamento para um futuro harmonioso e comprometido.`,
    divertido: `Este contrato animado e cheio de bom humor é firmado entre [Parceiro 1], identificado pelo CPF [CPF do Parceiro 1], e [Parceiro 2], identificado pelo CPF [CPF do Parceiro 2]. 
Ambos os parceiros se comprometem a compartilhar risadas diárias, fazer caretas em momentos inesperados e resolver brigas jogando “pedra, papel e tesoura”. 
É cláusula obrigatória que piadas ruins sejam aceitas com risadas forçadas, e que sessões de cócegas aconteçam semanalmente. 
A seguir, estão listadas as cláusulas que tornarão este compromisso ainda mais divertido e memorável.`,
    engracado: `Este contrato hilário é celebrado entre [Parceiro 1], portador do CPF [CPF do Parceiro 1], e [Parceiro 2], portador do CPF [CPF do Parceiro 2], ambos conscientes de que a vida a dois é uma comédia romântica com toques de stand-up. 
Os parceiros concordam que discussões sérias podem ser resolvidas com batalhas de travesseiro e que caretas terão valor legal como respostas durante as brigas. 
Para manter a leveza e as boas risadas, seguem as cláusulas que irão reger este divertido compromisso.`,
    sexy: `Este contrato apaixonado é celebrado com desejo e cumplicidade entre [Parceiro 1], portador do CPF [CPF do Parceiro 1], e [Parceiro 2], portador do CPF [CPF do Parceiro 2]. 
As partes reconhecem que este documento simboliza um compromisso ardente, com momentos de intimidade, carinho e sedução. 
Os envolvidos concordam em valorizar a conexão física e emocional, prometendo alimentar a chama do amor com gestos românticos e encontros especiais. 
Para garantir que a paixão e o romance sejam continuamente celebrados, seguem abaixo as cláusulas que irão reger este compromisso especial.`
};

// Cláusulas padrão para cada tipo de contrato
const defaultClauses = {
    formal: [
        'Os parceiros se comprometem a agir com respeito mútuo.',
        'Decisões importantes serão tomadas em conjunto.',
        'Conflitos serão resolvidos com diálogo e paciência.',
        'Ambos os parceiros se comprometem a dividir responsabilidades.',
        'A privacidade será respeitada em todas as situações.',
        'Datas especiais serão comemoradas com empenho.',
        'Gestos de gentileza são altamente incentivados.',
        'Nenhuma decisão será imposta sem consenso mútuo.',
        'Compromissos serão cumpridos com pontualidade.',
        'O apoio emocional será uma prioridade.'
    ],
    divertido: [
        'Os parceiros assistirão a um filme juntos uma vez por semana.',
        'Jogos de tabuleiro serão usados para resolver impasses.',
        'Piadas ruins são incentivadas, desde que tragam risos.',
        'Um café da manhã especial será preparado uma vez ao mês.',
        'Passeios espontâneos serão incentivados.',
        'Cantar no chuveiro será permitido e encorajado.',
        'Dançar juntos sem motivo será obrigatório.',
        'Presentes surpresa serão dados sem datas comemorativas.',
        'Sessões de fotos engraçadas serão realizadas anualmente.',
        'Histórias engraçadas serão contadas antes de dormir.'
    ],
    engracado: [
        'Os parceiros usarão fantasias para discutir problemas sérios.',
        'Todo aniversário será comemorado com um bolo temático bizarro.',
        'Frases engraçadas serão coladas na geladeira semanalmente.',
        'Competição de caretas será realizada para resolver brigas.',
        'Nenhuma piada será considerada “sem graça”.',
        'Um piquenique de comida estranha será feito anualmente.',
        'Os parceiros terão apelidos engraçados um para o outro.',
        'A cada mês, haverá um “desafio de cosplay”.',
        'Uma batalha de travesseiros será obrigatória a cada seis meses.',
        'As discussões serão resolvidas jogando “pedra, papel e tesoura”.'
    ],
    sexy: [
        'Os parceiros farão um jantar à luz de velas semanalmente.',
        'Sessões de massagem serão alternadas entre os parceiros.',
        'Todos os finais de semana haverá uma noite de “encontro especial”.',
        'Fantasia sexy será usada uma vez por mês.',
        'Bilhetes amorosos com teor sensual serão trocados regularmente.',
        'As conversas apimentadas serão incentivadas em mensagens.',
        'Os parceiros assistirão a filmes românticos juntos.',
        'Uma surpresa sexy será feita uma vez ao mês.',
        'Fins de semana serão dedicados à intimidade do casal.',
        'Ambos farão uma playlist romântica e sensual para ouvir juntos.'
    ]
};

let clauses = [];

// Atualizar visualização do contrato
function updateContractPreview() {
    const partner1 = partner1Input.value || '[Parceiro 1]';
    const partner2 = partner2Input.value || '[Parceiro 2]';
    const partner1CPF = partner1CPFInput.value || '[CPF do Parceiro 1]';
    const partner2CPF = partner2CPFInput.value || '[CPF do Parceiro 2]';
    const type = contractTypeSelector.value;

    const intro = introText[type]
        .replace('[Parceiro 1]', partner1)
        .replace('[CPF do Parceiro 1]', partner1CPF)
        .replace('[Parceiro 2]', partner2)
        .replace('[CPF do Parceiro 2]', partner2CPF);

    const allClauses = [...(defaultClauses[type] || []), ...clauses];
    const clauseText = allClauses.map((clause, index) => `${index + 1}. ${clause}`).join('\n');

    contractPreview.textContent = `${intro}\n\nCLÁUSULAS:\n${clauseText}`;
}

// Adicionar cláusula personalizada
addClauseButton.addEventListener('click', () => {
    const clause = clauseInput.value.trim();
    if (clause) {
        clauses.push(clause);
        clauseInput.value = ''; // Limpa o campo de entrada
        updateContractPreview();
    } else {
        alert('Por favor, insira uma cláusula válida.');
    }
});

// Gerar PDF e redirecionar para `index.html`
generatePDFButton.addEventListener('click', () => {
    updateContractPreview(); // Atualizar a visualização antes de gerar
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    const partner1 = partner1Input.value || '[Parceiro 1]';
    const partner2 = partner2Input.value || '[Parceiro 2]';
    const partner1CPF = partner1CPFInput.value || '[CPF do Parceiro 1]';
    const partner2CPF = partner2CPFInput.value || '[CPF do Parceiro 2]';
    const type = contractTypeSelector.value;

    const intro = introText[type]
        .replace('[Parceiro 1]', partner1)
        .replace('[CPF do Parceiro 1]', partner1CPF)
        .replace('[Parceiro 2]', partner2)
        .replace('[CPF do Parceiro 2]', partner2CPF);

    const allClauses = [...(defaultClauses[type] || []), ...clauses];
    const clauseText = allClauses.map((clause, index) => `${index + 1}. ${clause}`).join('\n');

    const logo = new Image();
    logo.src = '../imgs/Logo.png';
    logo.onload = () => {
        doc.addImage(logo, 'PNG', 80, 10, 50, 50);
        doc.setFontSize(18);
        doc.setFont('Times', 'bold');
        doc.text('CONTRATO DE RELACIONAMENTO', 105, 70, { align: 'center' });
        doc.setFontSize(12);
        doc.setFont('Times', 'normal');
        const introLines = doc.splitTextToSize(intro, 180);
        let y = 80;
        introLines.forEach((line) => {
            doc.text(line, 15, y);
            y += 8;
        });

        const clauseLines = doc.splitTextToSize(`CLÁUSULAS:\n${clauseText}`, 180);
        y += 10;
        clauseLines.forEach((line) => {
            if (y > 270) {
                doc.addPage();
                y = 10;
            }
            doc.text(line, 15, y);
            y += 8;
        });

        y += 20;
        doc.text('____________________________', 40, y);
        doc.text('Assinatura do Parceiro 1', 40, y + 10);
        doc.text('____________________________', 120, y);
        doc.text('Assinatura do Parceiro 2', 120, y + 10);

        y += 20;
        doc.setFontSize(10);
        doc.setFont('Times', 'italic');
        doc.text(
            'Esse contrato não tem função legal, é somente para fins de entretenimento.',
            105,
            y,
            { align: 'center' }
        );

        doc.save('Contrato_de_Relacionamento.pdf');

        // Redirecionar para `index.html` após salvar
        setTimeout(() => {
            window.location.replace('../index.html');
        }, 1000);
    };

    logo.onerror = () => {
        alert('Erro ao carregar a logo. Verifique o caminho do arquivo.');
    };
});

// Atualizar contrato automaticamente ao mudar qualquer entrada
[partner1Input, partner2Input, partner1CPFInput, partner2CPFInput, contractTypeSelector].forEach((input) => {
    input.addEventListener('input', updateContractPreview);
});

// Inicializar a visualização
updateContractPreview();
