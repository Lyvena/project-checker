import React from 'react';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              For any inquiries or support, please reach out to us at:
            </p>
            <a 
              href="mailto:info@lyvena.xyz"
              className="mt-4 block text-lg font-medium text-primary hover:underline"
            >
              info@lyvena.xyz
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;