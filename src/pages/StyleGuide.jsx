import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { 
  Palette, 
  Type, 
  Box, 
  Layout, 
  Smartphone, 
  Monitor,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Download,
  Search,
  Filter
} from 'lucide-react';

const StyleGuide = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-sotkis-green/20 rounded-lg">
            <Palette className="h-8 w-8 text-sotkis-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Sotkis Style Guide</h1>
            <p className="text-gray-300 mt-1">Design system and component library for developers</p>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Palette className="h-5 w-5" />
            <span>Color Palette</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Primary Colors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-sotkis-green rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">Sotkis Green</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#9EC043</p>
                  <p className="text-gray-400 text-sm">Primary brand color</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">White</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#FFFFFF</p>
                  <p className="text-gray-400 text-sm">Primary text</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Black</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">#000000</p>
                  <p className="text-gray-400 text-sm">Background overlay</p>
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
                  <p className="text-gray-400 text-sm">Resolved, Active</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-400 font-medium">Warning</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Yellow</p>
                  <p className="text-gray-400 text-sm">In Progress, Pending</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-red-400 font-medium">Error</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Red</p>
                  <p className="text-gray-400 text-sm">Critical, Failed</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-medium">Info</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-medium">Blue</p>
                  <p className="text-gray-400 text-sm">New, Processing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Gray Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { bg: 'bg-gray-300', text: 'text-gray-700', label: 'Gray 300' },
                { bg: 'bg-gray-400', text: 'text-gray-800', label: 'Gray 400' },
                { bg: 'bg-gray-500', text: 'text-white', label: 'Gray 500' },
                { bg: 'bg-gray-600', text: 'text-white', label: 'Gray 600' },
                { bg: 'bg-gray-700', text: 'text-white', label: 'Gray 700' }
              ].map((color, index) => (
                <div key={index} className="space-y-2">
                  <div className={`h-12 ${color.bg} rounded-lg flex items-center justify-center`}>
                    <span className={`${color.text} font-medium`}>Gray</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium">{color.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Type className="h-5 w-5" />
            <span>Typography</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Headings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Headings</h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-white">Heading 1 (text-4xl)</h1>
                <p className="text-gray-400 text-sm mt-1">Main page titles, hero sections</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Heading 2 (text-3xl)</h2>
                <p className="text-gray-400 text-sm mt-1">Section titles, major content areas</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Heading 3 (text-2xl)</h3>
                <p className="text-gray-400 text-sm mt-1">Subsection titles, card headers</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Heading 4 (text-xl)</h4>
                <p className="text-gray-400 text-sm mt-1">Component titles, form labels</p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-white">Heading 5 (text-lg)</h5>
                <p className="text-gray-400 text-sm mt-1">Small titles, emphasis text</p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Body Text</h3>
            <div className="space-y-4">
              <div>
                <p className="text-base text-white">Body text (text-base) - Default paragraph text for main content areas.</p>
                <p className="text-gray-400 text-sm mt-1">16px, line-height: 1.5</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Small text (text-sm) - Secondary information, captions, metadata.</p>
                <p className="text-gray-400 text-sm mt-1">14px, line-height: 1.4</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Extra small (text-xs) - Labels, badges, fine print.</p>
                <p className="text-gray-400 text-sm mt-1">12px, line-height: 1.3</p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Font Weights</h3>
            <div className="space-y-2">
              <p className="font-light text-white">Light (font-light) - 300</p>
              <p className="font-normal text-white">Normal (font-normal) - 400</p>
              <p className="font-medium text-white">Medium (font-medium) - 500</p>
              <p className="font-semibold text-white">Semibold (font-semibold) - 600</p>
              <p className="font-bold text-white">Bold (font-bold) - 700</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Components */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Box className="h-5 w-5" />
            <span>Components</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Buttons</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Cards</h3>
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
          </div>

          {/* Action Icons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Action Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
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

          {/* Spacing System */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Spacing System</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-white font-medium">Container Spacing</p>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>• Page padding: <code className="bg-gray-800 px-1 rounded">p-6</code></p>
                  <p>• Section spacing: <code className="bg-gray-800 px-1 rounded">space-y-6</code></p>
                  <p>• Component spacing: <code className="bg-gray-800 px-1 rounded">space-y-4</code></p>
                  <p>• Item spacing: <code className="bg-gray-800 px-1 rounded">space-y-2</code></p>
                </div>
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
                <div><code className="bg-gray-800 px-1 rounded">card-glass</code> - Glass morphism card</div>
                <div><code className="bg-gray-800 px-1 rounded">bg-white/10</code> - Semi-transparent white</div>
                <div><code className="bg-gray-800 px-1 rounded">bg-sotkis-green</code> - Primary brand color</div>
                <div><code className="bg-gray-800 px-1 rounded">backdrop-blur-lg</code> - Blur effect</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Text Classes</h3>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-800 px-1 rounded">text-white</code> - Primary text</div>
                <div><code className="bg-gray-800 px-1 rounded">text-gray-300</code> - Secondary text</div>
                <div><code className="bg-gray-800 px-1 rounded">text-sotkis-green</code> - Brand text</div>
                <div><code className="bg-gray-800 px-1 rounded">mobile-title</code> - Mobile title alignment</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleGuide; 