const budgetForm = document.getElementById('budget-form');
const totalDisplay = document.getElementById('total-value');

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

function updateBudget() {
    // 1. Buscamos TODOS os checkboxes de serviço atuais (Garantindo que novos elementos sejam incluídos)
    const allCheckboxes = document.querySelectorAll('.service-checkbox');
    const selectedCheckboxes = Array.from(allCheckboxes).filter(cb => cb.checked);

    // 2. Somamos os valores atuais (obtidos diretamente do DOM no momento da mudança)
    const total = selectedCheckboxes.reduce((acc, cb) => {
        return acc + Number(cb.value);
    }, 0);

    // 3. Atualizamos os Tooltips e as bordas visualmente
    allCheckboxes.forEach(cb => {
        const card = cb.closest('.service-card');
        if (card) {
            if (cb.checked) {
                card.setAttribute('data-tooltip', 'Clique para remover serviço do orçamento');
                card.style.borderColor = 'var(--accent-color)';
            } else {
                card.setAttribute('data-tooltip', 'Clique para adicionar serviço ao orçamento');
                card.style.borderColor = 'var(--border-color)';
            }
        }
    });

    // 4. Exibimos o total formatado
    totalDisplay.textContent = formatter.format(total);
}

// Ouvinte de eventos no formulário (Event Delegation)
// Isso garante que mesmo serviços adicionados dinamicamente acionem a atualização
budgetForm.addEventListener('change', updateBudget);

// Inicializa o valor
updateBudget();