import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: string;
}

interface UserProfileProps {
  user: User | null;
  onLogout: () => void;
}

export const UserProfile = ({ user, onLogout }: UserProfileProps) => {
  if (!user) return null;

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'google': return 'Mail';
      case 'discord': return 'MessageCircle';
      case 'twitch': return 'Tv';
      case 'vk': return 'Users';
      default: return 'User';
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case 'google': return 'text-red-500';
      case 'discord': return 'text-indigo-500';
      case 'twitch': return 'text-purple-500';
      case 'vk': return 'text-blue-500';
      default: return 'text-primary';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-card border-border" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center gap-4 p-2">
            <Avatar className="h-16 w-16 ring-2 ring-primary/30">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-bold gradient-text">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
              <Badge variant="outline" className="w-fit mt-1 border-primary/50">
                <Icon name={getProviderIcon(user.provider) as any} size={12} className={`mr-1 ${getProviderColor(user.provider)}`} />
                <span className="text-xs capitalize">{user.provider}</span>
              </Badge>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="p-2 space-y-1">
          <Card className="bg-muted/50 p-3 border-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Активность</span>
              <Icon name="TrendingUp" size={16} className="text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl font-bold text-primary">12</p>
                <p className="text-xs text-muted-foreground">Матчей</p>
              </div>
              <div>
                <p className="text-xl font-bold text-secondary">5</p>
                <p className="text-xs text-muted-foreground">Команд</p>
              </div>
              <div>
                <p className="text-xl font-bold text-accent">8</p>
                <p className="text-xs text-muted-foreground">Часов</p>
              </div>
            </div>
          </Card>
        </div>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer hover:bg-muted/50">
          <Icon name="User" size={16} className="mr-2" />
          Мой профиль
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted/50">
          <Icon name="Heart" size={16} className="mr-2" />
          Избранные команды
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted/50">
          <Icon name="Bell" size={16} className="mr-2" />
          Уведомления
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-muted/50">
          <Icon name="Settings" size={16} className="mr-2" />
          Настройки
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="cursor-pointer text-destructive hover:bg-destructive/10 focus:text-destructive"
          onClick={onLogout}
        >
          <Icon name="LogOut" size={16} className="mr-2" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
