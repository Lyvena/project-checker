import React from 'react';
import { Award } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Award className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl">Potlock Eval</span>
    </div>
  );
};

export default Logo;