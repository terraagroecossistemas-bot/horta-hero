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
        body {
            font-family: 'Inter', sans-serif;
        }
        .tab-active {
            border-bottom-color: #22c55e;
            color: #16a34a;
            font-weight: 600;
        }
        .progress-bar-bg {
            background-color: #e0e0e0;
            border-radius: 9999px;
            height: 8px;
        }
        .progress-bar-fill {
            background-color: #22c55e;
            border-radius: 9999px;
            transition: width 0.5s ease-in-out;
            height: 100%;
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hero-glow {
            animation: heroGlow 2s ease-in-out infinite alternate;
        }
        @keyframes heroGlow {
            from { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
            to { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
        }
        .recommendation-card {
            background-color: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-top: 1rem;
        }
        .activity-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 600;
            margin: 0.125rem;
        }
        .activity-plant { background-color: #dcfce7; color: #166534; }
        .activity-water { background-color: #dbeafe; color: #1e40af; }
        .activity-harvest { background-color: #fef3c7; color: #92400e; }
        .activity-shop { background-color: #f3e8ff; color: #6b21a8; }
        .activity-carbon { background-color: #a7f3d0; color: #065f46; }
        .activity-validation { background-color: #fce7f3; color: #be185d; }
        .activity-mission { background-color: #e0e7ff; color: #3730a3; }
        .method-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
            margin-left: 0.5rem;
        }
        .method-semente { background-color: #fef3c7; color: #92400e; }
        .method-muda { background-color: #e0e7ff; color: #3730a3; }
        .method-transplante { background-color: #f3e8ff; color: #6b21a8; }
        .water-status {
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
        }
        .water-good { background-color: #dcfce7; color: #166534; }
        .water-needs { background-color: #fef3c7; color: #92400e; }
        .water-urgent { background-color: #fee2e2; color: #991b1b; }
        .points-animation {
            animation: pointsGlow 0.6s ease-in-out;
        }
        @keyframes pointsGlow {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); color: #22c55e; }
            100% { transform: scale(1); }
        }
        .biodynamic-fruto { background: linear-gradient(135deg, #fef3c7, #fbbf24); color: #92400e; }
        .biodynamic-raiz { background: linear-gradient(135deg, #fef3c7, #f59e0b); color: #92400e; }
        .biodynamic-folha { background: linear-gradient(135deg, #dbeafe, #3b82f6); color: #1e40af; }
        .biodynamic-flor { background: linear-gradient(135deg, #fce7f3, #ec4899); color: #be185d; }
        .biodynamic-desfavoravel { background: linear-gradient(135deg, #f3f4f6, #6b7280); color: #374151; }
        .stratum-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0.125rem;
        }
        .stratum-baixo { background-color: #fef3c7; color: #92400e; }
        .stratum-médio { background-color: #dbeafe; color: #1e40af; }
        .stratum-alto { background-color: #dcfce7; color: #166534; }
        .stratum-emergente { background-color: #f3e8ff; color: #6b21a8; }
        .succession-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0.125rem;
        }
        .succession-placenta { background-color: #fce7f3; color: #be185d; }
        .succession-secundária { background-color: #e0e7ff; color: #3730a3; }
        .succession-clímax { background-color: #dcfce7; color: #166534; }
        .difficulty-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0.125rem;
        }
        .difficulty-fácil { background-color: #dcfce7; color: #166534; }
        .difficulty-médio { background-color: #fef3c7; color: #92400e; }
        .difficulty-difícil { background-color: #fee2e2; color: #991b1b; }
        .tooltip {
            position: relative;
            display: inline-block;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        /* Estilos para validação */
        .validation-pending { border-left: 4px solid #f59e0b; background-color: #fef3c7; }
        .validation-verified { border-left: 4px solid #10b981; background-color: #dcfce7; }
        .validation-rejected { border-left: 4px solid #ef4444; background-color: #fee2e2; }
        
        /* Avatar do Herói */
        .hero-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            position: relative;
            overflow: hidden;
        }
        .hero-level {
            position: absolute;
            bottom: -5px;
            right: -5px;
            background: #fbbf24;
            color: #92400e;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: bold;
            border: 2px solid white;
        }
        
        /* Estilos para tema escuro */
        .dark {
            background-color: #1f2937;
            color: #e5e7eb;
        }
        .dark .bg-white {
            background-color: #374151;
        }
        .dark .text-gray-700 {
            color: #d1d5db;
        }
        .dark .bg-gray-50 {
            background-color: #4b5563;
        }
        .dark .border-gray-200 {
            border-color: #6b7280;
        }
        .dark .progress-bar-bg {
            background-color: #6b7280;
        }
        .dark .progress-bar-fill {
            background-color: #34d399;
        }
        .dark .recommendation-card {
            background-color: #4b5563;
            border-color: #6b7280;
        }
        .dark .activity-badge {
            background-color: #6b7280;
            color: #e5e7eb;
        }
        .dark .method-badge {
            background-color: #6b7280;
            color: #e5e7eb;
        }
        .dark .water-status {
            background-color: #6b7280;
            color: #e5e7eb;
        }
        .dark .biodynamic-fruto, .dark .biodynamic-raiz, .dark .biodynamic-folha, .dark .biodynamic-flor, .dark .biodynamic-desfavoravel {
            opacity: 0.9;
        }
        
        /* Responsividade Mobile */
        @media (max-width: 768px) {
            body { overflow-x: hidden; }
            #app { max-w-full; padding: 0.5rem; }
            header h1 { font-size: 1.5rem; }
            header .text-sm { font-size: 0.65rem; padding: 0.25rem 0.5rem; }
            .flex.justify-center.items-center.space-x-4 { flex-direction: column; gap: 0.5rem; }
            .bg-gradient-to-r.from-green-400 { padding: 1rem; }
            .flex.items-center.justify-between { flex-direction: column; gap: 1rem; }
            .hero-avatar { width: 60px; height: 60px; font-size: 1.5rem; }
            .grid.grid-cols-5 { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
            .grid.grid-cols-3 { grid-template-columns: 1fr; gap: 0.5rem; }
            .grid.grid-cols-2 { grid-template-columns: 1fr; }
            .flex.space-x-2 { flex-wrap: wrap; gap: 0.5rem; }
            .text-4xl { font-size: 1.875rem; }
            .text-2xl { font-size: 1.25rem; }
            .text-lg { font-size: 1rem; }
            .text-sm { font-size: 0.875rem; }
            .text-xs { font-size: 0.75rem; }
            .px-4 { padding-left: 0.5rem; padding-right: 0.5rem; }
            .py-2 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
            .p-6 { padding: 1rem; }
            .p-4 { padding: 0.75rem; }
            .mb-6 { margin-bottom: 1rem; }
            .mt-4 { margin-top: 0.75rem; }
            .space-x-4 { gap: 0.5rem; }
            .space-y-4 { gap: 0.75rem; }
            .rounded-xl { border-radius: 0.5rem; }
            .rounded-lg { border-radius: 0.375rem; }
            .shadow-lg { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
            .max-w-sm { max-width: 100%; }
            .max-w-md { max-width: 100%; }
            .max-w-lg { max-width: 100%; }
            .max-w-2xl { max-width: 100%; }
            .max-w-4xl { max-width: 100%; }
            .max-w-6xl { max-width: 100%; }
            .overflow-x-auto { overflow-x: hidden; }
            table { font-size: 0.75rem; }
            th, td { padding: 0.375rem; }
            .modal-compact { max-height: 85vh; }
            .tab-active { border-bottom-width: 2px; }
            .progress-bar-fill { height: 6px; }
            .tooltip .tooltiptext { width: 150px; margin-left: -75px; font-size: 0.65rem; }
        }
        
        @media (max-width: 480px) {
            #app { padding: 0.25rem; }
            header h1 { font-size: 1.25rem; }
            header .text-sm { font-size: 0.55rem; padding: 0.125rem 0.25rem; }
            .bg-gradient-to-r.from-green-400 { padding: 0.75rem; }
            .hero-avatar { width: 50px; height: 50px; font-size: 1.25rem; }
            .grid.grid-cols-5 { grid-template-columns: repeat(2, 1fr); gap: 0.25rem; }
            .grid.grid-cols-3 { grid-template-columns: 1fr; gap: 0.25rem; }
            .text-4xl { font-size: 1.5rem; }
            .text-2xl { font-size: 1.125rem; }
            .text-lg { font-size: 0.875rem; }
            .text-sm { font-size: 0.75rem; }
            .text-xs { font-size: 0.625rem; }
            .px-4 { padding-left: 0.375rem; padding-right: 0.375rem; }
            .py-2 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
            .p-6 { padding: 0.75rem; }
            .p-4 { padding: 0.5rem; }
            .mb-6 { margin-bottom: 0.75rem; }
            .mt-4 { margin-top: 0.5rem; }
            .space-x-4 { gap: 0.25rem; }
            .space-y-4 { gap: 0.5rem; }
            .rounded-xl { border-radius: 0.375rem; }
            .rounded-lg { border-radius: 0.25rem; }
            .shadow-lg { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); }
            .modal-compact { max-height: 80vh; }
            .tooltip .tooltiptext { width: 120px; margin-left: -60px; font-size: 0.6rem; }
            .activity-badge { padding: 0.125rem 0.25rem; font-size: 0.65rem; }
            .method-badge { padding: 0.125rem 0.25rem; font-size: 0.65rem; }
            .water-status { padding: 0.125rem 0.25rem; font-size: 0.65rem; }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div id="app" class="max-w-6xl mx-auto p-4 md:p-6">

        <header class="text-center mb-6">
            <h1 class="text-4xl font-bold text-green-700 dark:text-green-300">
                🌱 Horta Hero 
                <span class="text-sm bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full ml-2">
                    Portal da Regeneração
                </span>
            </h1>
            <p class="text-gray-600 dark:text-gray-300 mt-2">Plante, registre, regenere e seja recompensado.</p>
            <div class="flex justify-center items-center space-x-4 mt-4">
                <button id="theme-toggle" onclick="toggleTheme()" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg">
                    <i class="fa-solid fa-moon"></i> Tema Escuro
                </button>
                <div class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    <i class="fa-solid fa-shield-check mr-1"></i>
                    Score Verde: <span id="green-score">0%</span>
                </div>
            </div>
        </header>

        <!-- Dashboard do Herói -->
        <div class="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl shadow-lg mb-6 text-white hero-glow">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="hero-avatar">
                        <i class="fa-solid fa-seedling"></i>
                        <div class="hero-level" id="hero-level">1</div>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold">Guardião Verde</h2>
                        <p class="text-green-100">Nível <span id="hero-level-text">1</span> - Jardineiro Iniciante</p>
                        <div class="mt-2 bg-white bg-opacity-20 rounded-full h-2 w-48">
                            <div id="hero-progress" class="bg-yellow-300 h-2 rounded-full" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-3xl font-bold" id="hero-points">0</div>
                    <div class="text-green-100">Pontuação Verde</div>
                </div>
            </div>
        </div>
        
        <!-- Informações Biodinâmicas Detalhadas -->
        <div id="biodynamic-today" class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md mb-6">
            <!-- As informações do dia serão inseridas aqui -->
        </div>

        <!-- Missões do Mês -->
        <div id="monthly-missions" class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md mb-6">
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                <i class="fa-solid fa-trophy mr-2 text-yellow-500"></i>
                Missões do Mês
            </h3>
            <div id="missions-list" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Missões serão inseridas aqui -->
            </div>
        </div>

        <!-- Seção de Estatísticas Expandida -->
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center">
                <h3 class="text-sm font-semibold text-green-700 dark:text-green-300">Pontuação Verde</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-star text-green-600 dark:text-green-400"></i>
                    <span id="points-display" class="text-2xl font-bold text-green-800 dark:text-green-200">0</span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center">
                <h3 class="text-sm font-semibold text-blue-700 dark:text-blue-300">Plantas Ativas</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-sprout text-blue-600 dark:text-blue-400"></i>
                    <span id="active-plants" class="text-2xl font-bold text-blue-800 dark:text-blue-200">0</span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center">
                <h3 class="text-sm font-semibold text-yellow-700 dark:text-yellow-300">Área Regenerada</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-map text-yellow-600 dark:text-yellow-400"></i>
                    <span id="total-area" class="text-xl font-bold text-yellow-800 dark:text-yellow-200">0</span>
                    <span class="text-xs text-yellow-600 dark:text-yellow-400">m²</span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center tooltip">
                <h3 class="text-sm font-semibold text-teal-700 dark:text-teal-300">CO₂ Sequestrado</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-leaf text-teal-600 dark:text-teal-400"></i>
                    <span id="carbon-count" class="text-xl font-bold text-teal-800 dark:text-teal-200">0</span>
                    <span class="text-xs text-teal-600 dark:text-teal-400">kg</span>
                </div>
                <span id="carbon-tooltip" class="tooltiptext">Isso equivale a neutralizar 0 km de carro.</span>
            </div>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center">
                <h3 class="text-sm font-semibold text-purple-700 dark:text-purple-300">Score Verde</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-shield-check text-purple-600 dark:text-purple-400"></i>
                    <span id="validated-data" class="text-xl font-bold text-purple-800 dark:text-purple-200">0</span>
                    <span class="text-xs text-purple-600 dark:text-purple-400">%</span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md text-center">
                <h3 class="text-sm font-semibold text-indigo-700 dark:text-indigo-300">HortaCarbon</h3>
                <div class="flex items-center justify-center space-x-2 mt-2">
                    <i class="fa-solid fa-coins text-indigo-600 dark:text-indigo-400"></i>
                    <span id="carbon-tokens" class="text-xl font-bold text-indigo-800 dark:text-indigo-200">0</span>
                    <span class="text-xs text-indigo-600 dark:text-indigo-400">HHC</span>
                </div>
            </div>
        </div>

        <div class="mb-6 border-b border-gray-200 dark:border-gray-600">
            <nav class="flex space-x-4" aria-label="Tabs">
                <button onclick="changeTab('dashboard')" class="tab-btn tab-dashboard tab-active py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-home mr-1"></i>Dashboard
                </button>
                <button onclick="changeTab('garden')" class="tab-btn tab-garden py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-seedling mr-1"></i>Minha Horta
                </button>
                <button onclick="changeTab('catalog')" class="tab-btn tab-catalog py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-book mr-1"></i>Catálogo
                </button>
                <button onclick="changeTab('carbon')" class="tab-btn tab-carbon py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-calculator mr-1"></i>Calculadora CO₂
                </button>
                <button onclick="changeTab('shop')" class="tab-btn tab-shop py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-store mr-1"></i>Loja Verde
                </button>
                <button onclick="changeTab('achievements')" class="tab-btn tab-achievements py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-trophy mr-1"></i>Conquistas
                </button>
                <button onclick="changeTab('community')" class="tab-btn tab-community py-2 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-users mr-1"></i>Comunidade
                </button>
            </nav>
        </div>

        <main id="tab-content" class="fade-in">
            <!-- Aba Dashboard -->
            <div id="dashboard-tab">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Progresso Pessoal -->
                    <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                            <i class="fa-solid fa-chart-line mr-2 text-green-600"></i>
                            Seu Progresso
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>Nível do Herói</span>
                                    <span id="level-progress-text">1/5</span>
                                </div>
                                <div class="progress-bar-bg">
                                    <div id="level-progress-bar" class="progress-bar-fill" style="width: 0%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-sm mb-1">
                                    <span>Carbono Sequestrado</span>
                                    <span id="carbon-progress-text">0/100 kg</span>
                                </div>
                                <div class="progress-bar-bg">
                                    <div id="carbon-progress-bar" class="progress-bar-fill" style="width: 0%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Atividades Recentes -->
                    <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                            <i class="fa-solid fa-clock mr-2 text-blue-600"></i>
                            Atividades Recentes
                        </h3>
                        <div id="recent-activities" class="space-y-2">
                            <!-- Atividades recentes serão inseridas aqui -->
                        </div>
                    </div>
                </div>

                <!-- Dicas Personalizadas -->
                <div class="mt-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900 p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                        <i class="fa-solid fa-lightbulb mr-2 text-yellow-500"></i>
                        Dicas Personalizadas
                    </h3>
                    <div id="personalized-tips" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Dicas serão inseridas aqui -->
                    </div>
                </div>
            </div>

            <!-- Aba Minha Horta -->
            <div id="garden-tab" class="hidden">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Minha Horta Digital</h2>
                    <button onclick="changeTab('catalog')" class="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                        <i class="fa-solid fa-plus mr-2"></i>Adicionar Planta
                    </button>
                </div>
                <div id="plant-list" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div id="empty-garden" class="hidden text-center py-16 px-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <i class="fa-solid fa-plant-wilt text-5xl text-gray-400 dark:text-gray-500 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200">Sua horta está vazia!</h3>
                    <p class="text-gray-500 dark:text-gray-400 mt-2">Explore o catálogo e comece a plantar para regenerar o planeta.</p>
                    <button onclick="changeTab('catalog')" class="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                        Explorar Catálogo
                    </button>
                </div>
            </div>

            <!-- Aba Catálogo de Plantas -->
            <div id="catalog-tab" class="hidden">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Catálogo de Plantas Regenerativas</h2>
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" id="plant-search" class="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-200" placeholder="Buscar plantas...">
                        <select id="difficulty-filter" class="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-200">
                            <option value="">Todas as dificuldades</option>
                            <option value="fácil">Fácil</option>
                            <option value="médio">Médio</option>
                            <option value="difícil">Difícil</option>
                        </select>
                        <select id="type-filter" class="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-200">
                            <option value="">Todos os tipos</option>
                            <option value="Fruto">Fruto</option>
                            <option value="Folha">Folha</option>
                            <option value="Raiz">Raiz</option>
                            <option value="Flor">Flor</option>
                        </select>
                    </div>
                </div>
                <div id="plant-catalog" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Catálogo será inserido aqui -->
                </div>
            </div>

            <!-- Aba Calculadora de Carbono -->
            <div id="carbon-tab" class="hidden">
                <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                        <i class="fa-solid fa-calculator mr-2 text-green-600"></i>
                        Calculadora de Carbono
                    </h2>
                    
                    <!-- Resumo do Impacto -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
                            <i class="fa-solid fa-leaf text-3xl text-green-600 dark:text-green-400 mb-2"></i>
                            <h3 class="font-bold text-green-800 dark:text-green-200">Total Sequestrado</h3>
                            <p class="text-2xl font-bold text-green-900 dark:text-green-100" id="total-carbon-display">0 kg CO₂e</p>
                        </div>
                        <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
                            <i class="fa-solid fa-car text-3xl text-blue-600 dark:text-blue-400 mb-2"></i>
                            <h3 class="font-bold text-blue-800 dark:text-blue-200">Equivale a</h3>
                            <p class="text-2xl font-bold text-blue-900 dark:text-blue-100" id="car-equivalent">0 km de carro</p>
                        </div>
                        <div class="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
                            <i class="fa-solid fa-coins text-3xl text-yellow-600 dark:text-yellow-400 mb-2"></i>
                            <h3 class="font-bold text-yellow-800 dark:text-yellow-200">Valor Estimado</h3>
                            <p class="text-2xl font-bold text-yellow-900 dark:text-yellow-100" id="carbon-value">R$ 0,00</p>
                        </div>
                    </div>

                    <!-- Detalhamento por Planta -->
                    <div id="carbon-breakdown" class="space-y-4">
                        <!-- Detalhamento será inserido aqui -->
                    </div>
                </div>
            </div>

            <!-- Aba Loja Verde -->
            <div id="shop-tab" class="hidden">
                <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                        <i class="fa-solid fa-store mr-2 text-green-600"></i>
                        Loja Verde
                    </h2>
                    
                    <!-- Seções da Loja -->
                    <div class="mb-6 border-b border-gray-200 dark:border-gray-600">
                        <nav class="flex space-x-4">
                            <button onclick="changeShopSection('products')" class="shop-tab-btn shop-products shop-tab-active py-2 px-4 text-sm font-medium border-b-2 border-green-500 text-green-600">
                                <i class="fa-solid fa-seedling mr-1"></i>Produtos Sustentáveis
                            </button>
                            <button onclick="changeShopSection('courses')" class="shop-tab-btn shop-courses py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                                <i class="fa-solid fa-graduation-cap mr-1"></i>Cursos & Oficinas
                            </button>
                            <button onclick="changeShopSection('carbon')" class="shop-tab-btn shop-carbon py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                                <i class="fa-solid fa-leaf mr-1"></i>Créditos de Carbono
                            </button>
                        </nav>
                    </div>

                    <div id="shop-content">
                        <!-- Conteúdo da loja será inserido aqui -->
                    </div>
                </div>
            </div>

            <!-- Aba Conquistas -->
            <div id="achievements-tab" class="hidden">
                <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                        <i class="fa-solid fa-trophy mr-2 text-yellow-500"></i>
                        Suas Conquistas
                    </h2>
                    
                    <!-- Títulos Desbloqueados -->
                    <div class="mb-8">
                        <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Títulos Desbloqueados</h3>
                        <div id="unlocked-titles" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <!-- Títulos serão inseridos aqui -->
                        </div>
                    </div>

                    <!-- Conquistas de Carbono -->
                    <div class="mb-8">
                        <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Conquistas de Carbono</h3>
                        <div id="carbon-achievements" class="space-y-4">
                            <!-- Conquistas serão inseridas aqui -->
                        </div>
                    </div>

                    <!-- Próximas Conquistas -->
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Próximas Conquistas</h3>
                        <div id="next-achievements" class="space-y-4">
                            <!-- Próximas conquistas serão inseridas aqui -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Aba Comunidade -->
            <div id="community-tab" class="hidden">
                <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                        <i class="fa-solid fa-users mr-2 text-blue-600"></i>
                        Mapa da Regeneração
                    </h2>
                    
                    <!-- Estatísticas Globais -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div class="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg text-white text-center">
                            <i class="fa-solid fa-globe text-3xl mb-2"></i>
                            <h3 class="font-bold">Carbono Global</h3>
                            <p class="text-2xl font-bold" id="global-carbon">0 kg</p>
                        </div>
                        <div class="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg text-white text-center">
                            <i class="fa-solid fa-users text-3xl mb-2"></i>
                            <h3 class="font-bold">Heróis Ativos</h3>
                            <p class="text-2xl font-bold" id="active-heroes">1</p>
                        </div>
                        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-lg text-white text-center">
                            <i class="fa-solid fa-map text-3xl mb-2"></i>
                            <h3 class="font-bold">Área Regenerada</h3>
                            <p class="text-2xl font-bold" id="global-area">0 m²</p>
                        </div>
                        <div class="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-lg text-white text-center">
                            <i class="fa-solid fa-seedling text-3xl mb-2"></i>
                            <h3 class="font-bold">Plantas Cultivadas</h3>
                            <p class="text-2xl font-bold" id="global-plants">0</p>
                        </div>
                    </div>

                    <!-- Ranking de Heróis -->
                    <div class="bg-gray-50 dark:bg-gray-600 p-6 rounded-lg">
                        <h3 class="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Ranking de Heróis da Regeneração</h3>
                        <div id="heroes-ranking" class="space-y-3">
                            <!-- Ranking será inserido aqui -->
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <!-- Modal de Notificação -->
        <div id="notification-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 max-w-sm w-full text-center fade-in">
                <div id="notification-icon" class="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-800">
                     <i class="fa-solid fa-check text-3xl text-green-600 dark:text-green-300"></i>
                </div>
                <h3 id="notification-title" class="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200"></h3>
                <p id="notification-message" class="text-gray-600 dark:text-gray-300 mb-6"></p>
                <button onclick="closeNotification()" class="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">OK</button>
            </div>
        </div>

        <!-- Modal de Adicionar Planta -->
        <div id="add-plant-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 max-w-md w-full fade-in">
                <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Adicionar à Horta</h3>
                <form id="add-plant-form" class="space-y-4">
                    <div id="selected-plant-info" class="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                        <!-- Info da planta selecionada -->
                    </div>
                    <div>
                        <label for="plant-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Data de plantio:</label>
                        <input type="date" id="plant-date" name="plant-date" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-200" required>
                    </div>
                    <div>
                        <label for="plant-area" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Área plantada (m²):</label>
                        <input type="number" id="plant-area" name="plant-area" min="0.1" step="0.1" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-gray-200" required placeholder="Ex.: 1.5">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Método de plantio:</label>
                        <div class="space-y-2">
                            <label class="flex items-center cursor-pointer p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                                <input type="radio" name="planting-method" value="semente" class="h-4 w-4 text-green-600" checked>
                                <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">🌱 Semente (+50% pontos)</span>
                            </label>
                            <label class="flex items-center cursor-pointer p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                                <input type="radio" name="planting-method" value="muda" class="h-4 w-4 text-green-600">
                                <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">🌿 Muda (+20% pontos)</span>
                            </label>
                            <label class="flex items-center cursor-pointer p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                                <input type="radio" name="planting-method" value="transplante" class="h-4 w-4 text-green-600">
                                <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">🪴 Transplante (pontos normais)</span>
                            </label>
                        </div>
                    </div>
                    <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                        <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Práticas Regenerativas</h4>
                        <div class="space-y-2">
                            <label class="flex items-center">
                                <input type="checkbox" name="used-organic-compost" class="h-4 w-4 text-green-600">
                                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Composto orgânico (+10% carbono)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="soil-covered" class="h-4 w-4 text-green-600">
                                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Solo coberto (+20% carbono)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="companion-planting" class="h-4 w-4 text-green-600">
                                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Plantio consorciado (+15% carbono)</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex space-x-3">
                        <button type="button" onclick="closeAddPlantModal()" class="flex-1 bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                            Cancelar
                        </button>
                        <button type="submit" class="flex-1 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

<script>
// Estado global da aplicação expandido
let state = {
    points: 0,
    plants: [],
    activities: [],
    achievements: [],
    currentTab: 'dashboard',
    currentShopSection: 'products',
    carbonTokens: 0,
    heroLevel: 1,
    selectedPlant: null,
    stats: {
        totalHarvests: 0,
        totalWaterings: 0,
        totalPlantings: 0,
        totalCarbonSequestrated: 0,
        totalArea: 0
    }
};

// Catálogo de plantas expandido com dificuldade e ciclo de vida
const plantCatalog = [
    { 
        id: 'lettuce', name: 'Alface', icon: '🥬', daysToHarvest: 45, basePoints: 30, 
        season: 'Ano Todo', type: 'Folha', stratum: 'Baixo', succession: 'Placenta', 
        difficulty: 'fácil', lifecycle: 'Anual', carbonSequestration: 2.1,
        benefits: ['Crescimento rápido', 'Pouco espaço', 'Rica em vitaminas'],
        sintropicNotes: 'Colheita rápida, ocupa pouco espaço e se beneficia da sombra parcial de plantas maiores.',
        notes: 'Prefere climas mais amenos.', 
        companions: ['Cenoura', 'Morango', 'Rabanete', 'Beterraba'],
        waterFrequency: 2
    },
    { 
        id: 'tomato', name: 'Tomate', icon: '🍅', daysToHarvest: 70, basePoints: 50, 
        season: 'Primavera/Verão', type: 'Fruto', stratum: 'Médio', succession: 'Secundária', 
        difficulty: 'médio', lifecycle: 'Anual', carbonSequestration: 7.5,
        benefits: ['Alto valor nutricional', 'Produção abundante', 'Versátil na culinária'],
        sintropicNotes: 'Precisa de poda e manejo para não sombrear demais as plantas vizinhas.',
        notes: 'Precisa de suporte (estacas ou gaiolas) para crescer.', 
        companions: ['Manjericão', 'Cenoura', 'Calêndula'],
        waterFrequency: 2
    },
    { 
        id: 'carrot', name: 'Cenoura', icon: '🥕', daysToHarvest: 80, basePoints: 60, 
        season: 'Outono/Inverno', type: 'Raiz', stratum: 'Baixo', succession: 'Placenta', 
        difficulty: 'médio', lifecycle: 'Anual', carbonSequestration: 3.8,
        benefits: ['Rica em betacaroteno', 'Melhora o solo', 'Longa conservação'],
        sintropicNotes: 'Suas raízes profundas ajudam a aerar o solo para outras culturas.',
        notes: 'O solo deve ser fofo e sem pedras.', 
        companions: ['Alface', 'Rabanete', 'Alecrim'],
        waterFrequency: 3
    },
    { 
        id: 'basil', name: 'Manjericão', icon: '🌿', daysToHarvest: 30, basePoints: 25, 
        season: 'Primavera/Verão', type: 'Folha', stratum: 'Baixo', succession: 'Placenta', 
        difficulty: 'fácil', lifecycle: 'Anual', carbonSequestration: 1.8,
        benefits: ['Repele pragas', 'Atrai polinizadores', 'Uso culinário e medicinal'],
        sintropicNotes: 'Atrai polinizadores e repele pragas. Excelente para as bordas do canteiro.',
        notes: 'Repele alguns insetos e atrai polinizadores.', 
        companions: ['Tomate', 'Pimentão'],
        waterFrequency: 2
    },
    { 
        id: 'corn', name: 'Milho', icon: '🌽', daysToHarvest: 90, basePoints: 85, 
        season: 'Primavera/Verão', type: 'Fruto', stratum: 'Médio', succession: 'Placenta', 
        difficulty: 'médio', lifecycle: 'Anual', carbonSequestration: 8.7,
        benefits: ['Alto sequestro de carbono', 'Fornece estrutura', 'Alimento energético'],
        sintropicNotes: 'Forma um microclima, fornecendo sombra para plantas do estrato baixo.',
        notes: 'Plante em blocos para garantir uma boa polinização.', 
        companions: ['Feijão', 'Abóbora'],
        waterFrequency: 3
    },
    { 
        id: 'bean', name: 'Feijão', icon: '🌱', daysToHarvest: 65, basePoints: 45, 
        season: 'Primavera/Verão', type: 'Fruto', stratum: 'Baixo', succession: 'Placenta', 
        difficulty: 'fácil', lifecycle: 'Anual', carbonSequestration: 5.2,
        benefits: ['Fixa nitrogênio', 'Melhora fertilidade', 'Rica em proteínas'],
        sintropicNotes: 'Leguminosa que fixa nitrogênio no solo, adubando naturalmente as plantas vizinhas.',
        notes: 'Essencial para a saúde do solo.', 
        companions: ['Milho', 'Abóbora', 'Cenoura'],
        waterFrequency: 2
    },
    { 
        id: 'pumpkin', name: 'Abóbora', icon: '🎃', daysToHarvest: 100, basePoints: 90, 
        season: 'Primavera/Verão', type: 'Fruto', stratum: 'Baixo', succession: 'Placenta', 
        difficulty: 'médio', lifecycle: 'Anual', carbonSequestration: 12.5,
        benefits: ['Cobertura de solo', 'Alto valor nutricional', 'Longa conservação'],
        sintropicNotes: 'Ótima para cobertura de solo, suprimindo ervas daninhas e mantendo a umidade.',
        notes: 'Precisa de bastante espaço para se espalhar.', 
        companions: ['Milho', 'Feijão', 'Moringa'],
        waterFrequency: 3
    },
    { 
        id: 'sunflower', name: 'Girassol', icon: '🌻', daysToHarvest: 90, basePoints: 70, 
        season: 'Primavera/Verão', type: 'Flor', stratum: 'Emergente', succession: 'Placenta', 
        difficulty: 'fácil', lifecycle: 'Anual', carbonSequestration: 15.2,
        benefits: ['Atrai polinizadores', 'Descompacta solo', 'Sementes comestíveis'],
        sintropicNotes: 'Atrai muitos polinizadores e suas raízes fortes ajudam a quebrar a compactação do solo.',
        notes: 'Suas sementes são comestíveis.', 
        companions: ['Pepino', 'Milho'],
        waterFrequency: 3
    }
];

// Títulos do herói baseados no nível
const heroTitles = [
    { level: 1, title: 'Jardineiro Iniciante', icon: '🌱' },
    { level: 2, title: 'Guardião do Solo', icon: '🌿' },
    { level: 3, title: 'Herói do Carbono', icon: '🍃' },
    { level: 4, title: 'Mestre da Sintropia', icon: '🌳' },
    { level: 5, title: 'Regenerador Planetário', icon: '🌍' }
];

// Missões mensais
const monthlyMissions = [
    { 
        id: 'plant-3', 
        title: 'Plantar 3 Espécies', 
        description: 'Plante 3 espécies diferentes este mês',
        progress: 0, 
        target: 3, 
        reward: 100,
        icon: 'fa-seedling',
        color: 'green'
    },
    { 
        id: 'carbon-50', 
        title: 'Sequestrar 50kg CO₂', 
        description: 'Sequestre 50kg de CO₂ através do cultivo',
        progress: 0, 
        target: 50, 
        reward: 200,
        icon: 'fa-leaf',
        color: 'teal'
    },
    { 
        id: 'water-20', 
        title: 'Regar 20 Vezes', 
        description: 'Mantenha suas plantas bem hidratadas',
        progress: 0, 
        target: 20, 
        reward: 75,
        icon: 'fa-droplet',
        color: 'blue'
    }
];

// Conquistas de carbono expandidas
const carbonAchievements = [
    { id: 'carbon-5', name: 'Primeiro Passo Verde', threshold: 5, rewardPoints: 25, icon: '🌱' },
    { id: 'carbon-10', name: 'Guardião Verde', threshold: 10, rewardPoints: 50, icon: '🌿' },
    { id: 'carbon-25', name: 'Protetor do Clima', threshold: 25, rewardPoints: 100, icon: '🍃' },
    { id: 'carbon-50', name: 'Herói Ambiental', threshold: 50, rewardPoints: 200, icon: '🌳' },
    { id: 'carbon-100', name: 'Mestre do Carbono', threshold: 100, rewardPoints: 500, icon: '🌍' },
    { id: 'carbon-250', name: 'Regenerador Planetário', threshold: 250, rewardPoints: 1000, icon: '🌌' }
];

// Loja Verde expandida
const greenShop = {
    products: [
        { id: 'seeds-pack', name: 'Pacote de Sementes Orgânicas', cost: 150, description: 'Variedades raras e orgânicas', category: 'Sementes' },
        { id: 'compost-kit', name: 'Kit de Compostagem', cost: 300, description: 'Tudo para fazer seu próprio composto', category: 'Ferramentas' },
        { id: 'irrigation-system', name: 'Sistema de Irrigação Inteligente', cost: 500, description: 'Economize água e tempo', category: 'Tecnologia' }
    ],
    courses: [
        { id: 'permaculture-101', name: 'Permacultura para Iniciantes', cost: 200, description: 'Aprenda os fundamentos da permacultura', duration: '4 semanas' },
        { id: 'biodynamic-farming', name: 'Agricultura Biodinâmica', cost: 350, description: 'Técnicas avançadas de cultivo biodinâmico', duration: '6 semanas' },
        { id: 'carbon-farming', name: 'Agricultura de Carbono', cost: 400, description: 'Maximize o sequestro de carbono', duration: '8 semanas' }
    ],
    carbon: [
        { id: 'carbon-offset-1', name: '1 Tonelada CO₂ Offset', cost: 1000, description: 'Compense 1 tonelada de CO₂', impact: '1000 kg CO₂e' },
        { id: 'carbon-offset-5', name: '5 Toneladas CO₂ Offset', cost: 4500, description: 'Compense 5 toneladas de CO₂', impact: '5000 kg CO₂e' },
        { id: 'tree-planting', name: 'Plantio de 10 Árvores', cost: 750, description: 'Financie o plantio de árvores nativas', impact: 'Restauração florestal' }
    ]
};

// Multiplicadores de pontos e carbono
const methodMultipliers = {
    semente: { points: 1.5, carbon: 1.1 },
    muda: { points: 1.2, carbon: 1.05 },
    transplante: { points: 1.0, carbon: 1.0 }
};

const practiceMultipliers = {
    organicCompost: { points: 1.1, carbon: 1.1 },
    soilCovered: { points: 1.1, carbon: 1.2 },
    companionPlanting: { points: 1.0, carbon: 1.15 }
};

const activityPoints = {
    plant: 15,
    water: 5,
    harvest: 0 // Calculado baseado na planta
};

// Sistema biodinâmico
function getBiodynamicInfo(date) {
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    const zodiacCycle = dayOfYear % 28;

    const zodiacMap = [
        { sign: 'Áries', type: 'Fruto' }, { sign: 'Áries', type: 'Fruto' }, 
        { sign: 'Touro', type: 'Raiz' }, { sign: 'Touro', type: 'Raiz' }, { sign: 'Touro', type: 'Raiz' },
        { sign: 'Gêmeos', type: 'Flor' }, { sign: 'Gêmeos', type: 'Flor' },
        { sign: 'Câncer', type: 'Folha' }, { sign: 'Câncer', type: 'Folha' },
        { sign: 'Leão', type: 'Fruto' }, { sign: 'Leão', type: 'Fruto' },
        { sign: 'Virgem', type: 'Raiz' }, { sign: 'Virgem', type: 'Raiz' }, { sign: 'Virgem', type: 'Raiz' },
        { sign: 'Libra', type: 'Flor' }, { sign: 'Libra', type: 'Flor' },
        { sign: 'Escorpião', type: 'Folha' }, { sign: 'Escorpião', type: 'Folha' }, { sign: 'Escorpião', type: 'Folha' },
        { sign: 'Sagitário', type: 'Fruto' }, { sign: 'Sagitário', type: 'Fruto' },
        { sign: 'Capricórnio', type: 'Raiz' }, { sign: 'Capricórnio', type: 'Raiz' },
        { sign: 'Aquário', type: 'Flor' }, { sign: 'Aquário', type: 'Flor' }, { sign: 'Aquário', type: 'Flor' },
        { sign: 'Peixes', type: 'Folha' }, { sign: 'Peixes', type: 'Folha' },
    ];

    const dayInfo = zodiacMap[Math.floor(zodiacCycle)] || { sign: 'Indefinido', type: 'Neutro' };
    
    if (date.getDate() % 9 === 0) {
        return { type: 'Desfavorável', sign: 'Nó Lunar', quality: 'Evitar trabalhos importantes.' };
    }

    return { ...dayInfo, quality: `Boas influências para plantas de ${dayInfo.type.toLowerCase()}. Otimiza o sequestro de carbono do solo.` };
}

function getRecommendations(plant, biodynamicInfo) {
    const recs = { ideal: [], bom: [], evitar: [] };
    const plantType = plant.type;
    const dayType = biodynamicInfo.type;

    if (dayType === 'Desfavorável') {
        recs.evitar.push('Todos os trabalhos exceto rega de emergência.');
        return recs;
    }

    if (plantType === dayType) {
        recs.ideal.push('Plantio e Transplante', 'Colheita (+20% carbono)');
    } else {
        recs.evitar.push('Plantio e Transplante');
        recs.bom.push('Colheita');
    }
    
    if (dayType === 'Folha') {
        recs.ideal.push('Rega');
    } else {
        recs.bom.push('Rega');
    }
    
    if (dayType === 'Raiz') {
        recs.ideal.push('Adubação e cuidado do solo');
    }

    return recs;
}

function getWaterStatus(plant) {
    if (!plant.lastWatered) return 'needs';
    
    const lastWatered = new Date(plant.lastWatered);
    const today = new Date();
    const daysSinceWatered = Math.floor((today - lastWatered) / (1000 * 60 * 60 * 24));
    
    if (daysSinceWatered >= plant.waterFrequency * 2) return 'urgent';
    if (daysSinceWatered >= plant.waterFrequency) return 'needs';
    return 'good';
}

// Funções de cálculo
function calculateHeroLevel() {
    const level = Math.min(5, Math.floor(state.points / 500) + 1);
    state.heroLevel = level;
    return level;
}

function calculateGreenScore() {
    if (state.plants.length === 0) return 0;
    
    let totalScore = 0;
    state.plants.forEach(plant => {
        let plantScore = 50; // Base score
        
        if (plant.plantArea && plant.plantArea > 0) plantScore += 20;
        if (plant.usedOrganicCompost) plantScore += 10;
        if (plant.soilCovered) plantScore += 10;
        if (plant.companionPlanting) plantScore += 10;
        
        totalScore += Math.min(100, plantScore);
    });
    
    return Math.round(totalScore / state.plants.length);
}

function updateMissions() {
    monthlyMissions.forEach(mission => {
        switch (mission.id) {
            case 'plant-3':
                mission.progress = Math.min(mission.target, state.stats.totalPlantings);
                break;
            case 'carbon-50':
                mission.progress = Math.min(mission.target, Math.floor(state.stats.totalCarbonSequestrated));
                break;
            case 'water-20':
                mission.progress = Math.min(mission.target, state.stats.totalWaterings);
                break;
        }
        
        // Verificar se a missão foi completada
        if (mission.progress >= mission.target && !state.achievements.includes(mission.id)) {
            state.achievements.push(mission.id);
            state.points += mission.reward;
            addActivity('mission', `Missão completada: ${mission.title}`, mission.reward);
            showNotification('Missão Completada!', `${mission.title} (+${mission.reward} pontos)`, 'success');
        }
    });
}

function checkCarbonAchievements() {
    carbonAchievements.forEach(achievement => {
        if (state.stats.totalCarbonSequestrated >= achievement.threshold && !state.achievements.includes(achievement.id)) {
            state.achievements.push(achievement.id);
            state.points += achievement.rewardPoints;
            addActivity('carbon', `Conquista: ${achievement.name}`, achievement.rewardPoints);
            showNotification('Nova Conquista!', `${achievement.name} (+${achievement.rewardPoints} pontos)`, 'success');
            animatePoints();
        }
    });
}

// Funções de estado
function saveState() { 
    try {
        localStorage.setItem('hortaHeroState', JSON.stringify(state)); 
    } catch (e) {
        console.error('Erro ao salvar estado no localStorage:', e);
    }
}

function loadState() { 
    try {
        const savedState = localStorage.getItem('hortaHeroState'); 
        if (savedState) {
            const loaded = JSON.parse(savedState);
            state = { ...state, ...loaded };
            if (!state.stats) {
                state.stats = { totalHarvests: 0, totalWaterings: 0, totalPlantings: 0, totalCarbonSequestrated: 0, totalArea: 0 };
            }
            if (!state.activities) {
                state.activities = [];
            }
            if (!state.achievements) {
                state.achievements = [];
            }
        }
    } catch (e) {
        console.error('Erro ao carregar estado do localStorage:', e);
    }
}

function addActivity(type, description, points) {
    const activity = {
        id: Date.now(),
        type,
        description,
        points,
        date: new Date().toLocaleString('pt-BR')
    };
    
    state.activities.unshift(activity);
    
    if (state.activities.length > 100) {
        state.activities = state.activities.slice(0, 100);
    }
}

function animatePoints() {
    const pointsDisplay = document.getElementById('points-display');
    const heroPoints = document.getElementById('hero-points');
    
    [pointsDisplay, heroPoints].forEach(element => {
        if (element) {
            element.classList.add('points-animation');
            setTimeout(() => {
                element.classList.remove('points-animation');
            }, 600);
        }
    });
}

// Funções principais
function openAddPlantModal(plantId) {
    const plant = plantCatalog.find(p => p.id === plantId);
    if (!plant) return;
    
    state.selectedPlant = plant;
    
    const modal = document.getElementById('add-plant-modal');
    const plantInfo = document.getElementById('selected-plant-info');
    
    plantInfo.innerHTML = `
        <div class="flex items-center space-x-3 mb-3">
            <span class="text-3xl">${plant.icon}</span>
            <div>
                <h4 class="font-bold text-lg">${plant.name}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">${plant.basePoints} pontos base • ${plant.carbonSequestration} kg CO₂e/m²</p>
            </div>
        </div>
        <div class="flex flex-wrap gap-2">
            <span class="difficulty-badge difficulty-${plant.difficulty}">
                <i class="fa-solid fa-signal mr-1"></i>${plant.difficulty}
            </span>
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                ${plant.daysToHarvest} dias para colheita
            </span>
        </div>
    `;
    
    document.getElementById('plant-date').valueAsDate = new Date();
    modal.classList.remove('hidden');
}

function closeAddPlantModal() {
    document.getElementById('add-plant-modal').classList.add('hidden');
    state.selectedPlant = null;
}

function addPlant(e) {
    e.preventDefault();
    
    if (!state.selectedPlant) return;
    
    const plantDateInput = document.getElementById('plant-date');
    const plantAreaInput = document.getElementById('plant-area');
    const plantingMethodInputs = document.getElementsByName('planting-method');
    const usedOrganicCompost = document.querySelector('input[name="used-organic-compost"]').checked;
    const soilCovered = document.querySelector('input[name="soil-covered"]').checked;
    const companionPlanting = document.querySelector('input[name="companion-planting"]').checked;
    
    const plantingDate = plantDateInput.value;
    const plantArea = parseFloat(plantAreaInput.value);
    let plantingMethod = null;
    
    for (const input of plantingMethodInputs) {
        if (input.checked) {
            plantingMethod = input.value;
            break;
        }
    }
    
    if (!plantingDate || !plantingMethod || !plantArea || plantArea <= 0) {
        showNotification('Erro!', 'Preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    const plantData = state.selectedPlant;
    
    const pointMultiplier = methodMultipliers[plantingMethod].points;
    let carbonMultiplier = methodMultipliers[plantingMethod].carbon;
    let practicePointMultiplier = 1.0;
    let practiceCarbonMultiplier = 1.0;
    
    if (usedOrganicCompost) {
        practicePointMultiplier *= practiceMultipliers.organicCompost.points;
        practiceCarbonMultiplier *= practiceMultipliers.organicCompost.carbon;
    }
    if (soilCovered) {
        practicePointMultiplier *= practiceMultipliers.soilCovered.points;
        practiceCarbonMultiplier *= practiceMultipliers.soilCovered.carbon;
    }
    if (companionPlanting) {
        practiceCarbonMultiplier *= practiceMultipliers.companionPlanting.carbon;
    }
    
    const plantDate = new Date(plantingDate);
    const dayInfo = getBiodynamicInfo(plantDate);
    const isIdealDay = dayInfo.type === plantData.type;
    const bonusPointMultiplier = isIdealDay ? 1.2 : 1.0;
    const bonusCarbonMultiplier = isIdealDay ? 1.2 : 1.0;
    
    const plantingPoints = Math.round(activityPoints.plant * pointMultiplier * bonusPointMultiplier * practicePointMultiplier);
    
    const newPlant = { 
        ...plantData, 
        plantingDate, 
        plantingMethod,
        plantArea,
        id: Date.now(),
        lastWatered: null,
        waterCount: 0,
        usedOrganicCompost,
        soilCovered,
        companionPlanting,
        carbonMultiplier: carbonMultiplier * practiceCarbonMultiplier * bonusCarbonMultiplier
    };
    
    state.plants.push(newPlant);
    state.points += plantingPoints;
    state.stats.totalPlantings++;
    state.stats.totalArea += plantArea;
    
    const bonusText = isIdealDay ? ' (Dia Ideal! +20%)' : '';
    addActivity('plant', `Plantou ${plantData.name} (${plantingMethod})${bonusText} em ${plantArea} m²`, plantingPoints);
    
    updateMissions();
    saveState();
    closeAddPlantModal();
    changeTab('garden');
    animatePoints();
    
    const message = isIdealDay 
        ? `${plantData.name} adicionado em dia ideal! +${plantingPoints} pontos (+20% bônus)`
        : `${plantData.name} adicionado! +${plantingPoints} pontos`;
    
    showNotification('Sucesso!', message, 'success');
}

function harvestPlant(plantId) {
    const plantIndex = state.plants.findIndex(p => p.id === plantId);
    if (plantIndex > -1) {
        const plant = state.plants[plantIndex];
        const pointMultiplier = methodMultipliers[plant.plantingMethod].points;
        const today = new Date();
        const dayInfo = getBiodynamicInfo(today);
        const isIdealDay = dayInfo.type === plant.type;
        const bonusPointMultiplier = isIdealDay ? 1.2 : 1.0;
        
        let practicePointMultiplier = 1.0;
        if (plant.usedOrganicCompost) practicePointMultiplier *= practiceMultipliers.organicCompost.points;
        if (plant.soilCovered) practicePointMultiplier *= practiceMultipliers.soilCovered.points;
        
        const harvestPoints = Math.round(plant.basePoints * pointMultiplier * bonusPointMultiplier * practicePointMultiplier);
        const carbonSequestrated = plant.carbonSequestration * plant.carbonMultiplier * plant.plantArea;
        
        state.points += harvestPoints;
        state.stats.totalHarvests++;
        state.stats.totalCarbonSequestrated += carbonSequestrated;
        
        const bonusText = isIdealDay ? ' (Dia Ideal! +20%)' : '';
        addActivity('harvest', `Colheu ${plant.name}${bonusText}, sequestrou ${carbonSequestrated.toFixed(1)} kg CO₂e`, harvestPoints);
        
        state.plants.splice(plantIndex, 1);
        checkCarbonAchievements();
        updateMissions();
        saveState();
        render();
        animatePoints();
        
        const message = isIdealDay 
            ? `Colheita em dia ideal! +${harvestPoints} pontos (+20% bônus) e ${carbonSequestrated.toFixed(1)} kg CO₂e!`
            : `+${harvestPoints} pontos e ${carbonSequestrated.toFixed(1)} kg CO₂e sequestrado!`;
        
        showNotification('Colheita Realizada!', message, 'success');
    }
}

function waterPlant(plantId) {
    const plant = state.plants.find(p => p.id === plantId);
    if (plant) {
        const today = new Date().toDateString();
        const dayInfo = getBiodynamicInfo(new Date());
        const isIdealDay = dayInfo.type === 'Folha';
        const bonusMultiplier = isIdealDay ? 1.5 : 1.0;
        
        const waterPoints = Math.round(activityPoints.water * bonusMultiplier);
        
        plant.lastWatered = today;
        plant.waterCount = (plant.waterCount || 0) + 1;
        
        state.points += waterPoints;
        state.stats.totalWaterings++;
        
        const bonusText = isIdealDay ? ' (Dia Ideal!)' : '';
        addActivity('water', `Regou ${plant.name}${bonusText}`, waterPoints);
        
        updateMissions();
        saveState();
        render();
        animatePoints();
        
        const message = isIdealDay 
            ? `Rega em dia ideal! +${waterPoints} pontos (+50% bônus)`
            : `+${waterPoints} pontos`;
        
        showNotification('Planta Regada!', message, 'success');
    }
}

function removePlant(plantId) {
    const plantIndex = state.plants.findIndex(p => p.id === plantId);
    if (plantIndex > -1) {
        const plant = state.plants[plantIndex];
        state.stats.totalArea -= plant.plantArea;
        state.plants.splice(plantIndex, 1);
        
        saveState();
        render();
        showNotification('Planta Removida', 'A planta foi removida da sua horta.', 'info');
    }
}

function redeemItem(itemId, category) {
    const item = greenShop[category].find(i => i.id === itemId);
    if (state.points >= item.cost) {
        state.points -= item.cost;
        addActivity('shop', `Resgatou ${item.name}`, -item.cost);
        saveState();
        render();
        showNotification('Resgate Realizado!', `Você resgatou "${item.name}"!`, 'success');
    } else {
        showNotification('Pontos Insuficientes', 'Você não tem pontos suficientes para este item.', 'error');
    }
}

// Funções de interface
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const button = document.getElementById('theme-toggle');
    button.innerHTML = document.documentElement.classList.contains('dark') 
        ? '<i class="fa-solid fa-sun"></i> Tema Claro' 
        : '<i class="fa-solid fa-moon"></i> Tema Escuro';
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

function changeTab(tabName) { 
    state.currentTab = tabName; 
    render(); 
}

function changeShopSection(section) {
    state.currentShopSection = section;
    renderShop();
    
    // Atualizar botões da loja
    document.querySelectorAll('.shop-tab-btn').forEach(btn => {
        btn.classList.remove('shop-tab-active', 'border-green-500', 'text-green-600');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    
    const activeBtn = document.querySelector(`.shop-${section}`);
    if (activeBtn) {
        activeBtn.classList.add('shop-tab-active', 'border-green-500', 'text-green-600');
        activeBtn.classList.remove('border-transparent', 'text-gray-500');
    }
}

function render() {
    renderStats();
    renderTabs();
    renderBiodynamicToday();
    renderMissions();
    renderCurrentTabContent();
}

function renderStats() {
    const level = calculateHeroLevel();
    const greenScore = calculateGreenScore();
    
    document.getElementById('points-display').textContent = state.points;
    document.getElementById('hero-points').textContent = state.points;
    document.getElementById('active-plants').textContent = state.plants.length;
    document.getElementById('total-area').textContent = state.stats.totalArea.toFixed(1);
    document.getElementById('carbon-count').textContent = state.stats.totalCarbonSequestrated.toFixed(1);
    document.getElementById('validated-data').textContent = greenScore;
    document.getElementById('green-score').textContent = greenScore + '%';
    
    // Atualizar avatar do herói
    const heroLevel = document.getElementById('hero-level');
    const heroLevelText = document.getElementById('hero-level-text');
    const heroProgress = document.getElementById('hero-progress');
    
    if (heroLevel) heroLevel.textContent = level;
    if (heroLevelText) heroLevelText.textContent = level;
    
    const currentTitle = heroTitles.find(t => t.level === level);
    if (currentTitle) {
        const titleElements = document.querySelectorAll('h2');
        titleElements.forEach(el => {
            if (el.textContent.includes('Guardião Verde')) {
                el.textContent = currentTitle.title;
            }
        });
    }
    
    // Progresso para próximo nível
    const progressToNext = ((state.points % 500) / 500) * 100;
    if (heroProgress) heroProgress.style.width = progressToNext + '%';
    
    // Tooltip de carbono
    const carbonTooltip = document.getElementById('carbon-tooltip');
    if (carbonTooltip) {
        const carKmEquivalent = (state.stats.totalCarbonSequestrated / 0.2).toFixed(1);
        carbonTooltip.textContent = `Isso equivale a neutralizar ${carKmEquivalent} km de carro.`;
    }
    
    // Tokens de carbono
    const tokens = Math.floor(state.stats.totalCarbonSequestrated);
    const tokensElement = document.getElementById('carbon-tokens');
    if (tokensElement) tokensElement.textContent = tokens;
}

function renderTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
    document.querySelector(`.tab-${state.currentTab}`).classList.add('tab-active');
    document.querySelectorAll('#tab-content > div').forEach(tabContent => tabContent.classList.add('hidden'));
    document.getElementById(`${state.currentTab}-tab`).classList.remove('hidden');
}

function renderBiodynamicToday() {
    const todayInfo = getBiodynamicInfo(new Date());
    const container = document.getElementById('biodynamic-today');
    
    let colorClass = 'text-gray-700 dark:text-gray-300';
    let icon = 'fa-solid fa-calendar-day';
    let bgClass = 'biodynamic-desfavoravel';
    
    if (todayInfo.type === 'Raiz') { 
        colorClass = 'text-yellow-700 dark:text-yellow-300'; 
        icon = 'fa-solid fa-carrot'; 
        bgClass = 'biodynamic-raiz';
    }
    if (todayInfo.type === 'Flor') { 
        colorClass = 'text-pink-600 dark:text-pink-300'; 
        icon = 'fa-solid fa-fan'; 
        bgClass = 'biodynamic-flor';
    }
    if (todayInfo.type === 'Folha') { 
        colorClass = 'text-blue-600 dark:text-blue-300'; 
        icon = 'fa-solid fa-leaf'; 
        bgClass = 'biodynamic-folha';
    }
    if (todayInfo.type === 'Fruto') { 
        colorClass = 'text-red-600 dark:text-red-300'; 
        icon = 'fa-solid fa-apple-whole'; 
        bgClass = 'biodynamic-fruto';
    }
    if (todayInfo.type === 'Desfavorável') { 
        colorClass = 'text-gray-500 dark:text-gray-400'; 
        icon = 'fa-solid fa-ban'; 
        bgClass = 'biodynamic-desfavoravel';
    }
    
    container.innerHTML = `
        <div class="${bgClass} p-4 rounded-lg mb-4">
            <h3 class="font-bold text-xl ${colorClass}">
                <i class="${icon} mr-3 text-2xl"></i>
                Hoje é um dia de <span class="underline">${todayInfo.type}</span> (${todayInfo.sign})
            </h3>
            <p class="text-sm mt-2 opacity-90">${todayInfo.quality}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <h4 class="font-semibold text-green-700 dark:text-green-300 mb-2">Plantas favorecidas hoje:</h4>
                <div class="flex flex-wrap gap-2">
                    ${plantCatalog.filter(p => p.type === todayInfo.type).map(p => 
                        `<span class="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">${p.icon} ${p.name}</span>`
                    ).join('')}
                </div>
            </div>
            <div>
                <h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-2">Dica do dia:</h4>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                    ${todayInfo.type === 'Desfavorável' ? 
                        'Evite trabalhos importantes. Apenas rega de emergência.' :
                        `Ideal para trabalhar com plantas de ${todayInfo.type.toLowerCase()}. Ganhe bônus de +20% nos pontos e carbono!`
                    }
                </p>
            </div>
        </div>
    `;
}

function renderMissions() {
    const missionsList = document.getElementById('missions-list');
    
    missionsList.innerHTML = monthlyMissions.map(mission => {
        const progressPercentage = (mission.progress / mission.target) * 100;
        const isCompleted = state.achievements.includes(mission.id);
        
        return `
            <div class="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg ${isCompleted ? 'opacity-75' : ''}">
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-2">
                        <i class="fa-solid ${mission.icon} text-${mission.color}-600"></i>
                        <h4 class="font-semibold text-sm">${mission.title}</h4>
                    </div>
                    <span class="text-xs font-bold text-${mission.color}-600">+${mission.reward} pts</span>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">${mission.description}</p>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                    ${mission.progress}/${mission.target} ${isCompleted ? '✅' : ''}
                </p>
            </div>
        `;
    }).join('');
}

function renderCurrentTabContent() {
    switch (state.currentTab) {
        case 'dashboard': renderDashboard(); break;
        case 'garden': renderGarden(); break;
        case 'catalog': renderCatalog(); break;
        case 'carbon': renderCarbon(); break;
        case 'shop': renderShop(); break;
        case 'achievements': renderAchievements(); break;
        case 'community': renderCommunity(); break;
    }
}

function renderDashboard() {
    // Progresso do nível
    const levelProgress = document.getElementById('level-progress-text');
    const levelProgressBar = document.getElementById('level-progress-bar');
    const carbonProgressText = document.getElementById('carbon-progress-text');
    const carbonProgressBar = document.getElementById('carbon-progress-bar');
    
    const level = calculateHeroLevel();
    const progressToNext = ((state.points % 500) / 500) * 100;
    
    if (levelProgress) levelProgress.textContent = `${level}/5`;
    if (levelProgressBar) levelProgressBar.style.width = progressToNext + '%';
    
    const carbonProgress = Math.min(100, (state.stats.totalCarbonSequestrated / 100) * 100);
    if (carbonProgressText) carbonProgressText.textContent = `${state.stats.totalCarbonSequestrated.toFixed(1)}/100 kg`;
    if (carbonProgressBar) carbonProgressBar.style.width = carbonProgress + '%';
    
    // Atividades recentes
    const recentActivities = document.getElementById('recent-activities');
    if (recentActivities) {
        const recent = state.activities.slice(0, 5);
        recentActivities.innerHTML = recent.length > 0 ? recent.map(activity => `
            <div class="flex items-center justify-between text-sm">
                <span class="activity-badge activity-${activity.type}">
                    <i class="fa-solid ${activity.type === 'plant' ? 'fa-seedling' : activity.type === 'water' ? 'fa-droplet' : activity.type === 'harvest' ? 'fa-tractor' : 'fa-star'} mr-1"></i>
                    ${activity.type === 'plant' ? 'Plantio' : activity.type === 'water' ? 'Rega' : activity.type === 'harvest' ? 'Colheita' : 'Conquista'}
                </span>
                <span class="text-xs text-gray-500">${activity.date.split(' ')[0]}</span>
            </div>
        `).join('') : '<p class="text-gray-500 text-sm">Nenhuma atividade recente</p>';
    }
    
    // Dicas personalizadas
    const personalizedTips = document.getElementById('personalized-tips');
    if (personalizedTips) {
        const tips = [
            {
                title: 'Dica Biodinâmica',
                content: 'Hoje é um bom dia para trabalhar com plantas de ' + getBiodynamicInfo(new Date()).type.toLowerCase() + '.',
                icon: 'fa-moon'
            },
            {
                title: 'Próxima Colheita',
                content: state.plants.length > 0 ? 
                    `Sua ${state.plants[0].name} estará pronta em breve!` : 
                    'Adicione plantas para começar a colher!',
                icon: 'fa-tractor'
            }
        ];
        
        personalizedTips.innerHTML = tips.map(tip => `
            <div class="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div class="flex items-center space-x-2 mb-2">
                    <i class="fa-solid ${tip.icon} text-blue-600"></i>
                    <h4 class="font-semibold">${tip.title}</h4>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">${tip.content}</p>
            </div>
        `).join('');
    }
}

function renderGarden() {
    const plantList = document.getElementById('plant-list');
    const emptyGarden = document.getElementById('empty-garden');
    
    if (state.plants.length === 0) {
        emptyGarden.classList.remove('hidden');
        plantList.classList.add('hidden');
    } else {
        emptyGarden.classList.add('hidden');
        plantList.classList.remove('hidden');
        plantList.innerHTML = '';
        
        state.plants.forEach(plant => {
            const card = createPlantCard(plant);
            plantList.appendChild(card);
        });
    }
}

function createPlantCard(plant) {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md flex flex-col justify-between fade-in';
    
    const plantingDate = new Date(plant.plantingDate + 'T00:00:00');
    const today = new Date();
    const daysPlanted = Math.floor((today - plantingDate) / (1000 * 60 * 60 * 24));
    const progressPercentage = Math.min(100, Math.max(0, (daysPlanted / plant.daysToHarvest) * 100));
    
    const harvestDate = new Date(plantingDate);
    harvestDate.setDate(harvestDate.getDate() + plant.daysToHarvest);
    
    const todayBiodynamicInfo = getBiodynamicInfo(today);
    const recommendations = getRecommendations(plant, todayBiodynamicInfo);
    const waterStatus = getWaterStatus(plant);
    const pointMultiplier = methodMultipliers[plant.plantingMethod].points;
    
    let practicePointMultiplier = 1.0;
    if (plant.usedOrganicCompost) practicePointMultiplier *= practiceMultipliers.organicCompost.points;
    if (plant.soilCovered) practicePointMultiplier *= practiceMultipliers.soilCovered.points;
    
    const harvestPoints = Math.round(plant.basePoints * pointMultiplier * practicePointMultiplier);
    const carbonSequestrated = plant.carbonSequestration * plant.carbonMultiplier * plant.plantArea;
    
    let recommendationsHTML = '<p class="text-sm text-gray-600 dark:text-gray-300">Nenhuma tarefa ideal para hoje.</p>';
    if (recommendations.ideal.length > 0 || recommendations.bom.length > 0 || recommendations.evitar.length > 0) {
        recommendationsHTML = `
            ${recommendations.ideal.length > 0 ? `<div class="flex items-start text-sm text-green-700 dark:text-green-300"><i class="fa-solid fa-star w-5 text-center mt-1 mr-2"></i><div><strong>Ideal:</strong> ${recommendations.ideal.join(', ')}</div></div>` : ''}
            ${recommendations.bom.length > 0 ? `<div class="flex items-start text-sm text-gray-700 dark:text-gray-300 mt-1"><i class="fa-solid fa-check w-5 text-center mt-1 mr-2"></i><div><strong>Bom:</strong> ${recommendations.bom.join(', ')}</div></div>` : ''}
            ${recommendations.evitar.length > 0 ? `<div class="flex items-start text-sm text-red-700 dark:text-red-300 mt-1"><i class="fa-solid fa-ban w-5 text-center mt-1 mr-2"></i><div><strong>Evitar:</strong> ${recommendations.evitar.join(', ')}</div></div>` : ''}
        `;
    }

    const waterStatusText = {
        good: 'Bem regada',
        needs: 'Precisa de água',
        urgent: 'Urgente!'
    };

    const methodText = {
        semente: 'Semente',
        muda: 'Muda',
        transplante: 'Transplante'
    };

    card.innerHTML = `
        <div>
            <div class="flex items-start justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">${plant.icon} ${plant.name}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Plantado em: ${plantingDate.toLocaleDateString('pt-BR')} (${plant.plantArea} m²)</p>
                    <div class="flex items-center mt-2 flex-wrap gap-2">
                        <span class="method-badge method-${plant.plantingMethod}">
                            ${methodText[plant.plantingMethod]} (+${Math.round((pointMultiplier - 1) * 100)}%)
                        </span>
                        <span class="water-status water-${waterStatus}">
                            <i class="fa-solid fa-droplet mr-1"></i>
                            ${waterStatusText[waterStatus]}
                        </span>
                        <span class="difficulty-badge difficulty-${plant.difficulty}">
                            <i class="fa-solid fa-signal mr-1"></i>
                            ${plant.difficulty}
                        </span>
                    </div>
                </div>
                <button onclick="removePlant(${plant.id})" class="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            
            <div class="recommendation-card">
                <h4 class="font-bold text-md mb-2 text-gray-800 dark:text-gray-200">Recomendações para Hoje</h4>
                ${recommendationsHTML}
            </div>

            <div class="text-sm mt-4 border-t pt-3 space-y-2">
                <div class="flex items-start text-gray-700 dark:text-gray-300">
                    <i class="fa-solid fa-lightbulb w-5 text-center text-purple-500 dark:text-purple-400 mr-2 mt-0.5"></i>
                    <div><span class="font-semibold">Benefícios:</span> ${plant.benefits.join(', ')}</div>
                </div>
                <div class="flex items-start text-gray-700 dark:text-gray-300">
                    <i class="fa-solid fa-leaf w-5 text-center text-green-500 dark:text-green-400 mr-2 mt-0.5"></i>
                    <div><span class="font-semibold">Carbono na Colheita:</span> ${carbonSequestrated.toFixed(1)} kg CO₂e</div>
                </div>
            </div>
            
            <div class="my-4">
                <div class="flex justify-between text-sm mb-2">
                    <p class="text-gray-700 dark:text-gray-300">Progresso</p>
                    <p class="text-gray-700 dark:text-gray-300">${Math.round(progressPercentage)}%</p>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-right">
                    ${progressPercentage >= 100 ? 'Pronto para colheita!' : `Colheita em: ${harvestDate.toLocaleDateString('pt-BR')}`}
                </p>
            </div>
        </div>
        
        <div class="space-y-2">
            <button onclick="waterPlant(${plant.id})" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                <i class="fa-solid fa-droplet"></i> Regar (+${activityPoints.water} pts)
            </button>
            <button onclick="harvestPlant(${plant.id})" ${progressPercentage < 100 ? 'disabled' : ''} class="w-full ${progressPercentage >= 100 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'} text-white font-bold py-2 px-4 rounded-lg disabled:cursor-not-allowed transition duration-300">
                <i class="fa-solid fa-tractor"></i> Colher (+${harvestPoints} pts, +${carbonSequestrated.toFixed(1)} kg CO₂e)
            </button>
        </div>
    `;
    
    return card;
}

function renderCatalog() {
    const plantCatalogElement = document.getElementById('plant-catalog');
    const searchInput = document.getElementById('plant-search');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const typeFilter = document.getElementById('type-filter');
    
    // Configurar filtros
    searchInput.addEventListener('input', filterCatalog);
    difficultyFilter.addEventListener('change', filterCatalog);
    typeFilter.addEventListener('change', filterCatalog);
    
    function filterCatalog() {
        const searchTerm = searchInput.value.toLowerCase();
        const difficultyFilter = document.getElementById('difficulty-filter').value;
        const typeFilter = document.getElementById('type-filter').value;
        
        const filteredPlants = plantCatalog.filter(plant => {
            const matchesSearch = plant.name.toLowerCase().includes(searchTerm);
            const matchesDifficulty = !difficultyFilter || plant.difficulty === difficultyFilter;
            const matchesType = !typeFilter || plant.type === typeFilter;
            
            return matchesSearch && matchesDifficulty && matchesType;
        });
        
        renderPlantCatalog(filteredPlants);
    }
    
    function renderPlantCatalog(plants) {
        plantCatalogElement.innerHTML = plants.map(plant => `
            <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <span class="text-4xl">${plant.icon}</span>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">${plant.name}</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400">${plant.lifecycle} • ${plant.season}</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="difficulty-badge difficulty-${plant.difficulty}">
                        <i class="fa-solid fa-signal mr-1"></i>${plant.difficulty}
                    </span>
                    <span class="stratum-badge stratum-${plant.stratum.toLowerCase()}">
                        <i class="fa-solid fa-layer-group mr-1"></i>${plant.stratum}
                    </span>
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        ${plant.daysToHarvest} dias
                    </span>
                </div>
                
                <div class="space-y-2 text-sm mb-4">
                    <div class="flex items-center text-gray-700 dark:text-gray-300">
                        <i class="fa-solid fa-star w-5 text-yellow-500 mr-2"></i>
                        <span><strong>Pontos:</strong> ${plant.basePoints} base</span>
                    </div>
                    <div class="flex items-center text-gray-700 dark:text-gray-300">
                        <i class="fa-solid fa-leaf w-5 text-green-500 mr-2"></i>
                        <span><strong>Carbono:</strong> ${plant.carbonSequestration} kg CO₂e/m²</span>
                    </div>
                    <div class="flex items-start text-gray-700 dark:text-gray-300">
                        <i class="fa-solid fa-lightbulb w-5 text-purple-500 mr-2 mt-0.5"></i>
                        <div><strong>Benefícios:</strong> ${plant.benefits.join(', ')}</div>
                    </div>
                </div>
                
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${plant.sintropicNotes}</p>
                
                <button onclick="openAddPlantModal('${plant.id}')" class="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                    <i class="fa-solid fa-plus mr-2"></i>Adicionar à Horta
                </button>
            </div>
        `).join('');
    }
    
    renderPlantCatalog(plantCatalog);
}

function renderCarbon() {
    const totalCarbonDisplay = document.getElementById('total-carbon-display');
    const carEquivalent = document.getElementById('car-equivalent');
    const carbonValue = document.getElementById('carbon-value');
    const carbonBreakdown = document.getElementById('carbon-breakdown');
    
    const totalCarbon = state.stats.totalCarbonSequestrated;
    const carKm = (totalCarbon / 0.2).toFixed(1);
    const value = (totalCarbon * 15).toFixed(2);
    
    if (totalCarbonDisplay) totalCarbonDisplay.textContent = totalCarbon.toFixed(1) + ' kg CO₂e';
    if (carEquivalent) carEquivalent.textContent = carKm + ' km de carro';
    if (carbonValue) carbonValue.textContent = 'R$ ' + value;
    
    if (carbonBreakdown) {
        if (state.plants.length === 0) {
            carbonBreakdown.innerHTML = `
                <div class="text-center py-8">
                    <i class="fa-solid fa-leaf text-5xl text-gray-400 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200">Nenhuma planta na horta</h3>
                    <p class="text-gray-500 dark:text-gray-400 mt-2">Adicione plantas para começar a sequestrar carbono!</p>
                </div>
            `;
        } else {
            carbonBreakdown.innerHTML = `
                <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Detalhamento por Planta</h3>
                <div class="space-y-3">
                    ${state.plants.map(plant => {
                        const carbonPerPlant = plant.carbonSequestration * plant.carbonMultiplier * plant.plantArea;
                        return `
                            <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">${plant.icon}</span>
                                    <div>
                                        <h4 class="font-semibold">${plant.name}</h4>
                                        <p class="text-sm text-gray-500">${plant.plantArea} m² • ${plant.plantingMethod}</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-green-600">${carbonPerPlant.toFixed(1)} kg CO₂e</p>
                                    <p class="text-xs text-gray-500">na colheita</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }
    }
}

function renderShop() {
    const shopContent = document.getElementById('shop-content');
    const items = greenShop[state.currentShopSection];
    
    if (!items) return;
    
    shopContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${items.map(item => `
                <div class="bg-gray-50 dark:bg-gray-600 p-6 rounded-xl border">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">${item.name}</h3>
                            ${item.category ? `<p class="text-sm text-gray-500">${item.category}</p>` : ''}
                            ${item.duration ? `<p class="text-sm text-blue-600">${item.duration}</p>` : ''}
                            ${item.impact ? `<p class="text-sm text-green-600">${item.impact}</p>` : ''}
                        </div>
                        <span class="text-xl font-bold text-green-600">${item.cost} pts</span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${item.description}</p>
                    <button onclick="redeemItem('${item.id}', '${state.currentShopSection}')" 
                            ${state.points < item.cost ? 'disabled' : ''} 
                            class="w-full ${state.points >= item.cost ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'} text-white font-bold py-2 px-4 rounded-lg disabled:cursor-not-allowed transition duration-300">
                        ${state.points >= item.cost ? 'Resgatar' : 'Pontos Insuficientes'}
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAchievements() {
    const unlockedTitles = document.getElementById('unlocked-titles');
    const carbonAchievementsEl = document.getElementById('carbon-achievements');
    const nextAchievements = document.getElementById('next-achievements');
    
    // Títulos desbloqueados
    const currentLevel = calculateHeroLevel();
    const unlockedTitlesList = heroTitles.filter(title => title.level <= currentLevel);
    
    if (unlockedTitles) {
        unlockedTitles.innerHTML = unlockedTitlesList.map(title => `
            <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg text-white text-center">
                <div class="text-3xl mb-2">${title.icon}</div>
                <h4 class="font-bold">${title.title}</h4>
                <p class="text-sm opacity-90">Nível ${title.level}</p>
            </div>
        `).join('');
    }
    
    // Conquistas de carbono
    if (carbonAchievementsEl) {
        carbonAchievementsEl.innerHTML = carbonAchievements.map(achievement => {
            const isUnlocked = state.achievements.includes(achievement.id);
            const progress = Math.min(100, (state.stats.totalCarbonSequestrated / achievement.threshold) * 100);
            
            return `
                <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg ${isUnlocked ? 'opacity-75' : ''}">
                    <div class="flex items-center space-x-4">
                        <div class="text-3xl">${achievement.icon}</div>
                        <div>
                            <h4 class="font-semibold">${achievement.name}</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">${achievement.threshold} kg CO₂e</p>
                            ${!isUnlocked ? `
                                <div class="mt-2">
                                    <div class="progress-bar-bg">
                                        <div class="progress-bar-fill" style="width: ${progress}%"></div>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">${state.stats.totalCarbonSequestrated.toFixed(1)}/${achievement.threshold} kg</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-lg font-bold text-green-600">+${achievement.rewardPoints} pts</span>
                        ${isUnlocked ? '<p class="text-sm text-green-600">✅ Desbloqueado</p>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Próximas conquistas
    const nextAchievementsList = carbonAchievements.filter(achievement => !state.achievements.includes(achievement.id)).slice(0, 3);
    
    if (nextAchievements) {
        nextAchievements.innerHTML = nextAchievementsList.map(achievement => {
            const progress = Math.min(100, (state.stats.totalCarbonSequestrated / achievement.threshold) * 100);
            
            return `
                <div class="flex items-center justify-between p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <div class="text-3xl opacity-50">${achievement.icon}</div>
                        <div>
                            <h4 class="font-semibold text-gray-700 dark:text-gray-300">${achievement.name}</h4>
                            <p class="text-sm text-gray-500">${achievement.threshold} kg CO₂e</p>
                            <div class="mt-2">
                                <div class="progress-bar-bg">
                                    <div class="progress-bar-fill" style="width: ${progress}%"></div>
                                </div>
                                <p class="text-xs text-gray-500 mt-1">${state.stats.totalCarbonSequestrated.toFixed(1)}/${achievement.threshold} kg</p>
                            </div>
                        </div>
                    </div>
                    <span class="text-lg font-bold text-gray-500">+${achievement.rewardPoints} pts</span>
                </div>
            `;
        }).join('');
    }
}

function renderCommunity() {
    // Simular dados globais
    const globalData = {
        totalCarbon: state.stats.totalCarbonSequestrated + Math.random() * 1000,
        activeHeroes: 1 + Math.floor(Math.random() * 100),
        globalArea: state.stats.totalArea + Math.random() * 10000,
        globalPlants: state.plants.length + Math.floor(Math.random() * 1000)
    };
    
    document.getElementById('global-carbon').textContent = globalData.totalCarbon.toFixed(1) + ' kg';
    document.getElementById('active-heroes').textContent = globalData.activeHeroes;
    document.getElementById('global-area').textContent = globalData.globalArea.toFixed(1) + ' m²';
    document.getElementById('global-plants').textContent = globalData.globalPlants;
    
    // Ranking simulado
    const heroesRanking = document.getElementById('heroes-ranking');
    const currentLevel = calculateHeroLevel();
    const currentTitle = heroTitles.find(t => t.level === currentLevel);
    
    const rankings = [
        { name: 'Você', title: currentTitle.title, points: state.points, carbon: state.stats.totalCarbonSequestrated },
        { name: 'Maria Silva', title: 'Mestre da Sintropia', points: state.points + 200, carbon: state.stats.totalCarbonSequestrated + 50 },
        { name: 'João Santos', title: 'Herói do Carbono', points: state.points - 100, carbon: state.stats.totalCarbonSequestrated - 20 },
        { name: 'Ana Costa', title: 'Guardião do Solo', points: state.points - 300, carbon: state.stats.totalCarbonSequestrated - 40 }
    ].sort((a, b) => b.points - a.points);
    
    if (heroesRanking) {
        heroesRanking.innerHTML = rankings.map((hero, index) => `
            <div class="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg ${hero.name === 'Você' ? 'ring-2 ring-green-500' : ''}">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        ${index + 1}
                    </div>
                    <div>
                        <h4 class="font-semibold">${hero.name}</h4>
                        <p class="text-sm text-gray-500">${hero.title}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold">${hero.points} pts</p>
                    <p class="text-sm text-green-600">${hero.carbon.toFixed(1)} kg CO₂e</p>
                </div>
            </div>
        `).join('');
    }
}

// Funções de notificação
function showNotification(title, message, type = 'success') {
    const modal = document.getElementById('notification-modal');
    const titleEl = document.getElementById('notification-title');
    const messageEl = document.getElementById('notification-message');
    const iconEl = document.getElementById('notification-icon');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    const iconMap = { success: 'fa-check', error: 'fa-times', info: 'fa-info-circle' };
    const colorMap = { success: 'bg-green-100 dark:bg-green-800', error: 'bg-red-100 dark:bg-red-800', info: 'bg-blue-100 dark:bg-blue-800' };
    const iconColorMap = { success: 'text-green-600 dark:text-green-300', error: 'text-red-600 dark:text-red-300', info: 'text-blue-600 dark:text-blue-300' };
    
    iconEl.className = `mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${colorMap[type]}`;
    iconEl.innerHTML = `<i class="fa-solid ${iconMap[type]} text-3xl ${iconColorMap[type]}"></i>`;
    
    modal.classList.remove('hidden');
}

function closeNotification() {
    document.getElementById('notification-modal').classList.add('hidden');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa-solid fa-sun"></i> Tema Claro';
    }
    
    // Configurar formulário de adicionar planta
    document.getElementById('add-plant-form').addEventListener('submit', addPlant);
    
    // Carregar estado e renderizar
    loadState();
    render();
});

// Salvar estado periodicamente
setInterval(saveState, 30000);

window.onload = () => {
    loadState();
    render();
};
</script>

</body>
</html>