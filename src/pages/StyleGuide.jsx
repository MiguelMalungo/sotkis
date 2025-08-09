import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { 
  // Navigation & Layout
  Menu, X, ChevronDown, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpDown,
  
  // Dashboard & Analytics
  BarChart3, TrendingUp, TrendingDown, Activity, Gauge, PieChart, LineChart,
  
  // Actions & CRUD
  Plus, Edit, Trash2, Search, Filter, Download, Upload, Printer, FileText, Save, Cancel, Check, X,
  
  // Status & Feedback
  CheckCircle, AlertTriangle, Info, XCircle, Clock, AlertCircle, Shield, Lock, Key,
  
  // Navigation & Location
  Map, MapPin, Navigation, Route, Home, Settings, User, Users, UserCheck,
  
  // Data & Content
  Calendar, Clock, Database, Folder, File, Image, Video, Music, Document,
  
  // Communication
  Mail, MessageSquare, Phone, Bell, Notifications,
  
  // Business & Management
  Building, Briefcase, DollarSign, CreditCard, Receipt, Package, Box, Gift, ShoppingCart,
  
  // Technology & Hardware
  Wifi, Radio, Battery, Cpu, HardDrive, Monitor, Smartphone, Tablet, Laptop,
  
  // Waste Management Specific
  Recycle, Trash, Package, Container, Truck, Route, Location, Sensor, Alert,
  
  // UI Elements
  Eye, EyeOff, Heart, Star, Bookmark, Share, Copy, Link, ExternalLink,
  
  // System & Admin
  Cog, Settings, Tool, Wrench, Palette, Tag, Label, Flag, Globe, Language,
  
  // Charts & Data Visualization
  BarChart, PieChart, LineChart, ScatterChart, AreaChart, DonutChart,
  
  // Time & Date
  Calendar, Clock, Timer, Stopwatch, CalendarDays, CalendarCheck,
  
  // Files & Documents
  FileText, File, FilePlus, FileEdit, FileX, FileCheck, FileSearch,
  
  // Communication & Social
  MessageCircle, MessageSquare, Send, Reply, Forward, Mail, Inbox,
  
  // Security & Access
  Lock, Unlock, Key, Shield, UserCheck, UserX, UserPlus, UserMinus,
  
  // Business & Finance
  DollarSign, Euro, Pound, CreditCard, Wallet, PiggyBank, TrendingUp, TrendingDown,
  
  // Technology & Development
  Code, GitBranch, GitCommit, GitPullRequest, Bug, Zap, Database, Server,
  
  // Miscellaneous
  HelpCircle, Info, ExternalLink, Link, Copy, Cut, Scissors, Paperclip, Pin,
  
  // Design System Icons
  Palette, Type, Box, Layout, Smartphone, Monitor, Layers, Grid, List, Columns
} from 'lucide-react';

