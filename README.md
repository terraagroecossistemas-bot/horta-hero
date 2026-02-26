<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horta Hero - Portal da Agricultura Regenerativa</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .tab-active { border-bottom-color: #22c55e; color: #16a34a; font-weight: 600; }
        .progress-bar-bg { background-color: #e0e0e0; border-radius: 9999px; height: 8px; }
        .progress-bar-fill { background-color: #22c55e; border-radius: 9999px; transition: width 0.5s ease-in-out; height: 100%; }
        .fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .dark { background-color: #1a1a1a; color: #ffffff; }
        .dark .bg-white { background-color: #2d2d2d; color: #ffffff; border-color: #444; }
        .dark .text-gray-600 { color: #b3b3b3; }
        .dark .border-gray-200 { border-color: #444; }
        .dark .bg-gray-50 { background-color: #252525; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 transition-colors duration-300">

    <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- HEADER IGUAL AO ENVIADO -->
        <header class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div class="flex items-center gap-3">
                <div class="bg-green-500 p-3 rounded-2xl shadow-lg shadow-green-200">
                    <i class="fa-solid fa-leaf text-white text-2xl"></i>
                </div>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight">Horta Hero</h1>
                    <p class="text-sm text-gray-600">Portal da Agricultura Regenerativa</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 dark:bg-gray-800">
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    <span id="total-score" class="font-bold">0</span>
                    <span class="text-xs text-gray-500">pts</span>
                </div>
                <button id="theme-toggle" onclick="toggleTheme()" class="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 dark:bg-gray-800 transition-colors">
                    <i class="fa-solid fa-moon"></i> Tema Escuro
                </button>
            </div>
        </header>

        <!-- STATS GRID IGUAL AO ENVIADO -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 dark:bg-gray-800">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500">
                        <i class="fa-solid fa-cloud"></i>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">CO2 Sequestrado</span>
                </div>
                <div class="flex items-baseline gap-2">
                    <span id="co2-total" class="text-3xl font-bold">0.00</span>
                    <span class="text-gray-500 font-medium">kg</span>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 dark:bg-gray-800">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-500">
                        <i class="fa-solid fa-seedling"></i>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">Plantas Ativas</span>
                </div>
                <div class="flex items-baseline gap-2">
                    <span id="active-plants" class="text-3xl font-bold">0</span>
                </div>
            </div>

            <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 dark:bg-gray-800">
                <div class="flex items-center gap-4 mb-2">
                    <div class="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-500">
                        <i class="fa-solid fa-ruler-combined"></i>
                    </div>
                    <span class="text-sm font-semibold text-gray-500">Área Cultivada</span>
                </div>
                <div class="flex items-baseline gap-2">
                    <span id="total-area" class="text-3xl font-bold">0.0</span>
                    <span class="text-gray-500 font-medium">m²</span>
                </div>
            </div>
        </div>

        <!-- ABAS ORIGINAIS + CALENDÁRIO -->
        <div class="flex border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto no-scrollbar">
            <button onclick="switchTab('jardim')" id="tab-jardim-btn" class="px-6 py-3 tab-active border-b-2 transition-all whitespace-nowrap">O Meu Jardim</button>
            <button onclick="switchTab('plantar')" id="tab-plantar-btn" class="px-6 py-3 text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-all whitespace-nowrap">Plantar Novo</button>
            <button onclick="switchTab('calendario')" id="tab-calendario-btn" class="px-6 py-3 text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-all whitespace-nowrap">Guia de Plantio</button>
        </div>

        <!-- CONTEÚDO DAS ABAS -->
        <div id="jardim-section" class="fade-in">
            <div id="garden-container" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Injetado por JS -->
            </div>
        </div>

        <div id="plantar-section" class="hidden fade-in">
            <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
                <h2 class="text-xl font-bold mb-6">Novo Plantio</h2>
                <form id="plant-form" class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cultura</label>
                        <select id="plant-select" class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500">
                            <!-- Injetado via JS -->
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Quantidade (un)</label>
                            <input type="number" id="plant-qty" value="1" min="1" class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Área (m²)</label>
                            <input type="number" id="plant-area" value="0.5" step="0.1" class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-3">
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                        Confirmar Plantio
                    </button>
                </form>
            </div>
        </div>

        <!-- NOVO CALENDÁRIO GRANDE -->
        <div id="calendario-section" class="hidden fade-in">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="p-6 bg-green-600 text-white">
                    <h2 class="text-xl font-bold uppercase italic">Calendário de Cultivo Português</h2>
                    <p class="text-xs opacity-80">Melhores meses para sementeira e transplante</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-gray-50 dark:bg-gray-900 text-[10px] font-black uppercase text-gray-400">
                                <th class="px-6 py-4 border-b dark:border-gray-700">Planta</th>
                                <th class="px-4 py-4 border-b dark:border-gray-700">Inverno</th>
                                <th class="px-4 py-4 border-b dark:border-gray-700">Primavera</th>
                                <th class="px-4 py-4 border-b dark:border-gray-700">Verão</th>
                                <th class="px-4 py-4 border-b dark:border-gray-700">Outono</th>
                            </tr>
                        </thead>
                        <tbody id="calendar-table-body" class="text-sm">
                            <!-- Injetado via JS -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL DE NOTIFICAÇÃO ORIGINAL -->
    <div id="notification-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center hidden p-4">
        <div class="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl">
            <div id="notif-icon" class="text-5xl text-green-500 mb-4"></div>
            <h3 id="notif-title" class="text-xl font-bold mb-2">Sucesso!</h3>
            <p id="notif-msg" class="text-gray-500 dark:text-gray-400 mb-6 text-sm"></p>
            <button onclick="closeNotification()" class="w-full bg-gray-900 text-white font-bold py-3 rounded-xl dark:bg-white dark:text-black">OK</button>
        </div>
    </div>

    <script>
        // CATÁLOGO EXPANDIDO
        const PLANT_CATALOG = [
            { id: 'alface', name: 'Alface', icon: '🥬', co2: 0.5, growth: 45, s: [1,1,1,1] },
            { id: 'tomate', name: 'Tomate', icon: '🍅', co2: 2.5, growth: 90, s: [0,1,1,0] },
            { id: 'cenoura', name: 'Cenoura', icon: '🥕', co2: 0.8, growth: 80, s: [1,1,1,1] },
            { id: 'pimento', name: 'Pimento', icon: '🫑', co2: 2.2, growth: 100, s: [0,1,1,0] },
            { id: 'espinafre', name: 'Espinafre', icon: '🍃', co2: 0.6, growth: 50, s: [1,1,0,1] },
            { id: 'morango', name: 'Morango', icon: '🍓', co2: 1.8, growth: 120, s: [1,1,0,0] },
            { id: 'batata', name: 'Batata', icon: '🥔', co2: 1.4, growth: 110, s: [1,1,0,0] },
            { id: 'curgete', name: 'Curgete', icon: '🥒', co2: 2.0, growth: 60, s: [0,1,1,0] },
            { id: 'alho', name: 'Alho', icon: '🧄', co2: 0.3, growth: 180, s: [1,0,0,1] },
            { id: 'cebola', name: 'Cebola', icon: '🧅', co2: 0.4, growth: 150, s: [1,1,0,1] },
            { id: 'couve', name: 'Couve Galega', icon: '🥦', co2: 1.5, growth: 95, s: [1,1,1,1] },
            { id: 'beringela', name: 'Beringela', icon: '🍆', co2: 2.4, growth: 110, s: [0,1,1,0] },
            { id: 'rabanete', name: 'Rabanete', icon: '🔴', co2: 0.2, growth: 30, s: [1,1,1,1] },
            { id: 'feijao', name: 'Feijão', icon: '🫘', co2: 0.9, growth: 80, s: [0,1,1,0] },
            { id: 'melancia', name: 'Melancia', icon: '🍉', co2: 3.5, growth: 115, s: [0,1,1,0] },
            { id: 'salsa', name: 'Salsa', icon: '🌿', co2: 0.3, growth: 60, s: [1,1,1,1] },
            { id: 'coentro', name: 'Coentro', icon: '🌱', co2: 0.3, growth: 40, s: [1,1,1,1] },
            { id: 'brocolo', name: 'Brócolo', icon: '🥦', co2: 1.3, growth: 100, s: [1,1,1,1] },
            { id: 'ervilha', name: 'Ervilha', icon: '🟢', co2: 0.7, growth: 70, s: [1,1,0,1] }
        ];

        let state = { points: 0, co2: 0, garden: [] };

        // CARREGAR DADOS
        window.onload = () => {
            const saved = localStorage.getItem('horta_hero_save');
            if (saved) state = JSON.parse(saved);
            
            renderCatalog();
            renderCalendar();
            renderGarden();
            updateStats();
        };

        function switchTab(tab) {
            ['jardim', 'plantar', 'calendario'].forEach(t => {
                document.getElementById(`${t}-section`).classList.add('hidden');
                document.getElementById(`tab-${t}-btn`).className = 'px-6 py-3 text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-all whitespace-nowrap';
            });
            document.getElementById(`${tab}-section`).classList.remove('hidden');
            document.getElementById(`tab-${tab}-btn`).className = 'px-6 py-3 tab-active border-b-2 transition-all whitespace-nowrap';
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            const btn = document.getElementById('theme-toggle');
            btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i> Tema Claro' : '<i class="fa-solid fa-moon"></i> Tema Escuro';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        function renderCatalog() {
            const select = document.getElementById('plant-select');
            select.innerHTML = PLANT_CATALOG.map(p => `<option value="${p.id}">${p.icon} ${p.name}</option>`).join('');
        }

        function renderCalendar() {
            const tbody = document.getElementById('calendar-table-body');
            tbody.innerHTML = PLANT_CATALOG.map(p => `
                <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td class="px-6 py-4 font-bold text-xs uppercase tracking-tighter">${p.icon} ${p.name}</td>
                    <td class="px-4 py-4 text-center">${p.s[0] ? '✅' : '❌'}</td>
                    <td class="px-4 py-4 text-center">${p.s[1] ? '✅' : '❌'}</td>
                    <td class="px-4 py-4 text-center">${p.s[2] ? '✅' : '❌'}</td>
                    <td class="px-4 py-4 text-center">${p.s[3] ? '✅' : '❌'}</td>
                </tr>
            `).join('');
        }

        function updateStats() {
            document.getElementById('total-score').textContent = state.points;
            document.getElementById('co2-total').textContent = state.co2.toFixed(2);
            document.getElementById('active-plants').textContent = state.garden.length;
            const area = state.garden.reduce((acc, p) => acc + parseFloat(p.area), 0);
            document.getElementById('total-area').textContent = area.toFixed(1);
            localStorage.setItem('horta_hero_save', JSON.stringify(state));
        }

        document.getElementById('plant-form').onsubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById('plant-select').value;
            const info = PLANT_CATALOG.find(p => p.id === id);
            
            const newPlant = {
                ...info,
                uid: Date.now(),
                qty: parseInt(document.getElementById('plant-qty').value),
                area: parseFloat(document.getElementById('plant-area').value),
                plantedAt: Date.now()
            };

            state.garden.push(newPlant);
            state.points += 20;
            updateStats();
            renderGarden();
            showNotif('🌳 Plantado!', `${newPlant.name} adicionado ao jardim.`, 'fa-seedling');
            switchTab('jardim');
        };

        function renderGarden() {
            const container = document.getElementById('garden-container');
            if (state.garden.length === 0) {
                container.innerHTML = `<div class="col-span-full py-20 text-center text-gray-400 italic">O jardim está vazio. Comece a plantar!</div>`;
                return;
            }
            container.innerHTML = state.garden.map((p, i) => {
                const now = Date.now();
                const progress = Math.min(100, Math.floor(((now - p.plantedAt) / (p.growth * 86400000)) * 100));
                return `
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 relative">
                        <button onclick="removePlant(${i})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500"><i class="fa-solid fa-trash"></i></button>
                        <div class="flex items-center gap-4 mb-4">
                            <span class="text-4xl">${p.icon}</span>
                            <div>
                                <h3 class="font-bold">${p.name}</h3>
                                <p class="text-[10px] font-black uppercase text-gray-400">${p.qty} un • ${p.area}m²</p>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="flex justify-between text-[10px] font-black uppercase text-gray-400">
                                <span>Crescimento</span>
                                <span class="text-green-500">${progress}%</span>
                            </div>
                            <div class="progress-bar-bg dark:bg-gray-700">
                                <div class="progress-bar-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                        <div class="mt-6 flex gap-2">
                            <button onclick="water(${i})" class="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all">Regar</button>
                            <button onclick="harvest(${i})" ${progress < 100 ? 'disabled' : ''} class="flex-1 ${progress >= 100 ? 'bg-amber-500' : 'bg-gray-100 dark:bg-gray-700'} text-white py-2.5 rounded-xl text-xs font-bold transition-all">Colher</button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function removePlant(i) { state.garden.splice(i,1); updateStats(); renderGarden(); }
        function water(i) { state.points += 5; updateStats(); showNotif('💧 Regado!', 'Planta cuidada com sucesso.', 'fa-droplet'); }
        function harvest(i) {
            const p = state.garden[i];
            state.co2 += (p.co2 * p.qty);
            state.points += 100;
            state.garden.splice(i,1);
            updateStats();
            renderGarden();
            showNotif('🧺 Colheita!', `Neutralizaste ${(p.co2 * p.qty).toFixed(2)}kg de CO2!`, 'fa-basket-shopping');
        }

        function showNotif(title, msg, icon) {
            document.getElementById('notif-title').textContent = title;
            document.getElementById('notif-msg').textContent = msg;
            document.getElementById('notif-icon').innerHTML = `<i class="fa-solid ${icon}"></i>`;
            document.getElementById('notification-modal').classList.remove('hidden');
        }

        window.closeNotification = () => document.getElementById('notification-modal').classList.add('hidden');
    </script>
</body>
</html>

