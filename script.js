// CONFIGURAÇÃO DO SUPABASE
const SUPABASE_URL = "https://nhxqduzvqvkzimndosap.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_DJ3DQo6wpzr7BvkVVx9yiw_vGvEsOZs";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Elementos da tela
const listaCategoriasDiv = document.getElementById("lista-categorias");
const inputCustomAvatar = document.getElementById("input-custom-avatar");
const inputAvatarSelecionado = document.getElementById("avatar-selecionado");
const previewContainer = document.getElementById("preview-container");
const formBolao = document.getElementById("form-bolao");
const sucessoSection = document.getElementById("sucesso-section");
const cardVotosLista = document.getElementById("card-votos-lista");
const cardNome = document.getElementById("card-nome");
const cardAvatar = document.getElementById("card-avatar");
const cardAvatarVazio = document.getElementById("card-avatar-vazio");
const btnRemoverFoto = document.getElementById("btn-remover-foto");
const btnBaixar = document.getElementById("btn-baixar");
const btnVoltar = document.getElementById("btn-voltar");

const ICONE_GRAMMY = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19 3c-3.5 0-6.8 2.4-8.2 5.5L8 10V7H6v4.5c0 .8.7 1.5 1.5 1.5h2.2l2.1 2h-1.3v2h5v-2h-1.5l-1.6-1.6c2.2 1.2 4.6 1.6 6.6 1.6V3zm-2 9.8c-1.8-.2-3.8-.9-5.3-2.3 1.2-2.5 3.3-4.6 5.3-5.2v7.5zM4 18h16v3H4v-3z"/>
</svg>`;

// Escapa texto pra colocar com segurança dentro de HTML
function esc(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Monta a capa; sem capa vira o troféu do Grammy
function capaHtml(img, alt, classe) {
    if (!img) return `<div class="sem-capa ${classe}" aria-hidden="true">${ICONE_GRAMMY}</div>`;
    return `<img src="${esc(img)}" alt="${esc(alt)}" class="${classe}" crossorigin="anonymous" data-capa>`;
}

// Se alguma capa não carregar, troca pelo troféu em vez de mostrar imagem quebrada
function protegerCapas(container) {
    container.querySelectorAll("img[data-capa]").forEach((imgEl) => {
        const trocar = () => {
            const placeholder = document.createElement("div");
            placeholder.className = `sem-capa ${imgEl.className}`;
            placeholder.setAttribute("aria-hidden", "true");
            placeholder.innerHTML = ICONE_GRAMMY;
            imgEl.replaceWith(placeholder);
        };
        imgEl.addEventListener("error", trocar, { once: true });
        if (imgEl.complete && imgEl.naturalWidth === 0) trocar();
    });
}

// Função para renderizar as categorias com os retângulos VAI GANHAR e QUERO
function carregarCategorias() {
    listaCategoriasDiv.innerHTML = "";
    categorias.forEach(cat => {
        const divCat = document.createElement("div");
        divCat.classList.add("categoria-card");

        let htmlIndicados = `<h3>${esc(cat.nome)}</h3><div class="opcoes-grid">`;
        cat.indicados.forEach(ind => {
            htmlIndicados += `
                <div class="opcao-item">
                    <div class="opcao-info">
                        ${capaHtml(ind.img, ind.nome, "opcao-img")}
                        <span class="opcao-texto">${esc(ind.nome)}</span>
                    </div>
                    <div class="opcao-botoes">
                        <label class="btn-voto btn-ganha">
                            <input type="radio" name="${cat.id}_ganha" value="${esc(ind.nome)}" data-img="${esc(ind.img)}" required>
                            <span>VAI GANHAR</span>
                        </label>
                        <label class="btn-voto btn-quero">
                            <input type="radio" name="${cat.id}_quero" value="${esc(ind.nome)}" data-img="${esc(ind.img)}" required>
                            <span>QUERO</span>
                        </label>
                    </div>
                </div>
            `;
        });
        htmlIndicados += `</div>`;
        divCat.innerHTML = htmlIndicados;
        protegerCapas(divCat);
        listaCategoriasDiv.appendChild(divCat);
    });
}

// ===== EDITOR DE FOTO (arrastar, zoom e girar) =====
const TAM = 300;
const ZOOM_MAX = 4;

const editorModal = document.getElementById("editor-modal");
const editorCanvas = document.getElementById("editor-canvas");
const editorCtx = editorCanvas.getContext("2d");
const editorZoom = document.getElementById("editor-zoom");
const editorGirar = document.getElementById("editor-girar");
const editorCancelar = document.getElementById("editor-cancelar");
const editorConfirmar = document.getElementById("editor-confirmar");
const btnAjustarFoto = document.getElementById("btn-ajustar-foto");

const editor = { fonte: null, escala: 1, escalaMin: 1, x: 0, y: 0 };
let fotoSalva = null;
const ponteiros = new Map();
let distanciaAnterior = 0;

function dimensoes(fonte) {
    return { w: fonte.naturalWidth || fonte.width, h: fonte.naturalHeight || fonte.height };
}

function limitarPosicao() {
    const { w, h } = dimensoes(editor.fonte);
    editor.x = Math.min(0, Math.max(TAM - w * editor.escala, editor.x));
    editor.y = Math.min(0, Math.max(TAM - h * editor.escala, editor.y));
}

function desenharEditor() {
    const { w, h } = dimensoes(editor.fonte);
    const c = editorCtx;

    c.fillStyle = "#ffffff";
    c.fillRect(0, 0, TAM, TAM);
    c.drawImage(editor.fonte, editor.x, editor.y, w * editor.escala, h * editor.escala);

    c.save();
    c.fillStyle = "rgba(0, 0, 0, 0.6)";
    c.beginPath();
    c.rect(0, 0, TAM, TAM);
    c.arc(TAM / 2, TAM / 2, TAM / 2 - 1, 0, Math.PI * 2);
    c.fill("evenodd");
    c.restore();

    c.strokeStyle = "#c7b27d";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(TAM / 2, TAM / 2, TAM / 2 - 1, 0, Math.PI * 2);
    c.stroke();
}

function enquadrarFonte() {
    const { w, h } = dimensoes(editor.fonte);
    editor.escalaMin = Math.max(TAM / w, TAM / h);
    editor.escala = editor.escalaMin;
    editor.x = (TAM - w * editor.escala) / 2;
    editor.y = (TAM - h * editor.escala) / 2;
    editorZoom.value = 1;
}

function aplicarZoom(relativo, cx = TAM / 2, cy = TAM / 2) {
    relativo = Math.min(ZOOM_MAX, Math.max(1, relativo));
    const novaEscala = editor.escalaMin * relativo;
    const razao = novaEscala / editor.escala;
    editor.x = cx - (cx - editor.x) * razao;
    editor.y = cy - (cy - editor.y) * razao;
    editor.escala = novaEscala;
    limitarPosicao();
    editorZoom.value = relativo;
    desenharEditor();
}

function zoomAtual() {
    return editor.escala / editor.escalaMin;
}

function abrirEditor(fonte, estado) {
    editor.fonte = fonte;
    enquadrarFonte();

    if (estado) {
        editor.escala = estado.escala;
        editor.x = estado.x;
        editor.y = estado.y;
        limitarPosicao();
        editorZoom.value = zoomAtual();
    }

    editorModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    desenharEditor();
    editorConfirmar.focus();
}

function fecharEditor() {
    editorModal.classList.add("hidden");
    document.body.style.overflow = "";
    ponteiros.clear();
    distanciaAnterior = 0;
}

function posicaoNoCanvas(e) {
    const r = editorCanvas.getBoundingClientRect();
    const k = TAM / r.width;
    return { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k };
}

editorCanvas.addEventListener("pointerdown", (e) => {
    editorCanvas.setPointerCapture(e.pointerId);
    ponteiros.set(e.pointerId, posicaoNoCanvas(e));
    distanciaAnterior = 0;
});

editorCanvas.addEventListener("pointermove", (e) => {
    if (!ponteiros.has(e.pointerId)) return;

    const anterior = ponteiros.get(e.pointerId);
    const atual = posicaoNoCanvas(e);
    ponteiros.set(e.pointerId, atual);

    if (ponteiros.size === 1) {
        editor.x += atual.x - anterior.x;
        editor.y += atual.y - anterior.y;
        limitarPosicao();
        desenharEditor();
    } else if (ponteiros.size === 2) {
        const [a, b] = [...ponteiros.values()];
        const distancia = Math.hypot(a.x - b.x, a.y - b.y);
        if (distanciaAnterior) {
            aplicarZoom(zoomAtual() * (distancia / distanciaAnterior), (a.x + b.x) / 2, (a.y + b.y) / 2);
        }
        distanciaAnterior = distancia;
    }
});

function soltarPonteiro(e) {
    ponteiros.delete(e.pointerId);
    distanciaAnterior = 0;
}
editorCanvas.addEventListener("pointerup", soltarPonteiro);
editorCanvas.addEventListener("pointercancel", soltarPonteiro);

editorCanvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const p = posicaoNoCanvas(e);
    const fator = e.deltaY < 0 ? 1.1 : 1 / 1.1;
    aplicarZoom(zoomAtual() * fator, p.x, p.y);
}, { passive: false });

editorZoom.addEventListener("input", () => aplicarZoom(parseFloat(editorZoom.value)));

editorGirar.addEventListener("click", () => {
    const { w, h } = dimensoes(editor.fonte);
    const rotacionada = document.createElement("canvas");
    rotacionada.width = h;
    rotacionada.height = w;
    const ctx = rotacionada.getContext("2d");
    ctx.translate(h, 0);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(editor.fonte, 0, 0);

    editor.fonte = rotacionada;
    enquadrarFonte();
    desenharEditor();
});

editorCancelar.addEventListener("click", fecharEditor);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !editorModal.classList.contains("hidden")) fecharEditor();
});

editorConfirmar.addEventListener("click", () => {
    const { w, h } = dimensoes(editor.fonte);
    const saida = document.createElement("canvas");
    saida.width = TAM;
    saida.height = TAM;
    const ctx = saida.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, TAM, TAM);
    ctx.drawImage(editor.fonte, editor.x, editor.y, w * editor.escala, h * editor.escala);

    const dataUrl = saida.toDataURL("image/jpeg", 0.85);
    inputAvatarSelecionado.value = dataUrl;
    previewContainer.innerHTML = `<img src="${dataUrl}" style="width: 100%; height: 100%; object-fit: cover;">`;
    btnRemoverFoto.classList.remove("hidden");
    btnAjustarFoto.classList.remove("hidden");

    fotoSalva = { fonte: editor.fonte, escala: editor.escala, x: editor.x, y: editor.y };
    fecharEditor();
});

inputCustomAvatar.addEventListener("change", (e) => {
    const arquivo = e.target.files[0];
    inputCustomAvatar.value = "";
    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
        alert("Escolha um arquivo de imagem.");
        return;
    }

    const url = URL.createObjectURL(arquivo);
    const img = new Image();
    img.onload = () => {
        URL.revokeObjectURL(url);
        abrirEditor(img);
    };
    img.onerror = () => {
        URL.revokeObjectURL(url);
        alert("Não foi possível abrir essa imagem.");
    };
    img.src = url;
});

btnAjustarFoto.addEventListener("click", () => {
    if (fotoSalva) abrirEditor(fotoSalva.fonte, fotoSalva);
});

function resetarFoto() {
    inputAvatarSelecionado.value = "";
    inputCustomAvatar.value = "";
    previewContainer.innerHTML = `<span>Sem foto</span>`;
    btnRemoverFoto.classList.add("hidden");
    btnAjustarFoto.classList.add("hidden");
    fotoSalva = null;
}

btnRemoverFoto.addEventListener("click", resetarFoto);

// Envio dos dados e montagem do card
formBolao.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nomeInput = document.getElementById("nome-usuario");
    const nome = nomeInput.value.trim();
    if (!nome) {
        alert("Digite seu nome ou @ para continuar.");
        nomeInput.focus();
        return;
    }

    const avatar = inputAvatarSelecionado.value;
    const votos = {};
    const votosDetalhes = [];

    categorias.forEach(cat => {
        const selGanha = document.querySelector(`input[name="${cat.id}_ganha"]:checked`);
        const selQuero = document.querySelector(`input[name="${cat.id}_quero"]:checked`);

        if (selGanha && selQuero) {
            votos[cat.id] = {
                vai_ganhar: selGanha.value,
                quero: selQuero.value
            };
            votosDetalhes.push({
                catNome: cat.nome,
                ganhaNome: selGanha.value,
                ganhaImg: selGanha.getAttribute("data-img"),
                queroNome: selQuero.value
            });
        }
    });

    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Salvando apostas...";

    try {
        const { error } = await _supabase
            .from('participantes')
            .insert([{ nome: nome, avatar: avatar, votos: votos }]);

        if (error) throw error;

        cardNome.textContent = nome;
        if (avatar) {
            cardAvatar.src = avatar;
            cardAvatar.classList.remove("hidden");
            cardAvatarVazio.classList.add("hidden");
        } else {
            cardAvatar.removeAttribute("src");
            cardAvatar.classList.add("hidden");
            cardAvatarVazio.textContent = nome.replace(/^@/, "").trim().charAt(0) || "?";
            cardAvatarVazio.classList.remove("hidden");
        }
        cardVotosLista.innerHTML = "";

        votosDetalhes.forEach(voto => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("card-item-voto");
            itemDiv.innerHTML = `
                ${capaHtml(voto.ganhaImg, "Capa", "card-capa")}
                <div>
                    <span>${esc(voto.catNome)}</span>
                    <strong>VAI GANHAR: ${esc(voto.ganhaNome)}</strong>
                    <small class="card-subvoto">QUERO: ${esc(voto.queroNome)}</small>
                </div>
            `;
            protegerCapas(itemDiv);
            cardVotosLista.appendChild(itemDiv);
        });

        formBolao.classList.add("hidden");
        sucessoSection.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
        console.error("Erro ao salvar:", error);
        alert("Erro ao enviar apostas.");
    } finally {
        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar Apostas";
    }
});

// Botão para baixar o card em imagem PNG
btnBaixar.addEventListener("click", () => {
    const cardElement = document.getElementById("card-template");
    
    cardElement.classList.add("exportando");

    htmlToImage.toPng(cardElement, {
        quality: 0.95,
        pixelRatio: 2,
        cacheBust: true
    })
    .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'bolao-grammy-apostas.png';
        link.href = dataUrl;
        link.click();
    })
    .catch((error) => {
        console.error("Erro ao gerar imagem:", error);
        alert("Não foi possível gerar a imagem.");
    })
    .finally(() => {
        cardElement.classList.remove("exportando");
    });
});

// Botão para voltar
btnVoltar.addEventListener("click", () => {
    sucessoSection.classList.add("hidden");
    formBolao.classList.remove("hidden");
    formBolao.reset();
    resetarFoto();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicialização
carregarCategorias();