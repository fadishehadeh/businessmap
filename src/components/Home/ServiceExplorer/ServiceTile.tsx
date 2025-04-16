
import React from 'react';
import { cn } from '@/lib/utils';
import { ServiceItem } from './types';

interface ServiceTileProps {
  service: ServiceItem;
  isActive: boolean;
  onClick: () => void;
}

const ServiceTile = ({ service, isActive, onClick }: ServiceTileProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-[280px] h-[320px] rounded-2xl overflow-hidden transition-all duration-500",
        "hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-qatari focus:ring-offset-2",
        isActive && "ring-2 ring-qatari ring-offset-2"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={service.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white">
        <div className={cn(
          "w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4",
          "transform transition-all duration-500 group-hover:scale-110",
          "border border-white/20 shadow-lg"
        )}>
          <service.icon className="h-8 w-8" />
        </div>
        
        <h3 className="text-lg font-semibold text-center mb-6">
          {service.title}
        </h3>
        
        <div className={cn(
          "w-12 h-1 rounded-full bg-qatari/50",
          "transform transition-all duration-500",
          "group-hover:w-24 group-hover:bg-qatari"
        )} />
      </div>
    </button>
  );
};

export default ServiceTile;
