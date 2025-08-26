import React, { useState, useEffect } from 'react'; 
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { 
  // Navigation & Layout
  Menu, X, ChevronRight, ChevronDown, ArrowLeft, ArrowUpDown, LayoutDashboard,
  
  // Actions & CRUD
  Plus, Edit, Trash2, Search, Filter, Download, Upload, Printer, FileText,
  
  // Status & Feedback
  CheckCircle, AlertTriangle, Info, XCircle, AlertCircle, Clock,
  
  // Data & Analytics
  BarChart3, TrendingUp, TrendingDown, Activity, Calendar, PieChart,
  
  // Business Icons
  User, Users, Shield, Lock, Key, Wifi, Radio, Package, Box, Recycle,
  Wrench, Palette, Tag, Battery, MapPin, List, Map as MapIcon, Settings, Globe, Cross, CreditCard,
  
  // UI Elements
  Eye, EyeOff, Image, Smartphone, Monitor,
  
  // Dashboard Icons
  Gauge, Gift, Pin, Leaf, RefreshCw, ArrowDownCircle, Target, Award, Zap,
  
  // Design System Icons
  Type, Box as BoxIcon, Layout, Code2, Layers, Paintbrush,
  
  // Theme Icons
  Sun, Moon
} from 'lucide-react';

// Import assets properly
import logoImage from '../../assets/Logo.png';
import logo2Image from '../../assets/Logo2.png';
import logoThinImage from '../../assets/Logo_thin.png';
import ptFlag from '../../assets/pt.png';
import enFlag from '../../assets/en.png';
import spFlag from '../../assets/sp.png';
import croatiaFlag from '../../assets/croatia.png';
import assistantBotImage from '../../assets/sott(1).png';