const StyleGuide = () => {
  // Complete icon library from the app
  const iconLibrary = {
    navigation: [Menu, X, ChevronDown, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ArrowUpDown],
    dashboard: [BarChart3, TrendingUp, TrendingDown, Activity, Gauge, PieChart, LineChart],
    actions: [Plus, Edit, Trash2, Search, Filter, Download, Upload, Printer, FileText, Save, Cancel, Check, X],
    status: [CheckCircle, AlertTriangle, Info, XCircle, Clock, AlertCircle, Shield, Lock, Key],
    location: [Map, MapPin, Navigation, Route, Home, Settings, User, Users, UserCheck],
    data: [Calendar, Clock, Database, Folder, File, Image, Video, Music, Document],
    communication: [Mail, MessageSquare, Phone, Bell, Notifications],
    business: [Building, Briefcase, DollarSign, CreditCard, Receipt, Package, Box, Gift, ShoppingCart],
    technology: [Wifi, Radio, Battery, Cpu, HardDrive, Monitor, Smartphone, Tablet, Laptop],
    waste: [Recycle, Trash, Package, Container, Truck, Route, Location, Sensor, Alert],
    ui: [Eye, EyeOff, Heart, Star, Bookmark, Share, Copy, Link, ExternalLink],
    system: [Cog, Settings, Tool, Wrench, Palette, Tag, Label, Flag, Globe, Language],
    charts: [BarChart, PieChart, LineChart, ScatterChart, AreaChart, DonutChart],
    time: [Calendar, Clock, Timer, Stopwatch, CalendarDays, CalendarCheck],
    files: [FileText, File, FilePlus, FileEdit, FileX, FileCheck, FileSearch],
    social: [MessageCircle, MessageSquare, Send, Reply, Forward, Mail, Inbox],
    security: [Lock, Unlock, Key, Shield, UserCheck, UserX, UserPlus, UserMinus],
    finance: [DollarSign, Euro, Pound, CreditCard, Wallet, PiggyBank, TrendingUp, TrendingDown],
    development: [Code, GitBranch, GitCommit, GitPullRequest, Bug, Zap, Database, Server],
    misc: [HelpCircle, Info, ExternalLink, Link, Copy, Cut, Scissors, Paperclip, Pin],
    design: [Palette, Type, Box, Layout, Smartphone, Monitor, Layers, Grid, List, Columns]
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-sotkis-green/20 rounded-lg">
            <Palette className="h-8 w-8 text-sotkis-green" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Sotkis Design System</h1>
            <p className="text-gray-300 mt-1">Complete design system and component library for developers</p>
          </div>
        </div>
      </div>

      {/* Typography System */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Type className="h-5 w-5" />
            <span>Typography System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Font Family */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Font Family</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Primary Font: Roboto</h4>
                <p className="text-gray-300 text-sm mb-2">Google Fonts - Professional, clean, and highly readable</p>
                <div className="space-y-2">
                  <p className="font-light text-white">Light (300) - <code className="bg-gray-800 px-1 rounded">font-light</code></p>
                  <p className="font-normal text-white">Regular (400) - <code className="bg-gray-800 px-1 rounded">font-normal</code></p>
                  <p className="font-medium text-white">Medium (500) - <code className="bg-gray-800 px-1 rounded">font-medium</code></p>
                  <p className="font-semibold text-white">Semibold (600) - <code className="bg-gray-800 px-1 rounded">font-semibold</code></p>
                  <p className="font-bold text-white">Bold (700) - <code className="bg-gray-800 px-1 rounded">font-bold</code></p>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Font Stack</h4>
                <code className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-300">
                  font-family: "Roboto", "ui-sans-serif", "system-ui", "sans-serif"
                </code>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Type Scale</h3>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">Display Large (text-5xl)</h1>
                <p className="text-gray-400 text-sm">60px / 72px line-height - Hero titles, landing pages</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Display Medium (text-4xl)</h1>
                <p className="text-gray-400 text-sm">36px / 40px line-height - Page titles, major sections</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Heading 1 (text-3xl)</h2>
                <p className="text-gray-400 text-sm">30px / 36px line-height - Section headers</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Heading 2 (text-2xl)</h3>
                <p className="text-gray-400 text-sm">24px / 32px line-height - Subsection titles</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Heading 3 (text-xl)</h4>
                <p className="text-gray-400 text-sm">20px / 28px line-height - Card titles, form labels</p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white mb-2">Heading 4 (text-lg)</h5>
                <p className="text-gray-400 text-sm">18px / 28px line-height - Small titles, emphasis</p>
              </div>
              <div>
                <p className="text-base text-white mb-2">Body Large (text-base)</p>
                <p className="text-gray-400 text-sm">16px / 24px line-height - Main content, paragraphs</p>
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-2">Body Medium (text-sm)</p>
                <p className="text-gray-400 text-sm">14px / 20px line-height - Secondary text, captions</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">Body Small (text-xs)</p>
                <p className="text-gray-400 text-sm">12px / 16px line-height - Labels, badges, fine print</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Text Color Hierarchy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-white font-medium">Primary Text (text-white)</p>
                <p className="text-gray-300 font-medium">Secondary Text (text-gray-300)</p>
                <p className="text-gray-400 font-medium">Tertiary Text (text-gray-400)</p>
                <p className="text-sotkis-green font-medium">Brand Text (text-sotkis-green)</p>
              </div>
              <div className="space-y-3">
                <p className="text-green-400 font-medium">Success Text (text-green-400)</p>
                <p className="text-yellow-400 font-medium">Warning Text (text-yellow-400)</p>
                <p className="text-red-400 font-medium">Error Text (text-red-400)</p>
                <p className="text-blue-400 font-medium">Info Text (text-blue-400)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Color System */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Palette className="h-5 w-5" />
            <span>Complete Color System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Brand Colors */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Brand Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="h-20 bg-sotkis-green rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">Sotkis Green</span>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-white font-semibold">#9EC043</p>
                  <p className="text-gray-400 text-sm">Primary brand color</p>
                  <p className="text-gray-400 text-xs">Used for: Buttons, links, active states</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">White</span>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-white font-semibold">#FFFFFF</p>
                  <p className="text-gray-400 text-sm">Primary text color</p>
                  <p className="text-gray-400 text-xs">Used for: Headings, body text</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-20 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Black</span>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-white font-semibold">#000000</p>
                  <p className="text-gray-400 text-sm">Background overlay</p>
                  <p className="text-gray-400 text-xs">Used for: Overlays, contrast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Status Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Success', usage: 'Resolved, Active, Completed' },
                { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Warning', usage: 'In Progress, Pending, Attention' },
                { bg: 'bg-red-500/20', text: 'text-red-400', label: 'Error', usage: 'Critical, Failed, Blocked' },
                { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'Info', usage: 'New, Processing, Information' }
              ].map((color, index) => (
                <div key={index} className="space-y-3">
                  <div className={`h-16 ${color.bg} rounded-lg flex items-center justify-center`}>
                    <span className={`${color.text} font-semibold`}>{color.label}</span>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-white font-medium">{color.label}</p>
                    <p className="text-gray-400 text-xs">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Gray Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { bg: 'bg-gray-300', text: 'text-gray-700', label: 'Gray 300', hex: '#D1D5DB' },
                { bg: 'bg-gray-400', text: 'text-gray-800', label: 'Gray 400', hex: '#9CA3AF' },
                { bg: 'bg-gray-500', text: 'text-white', label: 'Gray 500', hex: '#6B7280' },
                { bg: 'bg-gray-600', text: 'text-white', label: 'Gray 600', hex: '#4B5563' },
                { bg: 'bg-gray-700', text: 'text-white', label: 'Gray 700', hex: '#374151' }
              ].map((color, index) => (
                <div key={index} className="space-y-2">
                  <div className={`h-12 ${color.bg} rounded-lg flex items-center justify-center`}>
                    <span className={`${color.text} font-medium text-sm`}>Gray</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium text-sm">{color.label}</p>
                    <p className="text-gray-400 text-xs">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background Colors */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Background Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">Glass Card</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">bg-white/10</p>
                  <p className="text-gray-400 text-sm">Standard card background</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-black/20 backdrop-blur-lg rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">Dark Card</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">bg-black/20</p>
                  <p className="text-gray-400 text-sm">Alternative card background</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-sotkis-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-sotkis-green font-medium">Brand Accent</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">bg-sotkis-green/20</p>
                  <p className="text-gray-400 text-sm">Icon backgrounds, highlights</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Icon Library */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Box className="h-5 w-5" />
            <span>Complete Icon Library</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {Object.entries(iconLibrary).map(([category, icons]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category} Icons</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {icons.map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Icon className="h-6 w-6 text-sotkis-green" />
                    <span className="text-xs text-gray-300 text-center">{Icon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Component Library */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Layout className="h-5 w-5" />
            <span>Component Library</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Button System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Primary Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                    Primary
                  </Button>
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90" size="sm">
                    Small
                  </Button>
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90" size="lg">
                    Large
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Secondary Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white">
                    Secondary
                  </Button>
                  <Button variant="ghost" className="text-sotkis-green hover:text-sotkis-green/80">
                    Ghost
                  </Button>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white" size="sm">
                    Small
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Input Fields</h4>
                <div className="space-y-3">
                  <Input 
                    placeholder="Default input" 
                    className="bg-white text-black placeholder-gray-600"
                  />
                  <Input 
                    placeholder="Disabled input" 
                    disabled 
                    className="bg-gray-200 text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Select Dropdowns</h4>
                <div className="space-y-3">
                  <Select>
                    <SelectTrigger className="bg-white border-white text-black">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Card Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-white">Glass Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Standard glass morphism effect.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardHeader>
                  <CardTitle className="text-white">Alternative Glass</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Alternative glass styling.</p>
                </CardContent>
              </Card>
              <Card className="card-glass-dark">
                <CardHeader>
                  <CardTitle className="text-white">Dark Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Darker variant for contrast.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Status Badges */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Status Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                <CheckCircle className="inline h-4 w-4 mr-1" />
                Success
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                <AlertTriangle className="inline h-4 w-4 mr-1" />
                Warning
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                <XCircle className="inline h-4 w-4 mr-1" />
                Error
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                <Info className="inline h-4 w-4 mr-1" />
                Info
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout & Spacing */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Grid className="h-5 w-5" />
            <span>Layout & Spacing System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Spacing Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Spacing Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { class: 'space-y-2', desc: 'Small spacing (8px)' },
                { class: 'space-y-4', desc: 'Medium spacing (16px)' },
                { class: 'space-y-6', desc: 'Large spacing (24px)' },
                { class: 'space-y-8', desc: 'Extra large spacing (32px)' }
              ].map((spacing, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg">
                  <p className="text-white font-medium text-sm">{spacing.class}</p>
                  <p className="text-gray-400 text-xs">{spacing.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid System */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Responsive Grid System</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">Grid Item {item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <code className="bg-gray-800 px-1 rounded">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4</code>
              </p>
            </div>
          </div>

          {/* Container Patterns */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Container Patterns</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Page Container</h4>
                <code className="bg-gray-800 px-1 rounded text-sm">p-6 space-y-6</code>
                <p className="text-gray-400 text-sm mt-1">Standard page padding and spacing</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Card Container</h4>
                <code className="bg-gray-800 px-1 rounded text-sm">p-6 space-y-4</code>
                <p className="text-gray-400 text-sm mt-1">Card content padding and spacing</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Design */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Responsive Design System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Breakpoints */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Breakpoints</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4 text-gray-400" />
                  <span className="text-white font-medium">Mobile</span>
                  <span className="text-gray-400 text-sm">(&lt; 768px)</span>
                </div>
                <p className="text-gray-300 text-sm">Single column layout, right-aligned titles, compact spacing</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-gray-400" />
                  <span className="text-white font-medium">Desktop</span>
                  <span className="text-gray-400 text-sm">(&gt;= 768px)</span>
                </div>
                <p className="text-gray-300 text-sm">Multi-column layout, left-aligned titles, expanded spacing</p>
              </div>
            </div>
          </div>

          {/* Mobile Patterns */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Mobile Patterns</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Title Alignment</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>• Mobile: <code className="bg-gray-800 px-1 rounded">text-right</code></p>
                  <p>• Desktop: <code className="bg-gray-800 px-1 rounded">text-left</code></p>
                  <p>• Implementation: <code className="bg-gray-800 px-1 rounded">text-right sm:text-left</code></p>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Layout Classes</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>• Flex direction: <code className="bg-gray-800 px-1 rounded">flex-col md:flex-row</code></p>
                  <p>• Justify content: <code className="bg-gray-800 px-1 rounded">justify-end sm:justify-between</code></p>
                  <p>• Grid columns: <code className="bg-gray-800 px-1 rounded">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</code></p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSS Classes Reference */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Complete CSS Classes Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Background Classes</h3>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-800 px-1 rounded">card-glass</code> - Glass morphism card</div>
                <div><code className="bg-gray-800 px-1 rounded">card-glass-dark</code> - Dark glass variant</div>
                <div><code className="bg-gray-800 px-1 rounded">bg-white/10</code> - Semi-transparent white</div>
                <div><code className="bg-gray-800 px-1 rounded">bg-sotkis-green</code> - Primary brand color</div>
                <div><code className="bg-gray-800 px-1 rounded">backdrop-blur-lg</code> - Blur effect</div>
                <div><code className="bg-gray-800 px-1 rounded">bg-overlay</code> - Dark overlay</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Text Classes</h3>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-800 px-1 rounded">text-white</code> - Primary text</div>
                <div><code className="bg-gray-800 px-1 rounded">text-gray-300</code> - Secondary text</div>
                <div><code className="bg-gray-800 px-1 rounded">text-sotkis-green</code> - Brand text</div>
                <div><code className="bg-gray-800 px-1 rounded">mobile-title</code> - Mobile title alignment</div>
                <div><code className="bg-gray-800 px-1 rounded">dashboard-card-title</code> - Dashboard card titles</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleGuide; 