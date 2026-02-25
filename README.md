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
                                    <
