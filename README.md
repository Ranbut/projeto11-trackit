# Descrição

Neste projeto você irá construir uma aplicação completa de acompanhamento de hábitos! Com direito a cadastro, login e muitas bibliotecas 🙂

O projeto será individual pois iremos treinar uma habilidade essencial em uma pessoa desenvolvedora: o **autodidatismo**!

# Requisitos

- Geral
    - [X]  Manipule o HTML usando somente React (você não deve manipular o DOM diretamente com `querySelector`, `innerHTML`, `classList`)
    - [X]  Para controlar os dados dinâmicos da aplicação, utilize as ferramentas de gerenciamento de estado do React (não utilize variáveis globais)
    - [X]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [X]  Faça commits a cada funcionalidade implementada
    - [X]  Para estados globais (como usuário logado e progresso do dia) utilize **ContextAPI**.
    - [X]  Para os demais estados que não forem globais (necessários para muitos elementos da aplicação), você pode continuar utilizando estados e props 😄
    - [X]  Obrigatório fazer deploy
- Layout
    - [X]  Aplicar layout, seguindo figma fornecido
    - [X]  O CSS deve ser implementado utilizando **Styled Components**
    - [X]  Não é necessário fazer a versão para desktop, somente mobile
- Tela Login (rota `/`)
    - [X]  Deve ser enviado o email e senha para a API conforme documentação
    - [X]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
    - [X]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/hoje`
    - [X]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
    - [X]  Ao clicar no link para se cadastrar, o usuário deve ser redirecionado para a rota `/cadastro`
- Tela Cadastro (rota `/cadastro`)
    - [X]  Os dados devem ser enviados para a API conforme documentação
    - [X]  Enquanto estiver carregando, os campos e o botão devem ser desabilitados, conforme layout
    - [X]  Em caso de sucesso, o usuário deve ser redirecionado para a rota `/` (rota de Login)
    - [X]  Em caso de falha, deve ser exibido um `alert` informando o erro para o usuário e os campos/botão devem ser habilitados novamente
    - [X]  Ao clicar no link para logar, o usuário deve ser redirecionado para a rota `/` (rota de Login)
- Topo e Menu
    - [X]  Topo e menu devem ter posicionamento fixo
    - [X]  No topo deve ser exibida a foto do usuário conforme layout
    - [X]  No menu, os 3 botões de Hábitos, Hoje e Histórico devem redirecionar o usuário para as rotas `/habitos`, `/hoje` e `/historico` respectivamente
    - [X]  O botão de Hoje deve exibir uma barra de progresso circular indicando a porcentagem de conclusão de hábitos de hoje do usuário
- Tela Hábitos (rota `/habitos`)
    - [X]  Carregar os hábitos do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
    - [X]  Ao clicar para deletar um hábito, deve ser exibido um `confirm` para confirmar se o usuário gostaria realmente de apagar o hábito. Se sim, deve ser enviado um request pra API conforme documentação e os hábitos recarregados logo em seguida.
    - [X]  Caso o usuário não tenha nenhum hábito cadastrado, deve ser exibido o texto conforme layout
    - [X]  Ao clicar no botão de "+", deve-se exibir um formulário de cadastro de hábito logo abaixo do título conforme layout
    - [X]  O usuário deve inserir o nome do hábito em um campo de texto e selecionar os dias da semana que deseja realizar o hábito conforme layout
    - [X]  Ao salvar, devem ser enviados os dados para API conforme documentação
    - [X]  Enquanto estiver carregando, o campo de texto e o botão devem ser desabilitados, conforme layout. Os botões dos dias da semana devem ser desabilitados, porém não é necessária mudança visual durante o loading.
    - [X]  Em caso de sucesso, os campos devem ser limpos e reabilitados, o formulário deve ser escondido novamente e a lista de hábitos abaixo recarregada
    - [X]  Em caso de erro, os campos devem ser reabilitados e um alerta deve indicar o problema para o usuário
    - [X]  Ao Cancelar, o formulário deve ser escondido. Caso tenha dados já preenchidos, os mesmos devem ser mantidos caso o usuário reabra o formulário de criação.
- Tela Hoje (rota `/hoje`)
    - [X]  Carregar os hábitos de hoje do usuário, mandando request pra API conforme documentação e exibindo abaixo conforme layout
    - [X]  O título da tela deve exibir o dia de hoje conforme layout
    - [X]  No subtítulo deve ser exibida a frase "Nenhum hábito concluído ainda" ou "x% dos hábitos concluídos", dependendo do progresso do usuário
    - [X]  Ao marcar ou desmarcar um hábito como concluído, deve ser enviado um request pra API conforme documentação. Não é necessário colocar loading.
    - [X]  Ao marcar um hábito como concluído, deve ser colocada em verde a contagem da sequência atual
    - [X]  Caso a sequência atual seja igual ao recorde do usuário, este também deve ser exibido em verde
- Tela Histórico (rota `/historico`)
    - [X]  Deve ser exibido o texto conforme layout

# Bônus (opcional)

- Persistência de login
    
    Local Storage deve ser usado para armazenar as credenciais do usuário, enviadas pelo servidor. **Session Storage não deve ser utilizado**.
    
    - [ ]  Após o login, salve o objeto do usuário na máquina utilizando **Local Storage**
    - [ ]  Ao abrir o app, verifique se há um usuário armazenado no Local Storage. Se sim, popule o UserContext com esse dado e redirecione o usuário direto para a tela inicial do app, evitando que ele faça login novamente
- Tela Histórico (rota `/historico`)
    - [ ]  Nesta tela deve ser exibido um calendário, conforme layout
    - [ ]  No calendário, deve ser exibido em verde os dias em que o usuário completou todos os hábitos que deveria ter completado (ex: tinha 3 hábitos para fazer e completou os 3)
    - [ ]  Já os dias que o usuário tinha hábitos para completar, porém não completou todos, devem ser destacados em vermelho (ex: tinha 3 hábitos pra fazer mas só completou 2)
    - [ ]  Nos dias que o usuário não tinha nenhum hábito a concluir, não devem ser destacados (continuam com o fundo branco)
- Clique no dia
    - [ ]  No calendário da tela de Histórico, quando o usuário clicar em um dia em destaque (verde ou vermelho), exiba a lista de hábitos do dia clicado, indicando quais hábitos ele concluiu ou não (layout livre)