const StyleGuide = () => {
  // Track light mode state
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(document.body.classList.contains('light-theme'));
    
    const observer = new MutationObserver(() => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Brand Information
  const brandInfo = {
    name: 'Sotkis Design System',
    version: '2.0',
    description: 'A comprehensive design system for Sotkis waste management platform'
  };

  // Color Palette - Comprehensive colors from the application
  const colorPalette = {
    brand: {
      primary: { color: '#9EC043', name: 'Sotkis Green', usage: 'Primary brand color, buttons, accents' },
      secondary: { color: '#038703', name: 'Dark Green', usage: 'Charts, data visualization' },
      tertiary: { color: '#4CB151', name: 'Light Green', usage: 'Secondary charts, success states' }
    },
    semantic: {
      success: { color: '#10B981', name: 'Success Green', usage: 'Success messages, positive indicators' },
      warning: { color: '#F59E0B', name: 'Warning Amber', usage: 'Warning states, attention needed' },
      error: { color: '#EF4444', name: 'Error Red', usage: 'Error states, critical alerts' },
      info: { color: '#3B82F6', name: 'Info Blue', usage: 'Information, neutral states' }
    },
    neutral: {
      white: { color: '#FFFFFF', name: 'White', usage: 'Primary text, backgrounds' },
      gray50: { color: '#F9FAFB', name: 'Gray 50', usage: 'Light backgrounds' },
      gray100: { color: '#F3F4F6', name: 'Gray 100', usage: 'Subtle backgrounds' },
      gray300: { color: '#D1D5DB', name: 'Gray 300', usage: 'Secondary text' },
      gray400: { color: '#9CA3AF', name: 'Gray 400', usage: 'Placeholder text' },
      gray500: { color: '#6B7280', name: 'Gray 500', usage: 'Muted text' },
      gray700: { color: '#374151', name: 'Gray 700', usage: 'Dark text' },
      gray800: { color: '#1F2937', name: 'Gray 800', usage: 'Code blocks' },
      gray900: { color: '#111827', name: 'Gray 900', usage: 'Background' },
      black: { color: '#000000', name: 'Black', usage: 'High contrast text' }
    },
    charts: {
      primary: ['#9EC043', '#038703', '#4CB151', '#5EA65F', '#568864'],
      extended: ['#dc2626', '#eab308', '#3B82F6', '#8B5CF6', '#10B981']
    }
  };

  // Typography Scale
  const typographyScale = {
    fontFamily: 'Roboto, ui-sans-serif, system-ui, sans-serif',
    weights: {
      light: '300',
      normal: '400', 
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    sizes: {
      xs: { size: '12px', lineHeight: '16px', usage: 'Labels, captions' },
      sm: { size: '14px', lineHeight: '20px', usage: 'Secondary text, small UI' },
      base: { size: '16px', lineHeight: '24px', usage: 'Body text, default' },
      lg: { size: '18px', lineHeight: '28px', usage: 'Large body text' },
      xl: { size: '20px', lineHeight: '28px', usage: 'Headings, titles' },
      '2xl': { size: '24px', lineHeight: '32px', usage: 'Page titles' },
      '3xl': { size: '30px', lineHeight: '36px', usage: 'Section headers' },
      '4xl': { size: '36px', lineHeight: '40px', usage: 'Hero titles' }
    }
  };

  // Spacing System
  const spacingSystem = {
    scale: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px'
    },
    usage: {
      'space-y-2': 'Item spacing (8px)',
      'space-y-4': 'Component spacing (16px)',
      'space-y-6': 'Card spacing (24px)',
      'space-y-8': 'Section spacing (32px)',
      'p-6': 'Page padding (24px)',
      'gap-4': 'Grid gaps (16px)'
    }
  };

  // Icon Library - Organized by category
  const iconLibrary = {
    navigation: [
      { icon: Menu, name: 'Menu', usage: 'Mobile menu toggle' },
      { icon: X, name: 'X', usage: 'Close actions' },
      { icon: ChevronRight, name: 'ChevronRight', usage: 'Expand, navigation' },
      { icon: ChevronDown, name: 'ChevronDown', usage: 'Dropdown, collapse' },
      { icon: ArrowLeft, name: 'ArrowLeft', usage: 'Back navigation' },
      { icon: ArrowUpDown, name: 'ArrowUpDown', usage: 'Sort indicators' }
    ],
    actions: [
      { icon: Plus, name: 'Plus', usage: 'Add new items' },
      { icon: Edit, name: 'Edit', usage: 'Edit actions' },
      { icon: Trash2, name: 'Trash2', usage: 'Delete actions' },
      { icon: Search, name: 'Search', usage: 'Search functionality' },
      { icon: Filter, name: 'Filter', usage: 'Filter controls' },
      { icon: Download, name: 'Download', usage: 'Download files' },
      { icon: Upload, name: 'Upload', usage: 'Upload files' },
      { icon: Printer, name: 'Printer', usage: 'Print functionality' },
      { icon: FileText, name: 'FileText', usage: 'Documents, reports' }
    ],
    status: [
      { icon: CheckCircle, name: 'CheckCircle', usage: 'Success states' },
      { icon: AlertTriangle, name: 'AlertTriangle', usage: 'Warning states' },
      { icon: Info, name: 'Info', usage: 'Information states' },
      { icon: XCircle, name: 'XCircle', usage: 'Error states' },
      { icon: AlertCircle, name: 'AlertCircle', usage: 'General alerts' },
      { icon: Clock, name: 'Clock', usage: 'Time, pending states' }
    ],
    analytics: [
      { icon: BarChart3, name: 'BarChart3', usage: 'Bar charts, statistics' },
      { icon: PieChart, name: 'PieChart', usage: 'Pie charts' },
      { icon: TrendingUp, name: 'TrendingUp', usage: 'Positive trends' },
      { icon: TrendingDown, name: 'TrendingDown', usage: 'Negative trends' },
      { icon: Activity, name: 'Activity', usage: 'Activity monitoring' },
      { icon: Calendar, name: 'Calendar', usage: 'Dates, scheduling' },
      { icon: Target, name: 'Target', usage: 'Goals, targets' },
      { icon: Gauge, name: 'Gauge', usage: 'Performance metrics' }
    ],
    business: [
      { icon: User, name: 'User', usage: 'Single user' },
      { icon: Users, name: 'Users', usage: 'Multiple users' },
      { icon: Shield, name: 'Shield', usage: 'Security' },
      { icon: Lock, name: 'Lock', usage: 'Access control' },
      { icon: Key, name: 'Key', usage: 'Authentication' },
      { icon: Wifi, name: 'Wifi', usage: 'RFID, connectivity' },
      { icon: Package, name: 'Package', usage: 'Containers, packages' },
      { icon: Recycle, name: 'Recycle', usage: 'Waste management' },
      { icon: Wrench, name: 'Wrench', usage: 'Maintenance' },
      { icon: Battery, name: 'Battery', usage: 'Battery status' },
      { icon: MapPin, name: 'MapPin', usage: 'Locations' },
      { icon: MapIcon, name: 'Map', usage: 'Maps, routes' }
    ],
    dashboard: [
      { icon: LayoutDashboard, name: 'LayoutDashboard', usage: 'Dashboard navigation' },
      { icon: Settings, name: 'Settings', usage: 'Administration' },
      { icon: Gift, name: 'Gift', usage: 'Rewards system' },
      { icon: Award, name: 'Award', usage: 'Achievements' },
      { icon: Zap, name: 'Zap', usage: 'Performance, energy' },
      { icon: RefreshCw, name: 'RefreshCw', usage: 'Refresh, reload' }
    ]
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 relative style-guide-container">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-[60]">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
          onClick={() => {
            const isEnablingLight = !document.body.classList.contains('light-theme');
            const layoutElement = document.querySelector('.min-h-screen');

            if (layoutElement) {
              // Background image containers (including inline backgroundImage/background-image styles)
              const backgroundDivs = layoutElement.querySelectorAll(
                'div[style*="backgroundImage"], div[style*="background-image"]'
              );
              backgroundDivs.forEach((div) => {
                div.style.display = isEnablingLight ? 'none' : '';
              });

              // Overlays: match common overlay classes and inline rgba gradients
              const overlayDivs = layoutElement.querySelectorAll(
                '.bg-overlay, .bg-overlay-light, div[style*="rgba(0, 0, 0, 0.8)"], div[style*="rgba(0,0,0,0.8)"], div[style*="rgba(0, 0, 0, 0.56)"], div[style*="rgba(0,0,0,0.56)"]'
              );
              overlayDivs.forEach((div) => {
                div.style.display = isEnablingLight ? 'none' : '';
              });
            }

            // Toggle body class for light theme last, based on target state
            if (isEnablingLight) {
              document.body.classList.add('light-theme');
            } else {
              document.body.classList.remove('light-theme');
            }
          }}
          title="Toggle Theme"
        >
          <Sun size={20} />
        </Button>
      </div>

      {/* Header */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="p-3 sm:p-4 bg-sotkis-green/20 rounded-xl">
            <Paintbrush className="h-8 w-8 sm:h-10 sm:w-10 text-sotkis-green" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{brandInfo.name}</h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-1">{brandInfo.description}</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
              <span className="text-sm text-sotkis-green font-medium">Version {brandInfo.version}</span>
              <span className="text-sm text-gray-400 hidden sm:inline">•</span>
              <span className="text-sm text-gray-400">React + Tailwind CSS</span>
              <span className="text-sm text-gray-400 hidden sm:inline">•</span>
              <span className="text-sm text-gray-400">Roboto Font Family</span>
          </div>
        </div>
      </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { icon: Type, label: 'Typography', id: 'typography' },
            { icon: Palette, label: 'Colors', id: 'colors' },
            { icon: BoxIcon, label: 'Components', id: 'components' },
            { icon: Search, label: 'Search', id: 'search' },
            { icon: LayoutDashboard, label: 'Layout', id: 'layout' },
            { icon: BarChart3, label: 'Charts', id: 'charts' },
            { icon: Code2, label: 'Code', id: 'code' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            >
              <item.icon className="h-5 w-5 text-sotkis-green mb-1" />
              <span className="text-xs text-white font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Overview */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Layers className="h-5 w-5" />
            <span>Design System Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sotkis-green mb-2">50+</div>
              <div className="text-white font-medium">Components</div>
              <div className="text-gray-400 text-sm">Reusable UI elements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sotkis-green mb-2">15+</div>
              <div className="text-white font-medium">Color Tokens</div>
              <div className="text-gray-400 text-sm">Semantic color system</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sotkis-green mb-2">8</div>
              <div className="text-white font-medium">Typography Scales</div>
              <div className="text-gray-400 text-sm">Responsive text sizing</div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-white font-semibold mb-3">Core Principles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sotkis-green" />
                  <span className="text-white font-medium">Consistency</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">Unified visual language across all platforms</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sotkis-green" />
                  <span className="text-white font-medium">Accessibility</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">WCAG compliant design patterns</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sotkis-green" />
                  <span className="text-white font-medium">Scalability</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">Modular components for rapid development</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sotkis-green" />
                  <span className="text-white font-medium">Performance</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">Optimized for speed and efficiency</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography System */}
      <Card className="card-glass" id="typography">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Type className="h-5 w-5" />
            <span>Typography System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Font Family */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Font Family</h3>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
                  <p className="text-white font-semibold mb-3 text-2xl" style={{ fontFamily: typographyScale.fontFamily }}>Roboto</p>
                  <p className="text-gray-300 text-sm mb-4">Font Stack: {typographyScale.fontFamily}</p>
                  <div className="space-y-3">
                    {Object.entries(typographyScale.weights).map(([name, weight]) => (
                      <div key={name} className="flex items-center justify-between">
                        <span className="text-white" style={{ fontWeight: weight }}>
                          {name.charAt(0).toUpperCase() + name.slice(1)} ({weight})
                        </span>
                        <span className="text-gray-400 text-sm">font-{name}</span>
              </div>
                    ))}
              </div>
              </div>
              <div>
                  <h4 className="text-white font-medium mb-3">Usage Guidelines</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Light (300):</strong> Subtle text, large displays</p>
                    <p>• <strong>Normal (400):</strong> Body text, paragraphs</p>
                    <p>• <strong>Medium (500):</strong> Emphasis, form labels</p>
                    <p>• <strong>Semibold (600):</strong> Card titles, headings</p>
                    <p>• <strong>Bold (700):</strong> Page titles, primary headings</p>
              </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Typography Scale</h3>
            <div className="space-y-6">
              {Object.entries(typographyScale.sizes).map(([scale, { size, lineHeight, usage }]) => (
                <div key={scale} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              <div>
                      <div className="text-white font-medium" style={{ fontSize: size, lineHeight }}>
                        {scale === 'xs' ? 'Extra Small' : 
                         scale === 'sm' ? 'Small' :
                         scale === 'base' ? 'Base' :
                         scale === 'lg' ? 'Large' :
                         scale.charAt(0).toUpperCase() + scale.slice(1)} Text
              </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-300 text-sm">
                        <code className="bg-gray-800 px-2 py-1 rounded text-xs">text-{scale}</code>
                      </div>
                      <div className="text-gray-400 text-xs">
                        {size} • {lineHeight} line height
                      </div>
              </div>
              <div>
                      <p className="text-gray-400 text-sm">{usage}</p>
              </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Text Color Hierarchy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Primary Text</h4>
              <div className="space-y-2">
                  <div className="text-white">text-white - Primary content</div>
                  <div className="text-gray-300">text-gray-300 - Secondary content</div>
                  <div className="text-gray-400">text-gray-400 - Tertiary content</div>
              </div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Brand Colors</h4>
              <div className="space-y-2">
                  <div className="text-sotkis-green">text-sotkis-green - Brand accent</div>
                  <div className="text-green-400">text-green-400 - Success states</div>
                  <div className="text-red-400">text-red-400 - Error states</div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Implementation</h4>
                <div className="space-y-2 text-xs">
                  <code className="block bg-gray-800 p-2 rounded text-white">&lt;h1 className="text-3xl font-bold text-white"&gt;</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">&lt;p className="text-base text-gray-300"&gt;</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">&lt;span className="text-sm text-gray-400"&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Icon System */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BoxIcon className="h-5 w-5" />
            <span>Icon System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Icon Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Usage Guidelines</h3>
              <div className="space-y-4 text-sm text-gray-300">
              <div>
                  <p className="font-medium text-white mb-2">1. Import from Lucide React:</p>
                  <code className="bg-gray-800 px-3 py-2 rounded text-white text-xs block font-mono">
                  import { '{' } IconName { '}' } from 'lucide-react';
                </code>
              </div>
              <div>
                  <p className="font-medium text-white mb-2">2. Standard implementation:</p>
                  <code className="bg-gray-800 px-3 py-2 rounded text-white text-xs block font-mono">
                  {`<IconName className="h-5 w-5 text-sotkis-green" />`}
                </code>
              </div>
              <div>
                  <p className="font-medium text-white mb-2">3. With semantic meaning:</p>
                  <code className="bg-gray-800 px-3 py-2 rounded text-white text-xs block font-mono">
                    {`<CheckCircle className="h-4 w-4 text-green-500" />`}
                  </code>
              </div>
                </div>
              </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Size Standards</h3>
              <div className="space-y-4">
                {[
                  { size: 'h-4 w-4', pixels: '16px', usage: 'Small UI elements, table actions' },
                  { size: 'h-5 w-5', pixels: '20px', usage: 'Default size, buttons, navigation' },
                  { size: 'h-6 w-6', pixels: '24px', usage: 'Form elements, card headers' },
                  { size: 'h-8 w-8', pixels: '32px', usage: 'Dashboard cards, prominent features' },
                  { size: 'h-10 w-10', pixels: '40px', usage: 'Hero sections, landing pages' }
                ].map((item) => (
                  <div key={item.size} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className={`${item.size} text-sotkis-green`} />
                      <code className="bg-gray-800 px-2 py-1 rounded text-white text-xs">{item.size}</code>
                      <span className="text-gray-400 text-xs">({item.pixels})</span>
                    </div>
                    <span className="text-gray-300 text-xs">{item.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Icon Categories */}
          {Object.entries(iconLibrary).map(([category, icons]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category} Icons</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {icons.map(({ icon: Icon, name, usage }) => (
                  <div key={name} className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Icon className="h-6 w-6 text-sotkis-green" />
                      <div>
                        <div className="text-white font-medium text-sm">{name}</div>
                        <div className="text-gray-400 text-xs mt-1">{usage}</div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Color Usage */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Icon Color Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { color: 'text-sotkis-green', label: 'Brand Primary', usage: 'Navigation, primary actions', icon: Settings },
                { color: 'text-green-500', label: 'Success', usage: 'Completed states, positive actions', icon: CheckCircle },
                { color: 'text-red-500', label: 'Error', usage: 'Error states, destructive actions', icon: XCircle },
                { color: 'text-yellow-500', label: 'Warning', usage: 'Caution states, attention needed', icon: AlertTriangle },
                { color: 'text-blue-500', label: 'Information', usage: 'Neutral info, help content', icon: Info },
                { color: 'text-white', label: 'Default', usage: 'Standard interface elements', icon: User },
                { color: 'text-gray-400', label: 'Muted', usage: 'Secondary, disabled states', icon: Clock },
                { color: 'text-purple-500', label: 'Special', usage: 'Rewards, achievements', icon: Award }
              ].map((item) => (
                <div key={item.color} className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                  <code className="text-xs text-gray-400 block mb-1">{item.color}</code>
                  <p className="text-xs text-gray-400">{item.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color System */}
      <Card className="card-glass" id="colors">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Palette className="h-5 w-5" />
            <span>Color System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Brand Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Brand Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(colorPalette.brand).map(([key, { color, name, usage }]) => (
                <div key={key} className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div 
                    className="h-20 rounded-lg flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: color }}
                  >
                    <span className="font-bold text-white drop-shadow-lg">{name}</span>
                </div>
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <code className="bg-gray-800 px-2 py-1 rounded text-white text-xs font-mono">{color}</code>
                      <button 
                        onClick={() => navigator.clipboard.writeText(color)}
                        className="text-sotkis-green hover:text-sotkis-green/80 text-xs"
                        title="Copy color"
                      >
                        Copy
                      </button>
                </div>
                    <p className="text-gray-300 text-sm font-medium">{name}</p>
                    <p className="text-gray-400 text-xs">{usage}</p>
              </div>
                </div>
              ))}
                </div>
              </div>

          {/* Semantic Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Semantic Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(colorPalette.semantic).map(([key, { color, name, usage }]) => {
                const bgClass = key === 'success' ? 'bg-green-500/20' :
                               key === 'warning' ? 'bg-yellow-500/20' :
                               key === 'error' ? 'bg-red-500/20' : 'bg-blue-500/20';
                const textClass = key === 'success' ? 'text-green-400' :
                                 key === 'warning' ? 'text-yellow-400' :
                                 key === 'error' ? 'text-red-400' : 'text-blue-400';
                return (
                  <div key={key} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className={`h-12 ${bgClass} rounded-lg flex items-center justify-center mb-3`}>
                      <span className={`${textClass} font-medium`}>{name}</span>
                </div>
                    <div className="space-y-1">
                      <code className="text-xs text-gray-300 block">{color}</code>
                      <p className="text-gray-400 text-xs">{usage}</p>
                </div>
              </div>
                );
              })}
            </div>
          </div>

          {/* Neutral Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Neutral Scale</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Light Neutrals</h4>
                  <div className="space-y-3">
                    {Object.entries(colorPalette.neutral).slice(0, 5).map(([key, { color, name, usage }]) => (
                      <div key={key} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                        <div 
                          className="w-12 h-8 rounded border border-white/20 flex-shrink-0 color-swatch"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium text-sm">{name}</span>
                            <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">{color}</code>
                </div>
                          <p className="text-gray-400 text-xs">{usage}</p>
                </div>
              </div>
                    ))}
                </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Dark Neutrals</h4>
                  <div className="space-y-3">
                    {Object.entries(colorPalette.neutral).slice(5).map(([key, { color, name, usage }]) => (
                      <div key={key} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                        <div 
                          className="w-12 h-8 rounded border border-white/20 flex-shrink-0 color-swatch"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium text-sm">{name}</span>
                            <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">{color}</code>
              </div>
                          <p className="text-gray-400 text-xs">{usage}</p>
                </div>
                </div>
                    ))}
              </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chart Color Palette</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-3">Primary Chart Colors</h4>
                <div className="flex flex-wrap gap-3">
                  {colorPalette.charts.primary.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-16 h-12 rounded-lg border border-white/20 mb-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      <code className="text-xs text-gray-300">{color}</code>
                  </div>
                  ))}
                  </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Extended Chart Colors</h4>
                <div className="flex flex-wrap gap-3">
                  {colorPalette.charts.extended.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-16 h-12 rounded-lg border border-white/20 mb-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      <code className="text-xs text-gray-300">{color}</code>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Color Usage Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">CSS Classes</h4>
                <div className="space-y-2 text-sm">
                  <code className="block bg-gray-800 p-2 rounded text-white">bg-sotkis-green</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">text-sotkis-green</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">border-sotkis-green</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">bg-white/10</code>
                  <code className="block bg-gray-800 p-2 rounded text-white">text-gray-300</code>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Status Applications</h4>
              <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-white text-sm">Success states</span>
                </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-white text-sm">Warning states</span>
                </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-white text-sm">Error states</span>
              </div>
                  <div className="flex items-center space-x-2">
                    <Info className="h-4 w-4 text-blue-500" />
                    <span className="text-white text-sm">Information states</span>
            </div>
          </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme System */}
      <Card className="card-glass" id="theme">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Sun className="h-5 w-5" />
            <span>Theme System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Theme Overview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Theme Toggle</h3>
            <p className="text-gray-300 mb-6">
              The application supports both dark and light theme modes. Users can toggle between themes using the sun/moon button in the top-right corner.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dark Theme */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Dark Theme (Default)</h4>
                <div className="bg-gray-900 p-4 rounded-lg mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white">Sample Content</span>
                    <Button size="sm" variant="sotkis">Action</Button>
                  </div>
                  <p className="text-gray-300 text-sm">Default theme with dark backgrounds and light text.</p>
                  </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Body class:</strong> Default (no class)</p>
                  <p>• <strong>Background:</strong> Dark gradients and textures</p>
                  <p>• <strong>Text:</strong> Light colors (white, gray-300)</p>
                  <p>• <strong>Cards:</strong> Semi-transparent with backdrop blur</p>
                </div>
              </div>

              {/* Light Theme */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Light Theme</h4>
                <div className="bg-white p-4 rounded-lg mb-3 border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-900">Sample Content</span>
                    <Button size="sm" variant="sotkis">Action</Button>
                  </div>
                  <p className="text-gray-600 text-sm">Light theme with bright backgrounds and dark text.</p>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Body class:</strong> <code className="bg-gray-800 px-1 rounded">light-theme</code></p>
                  <p>• <strong>Background:</strong> Hidden dark overlays and gradients</p>
                  <p>• <strong>Text:</strong> Dark colors (gray-900, gray-600)</p>
                  <p>• <strong>Cards:</strong> White backgrounds with subtle shadows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle Implementation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Implementation</h3>
            
            <div className="space-y-4">
              {/* Toggle Button */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Theme Toggle Button</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
                    title="Toggle Theme"
                  >
                    <Sun size={20} />
                  </Button>
                  <div>
                    <p className="text-white font-medium">Theme Toggle</p>
                    <p className="text-gray-300 text-sm">Fixed position top-right corner</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Position:</strong> <code className="bg-gray-800 px-1 rounded">fixed top-4 right-4</code></p>
                  <p>• <strong>Z-index:</strong> <code className="bg-gray-800 px-1 rounded">z-[60]</code></p>
                  <p>• <strong>Icon:</strong> Sun icon (always visible)</p>
                  <p>• <strong>Style:</strong> Glass morphism with backdrop blur</p>
                </div>
              </div>

              {/* Code Implementation */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Toggle Function</h4>
                <pre className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto mb-3">
                  <code>{`// Theme toggle implementation
const toggleTheme = () => {
  const isEnablingLight = !document.body.classList.contains('light-theme');
  
  // Hide/show background images and overlays
  const layoutElement = document.querySelector('.min-h-screen');
  if (layoutElement) {
    const backgroundDivs = layoutElement.querySelectorAll(
      'div[style*="backgroundImage"], div[style*="background-image"]'
    );
    backgroundDivs.forEach((div) => {
      div.style.display = isEnablingLight ? 'none' : '';
    });
  }
  
  // Toggle body class
  if (isEnablingLight) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
};`}</code>
                </pre>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Body class toggle:</strong> Adds/removes <code className="bg-gray-800 px-1 rounded">light-theme</code></p>
                  <p>• <strong>Background handling:</strong> Hides dark backgrounds in light mode</p>
                  <p>• <strong>CSS variables:</strong> Automatic theme switching via CSS</p>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Variables */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CSS Variables & Classes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Theme Variables</h4>
                <pre className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{`:root {
  --theme-bg: #121212;
  --theme-text: #ffffff;
  --theme-border: rgba(255,255,255,0.1);
}

body.light-theme {
  --theme-bg: #ffffff;
  --theme-text: #000000;  
  --theme-border: rgba(0,0,0,0.1);
}`}</code>
                </pre>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Light Theme Overrides</h4>
                <pre className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{`/* Key light theme styles */
body.light-theme .text-white {
  color: #000000 !important;
}

body.light-theme .bg-white\\/10 {
  background-color: rgba(0,0,0,0.05);
}

body.light-theme .card-glass {
  background: white;
  border: 1px solid #e5e7eb;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spacing System */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Layout className="h-5 w-5" />
            <span>Spacing System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Spacing Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Spacing Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(spacingSystem.scale).map(([key, value]) => (
                <div key={key} className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                  <div className="mb-2">
                    <div 
                      className="bg-sotkis-green mx-auto rounded"
                      style={{ width: value === '0px' ? '2px' : value, height: '8px', maxWidth: '100%' }}
                    ></div>
                  </div>
                  <code className="text-white font-medium text-sm block">{key}</code>
                  <span className="text-gray-400 text-xs">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Common Spacing Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Layout Spacing</h4>
                <div className="space-y-3">
                  {Object.entries(spacingSystem.usage).map(([className, description]) => (
                    <div key={className} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <code className="text-sotkis-green text-sm">{className}</code>
                      <span className="text-gray-300 text-sm">{description}</span>
                  </div>
                  ))}
                  </div>
                  </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Visual Examples</h4>
                <div className="space-y-4 p-4 bg-white/5 rounded-lg">
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-sotkis-green/30 rounded"></div>
                    <div className="w-full h-4 bg-sotkis-green/30 rounded"></div>
                    <p className="text-xs text-gray-400">space-y-2 (8px gap)</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-blue-500/30 rounded"></div>
                    <div className="w-full h-4 bg-blue-500/30 rounded"></div>
                    <p className="text-xs text-gray-400">space-y-4 (16px gap)</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-full h-4 bg-purple-500/30 rounded"></div>
                    <div className="w-full h-4 bg-purple-500/30 rounded"></div>
                    <p className="text-xs text-gray-400">space-y-6 (24px gap)</p>
                </div>
              </div>
                  </div>
                  </div>
                  </div>

          {/* Implementation Guide */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Implementation Guidelines</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4">Do's</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Use consistent spacing patterns</p>
                      <p className="text-gray-400 text-xs">Stick to the defined scale for predictable layouts</p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Use space-y for vertical rhythm</p>
                      <p className="text-gray-400 text-xs">Maintain consistent vertical spacing between elements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Use gap for grid layouts</p>
                      <p className="text-gray-400 text-xs">Consistent gaps between grid items</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4">Don'ts</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Avoid arbitrary spacing values</p>
                      <p className="text-gray-400 text-xs">Don't use random pixel values outside the scale</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Don't mix margin and padding inconsistently</p>
                      <p className="text-gray-400 text-xs">Be intentional about spacing methods</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Avoid negative margins for layout</p>
                      <p className="text-gray-400 text-xs">Use proper grid/flexbox instead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animation System */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Animation System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Animation Principles */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Animation Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Subtle & Purposeful</h4>
                <p className="text-gray-400 text-sm">Animations should enhance UX, not distract from content</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Fast & Responsive</h4>
                <p className="text-gray-400 text-sm">Keep durations under 300ms for UI interactions</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Consistent Easing</h4>
                <p className="text-gray-400 text-sm">Use standard easing functions for predictable motion</p>
              </div>
            </div>
          </div>

          {/* Available Animations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Available Animations</h3>
            <div className="space-y-6">
              {/* Fade In */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-medium">Fade In</h4>
                    <code className="text-sotkis-green text-sm">fade-in</code>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">0.3s ease-in-out</p>
                    <p className="text-gray-400 text-xs">Opacity 0→1, translateY(10px→0)</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Usage:</p>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      &lt;div className="fade-in"&gt;Content&lt;/div&gt;
                    </code>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Best for:</p>
                    <p className="text-gray-400 text-xs">Page loads, modal appearances, content reveals</p>
                  </div>
                </div>
              </div>

              {/* Hover Transitions */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-medium">Hover Transitions</h4>
                    <code className="text-sotkis-green text-sm">transition-colors</code>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">0.2s ease</p>
                    <p className="text-gray-400 text-xs">Background, text, border colors</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Example:</p>
                    <div className="p-3 bg-sotkis-green/20 hover:bg-sotkis-green/40 rounded transition-colors cursor-pointer border border-sotkis-green/50">
                      <span className="text-white text-sm">Hover me</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Implementation:</p>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      hover:bg-accent transition-colors
                    </code>
                  </div>
                </div>
              </div>

              {/* Transform Animations */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-medium">Transform Animations</h4>
                    <code className="text-sotkis-green text-sm">hover:scale-105</code>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">0.2s ease</p>
                    <p className="text-gray-400 text-xs">Scale, rotate, translate</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="p-4 bg-blue-500/20 rounded hover:scale-105 transition-transform cursor-pointer">
                      <span className="text-white text-sm">Scale</span>
                    </div>
                    <code className="text-xs text-gray-400 mt-1 block">hover:scale-105</code>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-purple-500/20 rounded hover:-translate-y-1 transition-transform cursor-pointer">
                      <span className="text-white text-sm">Lift</span>
                    </div>
                    <code className="text-xs text-gray-400 mt-1 block">hover:-translate-y-1</code>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-green-500/20 rounded hover:rotate-3 transition-transform cursor-pointer">
                      <span className="text-white text-sm">Rotate</span>
                    </div>
                    <code className="text-xs text-gray-400 mt-1 block">hover:rotate-3</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Guidelines */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <h4 className="text-white font-medium">Duration Scale</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">Micro-interactions</span>
                    <span className="text-gray-400 text-sm">100-150ms</span>
              </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">UI transitions</span>
                    <span className="text-gray-400 text-sm">200-250ms</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">Page transitions</span>
                    <span className="text-gray-400 text-sm">300-400ms</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Easing Functions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">ease-in-out</span>
                    <span className="text-gray-400 text-sm">Default choice</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">ease-out</span>
                    <span className="text-gray-400 text-sm">Entering elements</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                    <span className="text-white text-sm">ease-in</span>
                    <span className="text-gray-400 text-sm">Exiting elements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Library */}
      <Card className="card-glass" id="components">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BoxIcon className="h-5 w-5" />
            <span>Component Library</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          {/* Button System */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Button System</h3>
            
            {/* Button Variants */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Primary Buttons */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Primary Buttons</h4>
                  <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                      <Button className="bg-sotkis-green text-white hover:bg-sotkis-green/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Primary Action
                  </Button>
                      <Button className="bg-sotkis-green text-white hover:bg-sotkis-green/90" size="sm">
                    Small
                  </Button>
                      <Button className="bg-sotkis-green text-white hover:bg-sotkis-green/90" size="lg">
                    Large
                  </Button>
                </div>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      {`<Button className="bg-sotkis-green text-white">Primary</Button>`}
                    </code>
              </div>
                </div>

                {/* Secondary Buttons */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Secondary Buttons</h4>
                  <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Download className="h-4 w-4 mr-2" />
                    Secondary
                  </Button>
                      <Button variant="ghost" className="text-sotkis-green hover:bg-sotkis-green/10">
                    Ghost
                  </Button>
                      <Button variant="outline" size="sm" className="border-white/20 text-white">
                    Small
                  </Button>
                </div>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      {`<Button variant="outline">Secondary</Button>`}
                    </code>
              </div>
            </div>
          </div>

              {/* Status Buttons */}
          <div>
                <h4 className="text-white font-medium mb-4">Status & Action Buttons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Warning
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Info className="h-4 w-4 mr-2" />
                    Info
                  </Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h4 className="text-white font-medium mb-4">Button Sizes</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" className="bg-sotkis-green text-white">
                    Small (h-9)
                  </Button>
                  <Button className="bg-sotkis-green text-white">
                    Default (h-10)
                  </Button>
                  <Button size="lg" className="bg-sotkis-green text-white">
                    Large (h-11)
                  </Button>
                  <Button size="icon" className="bg-sotkis-green text-white">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Search Components */}
          <div id="search">
            <h3 className="text-lg font-semibold text-white mb-6">Search Components</h3>
            
            <div className="space-y-6">
              {/* Large Square Search Button */}
              <div>
                <h4 className="text-white font-medium mb-4">Large Square Search Button</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Button Examples */}
              <div className="space-y-4">
                <div className="space-y-3">
                      <div className="flex flex-wrap gap-4 items-center">
                        {/* Large Square Search Button */}
                        <Button 
                          size="icon" 
                          className="w-12 h-12 bg-sotkis-green text-white hover:bg-sotkis-green/90 rounded-lg shadow-lg"
                          title="Search"
                        >
                          <Search className="h-6 w-6" />
                        </Button>
                        
                        {/* Medium Square Search Button */}
                        <Button 
                          size="icon" 
                          className="w-10 h-10 bg-sotkis-green text-white hover:bg-sotkis-green/90 rounded-lg"
                          title="Search"
                        >
                          <Search className="h-5 w-5" />
                        </Button>
                        
                        {/* Small Square Search Button */}
                        <Button 
                          size="icon" 
                          className="w-8 h-8 bg-sotkis-green text-white hover:bg-sotkis-green/90 rounded-lg"
                          title="Search"
                        >
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Variant Colors */}
                      <div className="flex flex-wrap gap-4 items-center">
                        <Button 
                          size="icon" 
                          className="w-12 h-12 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-lg"
                          title="Filter Search"
                        >
                          <Filter className="h-6 w-6" />
                        </Button>
                        
                        <Button 
                          size="icon" 
                          className="w-12 h-12 bg-gray-600 text-white hover:bg-gray-700 rounded-lg shadow-lg"
                          title="Advanced Search"
                        >
                          <Settings className="h-6 w-6" />
                        </Button>
                        
                        <Button 
                          variant="outline"
                          size="icon" 
                          className="w-12 h-12 border-2 border-sotkis-green text-sotkis-green hover:bg-sotkis-green hover:text-white rounded-lg"
                          title="Clear Search"
                        >
                          <X className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Guide */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h5 className="text-white font-medium mb-3">Usage Guidelines</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>• <strong>Primary Search:</strong> Use Sotkis green for main search functionality</p>
                        <p>• <strong>Filter Actions:</strong> Use blue for filtering operations</p>
                        <p>• <strong>Settings:</strong> Use gray for advanced search options</p>
                        <p>• <strong>Clear/Reset:</strong> Use outline style for destructive actions</p>
                        <p>• <strong>Accessibility:</strong> Always include descriptive title attributes</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h5 className="text-white font-medium mb-3">Size Specifications</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>• <strong>Large (w-12 h-12):</strong> Primary search button, hero sections</p>
                        <p>• <strong>Medium (w-10 h-10):</strong> Standard search in toolbars</p>
                        <p>• <strong>Small (w-8 h-8):</strong> Compact layouts, mobile interfaces</p>
                        <p>• <strong>Icon sizes:</strong> h-6 w-6 (large), h-5 w-5 (medium), h-4 w-4 (small)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Input Combinations */}
              <div>
                <h4 className="text-white font-medium mb-4">Search Input Combinations</h4>
                <div className="space-y-4">
                  {/* Search Bar with Button */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-white font-medium mb-3">Search Bar with Square Button</h5>
                    <div className="flex gap-2 mb-3">
                  <Input 
                        placeholder="Search..." 
                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                      <Button 
                        size="icon" 
                        className="w-12 h-12 bg-sotkis-green text-white hover:bg-sotkis-green/90 rounded-lg shrink-0"
                      >
                        <Search className="h-6 w-6" />
                      </Button>
                    </div>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      {`<div className="flex gap-2">
  <Input placeholder="Search..." className="flex-1" />
  <Button size="icon" className="w-12 h-12 bg-sotkis-green">
    <Search className="h-6 w-6" />
  </Button>
</div>`}
                    </code>
                  </div>

                  {/* Compact Search */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-white font-medium mb-3">Compact Search</h5>
                    <div className="flex gap-2 mb-3 max-w-md">
                  <Input 
                        placeholder="Quick search..." 
                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-10"
                      />
                      <Button 
                        size="icon" 
                        className="w-10 h-10 bg-sotkis-green text-white hover:bg-sotkis-green/90 rounded-lg shrink-0"
                      >
                        <Search className="h-5 w-5" />
                      </Button>
                    </div>
                    <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                      {`<Button size="icon" className="w-10 h-10 bg-sotkis-green">
  <Search className="h-5 w-5" />
</Button>`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Components */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Form Components</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Fields */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Input Fields</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Default Input</label>
                  <Input 
                      placeholder="Enter your text here" 
                      className="bg-white text-black placeholder-gray-500"
                  />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Search Input</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                        placeholder="Search..." 
                        className="bg-white text-black placeholder-gray-500 pl-10"
                  />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Date Input</label>
                  <Input 
                    type="date"
                    className="bg-white text-black"
                  />
                </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Disabled Input</label>
                    <Input 
                      placeholder="Disabled state" 
                      disabled 
                      className="bg-gray-200 text-gray-500"
                    />
              </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <code className="text-xs text-gray-300">
                    {`<Input className="bg-white text-black" />`}
                  </code>
                </div>
              </div>

              {/* Select Dropdowns */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Select Components</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Basic Select</label>
                  <Select>
                      <SelectTrigger className="bg-white border-gray-300 text-black">
                        <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">With Icon</label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300 text-black">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                        <SelectItem value="user3">User 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <code className="text-xs text-gray-300">
                    {`<Select><SelectTrigger><SelectValue /></SelectTrigger></Select>`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Card Components */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Card Components</h3>
            
            <div className="space-y-6">
              {/* Card Variants */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-glass">
                <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <LayoutDashboard className="h-5 w-5 mr-2 text-sotkis-green" />
                      Glass Card
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 text-sm">Standard glass morphism card with backdrop blur and transparency.</p>
                    <div className="mt-4">
                      <Button size="sm" className="bg-sotkis-green text-white">
                        Action
                      </Button>
                    </div>
                </CardContent>
              </Card>

                <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Layers className="h-5 w-5 mr-2 text-blue-400" />
                      Light Glass
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 text-sm">Lighter variant with more transparency for layered content.</p>
                    <div className="mt-4">
                      <Button size="sm" variant="outline" className="border-white/30 text-white">
                        Secondary
                      </Button>
                    </div>
                </CardContent>
              </Card>

              <Card className="card-glass-dark">
                <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Target className="h-5 w-5 mr-2 text-purple-400" />
                      Dark Card
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 text-sm">Darker variant for better contrast and table containers.</p>
                    <div className="mt-4">
                      <Button size="sm" className="bg-purple-600 text-white">
                        Special
                      </Button>
                    </div>
                </CardContent>
              </Card>
            </div>

              {/* Dashboard Cards */}
              <div>
                <h4 className="text-white font-medium mb-4">Dashboard Cards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: BarChart3, title: 'Performance', value: '94.2%', color: 'text-green-500', bg: 'bg-green-500/20' },
                    { icon: Users, title: 'Active Users', value: '2,847', color: 'text-blue-500', bg: 'bg-blue-500/20' },
                    { icon: Package, title: 'Containers', value: '156', color: 'text-yellow-500', bg: 'bg-yellow-500/20' },
                    { icon: TrendingUp, title: 'Growth', value: '+12.5%', color: 'text-sotkis-green', bg: 'bg-sotkis-green/20' }
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-300 text-sm font-medium">{item.title}</p>
                            <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                          </div>
                          <div className={`p-3 ${item.bg} rounded-lg`}>
                            <item.icon className={`h-6 w-6 ${item.color}`} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          </div>

            {/* Implementation */}
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-white font-medium mb-2">Card Implementation</h4>
              <div className="space-y-2">
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  {`<Card className="card-glass">`}
                </code>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs ml-4">
                  {`<CardHeader><CardTitle>Title</CardTitle></CardHeader>`}
                </code>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs ml-4">
                  {`<CardContent>Content</CardContent>`}
                </code>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  {`</Card>`}
                </code>
              </div>
            </div>
          </div>

          {/* Status Components */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Status Components</h3>
            
            <div className="space-y-6">
          {/* Status Badges */}
          <div>
                <h4 className="text-white font-medium mb-4">Status Badges</h4>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    { icon: CheckCircle, label: 'Success', color: 'text-green-400', bg: 'bg-green-500/20' },
                    { icon: Clock, label: 'Pending', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
                    { icon: AlertTriangle, label: 'Warning', color: 'text-orange-400', bg: 'bg-orange-500/20' },
                    { icon: XCircle, label: 'Error', color: 'text-red-400', bg: 'bg-red-500/20' },
                    { icon: Info, label: 'Info', color: 'text-blue-400', bg: 'bg-blue-500/20' },
                    { icon: Zap, label: 'Active', color: 'text-sotkis-green', bg: 'bg-sotkis-green/20' }
                  ].map((badge, index) => (
                    <span key={index} className={`inline-flex items-center px-3 py-1 ${badge.bg} ${badge.color} rounded-full text-sm font-medium`}>
                      <badge.icon className="h-4 w-4 mr-1.5" />
                      {badge.label}
              </span>
                  ))}
            </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  &lt;span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full"&gt;Success&lt;/span&gt;
                </code>
          </div>

              {/* Progress Indicators */}
          <div>
                <h4 className="text-white font-medium mb-4">Progress Indicators</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-sotkis-green h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Storage</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>Warning Level</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Component */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Table Component</h3>
            
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-white/10">
            <Table>
              <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-white font-medium">Name</TableHead>
                      <TableHead className="text-white font-medium">Status</TableHead>
                      <TableHead className="text-white font-medium">Progress</TableHead>
                      <TableHead className="text-white font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                    <TableRow className="border-white/10 hover:bg-white/5">
                      <TableCell className="text-white">Container Alpha</TableCell>
                  <TableCell>
                        <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div className="bg-sotkis-green h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-white text-xs">85%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="text-sotkis-green hover:bg-sotkis-green/10 h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-500/10 h-8 w-8 p-0">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-white/10 hover:bg-white/5">
                      <TableCell className="text-white">Container Beta</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="text-white text-xs">45%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="text-sotkis-green hover:bg-sotkis-green/10 h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-500/10 h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Table Implementation</h4>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  {`<Table><TableHeader><TableRow><TableHead>...</TableHead></TableRow></TableHeader></Table>`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout Patterns */}
      <Card className="card-glass" id="layout">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Layout className="h-5 w-5" />
            <span>Layout & Responsive Design</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Page Structure */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Page Structure Patterns</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
                <h4 className="text-white font-medium">Standard Layout</h4>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="space-y-3 text-sm">
                    <div className="p-2 bg-sotkis-green/20 rounded text-center">
                      <span className="text-white font-medium">Header (p-6 space-y-4)</span>
                </div>
                    <div className="p-4 bg-blue-500/20 rounded text-center">
                      <span className="text-white font-medium">Content (Card Grid)</span>
              </div>
                    <div className="p-2 bg-purple-500/20 rounded text-center">
                      <span className="text-white font-medium">Footer (Actions/Pagination)</span>
            </div>
                  </div>
                </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  &lt;div className="p-6 space-y-8"&gt;
                </code>
          </div>

              <div className="space-y-4">
                <h4 className="text-white font-medium">Dashboard Layout</h4>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="space-y-3 text-sm">
                    <div className="p-2 bg-green-500/20 rounded text-center">
                      <span className="text-white font-medium">Submenu Bar</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-yellow-500/20 rounded text-center text-xs">
                        <span className="text-white">KPI Card</span>
                      </div>
                      <div className="p-2 bg-yellow-500/20 rounded text-center text-xs">
                        <span className="text-white">KPI Card</span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-500/20 rounded text-center">
                      <span className="text-white font-medium">Chart Section</span>
                    </div>
                  </div>
                </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
                </code>
              </div>
            </div>
          </div>

          {/* Responsive Grid System */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Responsive Grid System</h3>
            
            {/* Breakpoint Examples */}
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-4">Breakpoint Reference</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <Smartphone className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Mobile</div>
                    <div className="text-gray-400 text-sm">&lt; 768px</div>
                    <code className="text-xs text-blue-400">Default</code>
                </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <Monitor className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Tablet</div>
                    <div className="text-gray-400 text-sm">768px+</div>
                    <code className="text-xs text-green-400">md:</code>
            </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <Monitor className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Desktop</div>
                    <div className="text-gray-400 text-sm">1024px+</div>
                    <code className="text-xs text-yellow-400">lg:</code>
          </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <Monitor className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Large</div>
                    <div className="text-gray-400 text-sm">1280px+</div>
                    <code className="text-xs text-purple-400">xl:</code>
                  </div>
                </div>
              </div>

              {/* Grid Examples */}
          <div>
                <h4 className="text-white font-medium mb-4">Common Grid Patterns</h4>
                
                {/* 2-column grid */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <code className="text-sotkis-green text-sm">grid grid-cols-1 md:grid-cols-2</code>
                    <span className="text-gray-400 text-sm">- Two column responsive</span>
                </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-16 bg-sotkis-green/20 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">Column 1</span>
                </div>
                    <div className="h-16 bg-sotkis-green/20 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">Column 2</span>
              </div>
                </div>
                </div>

                {/* 4-column grid */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <code className="text-blue-400 text-sm">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4</code>
                    <span className="text-gray-400 text-sm">- Four column responsive</span>
              </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">Item {item}</span>
                </div>
                    ))}
                </div>
              </div>

                {/* Dashboard grid */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <code className="text-purple-400 text-sm">grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3</code>
                    <span className="text-gray-400 text-sm">- Dashboard cards</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">Card {item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Guidelines */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Mobile-First Guidelines</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Best Practices
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Mobile titles align right</p>
                      <p className="text-gray-400 text-xs">Use text-right sm:text-left pattern</p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Touch-friendly targets</p>
                      <p className="text-gray-400 text-xs">Minimum 44px tap targets</p>
                </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Responsive spacing</p>
                      <p className="text-gray-400 text-xs">Use responsive padding/margins</p>
                    </div>
                  </div>
            </div>
          </div>

              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  Common Mistakes
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
                      <p className="text-white font-medium">Fixed pixel widths</p>
                      <p className="text-gray-400 text-xs">Avoid hardcoded dimensions</p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Desktop-first thinking</p>
                      <p className="text-gray-400 text-xs">Design mobile layouts first</p>
                </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Inconsistent breakpoints</p>
                      <p className="text-gray-400 text-xs">Stick to Tailwind defaults</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Styling */}
      <Card className="card-glass" id="charts">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Chart & Data Visualization</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Chart Color Palette */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Chart Color System</h3>
            
            <div className="space-y-6">
              {/* Primary Chart Colors */}
              <div>
                <h4 className="text-white font-medium mb-4">Primary Data Series</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {colorPalette.charts.primary.map((color, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                      <div 
                        className="w-full h-12 rounded-lg mb-3 border border-white/20"
                        style={{ backgroundColor: color }}
                      ></div>
                      <code className="text-xs text-white font-mono">{color}</code>
                      <div className="text-gray-400 text-xs mt-1">
                        Series {index + 1}
                  </div>
                </div>
              ))}
            </div>
                <p className="text-gray-400 text-sm mt-3">
                  Used for: Main data series in charts, primary KPIs, brand-related metrics
                </p>
          </div>

              {/* Extended Chart Colors */}
          <div>
                <h4 className="text-white font-medium mb-4">Status & Extended Colors</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {colorPalette.charts.extended.map((color, index) => {
                    const labels = ['Critical', 'Warning', 'Info', 'Special', 'Success'];
                    return (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                        <div 
                          className="w-full h-12 rounded-lg mb-3 border border-white/20"
                          style={{ backgroundColor: color }}
                        ></div>
                        <code className="text-xs text-white font-mono">{color}</code>
                        <div className="text-gray-400 text-xs mt-1">
                          {labels[index]}
                  </div>
                </div>
                    );
                  })}
                  </div>
                <p className="text-gray-400 text-sm mt-3">
                  Used for: Status indicators, alerts, secondary data series, special categories
                </p>
                </div>
                  </div>
                </div>

          {/* Chart Types & Styling */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Chart Implementation Guidelines</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar Charts */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 text-sotkis-green mr-2" />
                  Bar Charts
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Primary bars:</span>
                    <span className="text-sotkis-green">#9EC043</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Secondary bars:</span>
                    <span className="text-green-400">#4CB151</span>
                </div>
                  <div className="flex justify-between">
                    <span>Border radius:</span>
                    <span>4px top corners</span>
              </div>
                  <div className="flex justify-between">
                    <span>Hover effect:</span>
                    <span>Opacity +10%</span>
            </div>
                </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs mt-3">
                  {`<Bar dataKey="value" fill="#9EC043" radius={[4, 4, 0, 0]} />`}
                </code>
          </div>

              {/* Pie Charts */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <PieChart className="h-5 w-5 text-blue-400 mr-2" />
                  Pie Charts
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Stroke:</span>
                    <span>White, 2px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labels:</span>
                    <span>White text, 12px</span>
                </div>
                  <div className="flex justify-between">
                    <span>Legend:</span>
                    <span>Bottom-aligned</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hover:</span>
                    <span>Scale 1.05</span>
                </div>
              </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs mt-3">
                  {`<Pie stroke="#fff" strokeWidth={2} />`}
                </code>
              </div>

              {/* Gauge Charts */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <Gauge className="h-5 w-5 text-purple-400 mr-2" />
                  Gauge Charts
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Start angle:</span>
                    <span>180° (bottom)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>End angle:</span>
                    <span>0° (top)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Background:</span>
                    <span>rgba(255,255,255,0.2)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Text color:</span>
                    <span>White, center aligned</span>
                  </div>
                </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs mt-3">
                  {`<RadialBarChart startAngle={180} endAngle={0} />`}
                </code>
              </div>

              {/* Line Charts */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <Activity className="h-5 w-5 text-yellow-400 mr-2" />
                  Line Charts
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Stroke width:</span>
                    <span>2px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grid lines:</span>
                    <span>rgba(255,255,255,0.1)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data points:</span>
                    <span>4px radius, white</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Curve type:</span>
                    <span>monotone</span>
                  </div>
                </div>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs mt-3">
                  {`<Line strokeWidth={2} dot={{ r: 4, fill: '#fff' }} />`}
                </code>
              </div>
            </div>
          </div>

          {/* Chart Configuration */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Common Configuration</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tooltip Styling */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4">Custom Tooltip</h4>
                <div className="space-y-4">
                  <div className="p-3 bg-black/90 border border-white/20 rounded-lg">
                    <div className="text-white font-medium text-sm">Tooltip Example</div>
                    <div className="text-gray-300 text-xs">Value: 1,234</div>
                  </div>
                  <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                    {`contentStyle={{
  background: 'rgba(0,0,0,0.9)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#ffffff'
}}`}
                  </code>
                </div>
              </div>

              {/* Responsive Container */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-4">Responsive Setup</h4>
                <div className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Width:</strong> 100% (responsive)</p>
                    <p>• <strong>Height:</strong> 300px (default)</p>
                    <p>• <strong>Mobile height:</strong> 250px</p>
                    <p>• <strong>Animation:</strong> 300ms ease-in-out</p>
                  </div>
                  <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                    {`<ResponsiveContainer width="100%" height={300}>`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
                <div>
            <h3 className="text-lg font-semibold text-white mb-6">Real Implementation Examples</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-2">Dashboard KPI Cards</h4>
                <p className="text-gray-400 text-sm mb-3">Used in performance dashboards with green color scheme</p>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  const CHART_COLORS = ['#9EC043', '#038703', '#4CB151', '#5EA65F'];
                </code>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 chart-demo">
                <h4 className="text-white font-medium mb-2">Maintenance Status Charts</h4>
                <p className="text-gray-400 text-sm mb-3">Status-based coloring for maintenance dashboards</p>
                <code className="block bg-gray-800 p-2 rounded text-white text-xs">
                  const STATUS_COLORS = { '{ }' }critical: '#dc2626', preventive: '#eab308', completed: '#10b981{ '}' };
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assistant Bot */}
      <Card className="card-glass" id="assistant">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Assistant Bot</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Assistant Bot Overview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Assistant Integration</h3>
            <p className="text-gray-300 mb-6">
              The Sotkis platform includes an AI assistant bot that provides user guidance and support. The assistant appears as a floating element in the bottom-right corner of the screen.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Assistant Bot Display */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Assistant Bot Avatar</h4>
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src={assistantBotImage} 
                      alt="Sotkis Assistant Bot" 
                      className="w-32 h-32 object-contain rounded-full shadow-lg"
                      style={{ animation: 'float 3s ease-in-out infinite' }}
                    />
                  </div>
                </div>
                  <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Image file:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/sott(1).png</code></p>
                  <p>• <strong>Size:</strong> <code className="bg-gray-800 px-1 rounded">w-32 h-32</code></p>
                  <p>• <strong>Style:</strong> <code className="bg-gray-800 px-1 rounded">rounded-full shadow-lg</code></p>
                  <p>• <strong>Animation:</strong> Floating effect</p>
                  </div>
                </div>

              {/* Assistant Bot Positioning */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Positioning & Behavior</h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Position:</span>
                    <span>Fixed bottom-right</span>
              </div>
                  <div className="flex justify-between">
                    <span>Z-index:</span>
                    <span>1000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bottom offset:</span>
                    <span>0.75rem</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Right offset:</span>
                    <span>0.75rem</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interaction:</span>
                    <span>Clickable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Implementation</h3>
            
            <div className="space-y-4">
              {/* CSS Classes */}
            <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">CSS Classes</h4>
                <pre className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{`.assistant-bot {
  position: fixed;
  bottom: 0.75rem;
  right: 0.75rem;
  width: 128px;
  height: 128px;
  z-index: 1000;
  pointer-events: auto;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}`}</code>
                </pre>
              </div>

              {/* Usage Guidelines */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Usage Guidelines</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Visibility:</strong> Always visible on all pages</p>
                  <p>• <strong>Accessibility:</strong> Includes proper alt text and ARIA labels</p>
                  <p>• <strong>Responsive:</strong> Scales appropriately on mobile devices</p>
                  <p>• <strong>Interaction:</strong> Provides hover and click feedback</p>
                  <p>• <strong>Context:</strong> Adapts behavior based on current page/context</p>
                  </div>
                </div>

              {/* Integration Example */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">HTML Structure</h4>
                <pre className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
                  <code>{`<div className="assistant-bot-container">
  <img 
    src={assistantBotImage}
    alt="Sotkis AI Assistant"
    className="assistant-bot"
    onClick={handleAssistantClick}
  />
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Design Specifications */}
                <div>
            <h3 className="text-lg font-semibold text-white mb-4">Design Specifications</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Visual Properties */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Visual Properties</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Character:</strong> Friendly, approachable AI avatar</p>
                  <p>• <strong>Color scheme:</strong> Consistent with Sotkis brand</p>
                  <p>• <strong>Shadow:</strong> Subtle drop shadow for depth</p>
                  <p>• <strong>Border radius:</strong> Fully rounded (50%)</p>
                  <p>• <strong>Background:</strong> Transparent</p>
                  </div>
              </div>

              {/* Interaction States */}
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Interaction States</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Default:</strong> Gentle floating animation</p>
                  <p>• <strong>Hover:</strong> Slight scale increase (1.05x)</p>
                  <p>• <strong>Active:</strong> Brief pulse effect</p>
                  <p>• <strong>Disabled:</strong> Reduced opacity (0.6)</p>
                  <p>• <strong>Loading:</strong> Spinning or pulsing indicator</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Development Guidelines */}
      <Card className="card-glass" id="code">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Code2 className="h-5 w-5" />
            <span>Development Guidelines</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* CSS Classes Reference */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">CSS Classes Reference</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Background Classes */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Background Classes</h4>
                <div className="space-y-2">
                  {[
                    { class: 'card-glass', desc: 'Glass morphism card', usage: 'Standard cards' },
                    { class: 'card-glass-dark', desc: 'Darker glass variant', usage: 'Tables, contrast' },
                    { class: 'bg-white/10', desc: 'Semi-transparent white', usage: 'Light overlays' },
                    { class: 'bg-sotkis-green', desc: 'Primary brand color', usage: 'Buttons, accents' },
                    { class: 'backdrop-blur-lg', desc: 'Blur effect', usage: 'Glass morphism' },
                    { class: 'bg-overlay', desc: 'Dark overlay (56%)', usage: 'Background overlays' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
                      <div>
                        <code className="text-sotkis-green text-sm font-mono">{item.class}</code>
                        <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                  </div>
                      <span className="text-gray-300 text-xs">{item.usage}</span>
                </div>
              ))}
            </div>
          </div>

              {/* Text Classes */}
              <div className="space-y-4">
                <h4 className="text-white font-medium">Text Classes</h4>
                <div className="space-y-2">
                  {[
                    { class: 'text-white', desc: 'Primary text color', usage: 'Headings, content' },
                    { class: 'text-gray-300', desc: 'Secondary text', usage: 'Descriptions' },
                    { class: 'text-sotkis-green', desc: 'Brand accent text', usage: 'Links, highlights' },
                    { class: 'mobile-title', desc: 'Mobile title alignment', usage: 'Responsive titles' },
                    { class: 'uppercase-title', desc: 'Uppercase titles (-3px)', usage: 'Section headers' },
                    { class: 'welcome-title-mobile', desc: 'Large welcome text', usage: 'Landing pages' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
                      <div>
                        <code className="text-blue-400 text-sm font-mono">{item.class}</code>
                        <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                      </div>
                      <span className="text-gray-300 text-xs">{item.usage}</span>
                </div>
              ))}
            </div>
          </div>
            </div>
          </div>

          {/* Component Usage */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Component Usage Patterns</h3>
            
            <div className="space-y-6">
              {/* Page Structure */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4">Standard Page Structure</h4>
                <code className="block bg-gray-800 p-4 rounded text-white text-xs font-mono leading-relaxed">
{`const MyPage = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Page Title</h1>
        <p className="text-gray-300">Page description</p>
      </div>

      {/* Main Content */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Section Title</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content here */}
        </CardContent>
      </Card>
    </div>
  );
};`}
                </code>
              </div>

              {/* Button Patterns */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4">Button Implementation</h4>
                <code className="block bg-gray-800 p-4 rounded text-white text-xs font-mono leading-relaxed">
{`// Primary Action
<Button className="bg-sotkis-green text-white hover:bg-sotkis-green/90">
  <Plus className="h-4 w-4 mr-2" />
  Add New Item
</Button>

// Secondary Action
<Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
  <Download className="h-4 w-4 mr-2" />
  Export Data
</Button>

// Status Actions
<Button className="bg-green-600 hover:bg-green-700 text-white">
  <CheckCircle className="h-4 w-4 mr-2" />
  Approve
</Button>`}
                </code>
              </div>

              {/* Form Patterns */}
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-4">Form Components</h4>
                <code className="block bg-gray-800 p-4 rounded text-white text-xs font-mono leading-relaxed">
{`// Input with Label
<div className="space-y-2">
  <label className="block text-white text-sm font-medium">Label</label>
  <Input 
    placeholder="Enter value" 
    className="bg-white text-black placeholder-gray-500"
  />
</div>

// Select Dropdown
<Select>
  <SelectTrigger className="bg-white border-gray-300 text-black">
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>`}
                </code>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Best Practices</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="p-6 bg-green-500/5 rounded-lg border border-green-500/20">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Best Practices
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Use semantic HTML</p>
                      <p className="text-gray-400 text-xs">Proper heading hierarchy, accessible markup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Consistent spacing</p>
                      <p className="text-gray-400 text-xs">Use the defined spacing scale</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Mobile-first approach</p>
                      <p className="text-gray-400 text-xs">Design for mobile, enhance for desktop</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Reuse components</p>
                      <p className="text-gray-400 text-xs">Leverage existing UI components</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Don'ts */}
              <div className="p-6 bg-red-500/5 rounded-lg border border-red-500/20">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  Avoid These
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Hardcoded colors</p>
                      <p className="text-gray-400 text-xs">Use design token classes instead</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Arbitrary spacing</p>
                      <p className="text-gray-400 text-xs">Don't use random pixel values</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Inconsistent patterns</p>
                      <p className="text-gray-400 text-xs">Follow established component patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Complex custom styles</p>
                      <p className="text-gray-400 text-xs">Prefer utility classes over custom CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Structure */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">File Structure</h3>
            
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-white font-medium mb-4">Design System Files</h4>
              <code className="block bg-gray-800 p-4 rounded text-white text-xs font-mono leading-relaxed">
{`design/
├── tokens.json          # Design tokens (colors, typography, etc.)
├── css-variables.css    # CSS custom properties
└── DESIGN.md           # Design system documentation

src/
├── components/ui/       # Base UI components
│   ├── button.jsx
│   ├── card.jsx
│   ├── input.jsx
│   └── table.jsx
├── index.css           # Global styles and utilities
└── lib/
    └── utils.js        # Utility functions (cn, etc.)

tailwind.config.js      # Tailwind configuration
postcss.config.js       # PostCSS configuration`}
              </code>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources & Documentation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Tailwind CSS</h4>
                <p className="text-gray-400 text-sm mb-3">Utility-first CSS framework</p>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-sotkis-green text-sm hover:underline">
                  tailwindcss.com
                </a>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Lucide Icons</h4>
                <p className="text-gray-400 text-sm mb-3">Beautiful & consistent icons</p>
                <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-sotkis-green text-sm hover:underline">
                  lucide.dev
                </a>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Radix UI</h4>
                <p className="text-gray-400 text-sm mb-3">Accessible component primitives</p>
                <a href="https://radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-sotkis-green text-sm hover:underline">
                  radix-ui.com
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-16 p-8 bg-white/5 rounded-lg border border-white/10 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-sotkis-green/20 rounded-lg">
            <Paintbrush className="h-8 w-8 text-sotkis-green" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Sotkis Design System</h2>
            <p className="text-gray-300">Version {brandInfo.version}</p>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          This design system provides a comprehensive foundation for building consistent, 
          accessible, and beautiful user interfaces across the Sotkis platform.
        </p>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-sotkis-green" />
            <span>50+ Components</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-sotkis-green" />
            <span>Responsive Design</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-sotkis-green" />
            <span>Accessibility First</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-sotkis-green" />
            <span>Developer Friendly</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS, and Radix UI • 
            For questions or suggestions, contact the development team
          </p>
        </div>
      </div>

      {/* Login Page Components */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Lock className="h-5 w-5" />
            <span>Login Page Components</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Login Card */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Login Card</h3>
            <div className="p-6 bg-black/15 backdrop-blur-lg border-0 shadow-2xl rounded-xl max-w-md">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">Bem-vindo</h1>
                <p className="text-xl text-gray-300">Faça login na sua conta</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-200">Email/Utilizador</label>
                  <Input
                    type="email"
                    placeholder="exemplo@sotkis.com"
                    className="w-full h-12 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium text-gray-200">Palavra-passe</label>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="w-full h-12 pr-10 bg-white/10 border-white/20 text-white"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-sotkis-green focus:ring-sotkis-green"
                    />
                    <span className="text-base text-gray-300">Lembrar-me</span>
                  </label>
                </div>
                <Button className="w-full h-12 text-lg font-semibold bg-sotkis-green hover:bg-sotkis-green/90">
                  Entrar
                </Button>
                <div className="text-center">
                  <button className="text-base text-sotkis-green hover:underline">
                    Esqueceu a palavra-passe?
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <h4 className="text-white font-medium mb-2">Login Card Styling</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• <strong>Background:</strong> <code className="bg-gray-800 px-1 rounded">bg-black/15 backdrop-blur-lg</code></p>
                <p>• <strong>Border:</strong> <code className="bg-gray-800 px-1 rounded">border-0 shadow-2xl</code></p>
                <p>• <strong>Border radius:</strong> <code className="bg-gray-800 px-1 rounded">rounded-xl</code></p>
                <p>• <strong>Hover effect:</strong> <code className="bg-gray-800 px-1 rounded">hover:bg-black/25</code></p>
                <p>• <strong>Input styling:</strong> <code className="bg-gray-800 px-1 rounded">bg-white/10 border-white/20</code></p>
                <p>• <strong>Button:</strong> <code className="bg-gray-800 px-1 rounded">bg-sotkis-green h-12</code></p>
              </div>
            </div>
          </div>

                {/* Language Selector */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Language Selector</h3>
        <div className="flex justify-center space-x-4 mb-3">
          {[
            { code: 'pt', name: 'Portuguese', flag: ptFlag, active: true },
            { code: 'en', name: 'English', flag: enFlag, active: false },
            { code: 'es', name: 'Spanish', flag: spFlag, active: false },
            { code: 'hr', name: 'Croatian', flag: croatiaFlag, active: false }
          ].map((lang) => (
            <div
              key={lang.code}
              className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                lang.active ? 'ring-2 ring-sotkis-green' : ''
              }`}
            >
              <img 
                src={lang.flag} 
                alt={`${lang.name} flag`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-300 text-center">Selecionar idioma</p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <h4 className="text-white font-medium mb-2">Language Selector Styling</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• <strong>Flag size:</strong> <code className="bg-gray-800 px-1 rounded">w-12 h-12</code></p>
                <p>• <strong>Border:</strong> <code className="bg-gray-800 px-1 rounded">border-2 border-white</code></p>
                <p>• <strong>Active state:</strong> <code className="bg-gray-800 px-1 rounded">ring-2 ring-sotkis-green</code></p>
                <p>• <strong>Hover effect:</strong> <code className="bg-gray-800 px-1 rounded">hover:scale-110</code></p>
                <p>• <strong>Shadow:</strong> <code className="bg-gray-800 px-1 rounded">shadow-lg</code></p>
              </div>
            </div>
          </div>

                {/* Brand Logo */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Brand Logo</h3>
        <div className="flex justify-center mb-4">
          <img 
            src={isLightMode ? logo2Image : logoImage} 
            alt="Sotkis Logo" 
            className="h-32 sm:h-48 md:h-64 object-contain"
          />
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="space-y-2 text-sm text-gray-300">
            <p>• <strong>Dark theme:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/Logo.png</code></p>
            <p>• <strong>Light theme:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/Logo2.png</code></p>
            <p>• <strong>Responsive sizes:</strong> <code className="bg-gray-800 px-1 rounded">h-32 sm:h-48 md:h-64</code></p>
            <p>• <strong>Object fit:</strong> <code className="bg-gray-800 px-1 rounded">object-contain</code></p>
            <p>• <strong>Centered:</strong> <code className="bg-gray-800 px-1 rounded">flex justify-center</code></p>
          </div>
        </div>
      </div>

      {/* Background & Layout */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Background & Layout</h3>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="space-y-2 text-sm text-gray-300">
            <p>• <strong>Background image:</strong> summer.png with 70% black overlay</p>
            <p>• <strong>Overlay:</strong> <code className="bg-gray-800 px-1 rounded">bg-black/70</code></p>
            <p>• <strong>Logo size:</strong> <code className="bg-gray-800 px-1 rounded">h-32 sm:h-48 md:h-64</code></p>
            <p>• <strong>Card width:</strong> <code className="bg-gray-800 px-1 rounded">max-w-md</code></p>
            <p>• <strong>Spacing:</strong> <code className="bg-gray-800 px-1 rounded">space-y-8</code> between elements</p>
          </div>
        </div>
      </div>
        </CardContent>
      </Card>

      {/* Sidebar Components */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Menu className="h-5 w-5" />
            <span>Sidebar Components</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
                {/* Sidebar Logos */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Sidebar Logos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Full Logo (Expanded)</h4>
            <div className="flex justify-center mb-3">
              <img 
                src={isLightMode ? logo2Image : logoImage} 
                alt="Sotkis Full Logo" 
                className="h-16 object-contain"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong>Dark theme:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/Logo.png</code></p>
              <p>• <strong>Light theme:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/Logo2.png</code></p>
              <p>• <strong>Size:</strong> <code className="bg-gray-800 px-1 rounded">h-16</code></p>
              <p>• <strong>Usage:</strong> When sidebar is expanded</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Thin Logo (Collapsed)</h4>
            <div className="flex justify-center mb-3">
              <img 
                src={logoThinImage} 
                alt="Sotkis Thin Logo" 
                className="h-16 object-contain"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong>File:</strong> <code className="bg-gray-800 px-1 rounded">../../assets/Logo_thin.png</code></p>
              <p>• <strong>Size:</strong> <code className="bg-gray-800 px-1 rounded">h-16</code></p>
              <p>• <strong>Usage:</strong> When sidebar is collapsed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Structure */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Sidebar Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Logo Section</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong>Logo:</strong> Logo.png (h-32 size)</p>
              <p>• <strong>Collapsed logo:</strong> Logo_thin.png</p>
              <p>• <strong>Positioning:</strong> Top of sidebar</p>
              <p>• <strong>Responsive:</strong> Adapts to collapse state</p>
            </div>
          </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-3">Navigation Items</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <strong>Menu items:</strong> With icons and labels</p>
                  <p>• <strong>Submenus:</strong> Expandable with chevrons</p>
                  <p>• <strong>Active states:</strong> Highlighted with sotkis-green</p>
                  <p>• <strong>Hover effects:</strong> Background color changes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu Items</h3>
            <div className="space-y-4">
              {/* Single Menu Item */}
              <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-sotkis-green" />
                  <span className="text-white font-medium">Utilizadores</span>
                </div>
              </div>
              
              {/* Menu Item with Submenu */}
              <div className="p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-sotkis-green" />
                    <span className="text-white font-medium">Administração</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-white" />
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  <div className="flex items-center space-x-2 py-1">
                    <span className="text-gray-300 text-sm">Importações</span>
                  </div>
                  <div className="flex items-center space-x-2 py-1">
                    <span className="text-gray-300 text-sm">Ilhas</span>
                  </div>
                  <div className="flex items-center space-x-2 py-1">
                    <span className="text-gray-300 text-sm">Utilizadores</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <h4 className="text-white font-medium mb-2">Menu Item Styling</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• <strong>Background:</strong> <code className="bg-gray-800 px-1 rounded">bg-white/10 backdrop-blur-lg</code></p>
                <p>• <strong>Border:</strong> <code className="bg-gray-800 px-1 rounded">border border-white/20</code></p>
                <p>• <strong>Icon color:</strong> <code className="bg-gray-800 px-1 rounded">text-sotkis-green</code></p>
                <p>• <strong>Text color:</strong> <code className="bg-gray-800 px-1 rounded">text-white</code></p>
                <p>• <strong>Submenu indent:</strong> <code className="bg-gray-800 px-1 rounded">ml-8</code></p>
                <p>• <strong>Hover effect:</strong> Background opacity increase</p>
              </div>
            </div>
          </div>

          {/* Collapsed State */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Collapsed State</h3>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Collapsed Sidebar</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Width:</strong> Reduced to icon-only view</p>
                    <p>• <strong>Logo:</strong> Switches to Logo_thin.png</p>
                    <p>• <strong>Icons:</strong> Centered, no text labels</p>
                    <p>• <strong>Submenus:</strong> Hidden until expanded</p>
                    <p>• <strong>Toggle:</strong> Chevron button to expand</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Mobile Behavior</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Overlay:</strong> Sidebar appears as overlay</p>
                    <p>• <strong>Close button:</strong> X button in top-right</p>
                    <p>• <strong>Full height:</strong> Takes full screen height</p>
                    <p>• <strong>Backdrop:</strong> Dark overlay behind sidebar</p>
                    <p>• <strong>Animation:</strong> Slide-in from left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: LayoutDashboard, name: 'Dashboard', color: 'text-blue-400' },
                { icon: Users, name: 'Utilizadores', color: 'text-sotkis-green' },
                { icon: Settings, name: 'Administração', color: 'text-yellow-400' },
                { icon: Trash2, name: 'My Sotkon', color: 'text-green-400' },
                { icon: Key, name: 'Sotkis Access', color: 'text-purple-400' },
                { icon: Cross, name: 'Sotcare', color: 'text-red-400' },
                { icon: CreditCard, name: 'Sotkis PLAYT', color: 'text-indigo-400' },
                { icon: MapIcon, name: 'Rotas Sotkis', color: 'text-orange-400' },
                { icon: TrendingUp, name: 'Nível Sotkis', color: 'text-cyan-400' },
                { icon: ArrowDownCircle, name: 'Deposições', color: 'text-green-400' },
                { icon: FileText, name: 'Conformidade', color: 'text-pink-400' }
              ].map((category) => (
                <div key={category.name} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <span className="text-white text-sm font-medium">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Design */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Responsive Design</span>
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
          <CardTitle className="text-white">CSS Classes Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Background Classes</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><code className="bg-gray-800 px-1 rounded text-white">card-glass</code> - Glass morphism card</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">card-glass-dark</code> - Darker glass variant</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">bg-white/10</code> - Semi-transparent white</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">bg-sotkis-green</code> - Primary brand color</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">backdrop-blur-lg</code> - Blur effect</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">bg-overlay</code> - Dark overlay</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">bg-overlay-light</code> - Light overlay</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Text Classes</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><code className="bg-gray-800 px-1 rounded text-white">text-white</code> - Primary text</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">text-gray-300</code> - Secondary text</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">text-sotkis-green</code> - Brand text</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">mobile-title</code> - Mobile title alignment</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">welcome-title-mobile</code> - Welcome page title</div>
                <div><code className="bg-gray-800 px-1 rounded text-white">uppercase-title</code> - Uppercase titles</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleGuide; 