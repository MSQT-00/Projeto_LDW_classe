# Front-end do Projeto LDW

Este é o front-end do projeto LDW, uma aplicação web para gerenciamento de alunos e professores.

## Estrutura do Projeto

```
front/
├── src/
│   ├── js/
│   │   ├── modules/     # Módulos principais da aplicação
│   │   ├── utils/       # Funções utilitárias
│   │   ├── data/        # Dados da aplicação
│   │   └── app.js       # Ponto de entrada da aplicação
│   ├── css/            # Arquivos de estilo
│   └── assets/
│       └── images/     # Imagens da aplicação
└── html/              # Arquivos HTML
```

## Módulos

- `PeopleManager`: Gerencia os dados e interações de alunos e professores
- `UIManager`: Gerencia as interações da interface (notas e horários)
- `dom.js`: Funções utilitárias para manipulação do DOM
- `people.js`: Dados dos alunos e professores

## Como Usar

1. Certifique-se de que todos os arquivos estão na estrutura correta
2. Inclua o arquivo `app.js` no seu HTML:
```html
<script type="module" src="src/js/app.js"></script>
```

## Requisitos

- Navegador moderno com suporte a ES6 modules
- Servidor web para servir os arquivos (devido ao uso de ES6 modules)

## Desenvolvimento

Para adicionar novos recursos:

1. Crie novos módulos em `src/js/modules/`
2. Adicione dados em `src/js/data/`
3. Crie funções utilitárias em `src/js/utils/`
4. Importe e use os novos módulos em `app.js`
