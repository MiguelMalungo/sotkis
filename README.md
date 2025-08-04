# Sotkis - Intelligent Waste Management System

A modern, responsive web application for smart waste management systems built with React, Tailwind CSS, and Shadcn UI components.

## 🚀 Features

### Core Functionality
- **Dashboard Analytics**: Real-time monitoring with KPI cards and performance metrics
- **User Management**: Complete user administration with role-based access
- **Administration Panel**: Comprehensive system administration tools
- **Responsive Design**: Mobile and tablet-friendly interface
- **Modern UI**: Apple-style design with glass morphism effects

### Key Modules
- **Dashboard**: Operação and Performance dashboards with real-time data
- **Utilizadores**: User management with filtering and search capabilities
- **Administração**: System administration including lots, containers, and configurations
- **Sotkis Access**: RFID management, reports, deposits, and battery monitoring
- **Sotcare**: Preventive/corrective interventions and problem management
- **Sotkis PAYLT**: Contract management, invoicing, pricing, and points system
- **Sotkis Routes**: Route optimization and management
- **Sotkis Level**: Alerts, pickups, and container monitoring
- **Compliance**: Client and supplier management with compliance dashboard
- **Planning**: Scheduling and planning tools

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI with custom Sotkis styling
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts (ready for integration)
- **Font**: Roboto (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sotkis-waste-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Design System

### Colors
- **Primary Green**: `#9EC043` (Sotkis Green)
- **Background**: Dark theme with glass morphism effects
- **Text**: White and gray variations for hierarchy

### Components
- **Cards**: Glass morphism with backdrop blur
- **Buttons**: Multiple variants including Sotkis green
- **Forms**: Clean, accessible input components
- **Tables**: Responsive data tables with hover effects

### Layout
- **Sidebar**: Collapsible navigation with submenus
- **Background**: Dynamic switching between clean and blurred backgrounds
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── select.jsx
│   │   └── table.jsx
│   └── layout/             # Layout components
│       ├── Layout.jsx
│       └── Sidebar.jsx
├── pages/
│   ├── Login.jsx           # Login page
│   ├── Utilizadores.jsx    # Users management
│   ├── dashboard/          # Dashboard pages
│   │   ├── OperacaoDashboard.jsx
│   │   └── PerformanceDashboard.jsx
│   └── administracao/      # Administration pages
│       └── Lotes.jsx
├── lib/
│   └── utils.js           # Utility functions
├── App.jsx                # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette including Sotkis green
- Custom border radius and shadows
- Responsive breakpoints
- Animation utilities

### Vite Configuration
- React plugin
- Path aliases (`@/` for `src/`)
- Development server on port 3000

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile**: Collapsed sidebar, stacked layouts
- **Tablet**: Adaptive grid systems
- **Desktop**: Full sidebar, multi-column layouts

## 🎯 Key Features Implemented

### ✅ Completed
- [x] Login page with language selection
- [x] Responsive sidebar with submenu support
- [x] Dashboard layouts (Operação & Performance)
- [x] User management page with filters
- [x] Administration lots page
- [x] Background switching based on route
- [x] Glass morphism design system
- [x] Mobile-responsive design

### 🚧 In Development
- [ ] Chart integration with Recharts
- [ ] Real-time data connections
- [ ] Authentication system
- [ ] Form validation
- [ ] Data persistence

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Design**: Miguel Guedes (Sotkon design)
- **Development**: Sotkis Intelligent Systems
- **Company**: Sotkon - Waste Systems

## 🔗 Links

- **Live Demo**: [https://sotkon.scemai.com:20443](https://sotkon.scemai.com:20443)
- **Company**: [Sotkis Intelligent Systems](https://sotkis.com)

## 📞 Support

For support and questions, please contact the development team at Sotkis Intelligent Systems.

---

**Sotkis Intelligent Systems** - Transforming waste management through smart technology. 