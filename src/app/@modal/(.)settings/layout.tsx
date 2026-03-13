'use client';

import { useState } from 'react';
import {
  Bell,
  Cog,
  Grid3x3,
  HardDrive,
  Lock,
  Palette,
  Shield,
  User,
  X,
  ChevronRight,
  Sparkles,
  MessageSquare,
  ImageIcon,
  BrainCircuit,
  WandSparkles,
  ChevronDown,
  Play,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { SettingsItem } from '@/components/settings/SettingsItem';
import { Settings as GeneralSettingsPanel } from '@/components/settings/Settings';
import { Textarea } from '@/components/ui/textarea';

// Panel Components
function NotificationsPanel() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Notifications</h1>
      <div className="flex flex-col gap-6">
        <SettingsItem
          label="Responses"
          description="Get notified when ChatGPT responds to requests that take time, like research or image generation."
        >
          <Select defaultValue="push">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="push">Push</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Group chats"
          description="You'll receive notifications for new messages from group chats."
        >
          <Select defaultValue="push">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="push">Push</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Tasks"
          description={
            <>
              Get notified when tasks you&apos;ve created have updates.
              <br />
              <Link href="#" className="text-primary hover:underline">
                Manage tasks
              </Link>
            </>
          }
        >
          <Select defaultValue="push">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="push">Push</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Projects"
          description="Get notified when you receive an email invitation to a shared project."
        >
          <Select defaultValue="email">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Recommendations"
          description="Stay in the loop on new tools, tips, and features from ChatGPT."
        >
          <Select defaultValue="push">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="push">Push</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Usage"
          description="We'll notify you when limits reset for features like image creation."
        >
          <Select defaultValue="push-email">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="push-email">Push, Email</SelectItem>
              <SelectItem value="push">Push</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>
      </div>
    </div>
  );
}

function PersonalizationPanel() {
    return (
      <div>
        <h1 className="mb-6 text-2xl font-bold">Personalization</h1>
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">About you</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Nickname</p>
                <Input defaultValue="Nazim" />
              </div>
              <div className="space-y-2">
                <p className="font-medium">Occupation</p>
                <Input defaultValue="Full-Stack Developer" />
              </div>
              <div className="space-y-2">
                <p className="font-medium">More about you</p>
                <Textarea
                  defaultValue="I am a software developer in an IT company. My ambition is to become an AI Engineer."
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </div>
          
          <Separator />
  
          <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Memory</h2>
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                </div>
                <Button variant="outline">Manage</Button>
            </div>
            <div className='flex flex-col gap-6'>
              <SettingsItem
                  label="Reference saved memories"
                  description="Let ChatGPT save and use memories when responding."
              >
                  <Switch defaultChecked />
              </SettingsItem>
              <SettingsItem
                  label="Reference chat history"
                  description="Let ChatGPT reference recent conversations when responding."
              >
                  <Switch defaultChecked />
              </SettingsItem>
            </div>
            <p className="text-xs text-muted-foreground">
              ChatGPT may use Memory to personalize queries to search providers.
            </p>
          </div>
        </div>
      </div>
    );
  }

function AppsPanel() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Apps</h1>
      <p className="text-muted-foreground">
        Settings for apps are not implemented yet.
      </p>
    </div>
  );
}

function DataControlsPanel() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Data controls</h1>
      <div className="flex flex-col gap-6">
        <SettingsItem label="Improve the model for everyone">
          <Button variant="ghost" className="flex items-center gap-2">
            Off <ChevronRight className="h-4 w-4" />
          </Button>
        </SettingsItem>
        <Separator />
        <SettingsItem label="Shared links">
          <Button variant="outline">Manage</Button>
        </SettingsItem>
        <Separator />
        <SettingsItem label="Archived chats">
          <Button variant="outline">Manage</Button>
        </SettingsItem>
        <Separator />
        <SettingsItem label="Archive all chats">
          <Button variant="outline">Archive all</Button>
        </SettingsItem>
        <Separator />
        <SettingsItem label="Delete all chats">
          <Button
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            Delete all
          </Button>
        </SettingsItem>
        <Separator />
        <SettingsItem label="Export data">
          <Button variant="outline">Export</Button>
        </SettingsItem>
      </div>
    </div>
  );
}

function SecurityPanel() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Security</h1>
      <div className="flex flex-col gap-6">
        <SettingsItem
          label="Multi-factor authentication"
          description="Add an extra layer of security to your account. You'll need to enter a code from your authenticator app."
        >
          <Button variant="outline">Enable</Button>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Active sessions"
          description="See where your account is currently signed in."
        >
          <Button variant="outline">Manage</Button>
        </SettingsItem>
        <Separator />
        <SettingsItem
          label="Log out of all other devices"
          description="This will sign you out of all other active sessions on all devices."
        >
          <Button
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            Log out
          </Button>
        </SettingsItem>
      </div>
    </div>
  );
}

function ParentalControlsPanel() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Parental controls</h1>
      <p className="text-muted-foreground">
        Settings for parental controls are not implemented yet.
      </p>
    </div>
  );
}

function AccountPanel() {
  const features = [
    { icon: Sparkles, text: 'Explore topics in depth' },
    { icon: MessageSquare, text: 'Chat longer and upload more content' },
    { icon: ImageIcon, text: 'Make more images for your projects' },
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
          <Button
            variant="ghost"
            className="flex items-center gap-2 pr-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
          >
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

const settingsNav = [
  { id: 'general', name: 'General', icon: Cog, component: GeneralSettingsPanel },
  { id: 'notifications', name: 'Notifications', icon: Bell, component: NotificationsPanel },
  { id: 'personalization', name: 'Personalization', icon: Palette, component: PersonalizationPanel },
  { id: 'apps', name: 'Apps', icon: Grid3x3, component: AppsPanel },
  { id: 'data-controls', name: 'Data controls', icon: HardDrive, component: DataControlsPanel },
  { id: 'security', name: 'Security', icon: Lock, component: SecurityPanel },
  { id: 'parental-controls', name: 'Parental controls', icon: Shield, component: ParentalControlsPanel },
  { id: 'account', name: 'Account', icon: User, component: AccountPanel },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePanel, setActivePanel] = useState('general');
  const router = useRouter();

  const ActivePanelComponent = settingsNav.find(
    (item) => item.id === activePanel
  )?.component;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 z-50 grid h-[90vh] w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 grid-rows-[auto_1fr] gap-4 rounded-lg border bg-background shadow-lg md:grid-cols-4 md:grid-rows-1">
        <div className="flex flex-col border-b p-4 md:col-span-1 md:border-r md:border-b-0">
          <h2 className="mb-4 px-2 text-2xl font-bold">Settings</h2>
          <nav className="flex flex-row gap-1 overflow-x-auto pb-2 md:flex-col md:overflow-x-visible md:pb-0">
            {settingsNav.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  'w-full shrink-0 justify-start gap-3 px-3',
                  activePanel === item.id && 'bg-accent'
                )}
                onClick={() => setActivePanel(item.id)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
        <div className="h-full overflow-y-auto p-6 md:col-span-3">
          {ActivePanelComponent && <ActivePanelComponent />}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={() => router.back()}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
