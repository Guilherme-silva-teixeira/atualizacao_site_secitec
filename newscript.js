let corAtualMais1 = 1+1;
const cores = ['color1', 'color2', 'color3', 'color4', 'color5','color6','color7', 'color8', 'color9', 'colora', 'colorb','colorc'];

function mudar_cor_Background() {
    document.body.classList.remove(cores[corAtualMais1]);
    corAtualMais1 = (corAtualMais1 + 1) % cores.length;
    document.body.classList.add(cores[corAtualMais1]);
}

