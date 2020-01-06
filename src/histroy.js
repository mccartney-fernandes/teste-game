const chapters = [
        {
            name: 'Capitulo 01 - O dispertar',
            status: true,
            progress: false,
            script: [
                {
                    actor: 'image',
                    img: 'https://static.vecteezy.com/system/resources/previews/000/445/767/non_2x/girl-toddler-sleeping-on-blue-pillow-vector.jpg',
                    status: true,
                    passed: false,
                },
                {
                    actor: 'NARRADOR',
                    text: 'Naquele dia eu acordei com o sol em meu rosto. Era de manhã e os pássaros cantavam ao fundo. Logo assim que eu levantei me dirigi a cozinha.',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'ACAO',
                    text: 'Andando até a cozinha.',
                    efects: 'sons de passos',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'CANT',
                    text: 'Mãe?...',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'LENORE',
                    text: 'Oi meu amor... Acordou cedo hoje.',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'image',
                    img: 'https://image.freepik.com/vetores-gratis/linda-mulher-cozinhando-na-cozinha_24877-4503.jpg',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'NARRADOR',
                    text: `Ela me olhou com aquele simples olhar, aquele simples sorriso que preenche a alma de qualquer pessoa. E com essa simplicidade ela veio a 
                            mim e me recebeu com um beijo amoroso de mãe`,
                    status: false,
                    passed: false,                    
                },
                {
                    actor: 'LENORE',
                    text: 'Sente-se ai meu amor, eu fiz alguns bolinhos de arroz.',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'CANT',
                    text: ':D Bolinhos de arroz?!?!',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'LENORE',
                    text: 'Uhum...',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'CANT',
                    text: ':D Ebaa!',
                    status: false,
                    passed: false,
                },
                {
                    actor: 'NARRADOR',
                    text: `Eu me sentei e tinha um tigela enorme de bolinhos de arroz, com aquela alegria eu comecei a comer. 
                            E enquanto comia veria a minha mãe começar a preparar o almoço.`,
                    status: false,
                    passed: false,                   
                },
                {
                    actor: 'DECISION',
                    one: 'Mãe, posso te ajudar...?',
                    two: 'Nossa.. Comi tanto que deu até sono.',
                    status: false,
                    passed: false,
                },
            ]
        },

        {
            name: 'Capitulo 02 - O garoto',
            status: false,
            progress: false,
            script: [
                {
                    actor: 'image',
                    img: '(Imagem ilustrativa: Cant(criança) dormindo e o sol batendo em sua cara.)(Efeito: Pássaros cantando)22'
                },
                {
                    actor: 'NARRADOR',
                    text: 'Naquele dia eu acordei com o sol em meu rosto. Era de manhã e os pássaros cantavam ao fundo. Logo assim que eu levantei me dirigi a cozinha.22',
                },
                {
                    actor: 'ACAO',
                    text: 'Andando até a cozinha.22',
                    efects: 'sons de passos22'
                },
                {
                    actor: 'CANT',
                    text: 'Mãe?...22'
                },
                {
                    actor: 'LENORE',
                    text: 'Oi meu amor... Acordou cedo hoje.22'
                },
                {
                    actor: 'image',
                    img: '(Imagem ilustrativa: Lenore, na cozinha olhando ele com um sorriso.)22'
                },
                {
                    actor: 'NARRADOR',
                    text: `Ela me olhou com aquele simples olhar, aquele simples sorriso que preenche a alma de qualquer pessoa. E com essa simplicidade ela veio a 
                            mim e me recebeu com um beijo amoroso de mãe22`,                    
                },
                {
                    actor: 'LENORE',
                    text: 'Sente-se ai meu amor, eu fiz alguns bolinhos de arroz.2'
                },
                {
                    actor: 'CANT',
                    text: ':D Bolinhos de arroz?!?!22'
                },
                {
                    actor: 'LENORE',
                    text: 'Uhum...2'
                },
                {
                    actor: 'CANT',
                    text: ':D Ebaa!'
                },
                {
                    actor: 'NARRADOR',
                    text: `Eu me sentei e tinha um tigela enorme de bolinhos de arroz, com aquela alegria eu comecei a comer. 
                            E enquanto comia veria a minha mãe começar a preparar o almoço.2`,                    
                },
                {
                    actor: 'DECISION',
                    one: 'Mãe, posso te ajudar...?',
                    two: 'Nossa.. Comi tanto que deu até sono.2'
                },
            ]
        }
]

export default chapters;