
import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  BookOpen, 
  Globe,
  Briefcase,
  ChevronRight,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useIsMobile } from '@/hooks/use-mobile';

const services = [
  {
    id: 1,
    title: 'Trade Name Search',
    description: 'Search and reserve a business name for your new enterprise.',
    icon: Search,
    link: '/services/trade-name-search',
    benefits: [
      '24/7 online availability',
      'Instant name reservation'
    ],
    stats: {
      processingTime: 'Immediate',
      success: '98% approval rate'
    }
  },
  {
    id: 2,
    title: 'Commercial Registration',
    description: 'Register your business and obtain official commercial registration.',
    icon: FileText,
    link: '/services/commercial-registration',
    benefits: [
      'Streamlined application process',
      'Digital certificate delivery'
    ],
    stats: {
      processingTime: '2-3 business days',
      success: 'Over 10,000 businesses registered monthly'
    }
  },
  {
    id: 3,
    title: 'Business Licensing',
    description: 'Apply for various business licenses and permits for your operations.',
    icon: BookOpen,
    link: '/services/licensing',
    benefits: [
      'All-in-one licensing portal',
      'Step-by-step guidance'
    ],
    stats: {
      processingTime: '3-5 business days',
      success: '95% first-time approval'
    }
  },
  {
    id: 4,
    title: 'Investment Opportunities',
    description: 'Discover high-growth sectors and investment options in Qatar.',
    icon: Briefcase,
    link: '/investors/opportunities',
    benefits: [
      'Curated investment prospects',
      'Sector-specific data insights'
    ],
    stats: {
      sectors: '12 priority sectors',
      growth: 'Average 15% ROI'
    }
  },
  {
    id: 5,
    title: 'E-Services Portal',
    description: 'Access all online services in one convenient location.',
    icon: Globe,
    link: '/e-services',
    benefits: [
      'Single sign-on for all services',
      'Mobile-friendly interface'
    ],
    stats: {
      services: '50+ digital services',
      uptime: '99.9% availability'
    }
  },
];

const PopularServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openSheetId, setOpenSheetId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const handleServiceClick = (id: number) => {
    setActiveService(id);
    if (isMobile) {
      setOpenSheetId(id);
    }
  };

  const getServiceById = (id: number | null) => {
    if (id === null) return null;
    return services.find(service => service.id === id) || null;
  };

  const activeServiceData = getServiceById(activeService);
  const cardAngle = 360 / services.length;
  
  return (
    <section className="py-28 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-50 z-0"
        style={{
          backgroundImage: "url('public/images/image4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-0"></div>
      
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-qatari">Popular Services</h2>
            <p className="text-gray-600">Quick access to our most frequently used business services</p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-4 md:mt-0 border-qatari text-qatari hover:bg-qatari/10"
          >
            <Link to="/services">
              View All Services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Mobile View: Horizontal Cards */}
          <div className="lg:hidden w-full">
            <div className="flex flex-col space-y-4">
              {services.map(service => (
                <Sheet key={service.id} open={openSheetId === service.id} onOpenChange={(open) => {
                  if (open) setOpenSheetId(service.id);
                  else setOpenSheetId(null);
                }}>
                  <SheetTrigger asChild>
                    <div 
                      className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 flex items-center cursor-pointer hover:shadow-md transition-all duration-300"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <div className="bg-gradient-to-br from-qatari to-qatari-light w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-white h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">{service.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{service.description}</p>
                      </div>
                      <ChevronRight className="ml-auto text-qatari h-5 w-5" />
                    </div>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <SheetHeader>
                      <SheetTitle className="text-qatari flex items-center">
                        <service.icon className="mr-2 h-6 w-6" />
                        {service.title}
                      </SheetTitle>
                      <SheetDescription>
                        {service.description}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-qatari flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {Object.entries(service.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-gray-100 p-3 rounded-lg">
                              <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="font-medium text-sm mt-1">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button
                        asChild
                        className="w-full mt-6 bg-qatari hover:bg-qatari-light text-white"
                      >
                        <Link to={service.link}>
                          Access Service
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </div>
          
          {/* Desktop View: Radial Menu with Detail Panel */}
          <div className="hidden lg:flex w-full">
            <div className="w-full flex items-center justify-between">
              {/* Radial Menu */}
              <div className="relative w-[500px] h-[500px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-qatari rounded-full flex items-center justify-center z-10">
                  <img 
                    src="public/images/logo-main-white.svg" 
                    alt="Qatar Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                  {/* Circle Outline */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-qatari/10"></div>
                  
                  {/* Service Items */}
                  {services.map((service, index) => {
                    const angle = cardAngle * index;
                    const radians = (angle - 90) * (Math.PI / 180);
                    const x = Math.cos(radians) * 200 + 250;
                    const y = Math.sin(radians) * 200 + 250;
                    
                    const isActive = activeService === service.id;
                    
                    return (
                      <HoverCard key={service.id} openDelay={100} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <div 
                            className={cn(
                              "absolute transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full cursor-pointer transition-all duration-500",
                              isActive 
                                ? "bg-qatari scale-110 shadow-lg" 
                                : "bg-gray-100 hover:bg-gray-200"
                            )}
                            style={{ 
                              left: `${x}px`, 
                              top: `${y}px`,
                              zIndex: isActive ? 5 : 1
                            }}
                            onClick={() => handleServiceClick(service.id)}
                          >
                            <div className="w-full h-full flex flex-col items-center justify-center p-2">
                              <service.icon className={cn(
                                "h-6 w-6 mb-1 transition-colors duration-300",
                                isActive ? "text-white" : "text-qatari"
                              )} />
                              <span className={cn(
                                "text-xs font-medium text-center line-clamp-1 transition-colors duration-300",
                                isActive ? "text-white" : "text-gray-700"
                              )}>
                                {service.title}
                              </span>
                            </div>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64 p-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">{service.title}</h4>
                            <p className="text-xs text-gray-500">{service.description}</p>
                            <Button 
                              variant="link" 
                              className="p-0 h-auto text-xs text-qatari"
                              onClick={() => handleServiceClick(service.id)}
                            >
                              View details
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    );
                  })}
                </div>
              </div>
              
              {/* Detail Panel */}
              <div className="w-[400px] h-[500px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
                {activeServiceData ? (
                  <>
                    <button 
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setActiveService(null)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                    
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-qatari to-qatari-light w-12 h-12 rounded-xl flex items-center justify-center">
                        <activeServiceData.icon className="text-white h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4 text-gray-800">{activeServiceData.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{activeServiceData.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {activeServiceData.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-qatari flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(activeServiceData.stats).map(([key, value], idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="font-medium text-sm mt-1">{value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <Button
                        asChild
                        className="w-full bg-qatari hover:bg-qatari-light text-white"
                      >
                        <Link to={activeServiceData.link}>
                          Access Service
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="h-6 w-6 text-qatari" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Explore Our Services</h3>
                    <p className="text-gray-500 max-w-xs">Select a service from the wheel to view detailed information and access options.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
