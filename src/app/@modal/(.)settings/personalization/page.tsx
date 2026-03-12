import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SettingsItem } from '@/components/settings/SettingsItem';
import { ChevronDown } from 'lucide-react';

export default function PersonalizationPage() {
  const characteristics = ['Warm', 'Enthusiastic', 'Headers & Lists', 'Emoji'];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Personalization</h1>
      <div className="flex flex-col gap-6">
        <SettingsItem
          label="Base style and tone"
          description="Set the style and tone of how ChatGPT responds to you. This doesn't impact ChatGPT's capabilities."
        >
          <Select defaultValue="professional">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="witty">Witty</SelectItem>
            </SelectContent>
          </Select>
        </SettingsItem>

        <Separator />

        <div>
          <h3 className="font-medium">Characteristics</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Choose additional customizations on top of your base style and tone.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {characteristics.map((char) => (
              <div key={char} className="flex items-center justify-between">
                <p className="font-medium">{char}</p>
                <Button variant="ghost" className="text-muted-foreground">
                  More <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <p className="font-medium">Custom instructions</p>
          <Input defaultValue="Formal" />
        </div>
        
        <Separator />

        <div className="space-y-4">
            <h3 className='font-bold'>About you</h3>
            <div className="space-y-2 pt-2">
                <p className="font-medium">Nickname</p>
                <Input placeholder="Enter nickname" />
            </div>
        </div>

      </div>
    </div>
  );
}
