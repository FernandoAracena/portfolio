import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-card p-6 rounded-lg h-full flex flex-col">
      {image && (
        <div className="relative w-full mb-4">
          <Image src={image} alt={title} layout="responsive" width={700} height={400} objectFit="cover" className="rounded-md" />
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4">{description}</p>
    </div>
  );
};