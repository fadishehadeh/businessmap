import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const SingleWindowFooter = () => {
  return (
    <footer className="bg-[#19407F] text-white">
      {/* Main Footer Content */}
      <div className="container-wide mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" dir="rtl">
          {/* مركز المعلومات */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">مركز المعلومات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  عن النافذة الواحدة
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  الأخبار والفعاليات
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  المكتبة الإعلامية
                </a>
              </li>
            </ul>
          </div>

          {/* أدوات البحث */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">أدوات البحث</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  خريطة الأعمال
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  البحث عن الأنشطة
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  البحث عن المنشآت
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  دليل الخدمات
                </a>
              </li>
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">الخدمات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  تسجيل منشأة جديدة
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  تجديد الرخصة التجارية
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  الخدمات الإلكترونية
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  تتبع الطلبات
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Block */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">اتصل بنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FDC300]" />
                <a href="tel:16001" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  16001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FDC300]" />
                <a href="mailto:info@singlewindow.gov.qa" className="text-white hover:text-[#FDC300] transition-colors text-sm">
                  info@singlewindow.gov.qa
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#FDC300] mt-1" />
                <p className="text-sm">
                  وزارة التجارة والصناعة<br />
                  الدوحة، قطر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-white/20">
        <div className="container-wide mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" dir="rtl">
            <div className="text-white/80">
              © 2026 وزارة التجارة والصناعة - دولة قطر. جميع الحقوق محفوظة.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-[#FDC300] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/80 hover:text-[#FDC300] transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="text-white/80 hover:text-[#FDC300] transition-colors">
                خريطة الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SingleWindowFooter;

