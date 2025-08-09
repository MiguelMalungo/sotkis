import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { 
  // Navigation & Layout
  Menu, X, ChevronRight, ChevronDown, ArrowLeft, ArrowUpDown,
  
  // Actions & CRUD
  Plus, Edit, Trash2, Search, Filter, Download, Upload, Printer, FileText,
  
  // Status & Feedback
  CheckCircle, AlertTriangle, Info, XCircle, AlertCircle, Clock,
  
  // Data & Analytics
  BarChart3, TrendingUp, TrendingDown, Activity, Calendar,
  
  // Business Icons
  User, Users, Shield, Lock, Key, Wifi, Radio, Package, Box, Recycle,
  Wrench, Palette, Tag, Battery, MapPin, List, Map as MapIcon, Settings, LayoutDashboard, Globe, Cross, CreditCard,
  
  // UI Elements
  Eye, EyeOff, Image,
  
  // Dashboard Icons
  Gauge, Gift, Pin, Leaf, RefreshCw,
  
  // Design System Icons
  Type, Box as BoxIcon, Layout, Smartphone, Monitor
} from 'lucide-react';

const StyleGuide = () => {
  // All icons used in the app
  const allIcons = {
    navigation: [
      { icon: Menu, name: 'Menu', usage: 'Mobile menu toggle' },
      { icon: X, name: 'X', usage: 'Close, cancel actions' },
      { icon: ChevronRight, name: 'ChevronRight', usage: 'Expand, next item' },
      { icon: ChevronDown, name: 'ChevronDown', usage: 'Dropdown, expand' },
      { icon: ArrowLeft, name: 'ArrowLeft', usage: 'Back navigation' },
      { icon: ArrowUpDown, name: 'ArrowUpDown', usage: 'Sort columns' }
    ],
    actions: [
      { icon: Plus, name: 'Plus', usage: 'Add new items' },
      { icon: Edit, name: 'Edit', usage: 'Edit existing items' },
      { icon: Trash2, name: 'Trash2', usage: 'Delete items' },
      { icon: Search, name: 'Search', usage: 'Search functionality' },
      { icon: Filter, name: 'Filter', usage: 'Filter data' },
      { icon: Download, name: 'Download', usage: 'Download files' },
      { icon: Upload, name: 'Upload', usage: 'Upload files' },
      { icon: Printer, name: 'Printer', usage: 'Print functionality' },
      { icon: FileText, name: 'FileText', usage: 'Documents, reports' }
    ],
    status: [
      { icon: CheckCircle, name: 'CheckCircle', usage: 'Success, completed' },
      { icon: AlertTriangle, name: 'AlertTriangle', usage: 'Warning, attention' },
      { icon: Info, name: 'Info', usage: 'Information' },
      { icon: XCircle, name: 'XCircle', usage: 'Error, failed' },
      { icon: AlertCircle, name: 'AlertCircle', usage: 'General alerts' },
      { icon: Clock, name: 'Clock', usage: 'Time, pending' }
    ],
    analytics: [
      { icon: BarChart3, name: 'BarChart3', usage: 'Charts, statistics' },
      { icon: TrendingUp, name: 'TrendingUp', usage: 'Positive trends' },
      { icon: TrendingDown, name: 'TrendingDown', usage: 'Negative trends' },
      { icon: Activity, name: 'Activity', usage: 'Activity monitoring' },
      { icon: Calendar, name: 'Calendar', usage: 'Dates, scheduling' }
    ],
    business: [
      { icon: User, name: 'User', usage: 'Single user' },
      { icon: Users, name: 'Users', usage: 'Multiple users' },
      { icon: Shield, name: 'Shield', usage: 'Security, protection' },
      { icon: Lock, name: 'Lock', usage: 'Access control' },
      { icon: Key, name: 'Key', usage: 'Authentication' },
      { icon: Wifi, name: 'Wifi', usage: 'RFID, connectivity' },
      { icon: Radio, name: 'Radio', usage: 'Transponders' },
      { icon: Package, name: 'Package', usage: 'Kits, containers' },
      { icon: Box, name: 'Box', usage: 'Volumes, storage' },
      { icon: Recycle, name: 'Recycle', usage: 'Waste management' },
      { icon: Wrench, name: 'Wrench', usage: 'Maintenance' },
      { icon: Palette, name: 'Palette', usage: 'Design, colors' },
      { icon: Tag, name: 'Tag', usage: 'Labels, markers' },
      { icon: Battery, name: 'Battery', usage: 'Battery status' },
      { icon: MapPin, name: 'MapPin', usage: 'Location' },
      { icon: List, name: 'List', usage: 'List view' },
      { icon: MapIcon, name: 'Map', usage: 'Map view' }
    ],
    ui: [
      { icon: Eye, name: 'Eye', usage: 'Show password' },
      { icon: EyeOff, name: 'EyeOff', usage: 'Hide password' },
      { icon: Image, name: 'Image', usage: 'Images, photos' }
    ],
    dashboard: [
      { icon: Gauge, name: 'Gauge', usage: 'Performance metrics' },
      { icon: Gift, name: 'Gift', usage: 'Rewards' },
      { icon: MapIcon, name: 'Map', usage: 'Route management' },
      { icon: Pin, name: 'Pin', usage: 'Location tracking' },
      { icon: Leaf, name: 'Leaf', usage: 'Environmental' },
      { icon: RefreshCw, name: 'RefreshCw', usage: 'Refresh, reload' }
    ]
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-sotkis-green/20 rounded-lg">
            <Type className="h-8 w-8 text-sotkis-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Sotkis Design System</h1>
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
            <h3 className="text-lg font-semibold text-white mb-4">Font Family</h3>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white font-medium mb-2">Primary Font: Roboto</p>
              <p className="text-gray-300 text-sm mb-4">Font Stack: "Roboto", "ui-sans-serif", "system-ui", "sans-serif"</p>
              <div className="space-y-2">
                <p className="font-light text-white">Light (300) - Roboto Light</p>
                <p className="font-normal text-white">Normal (400) - Roboto Regular</p>
                <p className="font-medium text-white">Medium (500) - Roboto Medium</p>
                <p className="font-semibold text-white">Semibold (600) - Roboto Medium</p>
                <p className="font-bold text-white">Bold (700) - Roboto Bold</p>
              </div>
            </div>
          </div>

          {/* Heading Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Heading Scale</h3>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white">Heading 1 - text-4xl (36px)</h1>
                <p className="text-gray-400 text-sm mt-1">Main page titles, hero sections, primary headings</p>
                <p className="text-gray-400 text-sm">Line height: 1.2, Weight: 700</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Heading 2 - text-3xl (30px)</h2>
                <p className="text-gray-400 text-sm mt-1">Section titles, major content areas</p>
                <p className="text-gray-400 text-sm">Line height: 1.3, Weight: 700</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Heading 3 - text-2xl (24px)</h3>
                <p className="text-gray-400 text-sm mt-1">Subsection titles, card headers</p>
                <p className="text-gray-400 text-sm">Line height: 1.4, Weight: 600</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Heading 4 - text-xl (20px)</h4>
                <p className="text-gray-400 text-sm mt-1">Component titles, form labels</p>
                <p className="text-gray-400 text-sm">Line height: 1.5, Weight: 600</p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white">Heading 5 - text-lg (18px)</h5>
                <p className="text-gray-400 text-sm mt-1">Small titles, emphasis text</p>
                <p className="text-gray-400 text-sm">Line height: 1.6, Weight: 500</p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Body Text Scale</h3>
            <div className="space-y-4">
              <div>
                <p className="text-base text-white">Body text - text-base (16px)</p>
                <p className="text-gray-400 text-sm mt-1">Default paragraph text for main content areas</p>
                <p className="text-gray-400 text-sm">Line height: 1.5, Weight: 400</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Small text - text-sm (14px)</p>
                <p className="text-gray-400 text-sm mt-1">Secondary information, captions, metadata</p>
                <p className="text-gray-400 text-sm">Line height: 1.4, Weight: 400</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Extra small - text-xs (12px)</p>
                <p className="text-gray-400 text-sm mt-1">Labels, badges, fine print</p>
                <p className="text-gray-400 text-sm">Line height: 1.3, Weight: 400</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Text Color System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-white font-medium">Primary Text</p>
                <p className="text-white">text-white - Main content, headings</p>
                <p className="text-gray-300">text-gray-300 - Secondary content</p>
                <p className="text-gray-400">text-gray-400 - Tertiary content, captions</p>
              </div>
              <div className="space-y-2">
                <p className="text-sotkis-green font-medium">Brand Colors</p>
                <p className="text-sotkis-green">text-sotkis-green - Brand elements</p>
                <p className="text-green-400">text-green-400 - Success states</p>
                <p className="text-red-400">text-red-400 - Error states</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Icon Library */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BoxIcon className="h-5 w-5" />
            <span>Complete Icon Library</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {Object.entries(allIcons).map(([category, icons]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category} Icons</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {icons.map(({ icon: Icon, name, usage }) => (
                  <div key={name} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className="h-5 w-5 text-sotkis-green" />
                      <span className="text-white font-medium text-sm">{name}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{usage}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Color System */}
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
            <h3 className="text-lg font-semibold text-white mb-4">Brand Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-sotkis-green rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">Sotkis Green</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#9EC043</p>
                  <p className="text-gray-400 text-sm">Primary brand color</p>
                  <p className="text-gray-400 text-xs">Used for: Buttons, links, highlights</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">White</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#FFFFFF</p>
                  <p className="text-gray-400 text-sm">Primary text color</p>
                  <p className="text-gray-400 text-xs">Used for: Headings, primary text</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Black</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#000000</p>
                  <p className="text-gray-400 text-sm">Background overlay</p>
                  <p className="text-gray-400 text-xs">Used for: Overlays, buttons</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Status Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 font-medium">Success</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Green</p>
                  <p className="text-gray-400 text-sm">#22C55E</p>
                  <p className="text-gray-400 text-xs">Resolved, Active, Completed</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-400 font-medium">Warning</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Yellow</p>
                  <p className="text-gray-400 text-sm">#EAB308</p>
                  <p className="text-gray-400 text-xs">In Progress, Pending, Attention</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 font-medium">Error</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Red</p>
                  <p className="text-gray-400 text-sm">#EF4444</p>
                  <p className="text-gray-400 text-xs">Critical, Failed, Errors</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-medium">Info</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Blue</p>
                  <p className="text-gray-400 text-sm">#3B82F6</p>
                  <p className="text-gray-400 text-xs">New, Processing, Information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Gray Scale</h3>
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
                    <span className={`${color.text} font-medium`}>Gray</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium">{color.label}</p>
                    <p className="text-gray-400 text-xs">{color.hex}</p>
                  </div>
                </div>
              ))}
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
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Spacing Scale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Container Spacing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white">p-6</span>
                    <span className="text-gray-400">24px - Page padding</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">space-y-8</span>
                    <span className="text-gray-400">32px - Section spacing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">space-y-6</span>
                    <span className="text-gray-400">24px - Card spacing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">space-y-4</span>
                    <span className="text-gray-400">16px - Component spacing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">space-y-2</span>
                    <span className="text-gray-400">8px - Item spacing</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium">Component Spacing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white">gap-4</span>
                    <span className="text-gray-400">16px - Grid gaps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">mb-4</span>
                    <span className="text-gray-400">16px - Bottom margins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">mt-2</span>
                    <span className="text-gray-400">8px - Top margins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">px-3</span>
                    <span className="text-gray-400">12px - Horizontal padding</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">py-1</span>
                    <span className="text-gray-400">4px - Vertical padding</span>
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
          <CardTitle className="text-white">Animation System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Keyframe Animations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Fade In Animation</h4>
                <p className="text-gray-300 text-sm mb-2">Class: fade-in</p>
                <p className="text-gray-400 text-xs">Duration: 0.3s ease-in-out</p>
                <p className="text-gray-400 text-xs">Effect: Opacity 0→1, translateY(10px→0)</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Accordion Animations</h4>
                <p className="text-gray-300 text-sm mb-2">Classes: accordion-down, accordion-up</p>
                <p className="text-gray-400 text-xs">Duration: 0.2s ease-out</p>
                <p className="text-gray-400 text-xs">Effect: Height transitions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Library */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BoxIcon className="h-5 w-5" />
            <span>Component Library</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Button System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-medium">Primary Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                    Primary Button
                  </Button>
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90" size="sm">
                    Small
                  </Button>
                  <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90" size="lg">
                    Large
                  </Button>
                </div>
                <p className="text-gray-400 text-xs">Used for: Main actions, CTAs, form submissions</p>
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
                <p className="text-gray-400 text-xs">Used for: Secondary actions, navigation</p>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Form Elements</h3>
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
                  <Input 
                    type="date"
                    className="bg-white text-black"
                  />
                </div>
                <p className="text-gray-400 text-xs">Background: white, Text: black, Placeholder: gray-600</p>
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
                <p className="text-gray-400 text-xs">Background: white, Border: white, Text: black</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Card Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-white">Default Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Standard card with glass morphism effect.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardHeader>
                  <CardTitle className="text-white">Glass Card</CardTitle>
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
            <h3 className="text-lg font-semibold text-white mb-4">Status Badges</h3>
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
            <p className="text-gray-400 text-xs mt-2">Background: color-500/20, Text: color-400, Border radius: full</p>
          </div>

          {/* Tables */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Table Component</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-white">Example Item</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Layout Patterns */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Layout className="h-5 w-5" />
            <span>Layout Patterns</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Page Structure */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Page Structure</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium mb-2">Standard Page Layout</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>• Container: <code className="bg-gray-800 px-1 rounded">p-6 space-y-6</code></p>
                  <p>• Header: <code className="bg-gray-800 px-1 rounded">space-y-4</code></p>
                  <p>• Content: <code className="bg-gray-800 px-1 rounded">Card components</code></p>
                  <p>• Footer: <code className="bg-gray-800 px-1 rounded">Pagination or actions</code></p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Grids */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Responsive Grids</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-20 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Grid Item {item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-2">
              <code className="bg-gray-800 px-1 rounded">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4</code>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Type className="h-5 w-5" />
            <span>Color Palette</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Primary Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-sotkis-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Sotkis Green</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#9EC043</p>
                  <p className="text-gray-400 text-sm">Primary brand color</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold">White</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#FFFFFF</p>
                  <p className="text-gray-400 text-sm">Primary text, highlights</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Dark</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#111827</p>
                  <p className="text-gray-400 text-sm">Background base</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Gray Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { color: 'bg-gray-50', name: 'Gray 50', hex: '#F9FAFB', usage: 'Light backgrounds' },
                { color: 'bg-gray-100', name: 'Gray 100', hex: '#F3F4F6', usage: 'Subtle backgrounds' },
                { color: 'bg-gray-200', name: 'Gray 200', hex: '#E5E7EB', usage: 'Borders' },
                { color: 'bg-gray-300', name: 'Gray 300', hex: '#D1D5DB', usage: 'Secondary text' },
                { color: 'bg-gray-400', name: 'Gray 400', hex: '#9CA3AF', usage: 'Placeholder text' },
                { color: 'bg-gray-500', name: 'Gray 500', hex: '#6B7280', usage: 'Muted text' },
                { color: 'bg-gray-600', name: 'Gray 600', hex: '#4B5563', usage: 'Body text' },
                { color: 'bg-gray-700', name: 'Gray 700', hex: '#374151', usage: 'Dark text' },
                { color: 'bg-gray-800', name: 'Gray 800', hex: '#1F2937', usage: 'Code blocks' },
                { color: 'bg-gray-900', name: 'Gray 900', hex: '#111827', usage: 'Background' },
                { color: 'bg-gray-950', name: 'Gray 950', hex: '#030712', usage: 'Dark backgrounds' }
              ].map((gray) => (
                <div key={gray.name} className="space-y-2">
                  <div className={`h-12 ${gray.color} rounded-lg flex items-center justify-center`}>
                    <span className={`text-xs font-medium ${gray.name.includes('Gray 50') || gray.name.includes('Gray 100') ? 'text-gray-800 font-bold' : 'text-white'}`}>
                      {gray.name}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-xs font-medium">{gray.hex}</p>
                    <p className="text-gray-400 text-xs">{gray.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Semantic Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { color: 'bg-green-500', name: 'Success', hex: '#10B981', usage: 'Success states, completed actions' },
                { color: 'bg-red-500', name: 'Error', hex: '#EF4444', usage: 'Error states, failed actions' },
                { color: 'bg-yellow-500', name: 'Warning', hex: '#F59E0B', usage: 'Warning states, attention needed' },
                { color: 'bg-blue-500', name: 'Info', hex: '#3B82F6', usage: 'Information, neutral states' }
              ].map((semantic) => (
                <div key={semantic.name} className="space-y-2">
                  <div className={`h-16 ${semantic.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold">{semantic.name}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium">{semantic.hex}</p>
                    <p className="text-gray-400 text-sm">{semantic.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Styling */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Chart Styling</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Chart Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chart Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { color: '#9EC043', name: 'Sotkis Green', usage: 'Primary brand color' },
                { color: '#038703', name: 'Dark Green', usage: 'Primary data series' },
                { color: '#4CB151', name: 'Light Green', usage: 'Secondary data series' },
                { color: '#5EA65F', name: 'Medium Green', usage: 'Tertiary data series' },
                { color: '#568864', name: 'Olive Green', usage: 'Quaternary data series' },
                { color: '#dc2626', name: 'Red', usage: 'Errors, critical data' },
                { color: '#eab308', name: 'Yellow', usage: 'Warnings, alerts' },
                { color: '#3B82F6', name: 'Blue', usage: 'Information, neutral data' },
                { color: '#8B5CF6', name: 'Purple', usage: 'Special categories' },
                { color: '#10B981', name: 'Emerald', usage: 'Success states' },
                { color: '#F59E0B', name: 'Amber', usage: 'Performance metrics' },
                { color: '#EF4444', name: 'Red-500', usage: 'Error states' }
              ].map((chartColor) => (
                <div key={chartColor.name} className="space-y-2">
                  <div 
                    className="h-12 rounded-lg flex items-center justify-center border border-gray-700"
                    style={{ backgroundColor: chartColor.color }}
                  >
                    <span className="text-white text-xs font-bold drop-shadow-lg">{chartColor.name}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-xs font-medium">{chartColor.color}</p>
                    <p className="text-gray-400 text-xs">{chartColor.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chart Types & Styling</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Line Charts</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Primary line:</strong> Dark Green (#038703), 2px stroke</p>
                    <p>• <strong>Secondary line:</strong> Light Green (#4CB151), 2px stroke</p>
                    <p>• <strong>Tertiary line:</strong> Medium Green (#5EA65F), 2px stroke</p>
                    <p>• <strong>Grid lines:</strong> Gray-800 (#1F2937), 1px stroke</p>
                    <p>• <strong>Axis labels:</strong> Gray-300 (#D1D5DB), 12px</p>
                    <p>• <strong>Data points:</strong> White circles, 4px radius</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Bar Charts</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Primary bars:</strong> Dark Green (#038703)</p>
                    <p>• <strong>Secondary bars:</strong> Light Green (#4CB151)</p>
                    <p>• <strong>Tertiary bars:</strong> Medium Green (#5EA65F)</p>
                    <p>• <strong>Border radius:</strong> 4px top corners</p>
                    <p>• <strong>Hover effect:</strong> 10% opacity increase</p>
                    <p>• <strong>Value labels:</strong> White text, 12px</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Pie Charts</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Color palette:</strong> Green series (#038703, #4CB151, #5EA65F, #568864)</p>
                    <p>• <strong>Alternative:</strong> Red (#dc2626), Yellow (#eab308) for status</p>
                    <p>• <strong>Stroke:</strong> White, 2px (separator)</p>
                    <p>• <strong>Labels:</strong> White text, 12px</p>
                    <p>• <strong>Legend:</strong> Right-aligned, gray-300 text</p>
                    <p>• <strong>Hover:</strong> 5px stroke width increase</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-medium mb-3">Area Charts</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Fill opacity:</strong> 20% for primary area</p>
                    <p>• <strong>Stroke:</strong> Dark Green (#038703), 2px</p>
                    <p>• <strong>Gradient:</strong> From color to transparent</p>
                    <p>• <strong>Grid:</strong> Gray-800, dashed lines</p>
                    <p>• <strong>Tooltip:</strong> Glass morphism style</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actual Dashboard Color Usage */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Actual Dashboard Color Usage</h3>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Deposicoes Dashboard</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Recycling data:</strong> #038703 (75%), #4CB151 (25%)</p>
                    <p>• <strong>Packing types:</strong> #038703, #4CB151, #5EA65F, #568864</p>
                    <p>• <strong>Connection types:</strong> #038703 (85%), #4CB151 (15%)</p>
                    <p>• <strong>Deposit methods:</strong> #038703 (70%), #4CB151 (30%)</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Gestao Manutencoes Dashboard</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Maintenance types:</strong> #dc2626 (Corretivas), #eab308 (Preventivas)</p>
                    <p>• <strong>Priority indicators:</strong> Red, Yellow, Green for high/medium/low</p>
                    <p>• <strong>Status colors:</strong> Based on priority levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Configuration */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chart Configuration</h3>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Recharts Configuration</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>ResponsiveContainer:</strong> 100% width, 300px height</p>
                    <p>• <strong>CartesianGrid:</strong> strokeDasharray="3 3"</p>
                    <p>• <strong>XAxis/YAxis:</strong> tick with gray-300 color</p>
                    <p>• <strong>Tooltip:</strong> contentStyle glass morphism</p>
                    <p>• <strong>Legend:</strong> wrapperStyle for positioning</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Animation & Interactions</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• <strong>Animation:</strong> 300ms ease-in-out</p>
                    <p>• <strong>Hover effects:</strong> Scale 1.05, shadow</p>
                    <p>• <strong>Click handlers:</strong> For drill-down navigation</p>
                    <p>• <strong>Responsive:</strong> Auto-resize on window change</p>
                    <p>• <strong>Loading states:</strong> Skeleton animations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Visualization */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Data Visualization</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* KPI Cards */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">KPI Card Styling</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Total Deposits', value: '1,234', change: '+12.5%', trend: 'up', color: 'text-green-500' },
                { title: 'Active Containers', value: '567', change: '-2.1%', trend: 'down', color: 'text-red-500' },
                { title: 'Efficiency Rate', value: '94.2%', change: '+5.3%', trend: 'up', color: 'text-green-500' }
              ].map((kpi) => (
                <div key={kpi.title} className="p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-300 text-sm font-medium">{kpi.title}</h4>
                    <TrendingUp className={`h-4 w-4 ${kpi.color}`} />
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-white">{kpi.value}</span>
                    <span className={`text-sm font-medium ${kpi.color}`}>{kpi.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Indicators */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Status Indicators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { status: 'Active', color: 'bg-green-500', icon: CheckCircle },
                { status: 'Warning', color: 'bg-yellow-500', icon: AlertTriangle },
                { status: 'Error', color: 'bg-red-500', icon: XCircle },
                { status: 'Info', color: 'bg-blue-500', icon: Info }
              ].map((indicator) => (
                <div key={indicator.status} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className={`w-3 h-3 ${indicator.color} rounded-full`}></div>
                  <indicator.icon className="h-4 w-4 text-gray-300" />
                  <span className="text-white text-sm font-medium">{indicator.status}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

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
            { code: 'pt', name: 'Portuguese', flag: '/assets/pt.png', active: true },
            { code: 'en', name: 'English', flag: '/assets/en.png', active: false },
            { code: 'es', name: 'Spanish', flag: '/assets/sp.png', active: false },
            { code: 'hr', name: 'Croatian', flag: '/assets/croatia.png', active: false },
            { code: 'el', name: 'Greek', flag: '/assets/greece.png', active: false }
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
            src="/assets/Logo.png" 
            alt="Sotkis Logo" 
            className="h-32 sm:h-48 md:h-64 object-contain"
          />
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="space-y-2 text-sm text-gray-300">
            <p>• <strong>Logo file:</strong> <code className="bg-gray-800 px-1 rounded">/assets/Logo.png</code></p>
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
                src="/assets/Logo.png" 
                alt="Sotkis Full Logo" 
                className="h-16 object-contain"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong>File:</strong> <code className="bg-gray-800 px-1 rounded">/assets/Logo.png</code></p>
              <p>• <strong>Size:</strong> <code className="bg-gray-800 px-1 rounded">h-16</code></p>
              <p>• <strong>Usage:</strong> When sidebar is expanded</p>
            </div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-3">Thin Logo (Collapsed)</h4>
            <div className="flex justify-center mb-3">
              <img 
                src="/assets/Logo_thin.png" 
                alt="Sotkis Thin Logo" 
                className="h-16 object-contain"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• <strong>File:</strong> <code className="bg-gray-800 px-1 rounded">/assets/Logo_thin.png</code></p>
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
                { icon: Globe, name: 'Sotkis Access', color: 'text-purple-400' },
                { icon: Cross, name: 'Sotcare', color: 'text-red-400' },
                { icon: CreditCard, name: 'Sotkis PLAYT', color: 'text-indigo-400' },
                { icon: MapIcon, name: 'Rotas Sotkis', color: 'text-orange-400' },
                { icon: TrendingUp, name: 'Nível Sotkis', color: 'text-cyan-400' },
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
              <div className="space-y-2 text-sm">
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
              <div className="space-y-2 text-sm">
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