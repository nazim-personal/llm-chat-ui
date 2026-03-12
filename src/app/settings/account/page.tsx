import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SettingsItem } from '@/components/settings/SettingsItem';
import { ChevronRight, Sparkles, MessageSquare, Image, BrainCircuit, WandSparkles, Grid3x3 } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  const features = [
    { icon: Sparkles, text: 'Explore topics in depth' },
    { icon: MessageSquare, text: 'Chat longer and upload more content' },
    { icon: Image, text: 'Make more images for your projects' },
    { icon: BrainCircuit, text: 'Get more memory for smarter replies' },
    { icon: WandSparkles, text: 'Get help with planning and tasks' },
    { icon: Grid3x3, text: 'Explore projects, tasks, and custom GPTs' },
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Account</h1>
      <div className="flex flex-col gap-6">
        <SettingsItem label="Name">
          <span className="text-muted-foreground">Sk Abdul Nazim</span>
        </SettingsItem>

        <SettingsItem label="Email">
          <Button variant="ghost" className="flex items-center gap-2 pr-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
            abdul.nazim@codeclouds.com <ChevronRight className="h-4 w-4" />
          </Button>
        </SettingsItem>

        <Separator />

        <SettingsItem label="Get ChatGPT Go">
          <Button>Upgrade</Button>
        </SettingsItem>

        <div className="space-y-4">
            <h3 className="font-semibold">Get everything in Free, and more.</h3>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <feature.icon className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">{feature.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <Separator />

        <SettingsItem 
            label="Payment"
            description={
                <Link href="#" className="text-primary hover:underline">
                    Need help with billing?
                </Link>
            }
        >
          <Button variant="outline">Manage</Button>
        </SettingsItem>
      </div>
    </div>
  );
}