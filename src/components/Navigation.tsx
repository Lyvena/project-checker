import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, FileSpreadsheet } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-screen-xl mx-auto px-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/project" className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <FileSpreadsheet className="h-4 w-4" />
            Project Evaluation
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact" className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;