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
        
        /* Responsividade Mobile Radical */
        html, body {
            max-width: 100vw;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
        }
        #app {
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            padding: 1rem;
        }
        @media (max-width: 768px) {
            #app { padding: 0.5rem; }
            .grid { width: 100% !important; max-width: 100% !important; }
            .flex { max-width: 100% !important; }
            header h1 { font-size: 1.5rem !important; }
            .hero-avatar { width: 60px !important; height: 60px !important; font-size: 1.5rem !important; }
            .text-4xl { font-size: 1.75rem !important; }
            .text-3xl { font-size: 1.5rem !important; }
            .text-2xl { font-size: 1.25rem !important; }
            .p-6 { padding: 1rem !important; }
            .p-4 { padding: 0.75rem !important; }
            .max-w-6xl, .max-w-4xl, .max-w-2xl, .max-w-lg, .max-w-md, .max-w-sm {
                max-width: 100% !important;
            }
            /* Forçar cards de estatísticas a caberem */
            .grid-cols-6, .grid-cols-5, .grid-cols-4, .grid-cols-3 {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 0.5rem !important;
            }
            /* Forçar tabelas e modais */
            .overflow-x-auto {
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch;
            }
            table { width: 100% !important; min-width: 0 !important; }
        }
        @media (max-width: 480px) {
            .grid-cols-6, .grid-cols-5, .grid-cols-4, .grid-cols-3, .grid-cols-2 {
                grid-template-columns: 1fr !important;
            }
            .hero-avatar { width: 50px !important; height: 50px !important; }
            .text-sm { font-size: 0.75rem !important; }
            .text-xs { font-size: 0.65rem !important; }
            .px-4 { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
            /* Ajuste específico para o dashboard do herói */
            .hero-glow .flex.items-center.justify-between {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 1rem;
            }
        }
    
        /* Modal de Detalhes */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.3s ease-in-out;
        }
        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background-color: #fff;
            padding: 2rem;
            border-radius: 1rem;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease-in-out;
        }
        .dark .modal-content {
            background-color: #374151;
            color: #e5e7eb;
        }
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .close-modal {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
            font-size: 2rem;
            font-weight: bold;
            color: #6b7280;
            cursor: pointer;
        }
        .close-modal:hover {
            color: #000;
        }
        .dark .close-modal:hover {
            color: #fff;
        }
        
        /* Botão de Tema */
        .theme-toggle {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #22c55e;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 100;
            transition: all 0.3s ease;
        }
        .theme-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        /* ===== PLANEJADOR DE HORTA ===== */
        .garden-planner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .garden-canvas {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border: 2px dashed #22c55e;
            border-radius: 1rem;
            padding: 1rem;
            min-height: 400px;
            position: relative;
            overflow: auto;
        }
        .dark .garden-canvas {
            background: linear-gradient(135deg, #064e3b, #047857);
            border-color: #10b981;
        }
        .plant-slot {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin: 0.5rem;
            padding: 0.5rem;
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 0.5rem;
            text-align: center;
            cursor: grab;
            transition: all 0.3s ease;
        }
        .plant-slot:hover {
            border-color: #22c55e;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
        }
        .plant-slot.active {
            background: #f0fdf4;
            border-color: #22c55e;
        }
        
        /* ===== CALENDÁRIO DE PLANTIO ===== */
        .planting-calendar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin-top: 1rem;
        }
        .season-box {
            padding: 1rem;
            border-radius: 0.75rem;
            text-align: center;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        .season-box:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .season-spring { background: linear-gradient(135deg, #dcfce7, #86efac); color: #166534; border-color: #22c55e; }
        .season-summer { background: linear-gradient(135deg, #fef3c7, #fcd34d); color: #92400e; border-color: #f59e0b; }
        .season-autumn { background: linear-gradient(135deg, #fed7aa, #fb923c); color: #92400e; border-color: #f97316; }
        .season-winter { background: linear-gradient(135deg, #dbeafe, #93c5fd); color: #1e40af; border-color: #3b82f6; }
        
        /* ===== GUIA DE CONSÓRCIOS ===== */
        .consortium-network {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .consortium-card {
            background: linear-gradient(135deg, #f0fdf4, #dbeafe);
            border: 2px solid #22c55e;
            border-radius: 0.75rem;
            padding: 1rem;
            text-align: center;
            transition: all 0.3s ease;
        }
        .consortium-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
        }
        .consortium-badge {
            display: inline-block;
            background: #22c55e;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            margin: 0.25rem;
        }
        
        /* ===== RECEITAS ===== */
        .recipes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .recipe-card {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        .dark .recipe-card {
            background: #374151;
        }
        .recipe-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .recipe-header {
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1rem;
            text-align: center;
            font-weight: 600;
        }
        .recipe-body {
            padding: 1rem;
        }
        .recipe-ingredients {
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 0.5rem;
        }
        .recipe-nutrition {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-top: 0.5rem;
            font-size: 0.75rem;
        }
        
        /* ===== COMPARADOR ===== */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .comparison-table {
            background: #374151;
        }
        .comparison-table th, .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        .dark .comparison-table th, .dark .comparison-table td {
            border-bottom-color: #6b7280;
        }
        .comparison-table th {
            background: #f3f4f6;
            font-weight: 600;
        }
        .dark .comparison-table th {
            background: #4b5563;
        }
        
        /* ===== ACHIEVEMENTS ===== */
        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .achievement-badge {
            text-align: center;
            padding: 1rem;
            border-radius: 0.75rem;
            background: #f3f4f6;
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .achievement-badge {
            background: #4b5563;
            border-color: #6b7280;
        }
        .achievement-badge.unlocked {
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            border-color: #f59e0b;
            transform: scale(1.05);
        }
        .achievement-badge:hover {
            transform: scale(1.1);
        }
        .achievement-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        .achievement-name {
            font-size: 0.75rem;
            font-weight: 600;
            color: #6b7280;
        }
        .achievement-badge.unlocked .achievement-name {
            color: #92400e;
        }
        
        /* ===== DASHBOARD ===== */
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .dashboard-card {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            border-left: 4px solid #22c55e;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .dashboard-card {
            background: #374151;
        }
        .dashboard-value {
            font-size: 2rem;
            font-weight: bold;
            color: #22c55e;
            margin: 0.5rem 0;
        }
        .dashboard-label {
            font-size: 0.875rem;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        /* ===== NOTIFICAÇÕES ===== */
        .notification {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInUp 0.3s ease-out;
            z-index: 1001;
            max-width: 300px;
        }
        .dark .notification {
            background: #374151;
            color: #e5e7eb;
        }
        @keyframes slideInUp {
            from { transform: translateY(100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .notification.success {
            border-left: 4px solid #22c55e;
        }
        .notification.warning {
            border-left: 4px solid #f59e0b;
        }
        .notification.info {
            border-left: 4px solid #3b82f6;
        }
        
        /* ===== RANKING ===== */
        .ranking-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        .ranking-row {
            border-bottom: 1px solid #e5e7eb;
            padding: 1rem;
            display: grid;
            grid-template-columns: 50px 1fr 100px;
            gap: 1rem;
            align-items: center;
        }
        .dark .ranking-row {
            border-bottom-color: #6b7280;
        }
        .ranking-position {
            font-weight: bold;
            font-size: 1.25rem;
            text-align: center;
        }
        .ranking-position.first { color: #fbbf24; }
        .ranking-position.second { color: #a8a29e; }
        .ranking-position.third { color: #d97706; }
        .ranking-points {
            font-weight: 600;
            color: #22c55e;
        }
        
        /* ===== ANIMAÇÕES AVANÇADAS ===== */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
            50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8); }
        }
        .pulse { animation: pulse 2s infinite; }
        .bounce { animation: bounce 1s infinite; }
        .glow { animation: glow 2s infinite; }
        
        /* ===== TABS ===== */
        .tabs-container {
            margin-top: 1rem;
        }
        .tabs-nav {
            display: flex;
            gap: 0.5rem;
            border-bottom: 2px solid #e5e7eb;
            overflow-x: auto;
        }
        .dark .tabs-nav {
            border-bottom-color: #6b7280;
        }
        .tab-button {
            padding: 0.75rem 1.5rem;
            background: none;
            border: none;
            border-bottom: 3px solid transparent;
            color: #6b7280;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .tab-button:hover {
            color: #22c55e;
        }
        .tab-button.active {
            color: #22c55e;
            border-bottom-color: #22c55e;
        }
        .tab-content {
            display: none;
            animation: fadeIn 0.3s ease-in-out;
        }
        .tab-content.active {
            display: block;
        }
        
        /* ===== LOJA ===== */
        .shop-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .shop-item {
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 0.75rem;
            padding: 1rem;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .shop-item {
            background: #374151;
            border-color: #6b7280;
        }
        .shop-item:hover {
            border-color: #22c55e;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
        }
        .shop-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        .shop-price {
            color: #22c55e;
            font-weight: 600;
            margin-top: 0.5rem;
        }

        /* ===== GRÁFICOS ===== */
        .chart-container {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
        }
        .dark .chart-container {
            background: #374151;
        }
        
        /* ===== MODAL DETALHES PLANTA ===== */
        .plant-detail-modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            animation: fadeIn 0.3s ease-in-out;
        }
        .plant-detail-modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .plant-detail-content {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            max-width: 700px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease-in-out;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .dark .plant-detail-content {
            background: #374151;
            color: #e5e7eb;
        }
        .close-detail {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
            font-size: 2rem;
            cursor: pointer;
            color: #6b7280;
        }
        .close-detail:hover {
            color: #000;
        }
        .dark .close-detail:hover {
            color: #fff;
        }
        
        /* ===== ACHIEVEMENTS VISUAL ===== */
        .achievements-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .achievement-item {
            text-align: center;
            padding: 1.5rem;
            border-radius: 0.75rem;
            background: #f3f4f6;
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .achievement-item {
            background: #4b5563;
            border-color: #6b7280;
        }
        .achievement-item.unlocked {
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            border-color: #f59e0b;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
        .achievement-item:hover {
            transform: translateY(-4px);
        }
        .achievement-icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        .achievement-title {
            font-weight: 600;
            font-size: 0.875rem;
            color: #1f2937;
            margin-bottom: 0.25rem;
        }
        .dark .achievement-title {
            color: #e5e7eb;
        }
        .achievement-desc {
            font-size: 0.75rem;
            color: #6b7280;
        }
        
        /* ===== LOJA VISUAL ===== */
        .shop-products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .shop-product {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .shop-product {
            background: #374151;
        }
        .shop-product:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .shop-product-header {
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1.5rem;
            text-align: center;
            font-size: 2.5rem;
        }
        .shop-product-body {
            padding: 1rem;
        }
        .shop-product-name {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .shop-product-name {
            color: #e5e7eb;
        }
        .shop-product-desc {
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 1rem;
        }
        .shop-product-price {
            font-size: 1.25rem;
            font-weight: bold;
            color: #22c55e;
            margin-bottom: 0.75rem;
        }
        .buy-button {
            width: 100%;
            padding: 0.5rem;
            background: #22c55e;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .buy-button:hover {
            background: #16a34a;
            transform: scale(1.02);
        }
        
        /* ===== RANKING VISUAL ===== */
        .ranking-list {
            margin-top: 1rem;
        }
        .ranking-item {
            display: grid;
            grid-template-columns: 60px 1fr 100px;
            gap: 1rem;
            padding: 1rem;
            background: white;
            border-radius: 0.75rem;
            margin-bottom: 0.75rem;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .dark .ranking-item {
            background: #374151;
        }
        .ranking-position {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        .ranking-position.gold { color: #fbbf24; }
        .ranking-position.silver { color: #a8a29e; }
        .ranking-position.bronze { color: #d97706; }
        .ranking-info {
            display: flex;
            flex-direction: column;
        }
        .ranking-name {
            font-weight: 600;
            color: #1f2937;
        }
        .dark .ranking-name {
            color: #e5e7eb;
        }
        .ranking-plants {
            font-size: 0.875rem;
            color: #6b7280;
        }
        .ranking-score {
            font-weight: 600;
            color: #22c55e;
            text-align: right;
        }
        
        /* ===== RECEITAS VISUAL ===== */
        .recipes-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .recipe-item {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        .dark .recipe-item {
            background: #374151;
        }
        .recipe-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .recipe-header {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        .recipe-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .recipe-time {
            font-size: 0.875rem;
            opacity: 0.9;
        }
        .recipe-body {
            padding: 1rem;
        }
        .recipe-ingredients {
            margin-bottom: 1rem;
        }
        .recipe-ingredients-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .recipe-ingredients-title {
            color: #e5e7eb;
        }
        .recipe-ingredient {
            font-size: 0.875rem;
            color: #6b7280;
            padding: 0.25rem 0;
        }
        .recipe-nutrition {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-top: 0.75rem;
        }
        .nutrition-item {
            background: #f3f4f6;
            padding: 0.5rem;
            border-radius: 0.5rem;
            text-align: center;
            font-size: 0.75rem;
        }
        .dark .nutrition-item {
            background: #4b5563;
        }
        .nutrition-label {
            font-weight: 600;
            color: #1f2937;
        }
        .dark .nutrition-label {
            color: #e5e7eb;
        }
        .nutrition-value {
            color: #22c55e;
            font-weight: 600;
        }
        
        /* ===== COMPARADOR VISUAL ===== */
        .comparison-container {
            margin-top: 1rem;
            overflow-x: auto;
        }
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .comparison-table {
            background: #374151;
        }
        .comparison-table th {
            background: #f3f4f6;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            border-bottom: 2px solid #e5e7eb;
        }
        .dark .comparison-table th {
            background: #4b5563;
            border-bottom-color: #6b7280;
        }
        .comparison-table td {
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        .dark .comparison-table td {
            border-bottom-color: #6b7280;
        }
        .comparison-table tr:hover {
            background: #f9fafb;
        }
        .dark .comparison-table tr:hover {
            background: #4b5563;
        }
        
        /* ===== PRAGAS VISUAL ===== */
        .pests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .pest-card {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #ef4444;
        }
        .dark .pest-card {
            background: #374151;
        }
        .pest-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.75rem;
        }
        .dark .pest-name {
            color: #e5e7eb;
        }
        .pest-plants {
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 1rem;
        }
        .pest-solutions {
            margin-top: 1rem;
        }
        .pest-solutions-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .pest-solutions-title {
            color: #e5e7eb;
        }
        .solution-item {
            background: #f0fdf4;
            color: #166534;
            padding: 0.5rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            display: inline-block;
            margin-right: 0.5rem;
        }
        
        /* ===== PLANEJADOR VISUAL ===== */
        .garden-planner-canvas {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border: 3px dashed #22c55e;
            border-radius: 1rem;
            padding: 2rem;
            min-height: 500px;
            margin-top: 1rem;
            position: relative;
            overflow: auto;
        }
        .dark .garden-planner-canvas {
            background: linear-gradient(135deg, #064e3b, #047857);
            border-color: #10b981;
        }
        .plant-position {
            display: inline-block;
            width: 100px;
            height: 100px;
            margin: 1rem;
            padding: 1rem;
            background: white;
            border: 2px solid #22c55e;
            border-radius: 0.75rem;
            text-align: center;
            cursor: move;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(34, 197, 94, 0.2);
        }
        .plant-position:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }
        .plant-icon {
            font-size: 2rem;
            margin-bottom: 0.25rem;
        }
        .plant-name {
            font-size: 0.75rem;
            font-weight: 600;
            color: #1f2937;
        }
        
        /* ===== ANIMAÇÕES MELHORADAS ===== */
        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
        }
        .slide-down { animation: slideDown 0.3s ease-out; }
        .pop-in { animation: popIn 0.4s ease-out; }
        
        /* ===== CALCULADORA CO2 ===== */
        .calculator-form {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin-top: 1rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .calculator-form {
            background: #374151;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-label {
            display: block;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .form-label {
            color: #e5e7eb;
        }
        .form-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
        .dark .form-input {
            background: #4b5563;
            border-color: #6b7280;
            color: #e5e7eb;
        }
        .form-input:focus {
            outline: none;
            border-color: #22c55e;
            box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }
        .result-box {
            background: #f0fdf4;
            border: 2px solid #22c55e;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-top: 1rem;
            text-align: center;
        }
        .dark .result-box {
            background: #064e3b;
            border-color: #10b981;
        }
        .result-value {
            font-size: 2rem;
            font-weight: bold;
            color: #22c55e;
            margin: 0.5rem 0;
        }
        .result-label {
            color: #6b7280;
            font-size: 0.875rem;
        }

        /* ===== GRÁFICOS ===== */
        .chart-container {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
        }
        .dark .chart-container {
            background: #374151;
        }
        
        /* ===== MODAL DETALHES PLANTA ===== */
        .plant-detail-modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            animation: fadeIn 0.3s ease-in-out;
        }
        .plant-detail-modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .plant-detail-content {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            max-width: 700px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease-in-out;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .dark .plant-detail-content {
            background: #374151;
            color: #e5e7eb;
        }
        .close-detail {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
            font-size: 2rem;
            cursor: pointer;
            color: #6b7280;
        }
        .close-detail:hover {
            color: #000;
        }
        .dark .close-detail:hover {
            color: #fff;
        }
        
        /* ===== ACHIEVEMENTS VISUAL ===== */
        .achievements-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        .achievement-item {
            text-align: center;
            padding: 1.5rem;
            border-radius: 0.75rem;
            background: #f3f4f6;
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .achievement-item {
            background: #4b5563;
            border-color: #6b7280;
        }
        .achievement-item.unlocked {
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            border-color: #f59e0b;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
        .achievement-item:hover {
            transform: translateY(-4px);
        }
        .achievement-icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        .achievement-title {
            font-weight: 600;
            font-size: 0.875rem;
            color: #1f2937;
            margin-bottom: 0.25rem;
        }
        .dark .achievement-title {
            color: #e5e7eb;
        }
        .achievement-desc {
            font-size: 0.75rem;
            color: #6b7280;
        }
        
        /* ===== LOJA VISUAL ===== */
        .shop-products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .shop-product {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .dark .shop-product {
            background: #374151;
        }
        .shop-product:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .shop-product-header {
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            padding: 1.5rem;
            text-align: center;
            font-size: 2.5rem;
        }
        .shop-product-body {
            padding: 1rem;
        }
        .shop-product-name {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .shop-product-name {
            color: #e5e7eb;
        }
        .shop-product-desc {
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 1rem;
        }
        .shop-product-price {
            font-size: 1.25rem;
            font-weight: bold;
            color: #22c55e;
            margin-bottom: 0.75rem;
        }
        .buy-button {
            width: 100%;
            padding: 0.5rem;
            background: #22c55e;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .buy-button:hover {
            background: #16a34a;
            transform: scale(1.02);
        }
        
        /* ===== RANKING VISUAL ===== */
        .ranking-list {
            margin-top: 1rem;
        }
        .ranking-item {
            display: grid;
            grid-template-columns: 60px 1fr 100px;
            gap: 1rem;
            padding: 1rem;
            background: white;
            border-radius: 0.75rem;
            margin-bottom: 0.75rem;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .dark .ranking-item {
            background: #374151;
        }
        .ranking-position {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        .ranking-position.gold { color: #fbbf24; }
        .ranking-position.silver { color: #a8a29e; }
        .ranking-position.bronze { color: #d97706; }
        .ranking-info {
            display: flex;
            flex-direction: column;
        }
        .ranking-name {
            font-weight: 600;
            color: #1f2937;
        }
        .dark .ranking-name {
            color: #e5e7eb;
        }
        .ranking-plants {
            font-size: 0.875rem;
            color: #6b7280;
        }
        .ranking-score {
            font-weight: 600;
            color: #22c55e;
            text-align: right;
        }
        
        /* ===== RECEITAS VISUAL ===== */
        .recipes-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .recipe-item {
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        .dark .recipe-item {
            background: #374151;
        }
        .recipe-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .recipe-header {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        .recipe-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .recipe-time {
            font-size: 0.875rem;
            opacity: 0.9;
        }
        .recipe-body {
            padding: 1rem;
        }
        .recipe-ingredients {
            margin-bottom: 1rem;
        }
        .recipe-ingredients-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .recipe-ingredients-title {
            color: #e5e7eb;
        }
        .recipe-ingredient {
            font-size: 0.875rem;
            color: #6b7280;
            padding: 0.25rem 0;
        }
        .recipe-nutrition {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-top: 0.75rem;
        }
        .nutrition-item {
            background: #f3f4f6;
            padding: 0.5rem;
            border-radius: 0.5rem;
            text-align: center;
            font-size: 0.75rem;
        }
        .dark .nutrition-item {
            background: #4b5563;
        }
        .nutrition-label {
            font-weight: 600;
            color: #1f2937;
        }
        .dark .nutrition-label {
            color: #e5e7eb;
        }
        .nutrition-value {
            color: #22c55e;
            font-weight: 600;
        }
        
        /* ===== COMPARADOR VISUAL ===== */
        .comparison-container {
            margin-top: 1rem;
            overflow-x: auto;
        }
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .comparison-table {
            background: #374151;
        }
        .comparison-table th {
            background: #f3f4f6;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            border-bottom: 2px solid #e5e7eb;
        }
        .dark .comparison-table th {
            background: #4b5563;
            border-bottom-color: #6b7280;
        }
        .comparison-table td {
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        .dark .comparison-table td {
            border-bottom-color: #6b7280;
        }
        .comparison-table tr:hover {
            background: #f9fafb;
        }
        .dark .comparison-table tr:hover {
            background: #4b5563;
        }
        
        /* ===== PRAGAS VISUAL ===== */
        .pests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
        }
        .pest-card {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #ef4444;
        }
        .dark .pest-card {
            background: #374151;
        }
        .pest-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.75rem;
        }
        .dark .pest-name {
            color: #e5e7eb;
        }
        .pest-plants {
            font-size: 0.875rem;
            color: #6b7280;
            margin-bottom: 1rem;
        }
        .pest-solutions {
            margin-top: 1rem;
        }
        .pest-solutions-title {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .pest-solutions-title {
            color: #e5e7eb;
        }
        .solution-item {
            background: #f0fdf4;
            color: #166534;
            padding: 0.5rem 0.75rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            display: inline-block;
            margin-right: 0.5rem;
        }
        
        /* ===== PLANEJADOR VISUAL ===== */
        .garden-planner-canvas {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            border: 3px dashed #22c55e;
            border-radius: 1rem;
            padding: 2rem;
            min-height: 500px;
            margin-top: 1rem;
            position: relative;
            overflow: auto;
        }
        .dark .garden-planner-canvas {
            background: linear-gradient(135deg, #064e3b, #047857);
            border-color: #10b981;
        }
        .plant-position {
            display: inline-block;
            width: 100px;
            height: 100px;
            margin: 1rem;
            padding: 1rem;
            background: white;
            border: 2px solid #22c55e;
            border-radius: 0.75rem;
            text-align: center;
            cursor: move;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(34, 197, 94, 0.2);
        }
        .plant-position:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }
        .plant-icon {
            font-size: 2rem;
            margin-bottom: 0.25rem;
        }
        .plant-name {
            font-size: 0.75rem;
            font-weight: 600;
            color: #1f2937;
        }
        
        /* ===== ANIMAÇÕES MELHORADAS ===== */
        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
        }
        .slide-down { animation: slideDown 0.3s ease-out; }
        .pop-in { animation: popIn 0.4s ease-out; }
        
        /* ===== CALCULADORA CO2 ===== */
        .calculator-form {
            background: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            margin-top: 1rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .dark .calculator-form {
            background: #374151;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-label {
            display: block;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }
        .dark .form-label {
            color: #e5e7eb;
        }
        .form-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
        .dark .form-input {
            background: #4b5563;
            border-color: #6b7280;
            color: #e5e7eb;
        }
        .form-input:focus {
            outline: none;
            border-color: #22c55e;
            box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }
        .result-box {
            background: #f0fdf4;
            border: 2px solid #22c55e;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-top: 1rem;
            text-align: center;
        }
        .dark .result-box {
            background: #064e3b;
            border-color: #10b981;
        }
        .result-value {
            font-size: 2rem;
            font-weight: bold;
            color: #22c55e;
            margin: 0.5rem 0;
        }
        .result-label {
            color: #6b7280;
            font-size: 0.875rem;
        }
</style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div id="app" class="mx-auto">

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
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6 w-full">
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

        <div class="mb-6 border-b border-gray-200 dark:border-gray-600 overflow-x-auto w-full">
            <nav class="flex space-x-2 sm:space-x-4 pb-1" aria-label="Tabs" style="min-width: fit-content;">
                <button onclick="changeTab('dashboard')" class="tab-btn tab-dashboard tab-active py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-home mr-1"></i><span class="hidden sm:inline">Dashboard</span><span class="sm:hidden">Dash</span>
                </button>
                <button onclick="changeTab('garden')" class="tab-btn tab-garden py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-seedling mr-1"></i><span class="hidden sm:inline">Minha Horta</span><span class="sm:hidden">Horta</span>
                </button>
                <button onclick="changeTab('catalog')" class="tab-btn tab-catalog py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-book mr-1"></i><span class="hidden sm:inline">Catálogo</span><span class="sm:hidden">Cat</span>
                </button>
                <button onclick="changeTab('carbon')" class="tab-btn tab-carbon py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-calculator mr-1"></i><span class="hidden sm:inline">Calculadora CO₂</span><span class="sm:hidden">CO₂</span>
                </button>
                <button onclick="changeTab('shop')" class="tab-btn tab-shop py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-store mr-1"></i><span class="hidden sm:inline">Loja Verde</span><span class="sm:hidden">Loja</span>
                </button>
                <button onclick="changeTab('achievements')" class="tab-btn tab-achievements py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-trophy mr-1"></i><span class="hidden sm:inline">Conquistas</span><span class="sm:hidden">Conq</span>
                </button>
                <button onclick="changeTab('community')" class="tab-btn tab-community py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-500">
                    <i class="fa-solid fa-users mr-1"></i><span class="hidden sm:inline">Comunidade</span><span class="sm:hidden">Comun</span>
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
        "id": "watermelon",
        "name": "Melancia",
        "icon": "🍉",
        "daysToHarvest": 90,
        "basePoints": 45,
        "season": "Primavera/Verão",
        "type": "Fruto",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 3.5,
        "benefits": [
            "Hidratação",
            "Rica em licopeno",
            "Crescimento rasteiro"
        ],
        "sintropicNotes": "Ocupa o estrato rasteiro, protegendo o solo com suas folhas largas.",
        "notes": "Necessita de bastante sol e espaço.",
        "companions": [
            "Milho",
            "Girassol"
        ],
        "waterFrequency": 3
    },
    {
        "id": "pumpkin",
        "name": "Abóbora",
        "icon": "🎃",
        "daysToHarvest": 120,
        "basePoints": 55,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Anual",
        "carbonSequestration": 5.2,
        "benefits": [
            "Cobertura de solo",
            "Rica em vitamina A",
            "Versátil"
        ],
        "sintropicNotes": "Excelente para cobrir o solo rapidamente e manter a umidade.",
        "notes": "Pode ser consorciada com milho e feijão (Milpa).",
        "companions": [
            "Milho",
            "Feijão"
        ],
        "waterFrequency": 2
    },
    {
        "id": "pepper",
        "name": "Pimentão",
        "icon": "🫑",
        "daysToHarvest": 120,
        "basePoints": 50,
        "season": "Primavera/Verão",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 2.8,
        "benefits": [
            "Vitamina C",
            "Antioxidante",
            "Produção contínua"
        ],
        "sintropicNotes": "Beneficia-se de solo rico em matéria orgânica e sombreamento parcial.",
        "notes": "Sensível a geadas.",
        "companions": [
            "Manjericão",
            "Cebola"
        ],
        "waterFrequency": 2
    },
    {
        "id": "broccoli",
        "name": "Brócolis",
        "icon": "🥦",
        "daysToHarvest": 100,
        "basePoints": 65,
        "season": "Outono/Inverno",
        "type": "Flor",
        "stratum": "Médio",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 3.2,
        "benefits": [
            "Superalimento",
            "Rico em ferro",
            "Melhora o solo"
        ],
        "sintropicNotes": "Exige solo bem adubado e clima ameno.",
        "notes": "Colha antes das flores abrirem.",
        "companions": [
            "Alecrim",
            "Sálvia"
        ],
        "waterFrequency": 2
    },
    {
        "id": "pigeon_pea",
        "name": "Feijão Guandu",
        "icon": "🌿",
        "daysToHarvest": 180,
        "basePoints": 70,
        "season": "Ano Todo",
        "type": "Grão",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 12.5,
        "benefits": [
            "Fixação de nitrogênio",
            "Quebra-vento",
            "Ração animal"
        ],
        "sintropicNotes": "Planta fundamental para recuperação de solos e fornecimento de biomassa.",
        "notes": "Pode ser podado drasticamente para fornecer cobertura morta.",
        "companions": [
            "Milho",
            "Mandioca"
        ],
        "waterFrequency": 1
    },
    {
        "id": "crotalaria",
        "name": "Crotalária",
        "icon": "🌼",
        "daysToHarvest": 90,
        "basePoints": 40,
        "season": "Ano Todo",
        "type": "Flor",
        "stratum": "Médio",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Anual",
        "carbonSequestration": 8.0,
        "benefits": [
            "Fixação de nitrogênio",
            "Controle de nematoides",
            "Atrai polinizadores"
        ],
        "sintropicNotes": "Usada como adubação verde para preparar o solo para culturas exigentes.",
        "notes": "Deve ser manejada antes da semente deitar.",
        "companions": [
            "Café",
            "Citros"
        ],
        "waterFrequency": 2
    },
    {
        "id": "banana",
        "name": "Banana",
        "icon": "🍌",
        "daysToHarvest": 365,
        "basePoints": 120,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Alto",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 25.0,
        "benefits": [
            "Produção de biomassa",
            "Retenção de água",
            "Alimento energético"
        ],
        "sintropicNotes": "O 'tanque de água' da agrofloresta. Essencial para manter a umidade do sistema.",
        "notes": "Exige muita matéria orgânica e potássio.",
        "companions": [
            "Café",
            "Cacau"
        ],
        "waterFrequency": 3
    },
    {
        "id": "papaya",
        "name": "Mamão",
        "icon": "🥭",
        "daysToHarvest": 270,
        "basePoints": 90,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Emergente",
        "succession": "Secundária",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 15.0,
        "benefits": [
            "Crescimento rápido",
            "Rico em enzimas",
            "Ocupa pouco espaço horizontal"
        ],
        "sintropicNotes": "Planta de ciclo curto que ocupa o estrato emergente temporariamente.",
        "notes": "Sensível ao excesso de água nas raízes.",
        "companions": [
            "Banana",
            "Café"
        ],
        "waterFrequency": 2
    },
    {
        "id": "mango",
        "name": "Manga",
        "icon": "🥭",
        "daysToHarvest": 1095,
        "basePoints": 300,
        "season": "Verão",
        "type": "Fruto",
        "stratum": "Alto",
        "succession": "Clímax",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 85.0,
        "benefits": [
            "Sombra densa",
            "Longevidade",
            "Fruto valorizado"
        ],
        "sintropicNotes": "Árvore de grande porte que define a estrutura final do sistema.",
        "notes": "Necessita de podas de formação nos primeiros anos.",
        "companions": [
            "Citros",
            "Goiaba"
        ],
        "waterFrequency": 1
    },
    {
        "id": "jabuticaba",
        "name": "Jabuticaba",
        "icon": "🟣",
        "daysToHarvest": 1825,
        "basePoints": 500,
        "season": "Primavera",
        "type": "Fruto",
        "stratum": "Baixo",
        "succession": "Clímax",
        "difficulty": "difícil",
        "lifecycle": "Perene",
        "carbonSequestration": 45.0,
        "benefits": [
            "Nativa",
            "Altamente nutritiva",
            "Ornamental"
        ],
        "sintropicNotes": "Planta de sub-bosque que aprecia sombra parcial e solo muito úmido.",
        "notes": "Crescimento lento, mas muito recompensador.",
        "companions": [
            "Café",
            "Samambaias"
        ],
        "waterFrequency": 4
    },
    {
        "id": "citrus",
        "name": "Limão",
        "icon": "🍋",
        "daysToHarvest": 730,
        "basePoints": 150,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 35.0,
        "benefits": [
            "Vitamina C",
            "Repelente natural",
            "Produção constante"
        ],
        "sintropicNotes": "Ocupa o estrato médio e beneficia-se da poda de árvores maiores.",
        "notes": "Vulnerável a pulgões se o solo estiver desequilibrado.",
        "companions": [
            "Goiaba",
            "Manjericão"
        ],
        "waterFrequency": 2
    },
    {
        "id": "avocado",
        "name": "Abacate",
        "icon": "🥑",
        "daysToHarvest": 1095,
        "basePoints": 250,
        "season": "Inverno/Primavera",
        "type": "Fruto",
        "stratum": "Alto",
        "succession": "Secundária",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 70.0,
        "benefits": [
            "Gorduras saudáveis",
            "Grande produção de biomassa",
            "Sombra"
        ],
        "sintropicNotes": "Fornece grande quantidade de folhas para cobertura de solo.",
        "notes": "Precisa de boa drenagem.",
        "companions": [
            "Café",
            "Banana"
        ],
        "waterFrequency": 2
    },
    {
        "id": "jacaranda",
        "name": "Jacarandá",
        "icon": "🌳",
        "daysToHarvest": 3650,
        "basePoints": 1000,
        "season": "Primavera",
        "type": "Madeira",
        "stratum": "Alto",
        "succession": "Clímax",
        "difficulty": "difícil",
        "lifecycle": "Perene",
        "carbonSequestration": 150.0,
        "benefits": [
            "Madeira nobre",
            "Beleza cênica",
            "Preservação"
        ],
        "sintropicNotes": "Árvore de longo prazo que traz estabilidade e biodiversidade ao sistema.",
        "notes": "Espécie protegida e de alto valor ecológico.",
        "companions": [
            "Nativas da Mata Atlântica"
        ],
        "waterFrequency": 1
    },
    {
        "id": "embauba",
        "name": "Embaúba",
        "icon": "🍃",
        "daysToHarvest": 1825,
        "basePoints": 200,
        "season": "Ano Todo",
        "type": "Nativa",
        "stratum": "Emergente",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 40.0,
        "benefits": [
            "Atrai fauna",
            "Crescimento rápido",
            "Recuperação de áreas"
        ],
        "sintropicNotes": "Planta pioneira que 'abre caminho' para as espécies de clímax.",
        "notes": "Suas folhas são excelente adubo.",
        "companions": [
            "Ingá",
            "Sangra d'água"
        ],
        "waterFrequency": 2
    },
    {
        "id": "inga",
        "name": "Ingá",
        "icon": "🌱",
        "daysToHarvest": 730,
        "basePoints": 180,
        "season": "Verão",
        "type": "Fruto",
        "stratum": "Alto",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 55.0,
        "benefits": [
            "Fixação de nitrogênio",
            "Fruto comestível",
            "Sombra rala"
        ],
        "sintropicNotes": "Leguminosa arbórea excelente para sombreamento de café e cacau.",
        "notes": "Atrai muitas abelhas e pássaros.",
        "companions": [
            "Café",
            "Cacau"
        ],
        "waterFrequency": 2
    },
    {
        "id": "marigold",
        "name": "Calêndula",
        "icon": "🌼",
        "daysToHarvest": 60,
        "basePoints": 35,
        "season": "Ano Todo",
        "type": "Flor",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Anual",
        "carbonSequestration": 1.5,
        "benefits": [
            "Medicinal",
            "Repele pragas",
            "Ornamental"
        ],
        "sintropicNotes": "Planta companheira essencial para o controle biológico na horta.",
        "notes": "As pétalas são comestíveis.",
        "companions": [
            "Tomate",
            "Hortaliças"
        ],
        "waterFrequency": 2
    },
    {
        "id": "sunflower",
        "name": "Girassol",
        "icon": "🌻",
        "daysToHarvest": 90,
        "basePoints": 50,
        "season": "Primavera/Verão",
        "type": "Flor",
        "stratum": "Alto",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Anual",
        "carbonSequestration": 10.0,
        "benefits": [
            "Atrai polinizadores",
            "Produção de óleo/sementes",
            "Descompacta o solo"
        ],
        "sintropicNotes": "Sua raiz profunda ajuda a estruturar o solo para as próximas culturas.",
        "notes": "Siga o sol!",
        "companions": [
            "Milho",
            "Feijão"
        ],
        "waterFrequency": 3
    },
    {
        "id": "rosemary",
        "name": "Alecrim",
        "icon": "🌿",
        "daysToHarvest": 120,
        "basePoints": 40,
        "season": "Ano Todo",
        "type": "Folha",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 4.5,
        "benefits": [
            "Temperos",
            "Medicinal",
            "Resistente"
        ],
        "sintropicNotes": "Planta rústica que ajuda a repelir insetos indesejados com seu aroma forte.",
        "notes": "Não gosta de solo encharcado.",
        "companions": [
            "Sálvia",
            "Cenoura"
        ],
        "waterFrequency": 1
    },
    {
        "id": "strawberry",
        "name": "Morango",
        "icon": "🍓",
        "daysToHarvest": 90,
        "basePoints": 55,
        "season": "Inverno/Primavera",
        "type": "Fruto",
        "stratum": "Rasteiro",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 1.2,
        "benefits": [
            "Antioxidante",
            "Ocupa pouco espaço",
            "Saboroso"
        ],
        "sintropicNotes": "Ocupa o estrato rasteiro sob a sombra de plantas maiores.",
        "notes": "Gosta de solo rico em matéria orgânica.",
        "companions": [
            "Alface",
            "Espinafre"
        ],
        "waterFrequency": 3
    },
    {
        "id": "garlic",
        "name": "Alho",
        "icon": "🧄",
        "daysToHarvest": 150,
        "basePoints": 60,
        "season": "Outono/Inverno",
        "type": "Raiz",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 2.0,
        "benefits": [
            "Antibiótico natural",
            "Repele pragas",
            "Longa conservação"
        ],
        "sintropicNotes": "Excelente para bordaduras de canteiros para proteção fitossanitária.",
        "notes": "Precisa de frio para formar o bulbo.",
        "companions": [
            "Tomate",
            "Rosa"
        ],
        "waterFrequency": 1
    },
    {
        "id": "onion",
        "name": "Cebola",
        "icon": "🧅",
        "daysToHarvest": 140,
        "basePoints": 50,
        "season": "Outono/Inverno",
        "type": "Raiz",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 2.2,
        "benefits": [
            "Base culinária",
            "Anti-inflamatória",
            "Fácil armazenamento"
        ],
        "sintropicNotes": "Ajuda a afastar insetos com seu odor característico.",
        "notes": "Não plante perto de feijões.",
        "companions": [
            "Cenoura",
            "Beterraba"
        ],
        "waterFrequency": 2
    },
    {
        "id": "beet",
        "name": "Beterraba",
        "icon": "🟣",
        "daysToHarvest": 70,
        "basePoints": 45,
        "season": "Ano Todo",
        "type": "Raiz",
        "stratum": "Baixo",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Anual",
        "carbonSequestration": 3.0,
        "benefits": [
            "Rica em ferro",
            "Folhas comestíveis",
            "Crescimento rápido"
        ],
        "sintropicNotes": "Pode ser plantada densamente entre plantas de ciclo mais longo.",
        "notes": "Gosta de solos leves.",
        "companions": [
            "Cebola",
            "Alface"
        ],
        "waterFrequency": 2
    },
    {
        "id": "cabbage",
        "name": "Repolho",
        "icon": "🥬",
        "daysToHarvest": 90,
        "basePoints": 50,
        "season": "Outono/Inverno",
        "type": "Folha",
        "stratum": "Médio",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 4.0,
        "benefits": [
            "Rico em fibras",
            "Resistente ao frio",
            "Grande volume"
        ],
        "sintropicNotes": "Exige muito nitrogênio, bom após leguminosas.",
        "notes": "Cuidado com a lagarta-da-couve.",
        "companions": [
            "Alecrim",
            "Hortelã"
        ],
        "waterFrequency": 3
    },
    {
        "id": "eggplant",
        "name": "Berinjela",
        "icon": "🍆",
        "daysToHarvest": 110,
        "basePoints": 55,
        "season": "Primavera/Verão",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Placenta",
        "difficulty": "médio",
        "lifecycle": "Anual",
        "carbonSequestration": 3.5,
        "benefits": [
            "Saúde do coração",
            "Baixa caloria",
            "Produtiva"
        ],
        "sintropicNotes": "Necessita de calor e sol pleno para produzir bem.",
        "notes": "Pode precisar de tutoramento.",
        "companions": [
            "Feijão",
            "Pimentão"
        ],
        "waterFrequency": 3
    },
    {
        "id": "sweet_potato",
        "name": "Batata Doce",
        "icon": "🍠",
        "daysToHarvest": 150,
        "basePoints": 70,
        "season": "Ano Todo",
        "type": "Raiz",
        "stratum": "Rasteiro",
        "succession": "Placenta",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 15.0,
        "benefits": [
            "Energia sustentada",
            "Excelente cobertura de solo",
            "Rústica"
        ],
        "sintropicNotes": "Uma das melhores plantas para cobrir o solo e suprimir ervas espontâneas.",
        "notes": "As folhas também são comestíveis e nutritivas.",
        "companions": [
            "Milho",
            "Mandioca"
        ],
        "waterFrequency": 2
    },
    {
        "id": "cassava",
        "name": "Mandioca",
        "icon": "🌿",
        "daysToHarvest": 300,
        "basePoints": 100,
        "season": "Ano Todo",
        "type": "Raiz",
        "stratum": "Alto",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 20.0,
        "benefits": [
            "Segurança alimentar",
            "Resistente à seca",
            "Biomassa"
        ],
        "sintropicNotes": "Planta estruturante da roça, fornece sombra leve para o estrato baixo.",
        "notes": "Pode ser colhida de 8 a 18 meses.",
        "companions": [
            "Feijão",
            "Milho"
        ],
        "waterFrequency": 1
    },
    {
        "id": "coffee",
        "name": "Café",
        "icon": "☕",
        "daysToHarvest": 1095,
        "basePoints": 400,
        "season": "Inverno",
        "type": "Fruto",
        "stratum": "Baixo",
        "succession": "Clímax",
        "difficulty": "difícil",
        "lifecycle": "Perene",
        "carbonSequestration": 30.0,
        "benefits": [
            "Valor comercial",
            "Aprecia sombra",
            "Nativa de sub-bosque"
        ],
        "sintropicNotes": "Planta clássica de sistemas agroflorestais, produz melhor sob sombra rala.",
        "notes": "Necessita de solo rico em matéria orgânica.",
        "companions": [
            "Banana",
            "Ingá"
        ],
        "waterFrequency": 2
    },
    {
        "id": "cocoa",
        "name": "Cacau",
        "icon": "🍫",
        "daysToHarvest": 1460,
        "basePoints": 450,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Baixo",
        "succession": "Clímax",
        "difficulty": "difícil",
        "lifecycle": "Perene",
        "carbonSequestration": 35.0,
        "benefits": [
            "Antioxidante",
            "Valor agregado",
            "Preservação de florestas"
        ],
        "sintropicNotes": "Cresce naturalmente sob a copa das árvores da Mata Atlântica (Cabruca).",
        "notes": "Sensível a ventos fortes e sol direto.",
        "companions": [
            "Banana",
            "Seringueira"
        ],
        "waterFrequency": 3
    },
    {
        "id": "guava",
        "name": "Goiaba",
        "icon": "🍐",
        "daysToHarvest": 730,
        "basePoints": 180,
        "season": "Verão",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 40.0,
        "benefits": [
            "Rica em vitamina C",
            "Rústica",
            "Atrai pássaros"
        ],
        "sintropicNotes": "Árvore muito adaptável que fornece frutos e lenha de poda.",
        "notes": "Cuidado com a mosca-das-frutas.",
        "companions": [
            "Citros",
            "Manga"
        ],
        "waterFrequency": 2
    },
    {
        "id": "acerola",
        "name": "Acerola",
        "icon": "🍒",
        "daysToHarvest": 365,
        "basePoints": 150,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 25.0,
        "benefits": [
            "Vitamina C extrema",
            "Produção rápida",
            "Ornamental"
        ],
        "sintropicNotes": "Arbusto produtivo que se encaixa bem em bordas e espaços médios.",
        "notes": "Gosta de sol e regas regulares.",
        "companions": [
            "Pitanga",
            "Goiaba"
        ],
        "waterFrequency": 3
    },
    {
        "id": "pitanga",
        "name": "Pitanga",
        "icon": "🍒",
        "daysToHarvest": 730,
        "basePoints": 200,
        "season": "Primavera",
        "type": "Fruto",
        "stratum": "Médio",
        "succession": "Secundária",
        "difficulty": "fácil",
        "lifecycle": "Perene",
        "carbonSequestration": 30.0,
        "benefits": [
            "Nativa",
            "Fruto saboroso",
            "Folhas medicinais"
        ],
        "sintropicNotes": "Excelente para atrair a fauna nativa e compor o estrato médio.",
        "notes": "Resistente e de fácil manejo.",
        "companions": [
            "Acerola",
            "Jabuticaba"
        ],
        "waterFrequency": 2
    },
    {
        "id": "passion_fruit",
        "name": "Maracujá",
        "icon": "🍇",
        "daysToHarvest": 240,
        "basePoints": 80,
        "season": "Ano Todo",
        "type": "Fruto",
        "stratum": "Alto",
        "succession": "Secundária",
        "difficulty": "médio",
        "lifecycle": "Perene",
        "carbonSequestration": 12.0,
        "benefits": [
            "Calmante natural",
            "Crescimento rápido",
            "Polinização por mamangavas"
        ],
        "sintropicNotes": "Trepadeira que utiliza as árvores maiores como suporte.",
        "notes": "Necessita de polinização manual se houver poucos insetos.",
        "companions": [
            "Milho",
            "Cerca viva"
        ],
        "waterFrequency": 3
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
    const items = greenShop[state.currentShopSection,
    {"id": "cassava", "name": "Mandioca", "icon": "\ud83c\udf3f", "daysToHarvest": 300, "basePoints": 100, "season": "Ano Todo", "type": "Raiz", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 20.0, "benefits": ["Seguran\u00e7a alimentar", "Resistente \u00e0 seca", "Biomassa"], "sintropicNotes": "Planta estruturante da ro\u00e7a, fornece sombra leve para o estrato baixo.", "notes": "Pode ser colhida de 8 a 18 meses.", "companions": ["Feij\u00e3o", "Milho"], "waterFrequency": 1},
    {"id": "coffee", "name": "Caf\u00e9", "icon": "\u2615", "daysToHarvest": 1095, "basePoints": 400, "season": "Inverno", "type": "Fruto", "stratum": "Baixo", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 30.0, "benefits": ["Valor comercial", "Aprecia sombra", "Nativa de sub-bosque"], "sintropicNotes": "Planta cl\u00e1ssica de sistemas agroflorestais, produz melhor sob sombra rala.", "notes": "Necessita de solo rico em mat\u00e9ria org\u00e2nica.", "companions": ["Banana", "Ing\u00e1"], "waterFrequency": 2},
    {"id": "cocoa", "name": "Cacau", "icon": "\ud83c\udf6b", "daysToHarvest": 1460, "basePoints": 450, "season": "Ano Todo", "type": "Fruto", "stratum": "Baixo", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 35.0, "benefits": ["Antioxidante", "Valor agregado", "Preserva\u00e7\u00e3o de florestas"], "sintropicNotes": "Cresce naturalmente sob a copa das \u00e1rvores da Mata Atl\u00e2ntica (Cabruca).", "notes": "Sens\u00edvel a ventos fortes e sol direto.", "companions": ["Banana", "Seringueira"], "waterFrequency": 3},
    {"id": "guava", "name": "Goiaba", "icon": "\ud83c\udf50", "daysToHarvest": 730, "basePoints": 180, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 40.0, "benefits": ["Rica em vitamina C", "R\u00fastica", "Atrai p\u00e1ssaros"], "sintropicNotes": "\u00c1rvore muito adapt\u00e1vel que fornece frutos e lenha de poda.", "notes": "Cuidado com a mosca-das-frutas.", "companions": ["Citros", "Manga"], "waterFrequency": 2},
    {"id": "acerola", "name": "Acerola", "icon": "\ud83c\udf52", "daysToHarvest": 365, "basePoints": 150, "season": "Ano Todo", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 25.0, "benefits": ["Vitamina C extrema", "Produ\u00e7\u00e3o r\u00e1pida", "Ornamental"], "sintropicNotes": "Arbusto produtivo que se encaixa bem em bordas e espa\u00e7os m\u00e9dios.", "notes": "Gosta de sol e regas regulares.", "companions": ["Pitanga", "Goiaba"], "waterFrequency": 3},
    {"id": "pitanga", "name": "Pitanga", "icon": "\ud83c\udf52", "daysToHarvest": 730, "basePoints": 200, "season": "Primavera", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 30.0, "benefits": ["Nativa", "Fruto saboroso", "Folhas medicinais"], "sintropicNotes": "Excelente para atrair a fauna nativa e compor o estrato m\u00e9dio.", "notes": "Resistente e de f\u00e1cil manejo.", "companions": ["Acerola", "Jabuticaba"], "waterFrequency": 2},
    {"id": "passion_fruit", "name": "Maracuj\u00e1", "icon": "\ud83c\udf47", "daysToHarvest": 240, "basePoints": 80, "season": "Ano Todo", "type": "Fruto", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 12.0, "benefits": ["Calmante natural", "Crescimento r\u00e1pido", "Poliniza\u00e7\u00e3o por mamangavas"], "sintropicNotes": "Trepadeira que utiliza as \u00e1rvores maiores como suporte.", "notes": "Necessita de poliniza\u00e7\u00e3o manual se houver poucos insetos.", "companions": ["Milho", "Cerca viva"], "waterFrequency": 3},
    {"id": "sweet_potato", "name": "Batata Doce", "icon": "\ud83c\udf60", "daysToHarvest": 150, "basePoints": 70, "season": "Ano Todo", "type": "Raiz", "stratum": "Rasteiro", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 15.0, "benefits": ["Energia sustentada", "Excelente cobertura de solo", "R\u00fastica"], "sintropicNotes": "Uma das melhores plantas para cobrir o solo e suprimir ervas espont\u00e2neas.", "notes": "As folhas tamb\u00e9m s\u00e3o comest\u00edveis e nutritivas.", "companions": ["Milho", "Mandioca"], "waterFrequency": 2},
    {"id": "eggplant", "name": "Berinjela", "icon": "\ud83c\udf46", "daysToHarvest": 110, "basePoints": 55, "season": "Primavera/Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 3.5, "benefits": ["Sa\u00fade do cora\u00e7\u00e3o", "Baixa caloria", "Produtiva"], "sintropicNotes": "Necessita de calor e sol pleno para produzir bem.", "notes": "Pode precisar de tutoramento.", "companions": ["Feij\u00e3o", "Piment\u00e3o"], "waterFrequency": 3},
    {"id": "cabbage", "name": "Repolho", "icon": "\ud83e\udd6c", "daysToHarvest": 90, "basePoints": 50, "season": "Outono/Inverno", "type": "Folha", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 4.0, "benefits": ["Rico em fibras", "Resistente ao frio", "Grande volume"], "sintropicNotes": "Exige muito nitrog\u00eanio, bom ap\u00f3s leguminosas.", "notes": "Cuidado com a lagarta-da-couve.", "companions": ["Alecrim", "Hortel\u00e3"], "waterFrequency": 3},
    {"id": "beet", "name": "Beterraba", "icon": "\ud83d\udfe3", "daysToHarvest": 70, "basePoints": 45, "season": "Ano Todo", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 3.0, "benefits": ["Rica em ferro", "Folhas comest\u00edveis", "Crescimento r\u00e1pido"], "sintropicNotes": "Pode ser plantada densamente entre plantas de ciclo mais longo.", "notes": "Gosta de solos leves.", "companions": ["Cebola", "Alface"], "waterFrequency": 2},
    {"id": "onion", "name": "Cebola", "icon": "\ud83e\uddc5", "daysToHarvest": 140, "basePoints": 50, "season": "Outono/Inverno", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 2.2, "benefits": ["Base culin\u00e1ria", "Anti-inflamat\u00f3ria", "F\u00e1cil armazenamento"], "sintropicNotes": "Ajuda a afastar insetos com seu odor caracter\u00edstico.", "notes": "N\u00e3o plante perto de feij\u00f5es.", "companions": ["Cenoura", "Beterraba"], "waterFrequency": 2},
    {"id": "garlic", "name": "Alho", "icon": "\ud83e\uddc4", "daysToHarvest": 150, "basePoints": 60, "season": "Outono/Inverno", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 2.0, "benefits": ["Antibi\u00f3tico natural", "Repele pragas", "Longa conserva\u00e7\u00e3o"], "sintropicNotes": "Excelente para bordaduras de canteiros para prote\u00e7\u00e3o fitossanit\u00e1ria.", "notes": "Precisa de frio para formar o bulbo.", "companions": ["Tomate", "Rosa"], "waterFrequency": 1},
    {"id": "strawberry", "name": "Morango", "icon": "\ud83c\udf53", "daysToHarvest": 90, "basePoints": 55, "season": "Inverno/Primavera", "type": "Fruto", "stratum": "Rasteiro", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 1.2, "benefits": ["Antioxidante", "Ocupa pouco espa\u00e7o", "Saboroso"], "sintropicNotes": "Ocupa o estrato rasteiro sob a sombra de plantas maiores.", "notes": "Gosta de solo rico em mat\u00e9ria org\u00e2nica.", "companions": ["Alface", "Espinafre"], "waterFrequency": 3},
    {"id": "rosemary", "name": "Alecrim", "icon": "\ud83c\udf3f", "daysToHarvest": 120, "basePoints": 40, "season": "Ano Todo", "type": "Folha", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 4.5, "benefits": ["Temperos", "Medicinal", "Resistente"], "sintropicNotes": "Planta r\u00fastica que ajuda a repelir insetos indesejados com seu aroma forte.", "notes": "N\u00e3o gosta de solo encharcado.", "companions": ["S\u00e1lvia", "Cenoura"], "waterFrequency": 1},
    {"id": "sunflower_new", "name": "Girassol", "icon": "\ud83c\udf3b", "daysToHarvest": 90, "basePoints": 50, "season": "Primavera/Ver\u00e3o", "type": "Flor", "stratum": "Alto", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 10.0, "benefits": ["Atrai polinizadores", "Produ\u00e7\u00e3o de \u00f3leo/sementes", "Descompacta o solo"], "sintropicNotes": "Sua raiz profunda ajuda a estruturar o solo para as pr\u00f3ximas culturas.", "notes": "Siga o sol!", "companions": ["Milho", "Feij\u00e3o"], "waterFrequency": 3},
    {"id": "marigold", "name": "Cal\u00eandula", "icon": "\ud83c\udf3c", "daysToHarvest": 60, "basePoints": 35, "season": "Ano Todo", "type": "Flor", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.5, "benefits": ["Medicinal", "Repele pragas", "Ornamental"], "sintropicNotes": "Planta companheira essencial para o controle biol\u00f3gico na horta.", "notes": "As p\u00e9talas s\u00e3o comest\u00edveis.", "companions": ["Tomate", "Hortali\u00e7as"], "waterFrequency": 2},
    {"id": "crotalaria_new", "name": "Crotal\u00e1ria", "icon": "\ud83c\udf3c", "daysToHarvest": 90, "basePoints": 40, "season": "Ano Todo", "type": "Flor", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 8.0, "benefits": ["Fixa\u00e7\u00e3o de nitrog\u00eanio", "Controle de nematoides", "Atrai polinizadores"], "sintropicNotes": "Usada como aduba\u00e7\u00e3o verde para preparar o solo para culturas exigentes.", "notes": "Deve ser manejada antes da semente deitar.", "companions": ["Caf\u00e9", "Citros"], "waterFrequency": 2},
    {"id": "inga", "name": "Ing\u00e1", "icon": "\ud83c\udf31", "daysToHarvest": 730, "basePoints": 180, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 55.0, "benefits": ["Fixa\u00e7\u00e3o de nitrog\u00eanio", "Fruto comest\u00edvel", "Sombra rala"], "sintropicNotes": "Leguminosa arb\u00f3rea excelente para sombreamento de caf\u00e9 e cacau.", "notes": "Atrai muitas abelhas e p\u00e1ssaros.", "companions": ["Caf\u00e9", "Cacau"], "waterFrequency": 2},
    {"id": "embauba", "name": "Emba\u00faba", "icon": "\ud83c\udf43", "daysToHarvest": 1825, "basePoints": 200, "season": "Ano Todo", "type": "Nativa", "stratum": "Emergente", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 40.0, "benefits": ["Atrai fauna", "Crescimento r\u00e1pido", "Recupera\u00e7\u00e3o de \u00e1reas"], "sintropicNotes": "Planta pioneira que 'abre caminho' para as esp\u00e9cies de cl\u00edmax.", "notes": "Suas folhas s\u00e3o excelente adubo.", "companions": ["Ing\u00e1", "Sangra d'\u00e1gua"], "waterFrequency": 2},
    {"id": "jacaranda", "name": "Jacarand\u00e1", "icon": "\ud83c\udf33", "daysToHarvest": 3650, "basePoints": 1000, "season": "Primavera", "type": "Madeira", "stratum": "Alto", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 150.0, "benefits": ["Madeira nobre", "Beleza c\u00eanica", "Preserva\u00e7\u00e3o"], "sintropicNotes": "\u00c1rvore de longo prazo que traz estabilidade e biodiversidade ao sistema.", "notes": "Esp\u00e9cie protegida e de alto valor ecol\u00f3gico.", "companions": ["Nativas da Mata Atl\u00e2ntica"], "waterFrequency": 1},
    {"id": "avocado", "name": "Abacate", "icon": "\ud83e\udd51", "daysToHarvest": 1095, "basePoints": 250, "season": "Inverno/Primavera", "type": "Fruto", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 70.0, "benefits": ["Gorduras saud\u00e1veis", "Grande produ\u00e7\u00e3o de biomassa", "Sombra"], "sintropicNotes": "Fornece grande quantidade de folhas para cobertura de solo.", "notes": "Precisa de boa drenagem.", "companions": ["Caf\u00e9", "Banana"], "waterFrequency": 2},
    {"id": "citrus", "name": "Lim\u00e3o", "icon": "\ud83c\udf4b", "daysToHarvest": 730, "basePoints": 150, "season": "Ano Todo", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 35.0, "benefits": ["Vitamina C", "Repelente natural", "Produ\u00e7\u00e3o constante"], "sintropicNotes": "Ocupa o estrato m\u00e9dio e beneficia-se da poda de \u00e1rvores maiores.", "notes": "Vulner\u00e1vel a pulg\u00f5es se o solo estiver desequilibrado.", "companions": ["Goiaba", "Manjeric\u00e3o"], "waterFrequency": 2},
    {"id": "mango", "name": "Manga", "icon": "\ud83e\udd6d", "daysToHarvest": 1095, "basePoints": 300, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "Alto", "succession": "Cl\u00edmax", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 85.0, "benefits": ["Sombra densa", "Longevidade", "Fruto valorizado"], "sintropicNotes": "\u00c1rvore de grande porte que define a estrutura final do sistema.", "notes": "Necessita de podas de forma\u00e7\u00e3o nos primeiros anos.", "companions": ["Citros", "Goiaba"], "waterFrequency": 1},
    {"id": "jabuticaba", "name": "Jabuticaba", "icon": "\ud83d\udfe3", "daysToHarvest": 1825, "basePoints": 500, "season": "Primavera", "type": "Fruto", "stratum": "Baixo", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 45.0, "benefits": ["Nativa", "Altamente nutritiva", "Ornamental"], "sintropicNotes": "Planta de sub-bosque que aprecia sombra parcial e solo muito \u00famido.", "notes": "Crescimento lento, mas muito recompensador.", "companions": ["Caf\u00e9", "Samambaias"], "waterFrequency": 4},
    {"id": "papaya", "name": "Mam\u00e3o", "icon": "\ud83e\udd6d", "daysToHarvest": 270, "basePoints": 90, "season": "Ano Todo", "type": "Fruto", "stratum": "Emergente", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 15.0, "benefits": ["Crescimento r\u00e1pido", "Rico em enzimas", "Ocupa pouco espa\u00e7o horizontal"], "sintropicNotes": "Planta de ciclo curto que ocupa o estrato emergente temporariamente.", "notes": "Sens\u00edvel ao excesso de \u00e1gua nas ra\u00edzes.", "companions": ["Banana", "Caf\u00e9"], "waterFrequency": 2},
    {"id": "banana", "name": "Banana", "icon": "\ud83c\udf4c", "daysToHarvest": 365, "basePoints": 120, "season": "Ano Todo", "type": "Fruto", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 25.0, "benefits": ["Produ\u00e7\u00e3o de biomassa", "Reten\u00e7\u00e3o de \u00e1gua", "Alimento energ\u00e9tico"], "sintropicNotes": "O 'tanque de \u00e1gua' da agrofloresta. Essencial para manter a umidade do sistema.", "notes": "Exige muita mat\u00e9ria org\u00e2nica e pot\u00e1ssio.", "companions": ["Caf\u00e9", "Cacau"], "waterFrequency": 3}
,
    {"id": "tomato", "name": "Tomate", "icon": "\ud83c\udf45", "daysToHarvest": 70, "basePoints": 80, "season": "Primavera/Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 4.5, "benefits": ["Licopeno", "Vitamina C", "Vers\u00e1til"], "sintropicNotes": "Planta que aprecia tutoramento e solo rico em mat\u00e9ria org\u00e2nica.", "notes": "Pode sofrer com doen\u00e7as f\u00fangicas em clima \u00famido.", "companions": ["Manjeric\u00e3o", "Cenoura", "Cebola"], "waterFrequency": 3},
    {"id": "lettuce", "name": "Alface", "icon": "\ud83e\udd6c", "daysToHarvest": 50, "basePoints": 35, "season": "Outono/Inverno", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.8, "benefits": ["Baixa caloria", "Fibras", "Crescimento r\u00e1pido"], "sintropicNotes": "Ideal para ocupar espa\u00e7os entre plantas maiores.", "notes": "Prefere temperaturas mais frias.", "companions": ["Cenoura", "Rabanete"], "waterFrequency": 3},
    {"id": "spinach", "name": "Espinafre", "icon": "\ud83e\udd6c", "daysToHarvest": 45, "basePoints": 40, "season": "Outono/Inverno", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 2.0, "benefits": ["Ferro", "C\u00e1lcio", "Prote\u00edna"], "sintropicNotes": "Planta de ciclo curto que prepara o solo para culturas maiores.", "notes": "Colha as folhas externas primeiro.", "companions": ["Morango", "Beterraba"], "waterFrequency": 2},
    {"id": "carrot", "name": "Cenoura", "icon": "\ud83e\udd55", "daysToHarvest": 70, "basePoints": 50, "season": "Ano Todo", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 2.5, "benefits": ["Beta-caroteno", "Doce", "Longa conserva\u00e7\u00e3o"], "sintropicNotes": "Raiz que ajuda a estruturar o solo.", "notes": "Gosta de solo solto e bem drenado.", "companions": ["Cebola", "Alface"], "waterFrequency": 2},
    {"id": "cucumber", "name": "Pepino", "icon": "\ud83e\udd52", "daysToHarvest": 60, "basePoints": 45, "season": "Primavera/Ver\u00e3o", "type": "Fruto", "stratum": "Rasteiro", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 3.2, "benefits": ["Hidrata\u00e7\u00e3o", "Baixa caloria", "Crescimento r\u00e1pido"], "sintropicNotes": "Trepadeira que pode usar outras plantas como suporte.", "notes": "Necessita de bastante \u00e1gua.", "companions": ["Milho", "Rabanete"], "waterFrequency": 4},
    {"id": "radish", "name": "Rabanete", "icon": "\ud83c\udf36\ufe0f", "daysToHarvest": 30, "basePoints": 25, "season": "Ano Todo", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.0, "benefits": ["Crescimento ultrarr\u00e1pido", "Pungente", "Descompacta solo"], "sintropicNotes": "Planta de ciclo curt\u00edssimo para ocupar espa\u00e7os vazios.", "notes": "Colha quando ainda pequeno.", "companions": ["Alface", "Cenoura"], "waterFrequency": 2},
    {"id": "zucchini", "name": "Abobrinha", "icon": "\ud83e\udd52", "daysToHarvest": 50, "basePoints": 55, "season": "Primavera/Ver\u00e3o", "type": "Fruto", "stratum": "Rasteiro", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 6.0, "benefits": ["Produ\u00e7\u00e3o abundante", "Vers\u00e1til", "Cobertura de solo"], "sintropicNotes": "Excelente para cobrir solo e suprimir ervas daninhas.", "notes": "Colha regularmente para estimular produ\u00e7\u00e3o.", "companions": ["Milho", "Feij\u00e3o"], "waterFrequency": 3},
    {"id": "peas", "name": "Ervilha", "icon": "\ud83e\uded8", "daysToHarvest": 60, "basePoints": 50, "season": "Outono/Inverno", "type": "Gr\u00e3o", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 7.5, "benefits": ["Fixa nitrog\u00eanio", "Prote\u00edna", "Doce"], "sintropicNotes": "Leguminosa que melhora o solo para pr\u00f3ximas culturas.", "notes": "Pode ser congelada para conserva\u00e7\u00e3o.", "companions": ["Cenoura", "Milho"], "waterFrequency": 2},
    {"id": "corn", "name": "Milho", "icon": "\ud83c\udf3d", "daysToHarvest": 90, "basePoints": 75, "season": "Primavera/Ver\u00e3o", "type": "Gr\u00e3o", "stratum": "Alto", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 12.0, "benefits": ["Base alimentar", "Estrutura", "Energia"], "sintropicNotes": "Planta estruturante que suporta feij\u00e3o e ab\u00f3bora (Milpa).", "notes": "Necessita de muito espa\u00e7o.", "companions": ["Feij\u00e3o", "Ab\u00f3bora"], "waterFrequency": 2},
    {"id": "basil", "name": "Manjeric\u00e3o", "icon": "\ud83c\udf3f", "daysToHarvest": 30, "basePoints": 30, "season": "Primavera/Ver\u00e3o", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.2, "benefits": ["Aroma", "Medicinal", "Repele insetos"], "sintropicNotes": "Companheira ideal para tomate e outras hortali\u00e7as.", "notes": "Colha regularmente para estimular crescimento.", "companions": ["Tomate", "Piment\u00e3o"], "waterFrequency": 2},
    {"id": "sunflower_alt", "name": "Girassol Gigante", "icon": "\ud83c\udf3b", "daysToHarvest": 120, "basePoints": 100, "season": "Primavera/Ver\u00e3o", "type": "Flor", "stratum": "Emergente", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 18.0, "benefits": ["Fitorremedia\u00e7\u00e3o", "Sementes", "Beleza"], "sintropicNotes": "Descompacta solo profundamente e atrai polinizadores.", "notes": "Pode atingir 2-3 metros de altura.", "companions": ["Milho", "Feij\u00e3o"], "waterFrequency": 2},
    {"id": "lavender", "name": "Lavanda", "icon": "\ud83d\udc9c", "daysToHarvest": 90, "basePoints": 45, "season": "Primavera/Ver\u00e3o", "type": "Flor", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 5.0, "benefits": ["Aroma", "Medicinal", "Atrai abelhas"], "sintropicNotes": "Planta r\u00fastica que melhora biodiversidade.", "notes": "Resiste bem \u00e0 seca.", "companions": ["Alecrim", "S\u00e1lvia"], "waterFrequency": 1},
    {"id": "chamomile", "name": "Camomila", "icon": "\ud83c\udf3c", "daysToHarvest": 60, "basePoints": 35, "season": "Primavera/Ver\u00e3o", "type": "Flor", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.5, "benefits": ["Ch\u00e1 calmante", "Medicinal", "Repele pragas"], "sintropicNotes": "Companheira que melhora sa\u00fade de plantas vizinhas.", "notes": "Auto-semeia facilmente.", "companions": ["Hortali\u00e7as em geral"], "waterFrequency": 2},
    {"id": "nasturtium", "name": "Capuchinha", "icon": "\ud83c\udf3a", "daysToHarvest": 45, "basePoints": 40, "season": "Primavera/Ver\u00e3o", "type": "Flor", "stratum": "Rasteiro", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 2.0, "benefits": ["Comest\u00edvel", "Atrai af\u00eddeos", "Ornamental"], "sintropicNotes": "Planta armadilha que protege outras plantas de pragas.", "notes": "Flores e folhas s\u00e3o comest\u00edveis.", "companions": ["Tomate", "Ab\u00f3bora"], "waterFrequency": 2},
    {"id": "cedar", "name": "Cedro", "icon": "\ud83c\udf32", "daysToHarvest": 2555, "basePoints": 800, "season": "Primavera", "type": "Madeira", "stratum": "Alto", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 120.0, "benefits": ["Madeira nobre", "Longevidade", "Aroma"], "sintropicNotes": "\u00c1rvore de longo prazo que estrutura o sistema.", "notes": "Crescimento lento mas muito valioso.", "companions": ["Nativas"], "waterFrequency": 1},
    {"id": "ipe", "name": "Ip\u00ea", "icon": "\ud83c\udf33", "daysToHarvest": 3650, "basePoints": 1200, "season": "Primavera", "type": "Madeira", "stratum": "Alto", "succession": "Cl\u00edmax", "difficulty": "dif\u00edcil", "lifecycle": "Perene", "carbonSequestration": 160.0, "benefits": ["Madeira extremamente dura", "Preserva\u00e7\u00e3o", "Longevidade"], "sintropicNotes": "Uma das \u00e1rvores mais valiosas da Mata Atl\u00e2ntica.", "notes": "Crescimento muito lento.", "companions": ["Nativas da Mata Atl\u00e2ntica"], "waterFrequency": 1},
    {"id": "seringa", "name": "Seringueira", "icon": "\ud83c\udf33", "daysToHarvest": 1825, "basePoints": 500, "season": "Ano Todo", "type": "L\u00e1tex", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 80.0, "benefits": ["Produ\u00e7\u00e3o de borracha", "Valor comercial", "Sombra"], "sintropicNotes": "Planta de grande valor econ\u00f4mico em sistemas agroflorestais.", "notes": "Exige clima tropical.", "companions": ["Cacau", "Banana"], "waterFrequency": 2},
    {"id": "moringa", "name": "Moringa", "icon": "\ud83c\udf3f", "daysToHarvest": 180, "basePoints": 150, "season": "Ano Todo", "type": "Folha", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 35.0, "benefits": ["Superalimento", "R\u00e1pido crescimento", "M\u00faltiplos usos"], "sintropicNotes": "\u00c1rvore milagrosa com folhas altamente nutritivas.", "notes": "Resiste bem \u00e0 seca.", "companions": ["Hortali\u00e7as"], "waterFrequency": 1},
    {"id": "mulberry", "name": "Amora", "icon": "\ud83e\uded0", "daysToHarvest": 730, "basePoints": 200, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 45.0, "benefits": ["Fruto saboroso", "Folhas para ra\u00e7\u00e3o", "R\u00e1pido crescimento"], "sintropicNotes": "\u00c1rvore vers\u00e1til que fornece alimento e ra\u00e7\u00e3o animal.", "notes": "Pode ser podada drasticamente.", "companions": ["Hortali\u00e7as", "Leguminosas"], "waterFrequency": 2},
    {"id": "fig", "name": "Figueira", "icon": "\ud83e\uded0", "daysToHarvest": 730, "basePoints": 180, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 40.0, "benefits": ["Fruto nutritivo", "R\u00fastica", "Longa vida"], "sintropicNotes": "\u00c1rvore muito resistente que vive s\u00e9culos.", "notes": "Gosta de solo bem drenado.", "companions": ["Citros", "Goiaba"], "waterFrequency": 1},
    {"id": "papaw", "name": "Ata/Graviola", "icon": "\ud83c\udf43", "daysToHarvest": 730, "basePoints": 220, "season": "Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Secund\u00e1ria", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 50.0, "benefits": ["Fruto medicinal", "Propriedades curativas", "Valor comercial"], "sintropicNotes": "\u00c1rvore tropical com frutos muito valorizados.", "notes": "Sens\u00edvel ao frio.", "companions": ["Manga", "Abacate"], "waterFrequency": 2},
    {"id": "mimosa", "name": "Mimosa", "icon": "\ud83c\udf3c", "daysToHarvest": 1095, "basePoints": 250, "season": "Primavera", "type": "Flor", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 60.0, "benefits": ["Fixa\u00e7\u00e3o de nitrog\u00eanio", "Flores amarelas", "R\u00e1pido crescimento"], "sintropicNotes": "Leguminosa arb\u00f3rea que recupera solos degradados.", "notes": "Pode ser invasora em alguns locais.", "companions": ["Nativas"], "waterFrequency": 1},
    {"id": "albizia", "name": "Albizia", "icon": "\ud83c\udf33", "daysToHarvest": 1095, "basePoints": 280, "season": "Primavera", "type": "Folha", "stratum": "Alto", "succession": "Secund\u00e1ria", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 70.0, "benefits": ["Fixa\u00e7\u00e3o de nitrog\u00eanio", "Sombra rala", "Biomassa"], "sintropicNotes": "\u00c1rvore de sombra rala ideal para sistemas agroflorestais.", "notes": "Folhas caem facilmente, deixando o solo coberto.", "companions": ["Caf\u00e9", "Cacau"], "waterFrequency": 1},
    {"id": "kale", "name": "Couve Crespa", "icon": "\ud83e\udd6c", "daysToHarvest": 60, "basePoints": 65, "season": "Outono/Inverno", "type": "Folha", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 5.0, "benefits": ["Superalimento", "Resistente ao frio", "Longa produ\u00e7\u00e3o"], "sintropicNotes": "Planta muito nutritiva que resiste a geadas.", "notes": "Colha as folhas externas primeiro.", "companions": ["Cebola", "Alho"], "waterFrequency": 2},
    {"id": "chard", "name": "Acelga", "icon": "\ud83e\udd6c", "daysToHarvest": 55, "basePoints": 50, "season": "Outono/Inverno", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 3.0, "benefits": ["Folhas coloridas", "Nutritiva", "Produ\u00e7\u00e3o longa"], "sintropicNotes": "Planta vers\u00e1til com folhas e talos comest\u00edveis.", "notes": "Gosta de solo \u00famido.", "companions": ["Beterraba", "Cenoura"], "waterFrequency": 3},
    {"id": "okra", "name": "Quiabo", "icon": "\ud83c\udf3f", "daysToHarvest": 60, "basePoints": 55, "season": "Primavera/Ver\u00e3o", "type": "Fruto", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 4.0, "benefits": ["Mucilagem", "Nutritivo", "F\u00e1cil cultivo"], "sintropicNotes": "Planta tropical que gosta de calor.", "notes": "Colha quando ainda tenro.", "companions": ["Milho", "Feij\u00e3o"], "waterFrequency": 3},
    {"id": "mint", "name": "Hortel\u00e3", "icon": "\ud83c\udf3f", "daysToHarvest": 30, "basePoints": 25, "season": "Ano Todo", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Perene", "carbonSequestration": 2.0, "benefits": ["Aroma", "Medicinal", "Repele insetos"], "sintropicNotes": "Planta invasora que pode ser controlada em vasos.", "notes": "Cresce rapidamente.", "companions": ["Hortali\u00e7as em geral"], "waterFrequency": 2},
    {"id": "parsley", "name": "Salsa", "icon": "\ud83c\udf3f", "daysToHarvest": 70, "basePoints": 30, "season": "Ano Todo", "type": "Folha", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Bienal", "carbonSequestration": 1.5, "benefits": ["Tempero", "Vitaminas", "Atrai insetos ben\u00e9ficos"], "sintropicNotes": "Companheira que atrai insetos polinizadores.", "notes": "Demora para germinar.", "companions": ["Tomate", "Cenoura"], "waterFrequency": 2},
    {"id": "dill", "name": "Endro", "icon": "\ud83c\udf3f", "daysToHarvest": 40, "basePoints": 25, "season": "Primavera/Outono", "type": "Folha", "stratum": "M\u00e9dio", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 1.2, "benefits": ["Tempero", "Medicinal", "Atrai polinizadores"], "sintropicNotes": "Erva que atrai insetos ben\u00e9ficos para o sistema.", "notes": "Auto-semeia facilmente.", "companions": ["Hortali\u00e7as em geral"], "waterFrequency": 2},
    {"id": "turnip", "name": "Nabo", "icon": "\ud83d\udfe4", "daysToHarvest": 60, "basePoints": 40, "season": "Outono/Inverno", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "f\u00e1cil", "lifecycle": "Anual", "carbonSequestration": 2.5, "benefits": ["Raiz nutritiva", "Folhas comest\u00edveis", "R\u00fastico"], "sintropicNotes": "Planta que aproveita bem o espa\u00e7o vertical.", "notes": "Gosta de clima frio.", "companions": ["Cenoura", "Alface"], "waterFrequency": 2},
    {"id": "potato", "name": "Batata", "icon": "\ud83e\udd54", "daysToHarvest": 90, "basePoints": 85, "season": "Outono/Inverno", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Anual", "carbonSequestration": 8.0, "benefits": ["Alimento b\u00e1sico", "Alto rendimento", "Vers\u00e1til"], "sintropicNotes": "Planta que melhora estrutura do solo.", "notes": "Necessita de solo bem solto.", "companions": ["Milho", "Feij\u00e3o"], "waterFrequency": 2},
    {"id": "ginger", "name": "Gengibre", "icon": "\ud83d\udfe4", "daysToHarvest": 270, "basePoints": 120, "season": "Ano Todo", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 5.0, "benefits": ["Medicinal", "Tempero", "Valor comercial"], "sintropicNotes": "Planta tropical que aprecia sombra parcial.", "notes": "Colheita ap\u00f3s 8-10 meses.", "companions": ["Banana", "Coco"], "waterFrequency": 2},
    {"id": "turmeric", "name": "C\u00farcuma", "icon": "\ud83d\udfe1", "daysToHarvest": 240, "basePoints": 130, "season": "Ano Todo", "type": "Raiz", "stratum": "Baixo", "succession": "Placenta", "difficulty": "m\u00e9dio", "lifecycle": "Perene", "carbonSequestration": 6.0, "benefits": ["Anti-inflamat\u00f3ria", "Tempero", "Medicinal"], "sintropicNotes": "Planta tropical que melhora com sombra parcial.", "notes": "Colheita ap\u00f3s 7-10 meses.", "companions": ["Gengibre", "Banana"], "waterFrequency": 2}
];
    
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


    <!-- Modal de Detalhes da Planta -->
    <div id="plantModal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="plantDetails"></div>
        </div>
    </div>
    
    <!-- Botão de Tema -->
    <button class="theme-toggle" id="themeToggle" title="Alternar tema">🌙</button>
    
    <!-- Script para funcionalidades avançadas -->
    <script>
        // Tema Dark/Light
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
        
        // Modal de Detalhes
        const modal = document.getElementById('plantModal');
        const closeModal = document.querySelector('.close-modal');
        
        function showPlantDetails(plant) {
            const detailsHTML = `
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">${plant.icon}</div>
                    <h2 style="margin: 0.5rem 0; font-size: 1.75rem;">${plant.name}</h2>
                    <p style="margin: 0.25rem 0; color: #6b7280;">${plant.type} • ${plant.stratum}</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="background: #f0fdf4; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 0.875rem; color: #6b7280;">Dias para Colheita</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #22c55e;">${plant.daysToHarvest}</div>
                    </div>
                    <div style="background: #f0fdf4; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                        <div style="font-size: 0.875rem; color: #6b7280;">Sequestro de Carbono</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #22c55e;">${plant.carbonSequestration} kg</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">Benefícios</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${plant.benefits.map(b => `<span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">${b}</span>`).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">Notas Sintrópicas</h3>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${plant.sintropicNotes}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin-top: 0; margin-bottom: 0.5rem;">Plantas Companheiras</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${plant.companions.map(c => `<span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">${c}</span>`).join('')}
                    </div>
                </div>
                
                <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem; font-size: 0.875rem; color: #6b7280;">
                    <strong>Observações:</strong> ${plant.notes}
                </div>
            `;
            
            document.getElementById('plantDetails').innerHTML = detailsHTML;
            modal.classList.add('show');
        }
        
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
        
        // Adicionar event listeners aos cards de plantas
        document.addEventListener('DOMContentLoaded', () => {
            const plantCards = document.querySelectorAll('[data-plant-id]');
            plantCards.forEach(card => {
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    const plantId = card.getAttribute('data-plant-id');
                    const plant = plantCatalog.find(p => p.id === plantId);
                    if (plant) {
                        showPlantDetails(plant);
                    }
                });
            });
        });
    </script>

    <!-- MEGA SCRIPT COM TODAS AS FUNCIONALIDADES -->
    <script>
        // ===== SISTEMA DE DADOS GLOBAL =====
        const userProfile = {
            name: 'Jardineiro Hero',
            level: 1,
            points: 0,
            coins: 100,
            garden: [],
            recipes: [],
            achievements: [],
            plantingHistory: [],
            notifications: []
        };
        
        // ===== ACHIEVEMENTS DATABASE =====
        const achievementsDB = [
            { id: 'first_plant', name: 'Primeiro Plantio', icon: '🌱', description: 'Plante sua primeira planta', points: 50 },
            { id: 'five_plants', name: 'Colecionador', icon: '🌿', description: 'Plante 5 plantas diferentes', points: 100 },
            { id: 'perfect_consortium', name: 'Consórcio Perfeito', icon: '🤝', description: 'Crie um consórcio ideal', points: 150 },
            { id: 'harvest_100kg', name: 'Colheita Abundante', icon: '🎯', description: 'Colha 100kg de alimentos', points: 200 },
            { id: 'native_lover', name: 'Amigo das Nativas', icon: '🌳', description: 'Plante 5 plantas nativas', points: 150 },
            { id: 'carbon_hero', name: 'Herói do Carbono', icon: '♻️', description: 'Sequestre 1 tonelada de CO2', points: 250 },
            { id: 'recipe_master', name: 'Mestre Culinário', icon: '👨‍🍳', description: 'Prepare 10 receitas', points: 120 },
            { id: 'community_star', name: 'Estrela da Comunidade', icon: '⭐', description: 'Compartilhe 5 planos', points: 100 }
        ];
        
        // ===== RECEITAS DATABASE =====
        const recipesDB = [
            { id: 'salada_verde', name: 'Salada Verde Fresca', plants: ['Alface', 'Espinafre', 'Tomate'], nutrition: { proteina: 3, carboidrato: 8, gordura: 1 }, prepTime: 10 },
            { id: 'sopa_legumes', name: 'Sopa de Legumes', plants: ['Cenoura', 'Cebola', 'Tomate', 'Abóbora'], nutrition: { proteina: 5, carboidrato: 15, gordura: 2 }, prepTime: 45 },
            { id: 'suco_verde', name: 'Suco Verde Detox', plants: ['Espinafre', 'Cenoura', 'Gengibre'], nutrition: { proteina: 2, carboidrato: 12, gordura: 0 }, prepTime: 5 },
            { id: 'chá_ervas', name: 'Chá de Ervas', plants: ['Hortelã', 'Camomila', 'Alecrim'], nutrition: { proteina: 0, carboidrato: 1, gordura: 0 }, prepTime: 10 }
        ];
        
        // ===== PRAGAS DATABASE =====
        const pestsDB = [
            { id: 'afideos', name: 'Afídeos', plants: ['Tomate', 'Pimentão'], solutions: ['Spray de água', 'Óleo de neem', 'Joaninhas'], organic: true },
            { id: 'lagarta_couve', name: 'Lagarta da Couve', plants: ['Repolho', 'Couve'], solutions: ['Bacillus thuringiensis', 'Remoção manual'], organic: true },
            { id: 'mosca_frutas', name: 'Mosca das Frutas', plants: ['Manga', 'Goiaba'], solutions: ['Armadilhas', 'Rede de proteção'], organic: true }
        ];
        
        // ===== FUNÇÕES DE NOTIFICAÇÃO =====
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideInUp 0.3s ease-out reverse';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
        
        // ===== FUNÇÕES DE ACHIEVEMENTS =====
        function unlockAchievement(achievementId) {
            const achievement = achievementsDB.find(a => a.id === achievementId);
            if (achievement && !userProfile.achievements.includes(achievementId)) {
                userProfile.achievements.push(achievementId);
                userProfile.points += achievement.points;
                showNotification(`🏆 Desbloqueado: ${achievement.name}! +${achievement.points} pontos`, 'success');
            }
        }
        
        // ===== FUNÇÕES DO PLANEJADOR =====
        function addPlantToGarden(plantId) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant) {
                userProfile.garden.push(plant);
                userProfile.points += 10;
                showNotification(`✅ ${plant.name} adicionada ao seu jardim!`, 'success');
                unlockAchievement('first_plant');
            }
        }
        
        // ===== FUNÇÕES DE RECEITAS =====
        function prepareRecipe(recipeId) {
            const recipe = recipesDB.find(r => r.id === recipeId);
            if (recipe) {
                userProfile.recipes.push(recipeId);
                userProfile.points += 25;
                showNotification(`👨‍🍳 Receita preparada: ${recipe.name}! +25 pontos`, 'success');
                unlockAchievement('recipe_master');
            }
        }
        
        // ===== FUNÇÕES DE COMPARAÇÃO =====
        function comparePlants(plantIds) {
            const plants = plantIds.map(id => plantCatalog.find(p => p.id === id)).filter(p => p);
            return plants;
        }
        
        // ===== SISTEMA DE PONTOS EXPANDIDO =====
        function addPoints(amount, reason) {
            userProfile.points += amount;
            showNotification(`+${amount} pontos - ${reason}`, 'success');
        }
        
        function spendCoins(amount, item) {
            if (userProfile.coins >= amount) {
                userProfile.coins -= amount;
                showNotification(`💰 Comprado: ${item}`, 'success');
                return true;
            } else {
                showNotification('💸 Moedas insuficientes!', 'warning');
                return false;
            }
        }
        
        // ===== CALENDÁRIO INTELIGENTE =====
        function getPlantingSchedule(plantId) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant) {
                return {
                    plant: plant.name,
                    season: plant.season,
                    daysToHarvest: plant.daysToHarvest,
                    waterFrequency: plant.waterFrequency
                };
            }
        }
        
        // ===== CALCULADORA DE RENDIMENTO =====
        function calculateYield(plantId, quantity) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant) {
                const estimatedYield = quantity * (plant.basePoints / 10);
                const estimatedCO2 = quantity * plant.carbonSequestration;
                return {
                    plant: plant.name,
                    estimatedYield: estimatedYield.toFixed(2),
                    estimatedCO2: estimatedCO2.toFixed(2),
                    roi: ((estimatedYield * 5) - 50).toFixed(2)
                };
            }
        }
        
        // ===== DASHBOARD DE PRODUTIVIDADE =====
        function getDashboardStats() {
            const totalCO2 = userProfile.garden.reduce((sum, p) => sum + p.carbonSequestration, 0);
            const totalPoints = userProfile.points;
            const plantCount = userProfile.garden.length;
            const achievementCount = userProfile.achievements.length;
            
            return {
                totalCO2: totalCO2.toFixed(2),
                totalPoints: totalPoints,
                plantCount: plantCount,
                achievementCount: achievementCount,
                level: Math.floor(totalPoints / 500) + 1
            };
        }
        
        // ===== SISTEMA DE NOTIFICAÇÕES =====
        function scheduleNotification(message, delayMinutes) {
            setTimeout(() => {
                showNotification(message, 'info');
            }, delayMinutes * 60 * 1000);
        }
        
        // ===== GUIA DE CONSÓRCIOS =====
        function getConsortiumRecommendations(plantId) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant && plant.companions) {
                return plant.companions.map(name => 
                    plantCatalog.find(p => p.name === name)
                ).filter(p => p);
            }
            return [];
        }
        
        // ===== INTEGRAÇÃO COM CLIMA =====
        function getWeatherRecommendations(season) {
            const recommendations = {
                'Primavera/Verão': ['Tomate', 'Pimentão', 'Abobrinha', 'Pepino'],
                'Outono/Inverno': ['Alface', 'Espinafre', 'Brócolis', 'Couve'],
                'Ano Todo': ['Cenoura', 'Cebola', 'Alho', 'Batata Doce']
            };
            return recommendations[season] || [];
        }
        
        // ===== RANKING GLOBAL =====
        const globalRanking = [
            { position: 1, name: 'João Silva', points: 5000, plants: 45 },
            { position: 2, name: 'Maria Santos', points: 4800, plants: 42 },
            { position: 3, name: 'Pedro Costa', points: 4600, plants: 40 },
            { position: 4, name: 'Ana Oliveira', points: 4400, plants: 38 },
            { position: 5, name: 'Carlos Mendes', points: 4200, plants: 36 }
        ];
        
        // ===== LOJA DE ITENS =====
        const shopItems = [
            { id: 'seed_pack', name: 'Pacote de Sementes', icon: '🌱', price: 50, description: 'Sementes premium' },
            { id: 'fertilizer', name: 'Fertilizante Orgânico', icon: '🥕', price: 75, description: 'Adubo natural' },
            { id: 'tools', name: 'Kit de Ferramentas', icon: '🛠️', price: 100, description: 'Ferramentas de jardim' },
            { id: 'greenhouse', name: 'Mini Estufa', icon: '🏠', price: 200, description: 'Proteção para mudas' },
            { id: 'irrigation', name: 'Sistema de Rega', icon: '💧', price: 150, description: 'Rega automática' }
        ];
        
        // ===== INICIALIZAÇÃO =====
        document.addEventListener('DOMContentLoaded', () => {
            console.log('✅ Sistema Horta Hero v2.0 carregado com sucesso!');
            console.log('📊 Funcionalidades ativas:', {
                'Planejador de Horta': true,
                'Calendário Inteligente': true,
                'Guia de Consórcios': true,
                'Receitas': true,
                'Achievements': true,
                'Dashboard': true,
                'Ranking': true,
                'Loja': true,
                'Notificações': true,
                'Clima': true
            });
        });
    </script>

    <!-- MODAL DETALHES PLANTA -->
    <div id="plantDetailModal" class="plant-detail-modal">
        <div class="plant-detail-content">
            <span class="close-detail">&times;</span>
            <div id="plantDetailBody"></div>
        </div>
    </div>
    
    <!-- SCRIPTS PARA MELHORIAS -->
    <script>
        // ===== MODAL DETALHES DA PLANTA =====
        const plantDetailModal = document.getElementById('plantDetailModal');
        const closeDetailBtn = document.querySelector('.close-detail');
        
        function showPlantDetail(plantId) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (!plant) return;
            
            const html = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">${plant.icon}</div>
                    <h2 style="margin: 0.5rem 0; font-size: 2rem; color: #1f2937;">${plant.name}</h2>
                    <p style="margin: 0.5rem 0; color: #6b7280; font-size: 1rem;">${plant.type} • ${plant.stratum} • ${plant.lifecycle}</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 2px solid #22c55e;">
                        <div style="font-size: 0.875rem; color: #6b7280; text-transform: uppercase; font-weight: 600;">Dias para Colheita</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #22c55e; margin-top: 0.5rem;">${plant.daysToHarvest}</div>
                    </div>
                    <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 2px solid #22c55e;">
                        <div style="font-size: 0.875rem; color: #6b7280; text-transform: uppercase; font-weight: 600;">Sequestro de CO₂</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #22c55e; margin-top: 0.5rem;">${plant.carbonSequestration} kg</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">📊 Informações Principais</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Dificuldade</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.difficulty}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Sucessão</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.succession}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Estrato</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.stratum}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Rega (dias)</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.waterFrequency}x semana</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">✨ Benefícios</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                        ${plant.benefits.map(b => `<span style="background: #dbeafe; color: #1e40af; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">${b}</span>`).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">🌱 Notas Sintrópicas</h3>
                    <p style="margin: 0; color: #6b7280; line-height: 1.6; font-size: 0.95rem;">${plant.sintropicNotes}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">🤝 Plantas Companheiras</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                        ${plant.companions.map(c => `<span style="background: #fef3c7; color: #92400e; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">${c}</span>`).join('')}
                    </div>
                </div>
                
                <div style="background: #f3f4f6; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #22c55e;">
                    <h3 style="margin: 0 0 0.75rem 0; color: #1f2937; font-size: 1rem;">📝 Observações</h3>
                    <p style="margin: 0; color: #6b7280; line-height: 1.6;">${plant.notes}</p>
                </div>
            `;
            
            document.getElementById('plantDetailBody').innerHTML = html;
            plantDetailModal.classList.add('show');
        }
        
        closeDetailBtn.addEventListener('click', () => {
            plantDetailModal.classList.remove('show');
        });
        
        plantDetailModal.addEventListener('click', (e) => {
            if (e.target === plantDetailModal) {
                plantDetailModal.classList.remove('show');
            }
        });
        
        // ===== CONECTAR CLIQUES NOS CARDS DE PLANTAS =====
        document.addEventListener('DOMContentLoaded', () => {
            // Adicionar listener aos cards do catálogo
            const plantCards = document.querySelectorAll('.plant-card');
            plantCards.forEach(card => {
                const plantName = card.querySelector('h3')?.textContent;
                const plant = plantCatalog.find(p => p.name === plantName);
                if (plant) {
                    card.style.cursor = 'pointer';
                    card.addEventListener('click', (e) => {
                        if (e.target.tagName !== 'BUTTON') {
                            showPlantDetail(plant.id);
                        }
                    });
                }
            });
        });
        
        // ===== SISTEMA DE ACHIEVEMENTS VISUAL =====
        function renderAchievements() {
            const achievementsContainer = document.getElementById('achievementsContainer');
            if (!achievementsContainer) return;
            
            let html = '<div class="achievements-showcase">';
            achievementsDB.forEach(achievement => {
                const unlocked = userProfile.achievements.includes(achievement.id);
                html += `
                    <div class="achievement-item ${unlocked ? 'unlocked' : ''}" title="${achievement.description}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-title">${achievement.name}</div>
                        <div class="achievement-desc">${unlocked ? '+' + achievement.points + ' pts' : 'Bloqueado'}</div>
                    </div>
                `;
            });
            html += '</div>';
            achievementsContainer.innerHTML = html;
        }
        
        // ===== SISTEMA DE LOJA VISUAL =====
        function renderShop() {
            const shopContainer = document.getElementById('shopContainer');
            if (!shopContainer) return;
            
            let html = '<div class="shop-products">';
            shopItems.forEach(item => {
                html += `
                    <div class="shop-product">
                        <div class="shop-product-header">${item.icon}</div>
                        <div class="shop-product-body">
                            <div class="shop-product-name">${item.name}</div>
                            <div class="shop-product-desc">${item.description}</div>
                            <div class="shop-product-price">💰 ${item.price}</div>
                            <button class="buy-button" onclick="buyItem('${item.id}', ${item.price}, '${item.name}')">Comprar</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            shopContainer.innerHTML = html;
        }
        
        function buyItem(itemId, price, name) {
            if (spendCoins(price, name)) {
                userProfile.points += Math.floor(price / 10);
            }
        }
        
        // ===== RANKING VISUAL =====
        function renderRanking() {
            const rankingContainer = document.getElementById('rankingContainer');
            if (!rankingContainer) return;
            
            let html = '<div class="ranking-list">';
            globalRanking.forEach((user, index) => {
                let positionClass = 'gold';
                if (index === 1) positionClass = 'silver';
                if (index === 2) positionClass = 'bronze';
                
                html += `
                    <div class="ranking-item">
                        <div class="ranking-position ${positionClass}">${index + 1}º</div>
                        <div class="ranking-info">
                            <div class="ranking-name">${user.name}</div>
                            <div class="ranking-plants">🌱 ${user.plants} plantas</div>
                        </div>
                        <div class="ranking-score">${user.points} pts</div>
                    </div>
                `;
            });
            html += '</div>';
            rankingContainer.innerHTML = html;
        }
        
        // ===== RECEITAS VISUAL =====
        function renderRecipes() {
            const recipesContainer = document.getElementById('recipesContainer');
            if (!recipesContainer) return;
            
            let html = '<div class="recipes-showcase">';
            recipesDB.forEach(recipe => {
                html += `
                    <div class="recipe-item">
                        <div class="recipe-header">
                            <div class="recipe-title">👨‍🍳 ${recipe.name}</div>
                            <div class="recipe-time">⏱️ ${recipe.prepTime} min</div>
                        </div>
                        <div class="recipe-body">
                            <div class="recipe-ingredients">
                                <div class="recipe-ingredients-title">Ingredientes:</div>
                                ${recipe.plants.map(p => `<div class="recipe-ingredient">🌱 ${p}</div>`).join('')}
                            </div>
                            <div class="recipe-nutrition">
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Proteína</div>
                                    <div class="nutrition-value">${recipe.nutrition.proteina}g</div>
                                </div>
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Carbo</div>
                                    <div class="nutrition-value">${recipe.nutrition.carboidrato}g</div>
                                </div>
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Gordura</div>
                                    <div class="nutrition-value">${recipe.nutrition.gordura}g</div>
                                </div>
                            </div>
                            <button class="buy-button" onclick="prepareRecipe('${recipe.id}')" style="margin-top: 1rem;">Preparar</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            recipesContainer.innerHTML = html;
        }
        
        // ===== PRAGAS VISUAL =====
        function renderPests() {
            const pestsContainer = document.getElementById('pestsContainer');
            if (!pestsContainer) return;
            
            let html = '<div class="pests-grid">';
            pestsDB.forEach(pest => {
                html += `
                    <div class="pest-card">
                        <div class="pest-name">🐛 ${pest.name}</div>
                        <div class="pest-plants">Afeta: ${pest.plants.join(', ')}</div>
                        <div class="pest-solutions">
                            <div class="pest-solutions-title">Soluções Orgânicas:</div>
                            ${pest.solutions.map(s => `<div class="solution-item">✓ ${s}</div>`).join('')}
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            pestsContainer.innerHTML = html;
        }
        
        // ===== CALCULADORA CO2 =====
        function calculateCO2() {
            const plantSelect = document.getElementById('co2PlantSelect');
            const quantityInput = document.getElementById('co2Quantity');
            
            if (!plantSelect || !quantityInput) return;
            
            const plantId = plantSelect.value;
            const quantity = parseFloat(quantityInput.value) || 0;
            
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant && quantity > 0) {
                const totalCO2 = plant.carbonSequestration * quantity;
                const carKm = (totalCO2 / 0.2).toFixed(2);
                
                const resultBox = document.getElementById('co2Result');
                if (resultBox) {
                    resultBox.innerHTML = `
                        <div class="result-box">
                            <div class="result-label">Sequestro de CO₂ Total</div>
                            <div class="result-value">${totalCO2.toFixed(2)} kg</div>
                            <div class="result-label">Equivalente a neutralizar ${carKm} km de carro</div>
                        </div>
                    `;
                }
            }
        }
        
        // ===== INICIALIZAR TUDO =====
        document.addEventListener('DOMContentLoaded', () => {
            renderAchievements();
            renderShop();
            renderRanking();
            renderRecipes();
            renderPests();
            
            console.log('✅ Todas as melhorias visuais carregadas!');
        });
    </script>

    <!-- MODAL DETALHES PLANTA -->
    <div id="plantDetailModal" class="plant-detail-modal">
        <div class="plant-detail-content">
            <span class="close-detail">&times;</span>
            <div id="plantDetailBody"></div>
        </div>
    </div>
    
    <!-- SCRIPTS PARA MELHORIAS -->
    <script>
        // ===== MODAL DETALHES DA PLANTA =====
        const plantDetailModal = document.getElementById('plantDetailModal');
        const closeDetailBtn = document.querySelector('.close-detail');
        
        function showPlantDetail(plantId) {
            const plant = plantCatalog.find(p => p.id === plantId);
            if (!plant) return;
            
            const html = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">${plant.icon}</div>
                    <h2 style="margin: 0.5rem 0; font-size: 2rem; color: #1f2937;">${plant.name}</h2>
                    <p style="margin: 0.5rem 0; color: #6b7280; font-size: 1rem;">${plant.type} • ${plant.stratum} • ${plant.lifecycle}</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 2px solid #22c55e;">
                        <div style="font-size: 0.875rem; color: #6b7280; text-transform: uppercase; font-weight: 600;">Dias para Colheita</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #22c55e; margin-top: 0.5rem;">${plant.daysToHarvest}</div>
                    </div>
                    <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; text-align: center; border: 2px solid #22c55e;">
                        <div style="font-size: 0.875rem; color: #6b7280; text-transform: uppercase; font-weight: 600;">Sequestro de CO₂</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #22c55e; margin-top: 0.5rem;">${plant.carbonSequestration} kg</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">📊 Informações Principais</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Dificuldade</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.difficulty}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Sucessão</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.succession}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Estrato</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.stratum}</div>
                        </div>
                        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                            <div style="color: #6b7280; font-size: 0.875rem;">Rega (dias)</div>
                            <div style="color: #1f2937; font-weight: 600;">${plant.waterFrequency}x semana</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">✨ Benefícios</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                        ${plant.benefits.map(b => `<span style="background: #dbeafe; color: #1e40af; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">${b}</span>`).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">🌱 Notas Sintrópicas</h3>
                    <p style="margin: 0; color: #6b7280; line-height: 1.6; font-size: 0.95rem;">${plant.sintropicNotes}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 1rem 0; color: #1f2937; font-size: 1.125rem;">🤝 Plantas Companheiras</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                        ${plant.companions.map(c => `<span style="background: #fef3c7; color: #92400e; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">${c}</span>`).join('')}
                    </div>
                </div>
                
                <div style="background: #f3f4f6; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #22c55e;">
                    <h3 style="margin: 0 0 0.75rem 0; color: #1f2937; font-size: 1rem;">📝 Observações</h3>
                    <p style="margin: 0; color: #6b7280; line-height: 1.6;">${plant.notes}</p>
                </div>
            `;
            
            document.getElementById('plantDetailBody').innerHTML = html;
            plantDetailModal.classList.add('show');
        }
        
        closeDetailBtn.addEventListener('click', () => {
            plantDetailModal.classList.remove('show');
        });
        
        plantDetailModal.addEventListener('click', (e) => {
            if (e.target === plantDetailModal) {
                plantDetailModal.classList.remove('show');
            }
        });
        
        // ===== CONECTAR CLIQUES NOS CARDS DE PLANTAS =====
        document.addEventListener('DOMContentLoaded', () => {
            // Adicionar listener aos cards do catálogo
            const plantCards = document.querySelectorAll('.plant-card');
            plantCards.forEach(card => {
                const plantName = card.querySelector('h3')?.textContent;
                const plant = plantCatalog.find(p => p.name === plantName);
                if (plant) {
                    card.style.cursor = 'pointer';
                    card.addEventListener('click', (e) => {
                        if (e.target.tagName !== 'BUTTON') {
                            showPlantDetail(plant.id);
                        }
                    });
                }
            });
        });
        
        // ===== SISTEMA DE ACHIEVEMENTS VISUAL =====
        function renderAchievements() {
            const achievementsContainer = document.getElementById('achievementsContainer');
            if (!achievementsContainer) return;
            
            let html = '<div class="achievements-showcase">';
            achievementsDB.forEach(achievement => {
                const unlocked = userProfile.achievements.includes(achievement.id);
                html += `
                    <div class="achievement-item ${unlocked ? 'unlocked' : ''}" title="${achievement.description}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-title">${achievement.name}</div>
                        <div class="achievement-desc">${unlocked ? '+' + achievement.points + ' pts' : 'Bloqueado'}</div>
                    </div>
                `;
            });
            html += '</div>';
            achievementsContainer.innerHTML = html;
        }
        
        // ===== SISTEMA DE LOJA VISUAL =====
        function renderShop() {
            const shopContainer = document.getElementById('shopContainer');
            if (!shopContainer) return;
            
            let html = '<div class="shop-products">';
            shopItems.forEach(item => {
                html += `
                    <div class="shop-product">
                        <div class="shop-product-header">${item.icon}</div>
                        <div class="shop-product-body">
                            <div class="shop-product-name">${item.name}</div>
                            <div class="shop-product-desc">${item.description}</div>
                            <div class="shop-product-price">💰 ${item.price}</div>
                            <button class="buy-button" onclick="buyItem('${item.id}', ${item.price}, '${item.name}')">Comprar</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            shopContainer.innerHTML = html;
        }
        
        function buyItem(itemId, price, name) {
            if (spendCoins(price, name)) {
                userProfile.points += Math.floor(price / 10);
            }
        }
        
        // ===== RANKING VISUAL =====
        function renderRanking() {
            const rankingContainer = document.getElementById('rankingContainer');
            if (!rankingContainer) return;
            
            let html = '<div class="ranking-list">';
            globalRanking.forEach((user, index) => {
                let positionClass = 'gold';
                if (index === 1) positionClass = 'silver';
                if (index === 2) positionClass = 'bronze';
                
                html += `
                    <div class="ranking-item">
                        <div class="ranking-position ${positionClass}">${index + 1}º</div>
                        <div class="ranking-info">
                            <div class="ranking-name">${user.name}</div>
                            <div class="ranking-plants">🌱 ${user.plants} plantas</div>
                        </div>
                        <div class="ranking-score">${user.points} pts</div>
                    </div>
                `;
            });
            html += '</div>';
            rankingContainer.innerHTML = html;
        }
        
        // ===== RECEITAS VISUAL =====
        function renderRecipes() {
            const recipesContainer = document.getElementById('recipesContainer');
            if (!recipesContainer) return;
            
            let html = '<div class="recipes-showcase">';
            recipesDB.forEach(recipe => {
                html += `
                    <div class="recipe-item">
                        <div class="recipe-header">
                            <div class="recipe-title">👨‍🍳 ${recipe.name}</div>
                            <div class="recipe-time">⏱️ ${recipe.prepTime} min</div>
                        </div>
                        <div class="recipe-body">
                            <div class="recipe-ingredients">
                                <div class="recipe-ingredients-title">Ingredientes:</div>
                                ${recipe.plants.map(p => `<div class="recipe-ingredient">🌱 ${p}</div>`).join('')}
                            </div>
                            <div class="recipe-nutrition">
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Proteína</div>
                                    <div class="nutrition-value">${recipe.nutrition.proteina}g</div>
                                </div>
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Carbo</div>
                                    <div class="nutrition-value">${recipe.nutrition.carboidrato}g</div>
                                </div>
                                <div class="nutrition-item">
                                    <div class="nutrition-label">Gordura</div>
                                    <div class="nutrition-value">${recipe.nutrition.gordura}g</div>
                                </div>
                            </div>
                            <button class="buy-button" onclick="prepareRecipe('${recipe.id}')" style="margin-top: 1rem;">Preparar</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            recipesContainer.innerHTML = html;
        }
        
        // ===== PRAGAS VISUAL =====
        function renderPests() {
            const pestsContainer = document.getElementById('pestsContainer');
            if (!pestsContainer) return;
            
            let html = '<div class="pests-grid">';
            pestsDB.forEach(pest => {
                html += `
                    <div class="pest-card">
                        <div class="pest-name">🐛 ${pest.name}</div>
                        <div class="pest-plants">Afeta: ${pest.plants.join(', ')}</div>
                        <div class="pest-solutions">
                            <div class="pest-solutions-title">Soluções Orgânicas:</div>
                            ${pest.solutions.map(s => `<div class="solution-item">✓ ${s}</div>`).join('')}
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            pestsContainer.innerHTML = html;
        }
        
        // ===== CALCULADORA CO2 =====
        function calculateCO2() {
            const plantSelect = document.getElementById('co2PlantSelect');
            const quantityInput = document.getElementById('co2Quantity');
            
            if (!plantSelect || !quantityInput) return;
            
            const plantId = plantSelect.value;
            const quantity = parseFloat(quantityInput.value) || 0;
            
            const plant = plantCatalog.find(p => p.id === plantId);
            if (plant && quantity > 0) {
                const totalCO2 = plant.carbonSequestration * quantity;
                const carKm = (totalCO2 / 0.2).toFixed(2);
                
                const resultBox = document.getElementById('co2Result');
                if (resultBox) {
                    resultBox.innerHTML = `
                        <div class="result-box">
                            <div class="result-label">Sequestro de CO₂ Total</div>
                            <div class="result-value">${totalCO2.toFixed(2)} kg</div>
                            <div class="result-label">Equivalente a neutralizar ${carKm} km de carro</div>
                        </div>
                    `;
                }
            }
        }
        
        // ===== INICIALIZAR TUDO =====
        document.addEventListener('DOMContentLoaded', () => {
            renderAchievements();
            renderShop();
            renderRanking();
            renderRecipes();
            renderPests();
            
            console.log('✅ Todas as melhorias visuais carregadas!');
        });
    </script>
</body>
</html>