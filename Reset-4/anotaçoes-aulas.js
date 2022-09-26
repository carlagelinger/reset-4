/*
29/08/2022
Live 01 – dia 29/08/2022 – Apresentação

Carreira da Qualidade de Software
	Disciplina
		Programação
			Algoritmos
Lógica de programação
Linguagem de programação
Banco de Dados
Linha de comandos
Protocolos e Padrões
	HTTP
	REST
		Fundamentos
			Modelo de Desenvolvimento
				Tradicional
				Ágil
			Abordagens
				Testes Exploratórios
				Testes Baseados em Riscos
				Checklist
				Jornadas e cenários
			Tipos de Testes
				Caixa Preta
				Caixa Branca
			Técnicas de Teste
				Partição de Equivalência
				Pair Wise
			Níveis de teste
				Unidade
				Integração
				End to End
		Ferramentas
			API
				Postman
				Swagger
			Web
				Navegadores
				Plugins
			Automação
				Selenium
				Cypress
				Supertest
	Carreira
		Papeis
			Analista de Testes
			Engenheiro de Testes
			Líder de Teste
		Níveis
			Júnior
			Pleno
			Sênior
			Especialista
		Especializações
			Mobile
			Web
			Acessibilidade
			Automação
			Recentes
				Performance
				Segurança
				Inteligência Artificial
Soft Skills
	Comunicação
	Criatividade
	Pensamento Crítico
	Senso de urgência
	Organização
Pesquisadores e referências
	Agile Testint
		Lisa Crispin
		Janet Gregory
	Testes Exploratórios
		James Bach
		Elisabeth Hendrickson
	Automação
		Elias Nogueira
		Linda Hayes

Módulo 01 – Testes de software

TESTES DE SOFTWARE

Aula 01 - O que teste de software?

Atividade destrutiva – Glenford Myers
Conhecer, aprender e explorar – Michael Bolton
Avaliar um produto de software, atender ao proposito e requisito e detectar defeitos - ISQTB
Entrada – processamento – saída
Melhor ferramenta: bloco de notas para observar e anotar
Por que o próprio Desenvolvedor não testa?
O dev testa, inclusive alguns erros só ele consegue encontrar
Mas existem outras difíceis de enxergar, então o QA é um viés de confirmação

PLANEJAMENTO DE TESTES

Aula 02.1 – Planejamento de testes

Objetivo de um bom planejamento: Entregar ótimos resultados para o negócio, otimizando o tempo e os recursos limitados disponíveis. FAZER MAIS COM MENOS.

Ferramentas
Ferramentas: podem ajudar, e muito, mas... 
Ex.:
FreeMind

Técnicas
Mas sem Técnicas não consegue fazer
Ex.: 
1)	Mind Map (mapa mental)
2)	Cauda longa: testes combinatoriais: 1. Pairwise	2. Combinação por pares
3)	Gráfico de Pareto (funcionou por 100 anos)
Gráficos de Pareto para testes
1 – Reclamações por módulo (suporte/vendas)
2 – Módulos mais usando (mkt – métrica)
3 – Análise de risco
- o que mais tem chance de falhar
- o que dá mais prejuízo se falhar
4 – Falhas por Módulos (suporte/operação)
5 – Defeitos por módulo (você tem a informação)
Existem diversas técnicas de teste de software conhecidas e validadas pelo mercado de TI. Elas são divididas entre:
1.	Funcionais: verificam as funcionalidades de um sistema e buscam erros de desempenho; 
•	Não-funcionais: analisam a usabilidade, velocidade e outros aspectos que independem das ações executadas pelo sistema.
Teste de Caixa Branca
Dentre as técnicas de teste de software, esta utiliza o código-fonte do sistema com a finalidade de analisar os componentes. É também chamado de teste estrutural pois analisa o fluxo de dados, a qualidade da estruturação deste código, segurança, complexidade da manutenção, entre outros. 
 
Teste de Caixa Preta
Também conhecido como teste funcional, analisa os requisitos do sistema, ou seja, se o software cumpre as funções que deve executar. Tais funcionalidades e ações foram previamente definidas na etapa de especificação de requisitos. 
É importante lembrar que não existe contato com o código-fonte neste tipo de teste. Assim, o que é validado é o resultado, através da exploração da ferramenta. 
 
Teste de Caixa Cinza
A técnica de teste de Caixa Cinza junta a Caixa Branca e a Caixa Preta. Dessa forma, são submetidos a análise tanto a estrutura do código-fonte quanto o cumprimento das funções do sistema. 
A finalidade de utilizar a Caixa Cinza é buscar por erros que o sistema pode apresentar. A forma com que é feita é denominada de engenharia reversa. Ainda, tem a finalidade de compreender o que gerou as falhas e erros do sistema para posteriormente serem ajustados.
 
Teste de Regressão
Muitas são as técnicas de teste de software e a proposta desta é testar cada versão de um sistema, quando suas funcionalidades passam por mudanças ou são incorporadas novas tarefas. Este teste ajuda a evitar a recorrência de erros de versões anteriores de um aplicativo ou um software. 
 
Teste de Unidade
Esta técnica submete as funções mais simples de um sistema a testes de maneira isolada. Dessa forma, é possível descobrir se todas as funções funcionam de maneira correta. Isso porque as funções isoladas são a base para o funcionamento completo de um sistema. 
 
Teste de Integração
Tem ligação com o teste de unidade. Após a verificação das funções isoladas, o próximo passo é analisar sua integração e se todas funcionam nesta nova condição. Esta técnica é importante para apurar incompatibilidades e conflitos entre as funções. 
 
Teste de Carga
Também chamado de Teste de Volume, submete o sistema ou aplicativo ao seu limite de funcionamento. A ideia é compreender sua capacidade de processamento sem que apresente problemas. Será testado o quanto ele suporta de tráfego, de informações, entre outros, até aparecerem travamentos  ou bugs. 
 
Teste de Stress
A ideia é semelhante à do teste de carga, porém a verificação é em relação ao seu desempenho. O sistema é submetido a condições extremas para confirmar se as especificações de uso são compatíveis com o que ele suporta. 
 
Teste de Usabilidade
De maneira geral, este teste é realizado por um grupo de usuários que verifica o funcionamento do software. Assim, o público avalia se o produto satisfaz suas necessidades. Por isso, também é chamado de teste de aceitação.
Além disso, os desenvolvedores avaliam o modo como o usuário está operando a ferramenta. Esta atividade ajuda a deixar o programa mais intuitivo e fácil de usar. 
O que precisa ser testado
Um bom planejamento de TI é importante não apenas para acompanhar a execução do projeto. Tal atividade é importante também para mapear a realização dos testes. E é através do planejamento que se define quais serão feitos e em que etapa.
Portanto, alguns aspectos de um sistema precisam ser submetidos a testes para não chegarem ao mercado com problemas de execução e desempenho:
•	Funcionalidade;
•	Confiabilidade;
•	Usabilidade;
•	Eficiência;
•	Manutenibilidade;
•	Portabilidade.


Aula 02.2 – Análise e Modelagem de teste

Planejamento (estratégia, priorização, riscos, pontos importantes, 
Análise (conjunto de teste (cenário (black Friday, covid), suíte) e sequencia)
Modelagem  técnicas: 2 perguntas

Exercício:
1.	Cite 2 exemplos de técnicas de planejamento de testes.
Mapa Mental (MindMap) e Principio de Pareto
2.	Cite 3 exemplos de artefatos/documentos possíveis para a modelagem de testes?
1.	User Story
2.	Caso de teste
3.	Mapa mental
4.	Checklist
5.	Comentários
6.	Diagramas
7.	Cenários de teste escritos em Gherkin (Sintaxe usada em uma técnica chamada BDD - Behavior Driven Development)
FUNDAMENTOS DE TESTES
1)	Modelos de desenvolvimento
2)	Abordagens
3)	Tipos de testes:
Caixa Preta, Caixa Branca, Caixa Cinza
4)	Técnicas de Testes
Partição de equivalência e Pair Wise
5)	Níveis de testes
Unidades, Integração e End to End
Live 02 – dia 05/09/2022 – Final módulo II

Fundamentos Qualidade de Software
	Níveis de teste
		Unidade / Componente (testar menor parte possível do teste)
		Integração (juntar tudo pra testar, juntar as API)
		Sistema (teste de fluxo, é visual, onde vê o funcionamento da aplicação)
		Aceite (produto pronto, cliente testa e experimenta)
		Alfa (escolhe usuários dentro da empresa para testar)
		Beta (seleciona clientes para testar antes de liberar geral)
	Tipos de teste
		Funcionais (testes que funcionam, tem entrada e saída)
			Fluxo (caminho a percorrer)
			Regressão (testes já feitos anteriormente e refeitos)
			Smoke Testing (teste de fumaça, passa nos fluxos principais)
		Não funcionais (nem sempre tem entrada, faz-se por observação)
			Layout (cor e fonte que cliente quer?)
			Usabilidade (voltado para acessibilidade)
			Segurança
				SQL Injection
			Performance/Carga/Estresse
				Aplicativo atebte os requisitos de desempenho?
Possui gargalo?
Qual a escabilidade?
Até onde o sistema suporta? Número de acessos simultâneos
	Técnicas de Teste
		Caixa Branca/Estrutura (feito pelo dev)
			Teste unitário
			Condições/comandos/lógica/teste de mesa
		Caixa Preta (QAs não tem acesso ao código)
			Participação de equivalência 
			Valor Limite (testes abaixo e/ou acima de algum requisito, ex. idade)
			Tabela de decisão 
			Diagrama de Estado (ex. errar senhas, e na terceira tentativa, bloqueia)
			Teste de requisitos 
			Teste Exploratório
			Comportamento
Ciclo de Atividades
	Problematização
		Planejamento
			Entendimento
			Riscos
			Estratégia
			Priorização
		Preparação
			Ambiente
			Massa de testes
			Ferramentas
		Especificação
			Criação do roteiro de testes/cenários
			Priorização
			Automação
		Execução
			Scripts
			Executar/reexecutar cenários
			Bugs
			Métricas
		Finalização
			Relatório de atividades
				Rel. de Automação
				Rel. de bugs
QA Ágil

Módulo 02 – Níveis de Teste

Aula 01.1 - Níveis, técnicas e tipos de teste. Entenda! unidade, integração, sistema, regressão, funcional, estrutural

Níveis de teste:
Teste de Integração: testar componentes, entre sistemas, como se integram
Teste de regressão: verificar se não quebrou nada no sistema
Teste de aceitação
Teste alpha: colocar pessoas pra usar
Teste Beta: alguns clientes testam
Técnicas de teste:
Caixa branca: estrutural
Caixa preta: baseado em comportamento
Técnica baseado em experiencia

Aula 01.2 -Técnicas de teste baseada em experiência

Suposição de erros: prever a ocorrência com base no conhecimento do testador

Aula 01.3.- Técnicas de teste de Caixa Preta 

Caixa preta: entradas e saídas sem referencia a sua estrutura interna
Caixa branca: estrutura e no processamento dentro do objeto de teste
Teste de experiencia: conhecimento dos envolvidos para projetar, implementar e executar os testes 

Exercício:
1.	Cite 2 técnicas de teste de caixa preta.
Partição de equivalência
Valor limite
Tabela de decisão
Diagrama de estado

2.	O que você entende por testes de caixa preta e testes de caixa branca?
Testes de Caixa preta são um tipo de teste baseado em comportamento da aplicação, enquanto Testes de Caixa branca são um tipo de teste baseado na estrutura da aplicação, onde temos acesso ao código, por exemplo.
Aula 02 – O que é pirâmide de teste

https://www.youtube.com/watch?v=hizne8Yc_Dg
Na base, testes de unidade
No meio, Integração
No topo, menor probabilidade de ocorrer
CONHECENDO MAIS APLICAÇÕES

Aula 03.1 – Tipos de Aplicação Web

https://www.youtube.com/watch?v=UJ3Z1ryCYQg

Site
Web App (falso aplicativo)
Desafios 
	- Responsivo
	- Performance
		- mais de 3s – perda 1% do público
		- mais de 10s – perda de 80% do público
	- Acessibilidade
	- Informação para tomada de decisão
		- páginas mais acessadas
		- público (idade, local, gênero)
		- caminho
		- ferramentas

Aula 03.2 – Tipos de aplicação Mobile

https://www.youtube.com/watch?v=Bvt8YVxe-5U

Grande parte dos acessos: Smartphones, tablets
Desafios: APP que trava, ruim, com bugs, acaba desintalando

Aula 03.3 – O que é API? REST e RESTful? Aprenda com Star Wars

https://www.youtube.com/watch?v=tPbK3eOJLXQ

API: Application Programming Interface (interface de programação de aplicativos)
Ex: controle remoto para pilotar uma nave
Usado para várias linguagens de programação
REST: princípios de arquitetura para os DEVs criarem suas APIs
RESTfull: princípios de arquitetura recomendados para construção de um API



CASOS DE TESTE

Aula 04.1 – Como escrever casos de testes funcionais

Caso de teste: conjunto de valores de entrada, pré-condições de execução, resultados esperados e pós condições de execução, desenvolvido para um objetivo particular ou condição de teste (ISTQB).
Ex: Tabela de decisão
https://www.youtube.com/watch?v=BMeOV1-senE

Aula 04.2 – BDD: da especificação a automação

https://www.youtube.com/watch?v=M32rwhjnsRI

Automação com Ruby
Exercício:

Elabore cenários simulando testes na funcionalidade de login do Google (exemplo da imagem abaixo).
 
Considerações:
•	Pense em fluxos principais e fluxos alternativos;
•	Exercite as técnicas de testes apresentada nos vídeos;
•	Descreva pelo menos um cenário na estrutura passo a passo, e ao menos um cenário no formato Gherkin.
Resposta:
 
Live 03 – dia 09/09/2022 – Final módulo 02

TESTE DE SOFTWARE
Técnicas estáticas
Objetivos
Praticas ruins
Requisitos em falta
Especificação de interface inconsistente com outros softwares
Erro de design
Falhas de segurança
Erros comuns da linguagem alvo
Problemas que levam ao run-time erros
	Revisão
		Refinamento
		Code Review
	Análise estática
		SonarQube
		Jacoco
		Sonar Light
		VeraCode


Técnicas dinâmicas
Níveis de teste
		Unidade/Componente
		Integração Componente/integração sistemas
		Sistema
		Aceite
			Alfa
			Beta
	Tipos de teste
		Não funcional
			Performance
Segurança
Usabilidade
			Acessibilidade
			Responsividade
			Observabilidade
		Funcional
			Baseados na estrutura (Caixa Branca)
				Teste de decisão (if,else,case)
				Teste de fluxo (for/while)
			Baseados na experiência
				Teste exploratório
				Suposição de Erro
				Baseado em Checklist
			Baseado em Comportamento (caixa preta)
				Particionamento de equivalência
					Participação válida
					Participação inválida
				Análise de Valor Limite
				Tabela de decisão
				Pair Wise
				Transição de Estado
			Baseados na Mudança
				Regressão
				Confirmação
	Pirâmide de Teste
		Modelo de representação de teste (níveis de teste)
			Topo: E2E - UI
				Custo maior
				Menor velocidade
			Meio: Integração
				Complementação dos testes unitários
				Pode ter maior quantidade de testes
			Base: Unitário
				Custo menor
				Maior velocidade
	Aplicações
		Frontend
			Mobile
				Aplicativos Nativos (Android e iOS)
				Aplicativos híbridos (Script único que compila p/ ambos)
				Dispositivos Físicos X Emulados
				Diferentes “modelos” de tela
				Diferentes versões de software
				Performance, Conectividade e Permissões
				Escopo de testes
			Web App
			Web
				Diferentes versões do navegador
				Diferentes navegadores possíveis
Performance, Conectividade e Permissões
				Escopo de testes
		Backend
			API
				Soap
				Rest
				Restfull
			Ferramentas
				Postman
				Insomnia
				Graylog
				Grafana
			Status Code
				200 - sucesso
				400 - erro
				500 – erros voltado a aplicação
			Métodos
				GET - busca
				POST - envia
				PUT – altera várias coisas
				PATCH – altera dado específico
				DELETE – apaga
		Sistemas Desktop
		Sistemas Embarcados (freio de carro, caixa eletrônico)
		Sistemas Procedurais
	Casos de teste
		Documento / combinação de dados
			Valores de entrada
			Pré condições de execução
			Resultados esperados
			Pós condições de execução
		Precisam ser
			Independentes
			Simples
			Objetivos
			Reais
		Ferramentas
			Azure Devops
			Jira
			TestLink
			Bloco de notas e Excel (informais)
		Diferentes formatos de escrita
			Escrita em Gherkin
				Dado que/E/Quando/Então
				Reaproveitamento para automação
				Mais amigável
			Escrita passo a passo
				Estruturado
					Cada ação tem um resultado esperado
			Somente o titulo do caso de teste
				Casos específicos e pontuais
				Quantidade excessiva de casos de testes
		
Mapa mental da live:
https://www.mindmeister.com/pt/map/2416119654?t=1Vp1xh2EPi
			
			
Módulo 03 – Lógica de programação

https://www.youtube.com/watch?v=HXddFUe6VPU
Ver VS Code
E:\Users\Carla\workspace\Reset

Módulo 04 – GIT
https://www.youtube.com/playlist?list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A

https://git-scm.com/book/pt-br/v2

ver configurações de usuário e e-mail	git config  - -list
Criando repositórios	Mkdir – cria pasta
Mkdir nomepasta
Cd nomepasta– entra na pasta
cd entra na pasta
cd .. – volta uma pasta
Git init – inicializa um repositório na pasta que estou
ls – la – lista os diretorios
cd .git/
ls – listar

Ciclos de vida
Untracked – adicionado e não visto pelo git
Unmodified – visto mas não modificado
Modified – foi modificado mas não salvo
Staged – última etapa, preparado p/ comitar, e após o commit, volta a ser Unmodified

COMITANDO ARQUIVO
Git status – verificar o arquivo
Git add – adicionar arquivo ao staged
Git commit -m “mensagem com o que foi feito na edição”
Git commit -am “mensagem” – comita adicionando tudo

Comandos git log, git show, git diff e git reset

Git log – hash do commit, autor da modificação, email, data e mensagem
Git log - -decorate – outras infos
Git log –author=”nome” – filtra todos commits do autor
Git shortlog – mostra autores por ordem alfabética e numero de commit
Git shortlog -sn – mostra so nomes autores e números commits sintético
Git log - - grafh – mostra em forma gráfica
Git show “numero da hash” – mostra o que foi adicionado
Git diff – mostra alterações do arquivo antes de comitar (muito importante)
Git diff  - -name.only – mostra apenas nomes dos arquivos modificados

Resetando alterações indevidas
Git checkout nomearquivo – volta ao arquivo antes da edição 
Se abrir git diff já virá sem as alterações indevidas
Git reset HEAD – remover o arquivo do staged 
Git reset - -soft hash anterior– remove alteração, mas fica no staged, pronto p/ comitar
Git status
Git reset - -mixed hash anterior – remove alteração e fica em modified
Git status
Git diff – se quiser ver alterações
Git reset - -hard hash anterior – ignora o commit e tudo que foi feito
Git status

git remote add origin https://github.com/carlagelinger/xxxxxxx.git

Git remote – mostra pasta “origin” do repositório remoto após adicionar
Git remote -v – mostra endereço do repositório remoto

Criando arquivo no repositório online (GitHub) e passando para o Git:
comando no Git Bash na pasta que desejo clonar:
git clone link

Criando arquivo no repositório local e salvando no repositório online (GitHub):
git status
git add * (deixar espaço entre d e asterisco)
git status
git commit -m "mensagem coerente ao que está fazendo"
git push origin main
git status

git push origin master – mandar atualizações do git p/ github
git clone – clonar repositório de alguem
fork do github – copiar repositório para contribuir

branch – modifica sem alterar o local principal (master)
criando um brench
git checkout -b nomebranch
git branch – mostra branchs existentes
git branch -D nomeBranch – apaga o branch

git push origin HEAD –force – usar para forçar atualização no github de um commit que exclui mas no github não atualizou  


Unindo branches
Merge: fazer junção de commits que estão ramificados
Prós: operação não destrutiva, cria novo commit para juntar tudo
Contra: commit extra para juntar os demais commits e deixa o histórico poluído, forma de triangulo

Rebase: não cria novo commit, mas coloca o branch pro inicio da fila, com o nome do commit’ (linha) exc: nomecommit’
Prós: evita commit extra, histórico linear
Contra: perde ordem cronológica
Outros:
Git ignore  
Git stash: guardar modificação sem subir ela (comitar)
Git stash list – lista todos os stash
Git stash clear – limpa os stash
Git alias – cria atalho para chamar um comando
Ex: chamar git status com git s:
Git config - -global alias.s status
Pode fazer atalhos para diversos comandos usando alias
Git tag são anotações
Git tag -a 1.0.0 -m “mensagem que quero passar”
Git push origin master –tags – mandar as tags para repositório online (github)
Git revert hash – ao contrario do reset, o revert não perde as alterações do histórico, posso mexer nele depois
Apagando tags e branches remotos
Git push origin :1.0.0

Módulo 05 – Automação de testes

Aula 01 – Introdução a automação de testes

Aula 01.01

Por que testar software?
Prever bugs
Suporte ao time
Diminuir custos
Produtividade
Feedback constante
Documentação viva
Alinhamento com o negocio
Disseminação de conhecimento

Testes manuais:
Cansativos
Sujeito a erros humanos
Não previsíveis
Demorados
Inviabilizam CI/CD (entrega continua, integração continua)
Subaproveitamento das pessoas

Testes automatizados:
Tarefas repetitivas
Previsíveis
Rápidos
Podem ser paralelizados
Podem fazer parte do processo CI/CA (entrega continua, integração continua)
Libera profissionais para trabalhos criativos
Possibilitam a realização de testes impossíveis de serem executados por humanos (performance, carga, ect.)

Pirâmide de testes
UI (testes de simulação de onde usuário mexe)
Serviço							
Unidade (testa integrações)					


UI – testes mais lentos, mais caros, exigem conexão internet
Serviço: não são muito rápidos de testar nem tão rápidos
Unidade: mais barato de testar

Além da pirâmide, tem o cupcake dos testes – anti-padrão

Pirâmide de testes de UI:
UI		- mais lentos e caros
Visual	    Visual	- mais rápidos e menos caro

Quadrante de testes
Foco na tecnologia
Suporte ao desenvolvimento
Foco no negocio
Crítica ao produto
 
Aula 01.02 – Testes de unidade

O que é e pra que serve:
Processo de desenvolvimento de software em que menores partes testáveis de uma aplicação, chamadas unidades, são examinados individual e independentemente para uma operação.
Evita quebrar funcionalidades, são rápidos e fáceis de depurar.
Vantagens:
Executados em s. ou ms.	Provem feedback imediato	confiáveis
Isolamento de falhas		fácil de depurar			guiam o desenvolvimento
Ajudam na refatoração		usa p/ back-end e front-end
Desvantagens:
Não simulam o uso da aplicação de ponta a ponta
TDD (desenvolvimento guiado por testes)
Depende da repetição de um pequeno ciclo de desenvolvimento: requisitos são transformados em casos de testes específicos e o software melhorado para fazer o novo teste passar.
Refatoração
Processo de reestruturação de código que muda sua estrutura sem mudar comportamento.
Permite melhoria de atributos não funcionais, tornando mais legível e menos complexo.

Testes de unidade no processo de CI (integração contínua)
Bach-end
Front-end
São executados nos primeiros estágios do pipeline
Cobertura de código
Descreve grau que o código fonte é examinado por testes

Aula 01.03 – Como não ser um trouxa nesse mundo mágico

Insights da palestra:
Conhecimento sem prática é quase inútil

Aula 01.04 – Quando criar testes automatizados?
Insprint – trabalha junto com o desenvolvedor, para que ao final da sprint, tarefa já esteja testado e testes automatizados para aquela tarefa
Outsprint - teste manual, criar tarefa de automação, guarda backlog pra ser feita depois
Insprint talvez seja a melhor abordagem

Aula 01 - Material complementar

Testes de UI – topo da pirâmide

Simulam a real utilização de uma aplicação web ou mobile, assim como o usuário faria.
Verifica como a aplicação se comporta.
Vantagens:
Testam aplicação como um todo (ponta a ponta)
Fáceis de serem introduzidos para grupo de QAs
Guiam o desenvolvimento
Teste de regressão visual
Desvantagens:
Lentos, não isolam falhas e são frágeis

Testes de Serviço – meio da pirâmide

Testes de serviço ou integração, verificam que partes separadas de um sistema se comportam conforme o esperado quando trabalhando juntas
Vantagens:
Mais rápidos que testes de QI
Feedback rápido
Mais fáceis de depurar do que UI
Guiam o desenvolvimento
Ajudam na refatoração
Desvantagens:
São mais lentos que testes de unidade
Podem ser instáveis dependendo da implementação

Testes de desempenho

Testes realizados para garantir que um sistema ou aplicação responde em tempo adequado.
Testes de Carga
Realizado para sobrecarregar o sistema e entender como ele se comporta quando em situações extremas, como a Back Friday. Também chamado testes de stress.
Teste de segurança
Verificar questões relacionadas a fragilidade do sistema, integridade de dados, permissões de acesso, recuperação de dados e restauração de sistemas. 

Aula 02 - Testes Automatizados em Aplicações Web

Aula 02.01 – Iniciando com Cypress

Ferramenta de testes end-to-end (ponta a ponta) de aplicações web parte cliente (navegador)
Não testa mobile
Testa apenas javascript, typescript ou linguagem semelhantes
Instalação do Cypress no Vs Code
Abrir cypress: terminal de comando do VS Code digitar na pasta cypress: npx cypress open

Aula 02.02 – Cypress na prática

https://todomvc-app-for-testing.surge.sh/

Formas de testar:
Interativo: testar pelo programa (que abre pelo navegador)
Headless (pelo terminal por exemplo do VC code)

Outros assuntos para estudar:
Usar mindmaps para cypress
Ver no google github cypress essencial mindmaps

Aula 02.03 – Utilizando Page Objects

Arquitetura de Page Objects
PageObject é um padrão de design que ajuda a aprimorar a manutenção de testes e reduzir a duplicação de código, também pode ser utilizado para descrever e documentar o fluxo de uma aplicação. Para entender na prática como aplicar PageObject criaremos um teste automatizado responsável por fazer o login em uma aplicação.

Página pode ser separada em ações e elementos

Teste não executado, dificuldade em instalar backend e frontend

Aula 02.04 – Adicionando relatório com o Allure Reports Plugin
Vídeo mostrando como instalar


RESPONDER QUESTIONÁRIO
1.1.	Comando para acessar página
Cy.visit( )
1.2.	Comando para capturar um elemento
Get( )
1.3.	Comandos para realizar validações
Should 		e	Expect


1 - o cy.visit() é o comando utilizado para acessar uma página
2 - o cy.get() é utilizado para "capturar" um elemento antes de realizar uma ação
3 - o validate não é utilizado para realizar validações com cypress (o expect e o should são 😊)


Exercício
1.	Para capturar e clicar em um botão presente na tela, qual(is) comando(s) utilizamos?
2.	Para garantir que o comportamento da aplicação é o esperado de acordo com as ações executadas, é necessário que o teste, ao finalizar, execute uma asserção (validação). Qual(is) comando(s) do Cypress pode(m) ser utilizado(s) com essa finalidade?
Respostas
1.	Para esta ação podemos resolver com um ou dois comandos que contemplem um cy.get para capturar o elemento e um cy.click para clicar no mesmo. O resultado pode ficar em um destes formatos:
    let elemento = cy.get(‘seu-seletor’)
    elemento.click()
    cy.get(‘seu-seletor’).click()
2.	Existem várias formas de realizar as asserções. Como exemplo você pode utilizar um expect ou então um .should logo após capturar o valor que deseja verificar. Seguem duas formas de implementar estas validações:
    cy.url().then( minhaUrl =>{
        expect(minhaUrl).to.include('reset')
    })
    cy.url().should('include', 'reset')

Live 05 - dia 19/09/2021 – revisão módulo 05

Automação de testes, o que é?
Utilizando uma linguagem de programação e ferramentas auxiliares, escrever scripts através dos quais a maquina vai reproduzir, passo a passo, as ações que uma pessoa faria para executar um teste.
Benefícios:
Garantir a reprodução exata dos passos toda vez
Repetição incansável
Velocidade de execução
Total disponibilidade para execução
Reduzir/anular a dependência do conhecimento
Quando fazer:
In Sprint
Automação feita durante a fase de testes da tarefa
Geralmente é um entregável (necessário para considerar a tarefa pronta)
Vantagens: garantia imediata de regressão
Dificuldades: praz curto/priorização

Out Sprint
Automação feita após a entrega
Vantagens: prazo maior para implementação, possibilita 100% regressão
Dificuldades: não terá regressão até ser implementado, demanda mais esforço pra priorizar a implementação após a entrega

Pirâmide de teste
	UI
     Serviço
Unidade
Mais lenta de cima pra baixo,e  mais cara

Anti padrão: sorvete dos testes e cupcake dos testes
São realizados manualmente.

Cypress

Testes end to end (E2E) em aplicações WEB – operando na tela e/ou operando diretamente os serviços
E2E: fluxo completo envolvendo uma ou mais funcionalidade (pesquisa e compra de um produto, cadastro completo de um usuário com endereço, etc)
Aplicações Web – ao digitar o site no navegador, servidor vai enviar ao navegador os códigos html, css, javascript, json, imagens, etc., necessários para renderizar a página.
API – Application Programming Interface – aplicação de um protocolo de comunicação (HTTP) para possibilitar que o seu sistema se comunique com o ambiente exterior (intranet, internet, etc).
Seletores CSS
Por tag – input
Por nome classe - .index
Por id - #inputUsuario
Por atributo e seu valor – [atributo=valor]

Comandos Cypress
cy.visit(url) – ponto de partida dos testes
cy.get(elemento).type(texto) – texto no elemento
cy.get(elemento).click() – clicar no elemento
cy.request(url) – pode usar outros parametros

Validação
cy.get(‘ul.todo-list li).should(‘have.length’,1) (estrutura mocha)
expect(‘test’).to.be.a(‘string’)
assert.equal(3, 3, ‘valores iguais’)

Estrutura Mocha
Context(‘Suite/Funcionalidade’,( ) -> {
	It(‘Cenario 1’, ( ) ->{
});
It (‘Cenario 2’, ( ) -> {
});
});
Page Objects
 
Web Pages   Page Objects    Test Scripts


Módulo 06 – Processos

Aula 01 – Introdução aos métodos ágeis

Método cascata ou waterfall
Requisitos
	Projeto
		Implementação
			Testes
				Manutenção

Surgiu década de 70				Etapas bem definidas
Equipes especialistas em cada etapa		Escopo fechado
Entrega somente no final
PROBLEMAS
Equipes trabalhando separadamente e cada um fazendo sua parte
Falta feedback entre etapas		Distanciamento do cliente
Demora na entrega de valor		Qualidade pode ser um gargalo
Mudanças não são bem vindas

Manifesto ágil 
Surgiu em 2001, chamado também de manifesto leve
Valores ágeis:
- Indivíduos e interações mais que processos e ferramentas
- Software em funcionamento mais que documentação abrangente
- Colaboração com o cliente mais que negociação de contratos
- Responder a mudanças mais que seguir um plano

Ou seja, mesmo havendo valor nos itens à direita, valorizamos mais os itens à esquerda.

Princípios ágeis:

Entregar valor
Maior prioridade é satisfazer cliente através da entrega continua e adiantada de software com valor agregado
Aceita bem mudanças
Mudanças nos requisitos são bem vindas, mesmo tardiamente no desenvolvimento. Processos ágeis tiram vantagens das mudanças visando vantagem competitiva para o cliente.
Entregas frequentes
Entregar frequentemente software funcionando, de poucas semanas a poucos meses, com preferencia a menor escala de tempo.
Priorizar semanas
Trabalho em conjunto
Pessoas de negocio e desenvolvedores devem trabalhar diariamente em conjunto por todo o projeto.
Motivação e confiança
Construa projetos em torno de indivíduos motivados. De a eles o ambiente e o suporte necessário e confie nelas para fazer o trabalho.
Comunicação
Método mais eficiente e eficaz de transmitir informações para e entre uma equipe de desenvolvimento é através de conversa cara a cara.
Software funcionando
É medida primaria de progresso.
Sustentável
Os processos ágeis promovem desenvolvimento sustentável. Patrocinadores, desenvolvedores e usuários devem ser capazes de manter um ritmo constante indefinidamente.
Atenção continua
Contínua atenção à excelência técnica e bom design aumenta a agilidade.
Mantenha simplicidade
Arte de maximizar a quantidade de trabalho não realizado é essencial.
Times auto-organizáveis
Melhores arquiteturas, requisitos e designs emergem de equipes auto organizáveis.
Melhoria continua
Em intervalores regulares, a equipe reflete sobre como se tornar mais eficaz e então refina e ajusta seu comportamento de acordo.

Tipos de métodos ágeis:
XP, Kabam, Scrum, DSDM, Crystal
https://agilemanifesto.org/iso/ptbr/manifesto.html
https://agilemanifesto.org/iso/ptbr/principles.html

Aula 02 – Introdução ao Scrum

Framework para tratar problemas complexos
Tipo de método ágil
Surgiu na década de 1980.
Nome é uma alusão a formação de reinicio de jogada de Rugby, onde todo time se junta objetivando a posse de bola.

Scrum Guide
Leve
Simples de entender
Difícil de dominar

Empirismo e os Pilares do Scrum:
todo o conhecimento provem da experiencia. A transparência, a inspeção e a adaptação são os três pilares que sustentam um processo empírico.
Valores do Scrum:
Coragem		Foco		Comprometimento
Respeito		Abertura
Artefatos:
São projetados para maximizar a transparência das informações chave de modo que todos tenham o mesmo entendimento e fornecer oportunidades para inspeção e adaptação. São eles:
Backlog do produto (lista contendo todos os requisitos e fonte de itens que vai ser incrementado)
Backlog da Sprint (coração do Scrum) subconjunto do backlog do produto. Sprint é um tempo de execução. Tudo acontece dentro de uma Sprint.
Incremento (resultado da Sprint)
Definição de pronto

Quando um item do backlog do Produto ou um incremento é descrito como Pronto, todos devem entender o que o Pronto significa.
Time Scrum
1)	Product Owner
Responsável por maximizar o valor de cada incremento. Única pessoa responsável por gerenciar o backlog do produto. Expressar itens, ordenar e priorizar backlogs do produto e responder duvidad do time. Responder duvidas

2)	Time de Desenvolvimento
Responsável por desenvolver um incremento potencial liberável. São auto organizados, multifuncional, possui habilidades necessárias para criar incremento do produto, e possui entre 3 e 9 integrantes.

3)	Scrum Master
Responsável por promover e suportar o Scrum.
Servo-líder do time Scrum
Serve ao PO, garante que produto seja entendido por todos
Serve ao time de desenvolvimento
Serve a organização liderando e treinando na adoção e planejamento da implementação Scrum
Facilita eventos Scrum
Eventos do Scrum

Sprint
Coração do Scrum, nela são contidos todos os demais eventos. Uma nova Sprint começa sempre que a anterior termina. Todas têm meta do que é para ser construído, um plano previsto e flexível que irá guiar a construção, o trabalho e o produto resultando do incremento.
Tempo: de 1 a 4 semanas
Participantes: todo o time Scrum
Resultado: incremento potencialmente liberável
Planejamento da Sprint
Reunião na qual é criado o plano de trabalho. O PO debate o objetivo da Sprint e os itens do Backlog do Produto que, se complementados, atingirão o objetivo da Sprint.
Tempo: de 2 a 8 horas, proporcional ao tamanho da Sprint
Participantes: todo o time Scrum
Entrada: Backlog de Produto, incremento mais recente e capacidade projetada do time
Resultado: Backlog da Sprint e a meta da sprint
Meta da Sprint: objetivo que será satisfeito dentro da Sprint através da implementação do Backlog do Produto, e que fornece a orientação para o Time de Desenvolvimento sobre o porque dele estar construindo o incremento.

Reunião Diária
Realizada todo dia no mesmo horário e local, e permite que a inspeção do que foi realizado e planejamento das próximas atividades, tendo em vista o objetivo da Sprint.
Tempo: 15 minutos
Participantes: Time de Desenvolvimento
Entrada: o que foi feito desde a última reunião diária
Resultado: planejamento até a próxima reunião diária, considerando o objetivo da Sprint
Perguntas típicas das reuniões diárias:
1.	O que eu fiz ontem que ajudou o time a atingir a meta da Sprint?
2.	O que eu farei hoje para ajudar o time a atingir a meta da Sprint?
3.	Eu vejo algum impedimento que atrapalhe a mim ou ao time de atingir a meta da Sprint?
Reunião de revisão
Realizada no final da Sprint e tem como objetivo inspecionar o incremento e adaptar o Backlog do Produto, caso seja necessário.
Tempo: 1 a 4 horas, proporcional ao tamanho da Sprint
Participantes: Time Scrum e os Stakeholders chaves convidados pelo Product Owner (PO)
Entrada: itens do Backlog prontos e não prontos, o que foi bem e quais problemas ocorreram e como foram resolvidos, demonstração do trabalho pronto e prováveis alvos e datas de entrega baseado no progresso até o momento.
Resultado: Backlog do Produto revisado que define os prováveis itens para a próxima Sprint

Retrospectiva
Momento em que o time Scrum inspeciona seus processos, sua ferramenta e suas relações, criando um plano de melhorias para ser aplicado na próxima Sprint.
Tempo: 45 minutos a 3 horas, proporcional ao tamanho da Sprint
Participantes: Time Scrum
Entrada: como foi a última Sprint em relação as pessoas, aos relacionamentos, aos processos e as ferramentas.
Resultado: identificação das melhorias que serão implementadas na próxima Sprint

Aula 03 – Introdução ao Kanbam

Apoia no entendimento do trabalho, as políticas que circundam o trabalho, o quanto conseguimos executar em determinado momento e quão bem entregamos nosso trabalho para clientes internos e externos ao nosso fluxo.

Comunicação
Colaboração
Qualidade

Princípios do Kanbam
Princípio de Gestão de mudanças
- Comece com o você agora
- Busque melhorias por meio de mudanças evolucionarias
- Incentive atos de liderança em todos os níveis organizacionais – desde o nível mais operacional até a alta gerência
Principio de Entrega de serviços
- Compreender e focar nas necessidades e expectativas dos seus clientes
- Gerenciar o trabalho e deixar que pessoas se auto-organizam em torno dele
- Desenvolver políticas para melhoras os resultados do cliente e dos negócios

Práticas Gerais do Kanbam
- Visualizar
- Limitar o trabalho em progresso
- Gerenciar o fluxo
- Tornar políticas explicitas
- Implantar ciclos de feedback
- Melhorar colaborativamente, evoluir experimentalmente
Ver o trabalho e as políticas que determinam como é processado, e, então, melhorar o processo de maneira evolutiva e experimental.

Sistemas de Fluxo (workflows)
Necessidades	Em avaliação	Selecionado	Em desenvolvimento		Homologação	Finalizado

Nível de time
Para fazer	Em desenvolvimento	Code Review	Testes integrados	Done
Métricas Importantes

Throughput ou Taxa de entrega
Cycle Time ou Tempo de Ciclo
CFD ou Diagrama de Fluxo Cumulativo
Lead Time ou Tempo de Atravessamento

Cycle time = Worn in Progress (WIP) / Average Completin Rate
         
Live 06 – dia 22/09/2022 – revisão módulo 06
 
Principais métodos ágeis
Scrum				Kanbam		XP			SaFe
 
Agile Team
Agile Master		Product Owner		Dev Team
Conceitos importantes
 
MVP – Mínimo Produto Variável	MMV – mínimo produto vendável
Release					Versão de produto

O que é: Ciclo de desenvolvimento: de 1 a 4 semanas
Objetivo: Entrega incremental do Produto
*/