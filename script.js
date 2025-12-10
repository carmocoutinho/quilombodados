// Simulação de Banco de Dados Bibliográfico (JSON)
const acervo = [
    {
        id: 1,
        titulo: "Territorialidades Quilombolas no Pará: Conflitos e Resistência",
        autor: "Silva, Ana Cláudia",
        ano: 2021,
        tipo: "Dissertação",
        instituicao: "UFPA",
        comunidade: "Quilombo do Abacatal",
        resumo: "Análise das dinâmicas territoriais frente à pressão urbana na região metropolitana de Belém...",
        tags: ["Território", "Conflitos", "Urbano"]
    },
    {
        id: 2,
        titulo: "Saberes da Roça: Agricultura Tradicional no Baixo Amazonas",
        autor: "Oliveira, Pedro Santos",
        ano: 2019,
        tipo: "Tese",
        instituicao: "UEPA",
        comunidade: "Quilombo Erepecuru",
        resumo: "Estudo etnográfico sobre as práticas de plantio e a relação com a sazonalidade dos rios...",
        tags: ["Agricultura", "Meio Ambiente", "Saberes"]
    },
    {
        id: 3,
        titulo: "A Saúde da Mulher Quilombola: Práticas de Cuidado",
        autor: "Nascimento, Joana",
        ano: 2022,
        tipo: "Artigo",
        instituicao: "Museu Goeldi",
        comunidade: "Geral",
        resumo: "Investigação sobre o acesso à saúde e o uso de ervas medicinais por mulheres quilombolas...",
        tags: ["Saúde", "Gênero", "Medicina Tradicional"]
    },
    {
        id: 4,
        titulo: "Educação Escolar Quilombola: Desafios Curriculares",
        autor: "Ferreira, Marcos",
        ano: 2020,
        tipo: "Dissertação",
        instituicao: "UFPA",
        comunidade: "Quilombo Africa",
        resumo: "Discute a implementação das diretrizes curriculares nacionais para a educação escolar quilombola...",
        tags: ["Educação", "Políticas Públicas"]
    },
    {
        id: 5,
        titulo: "Arqueologia da Diáspora Africana na Amazônia",
        autor: "Costa, Fernanda",
        ano: 2018,
        tipo: "Tese",
        instituicao: "UFPA",
        comunidade: "Vale do Guaporé",
        resumo: "Levantamento arqueológico de remanescentes de quilombos históricos na região...",
        tags: ["Arqueologia", "História", "Patrimônio"]
    }
];

const grid = document.getElementById('results-grid');
const searchInput = document.getElementById('searchInput');

// Função Principal de Renderização
function renderizarLivros(lista) {
    grid.innerHTML = ''; // Limpa o grid

    if (lista.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; color:#666;">Nenhuma obra encontrada com estes termos.</p>';
        return;
    }

    lista.forEach(obra => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <span class="book-type">${obra.tipo} | ${obra.instituicao}</span>
            <h3>${obra.titulo}</h3>
            <div class="book-meta">
                <p><strong>Autor:</strong> ${obra.autor}</p>
                <p><strong>Ano:</strong> ${obra.ano} | <strong>Local:</strong> ${obra.comunidade}</p>
            </div>
            <p class="book-desc">${obra.resumo}</p>
            <div style="margin-top:10px;">
                ${obra.tags.map(tag => `<span style="font-size:0.7rem; background:#eee; padding:2px 6px; border-radius:4px; margin-right:5px;">#${tag}</span>`).join('')}
            </div>
            <br>
            <a href="#" class="btn-ler" onclick="alert('Redirecionando para o repositório oficial...')">
                Acessar Documento <span class="material-icons" style="font-size:1rem;">open_in_new</span>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Função de Busca
function realizarBusca() {
    const termo = searchInput.value.toLowerCase();
    
    const filtrados = acervo.filter(obra => 
        obra.titulo.toLowerCase().includes(termo) || 
        obra.autor.toLowerCase().includes(termo) ||
        obra.comunidade.toLowerCase().includes(termo) ||
        obra.tags.some(tag => tag.toLowerCase().includes(termo))
    );

    renderizarLivros(filtrados);
}

// Busca ao digitar (Live Search)
searchInput.addEventListener('keyup', realizarBusca);

// Filtro por Tags (Botões)
function filtrarTag(tag) {
    searchInput.value = tag;
    realizarBusca();
}

// Filtro por Tipo (Select)
function aplicarFiltros() {
    const tipoSelecionado = document.getElementById('filtroTipo').value;
    
    if (tipoSelecionado === 'todos') {
        renderizarLivros(acervo);
    } else {
        const filtrados = acervo.filter(obra => obra.tipo === tipoSelecionado);
        renderizarLivros(filtrados);
    }
}

// Inicializa com todos os livros
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros(acervo);
});