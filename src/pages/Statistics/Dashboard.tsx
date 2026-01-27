import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Download, FileText, ChevronLeft } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('2024-01-01 إلى 2024-12-31');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('All');
  const [selectedCode, setSelectedCode] = useState('All');
  const [selectedISIC, setSelectedISIC] = useState('All');

  // Statistics cards data
  const statsCards = [
    { value: '15143', label: 'عدد السجلات التجارية' },
    { value: '126', label: 'استيراد وتصدير الصمور' },
    { value: '6', label: 'استيراد وتصدير الصمور' },
    { value: '440', label: 'استيراد وتصدير الصمور' },
  ];

  // Chart data - Regional distribution
  const regionalData = [
    { name: 'الدوحة', value: 450 },
    { name: 'الريان', value: 380 },
    { name: 'الوكرة', value: 320 },
    { name: 'أم صلال', value: 280 },
    { name: 'الخور', value: 240 },
    { name: 'الشمال', value: 180 },
    { name: 'الشحانية', value: 150 },
  ];

  // Monthly statistics
  const monthlyData = [
    { month: 'يناير', requests: 120, completed: 100 },
    { month: 'فبراير', requests: 150, completed: 130 },
    { month: 'مارس', requests: 180, completed: 160 },
    { month: 'أبريل', requests: 200, completed: 180 },
    { month: 'مايو', requests: 220, completed: 200 },
    { month: 'يونيو', requests: 190, completed: 170 },
    { month: 'يوليو', requests: 210, completed: 190 },
    { month: 'أغسطس', requests: 230, completed: 210 },
    { month: 'سبتمبر', requests: 200, completed: 180 },
    { month: 'أكتوبر', requests: 180, completed: 160 },
    { month: 'نوفمبر', requests: 160, completed: 140 },
    { month: 'ديسمبر', requests: 140, completed: 120 },
  ];

  // Service type distribution
  const serviceTypeData = [
    { name: 'تسجيل تجاري', value: 450 },
    { name: 'رخصة تجارية', value: 380 },
    { name: 'علامة تجارية', value: 320 },
    { name: 'براءة اختراع', value: 180 },
    { name: 'حقوق مؤلف', value: 120 },
    { name: 'أخرى', value: 90 },
  ];

  // Table data - matching the images
  const tableData = [
    { id: 1, count: '7000464', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 2, count: '2004230', service: 'التصدير فقط', status: 'استيراد وتصدير الصمور' },
    { id: 3, count: '749400', service: 'التصدير الى دول عربية (استيراد وتصدير الصمور وتوكيلات تصدير الأدوار والأثاث والمستلزمات)', status: 'استيراد وتصدير الصمور' },
    { id: 4, count: '2001909', service: 'التصدير الى دول عربية', status: 'استيراد وتصدير الصمور' },
    { id: 5, count: '749410', service: 'تخصيص و تجارة بالجملة الى دول عربية', status: 'استيراد وتصدير الصمور' },
    { id: 6, count: '2691066', service: 'تصدير البضائع والخدمات والمستلزمات الشخصية', status: 'استيراد وتصدير الصمور' },
    { id: 7, count: '34', service: 'اصلاح الشعار', status: 'اصلاح الشعار' },
    { id: 8, count: '39', service: 'اصلاح الشعار', status: 'اصلاح الشعار' },
    { id: 9, count: '65', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 10, count: '115', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 11, count: '440', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 12, count: '6', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 13, count: '126', service: 'استيراد وتصدير الصمور', status: 'استيراد وتصدير الصمور' },
    { id: 14, count: '43', service: 'اصلاح الشركات الخاصة بالتجارة عن طريق الانترنت', status: 'اصلاح الشعار' },
  ];

  const COLORS = ['#8B1538', '#a82645', '#c13d5a', '#d9546f', '#f06b84'];

  return (
    <div dir="rtl" className="min-h-screen">
      <Layout>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-qatari to-qatari-light py-8">
          <div className="container-wide">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  بحث عن الأنشطة التجارية
                </h1>
                <Button className="bg-white text-qatari hover:bg-gray-100">
                  بحث عن المنشأة التجارية
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Search Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-wide">
          <Card>
            <CardContent className="p-6">
              {/* Search Input */}
              <div className="mb-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="ابحث عن الأنشطة التجارية..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 text-right"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {/* Activity Group Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    مجموعة الأنشطة التجارية
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md text-right"
                    value={selectedActivity}
                    onChange={(e) => setSelectedActivity(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="استيراد وتصدير الصمور">استيراد وتصدير الصمور</option>
                    <option value="اصلاح الشعار">اصلاح الشعار</option>
                  </select>
                </div>

                {/* Activity Code Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    كود النشاط التجاري
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md text-right"
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                  >
                    <option value="All">All</option>
                  </select>
                  <Button className="w-full mt-2 bg-qatari hover:bg-qatari-dark text-white">
                    Activate
                  </Button>
                </div>

                {/* Activity Name Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    اسم النشاط التجاري
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md text-right"
                    value={selectedISIC}
                    onChange={(e) => setSelectedISIC(e.target.value)}
                  >
                    <option value="All">All</option>
                  </select>
                </div>

                {/* ISIC Code Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    التصنيف الصناعي الدولي الموحد لجميع الأنشطة الاقتصادية (ISIC)
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md text-right"
                  >
                    <option value="All">All</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="container-wide">
          <div className="mb-6 text-right">
            <h2 className="text-xl font-bold text-gray-800">
              نتيجة البحث عن الأنشطة التجارية
            </h2>
          </div>

          {/* Left Side - Statistics Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader className="bg-qatari text-white">
                <CardTitle className="text-sm text-center">المزيد من المعلومات</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {statsCards.map((stat, index) => (
                    <div key={index} className="border-b pb-3">
                      <div className="text-2xl font-bold text-qatari text-center">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 text-center mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right Side - Data Table */}
            <Card className="lg:col-span-3">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" dir="rtl">
                    <thead>
                      <tr className="bg-qatari text-white">
                        <th className="text-right py-3 px-4 font-semibold">كود النشاط التجاري</th>
                        <th className="text-right py-3 px-4 font-semibold">الأنشطة</th>
                        <th className="text-center py-3 px-4 font-semibold">مجموعات الأنشطة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => (
                        <tr key={row.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-center">{row.count}</td>
                          <td className="py-3 px-4">{row.service}</td>
                          <td className="py-3 px-4 text-center">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Get Premium Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          className="bg-qatari hover:bg-qatari-dark text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
        >
          <span className="text-sm font-semibold">Get Premium</span>
          <span className="bg-white text-qatari rounded-full w-6 h-6 flex items-center justify-center text-xs">
            ×
          </span>
        </Button>
      </div>
    </Layout>
    </div>
  );
};

export default Dashboard;

