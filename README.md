# 💰 Calculadora de Orçamento em Tempo Real
Uma interface interativa e responsiva que permite aos usuários simular orçamentos de serviços em tempo real. Ideal para prestadores de serviço que desejam oferecer transparência e agilidade no fechamento de pacotes.

# 🚀 Funcionalidades
Seleção Dinâmica: Seleção de múltiplos serviços através de cards interativos.

Cálculo Automático: O valor total é atualizado instantaneamente ao marcar ou desmarcar um serviço.

Formatação Localizada: Uso da API Intl.NumberFormat para exibir valores no padrão monetário brasileiro (R$).

Feedback Visual: Tooltips dinâmicos e alteração de bordas para indicar quais serviços estão selecionados.

Event Delegation: Lógica preparada para suportar a adição de novos serviços dinamicamente sem quebrar os ouvintes de evento.

# 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando o "trio fundamental" do desenvolvimento Front-end:

HTML5: Estruturação semântica do formulário e dos cards de serviço.

CSS3: Estilização moderna com uso de Variáveis CSS (Custom Properties), Flexbox e efeitos de Glassmorphism.

JavaScript: Manipulação de DOM, filtragem de arrays (filter), redução de valores (reduce) e formatação de moeda.

# 📂 Estrutura de Arquivos
<img width="542" height="137" alt="estrutura-projeto-orcamento" src="https://github.com/user-attachments/assets/2b337f55-1169-44fa-8a7e-9b51789073d8" />

# 📝 Como funciona o código?
A lógica principal reside na função updateBudget(), que executa quatro etapas essenciais:

Captura: Coleta todos os checkboxes presentes no formulário.

Cálculo: Filtra apenas os selecionados e soma seus valores usando o método .reduce().

UI Update: Altera o estado visual dos cards (bordas e mensagens de ajuda).

Exibição: Formata o resultado final para o padrão pt-BR.

<img width="451" height="157" alt="javascript-projeto-orcamento" src="https://github.com/user-attachments/assets/4389d88c-7e20-4c00-b2a4-78ee38addda8" />

# 🎨 Personalização
Para alterar os serviços ou preços, basta modificar os valores no arquivo index.html:
<img width="548" height="93" alt="html-projeto-orcamento" src="https://github.com/user-attachments/assets/850836a9-3fab-406d-820b-f7daa1a113fe" />

# 🚀 Como Executar o Projeto
Clone o repositório:

git clone https://github.com/merenciomarcos-ux/desafio02-calculadora-de-orcamento.git

Acesse a pasta do projeto.

Abra o arquivo index.html em qualquer navegador moderno.

Interaja com os cards: Selecione os serviços para visualizar o cálculo do total em tempo real e os efeitos visuais de seleção.

# 📌 Boas Práticas Aplicadas
Separação clara de responsabilidades: Arquivos distintos para HTML, CSS e JS, facilitando a manutenção.

Código JavaScript organizado e legível: Uso de nomes de funções e variáveis declarativos, além de comentários explicativos sobre a lógica de soma.

Feedback visual imediato ao usuário: Atualização instantânea de valores, cores e tooltips conforme a interação.

Interface limpa e intuitiva: Design focado na experiência do usuário (UX) e facilidade de uso.

Estrutura de pastas padronizada: Organização lógica dos ativos do projeto.

README claro, objetivo e bem documentado: Documentação completa para facilitar o entendimento do projeto por outros desenvolvedores.

# 📄 Licença
Este projeto é livre para uso educacional e aprendizado.
