import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}

export const AuthDialog = ({ isOpen, onClose, onLogin }: AuthDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSocialLogin = (provider: string) => {
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: provider === 'google' ? 'Иван Иванов' : 
            provider === 'discord' ? 'ProGamer#1234' :
            provider === 'twitch' ? 'StreamMaster' : 'Александр',
      email: `user@${provider}.com`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`,
      provider
    };
    onLogin(mockUser);
    onClose();
  };

  const handleEmailLogin = (isSignup: boolean) => {
    if (!email || !password) return;
    
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: isSignup ? name : email.split('@')[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      provider: 'email'
    };
    onLogin(mockUser);
    onClose();
  };

  const socialProviders = [
    { 
      id: 'google', 
      name: 'Google', 
      icon: 'Mail',
      color: 'bg-gradient-to-r from-red-500 to-yellow-500',
      hoverColor: 'hover:from-red-600 hover:to-yellow-600'
    },
    { 
      id: 'discord', 
      name: 'Discord', 
      icon: 'MessageCircle',
      color: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      hoverColor: 'hover:from-indigo-700 hover:to-purple-700'
    },
    { 
      id: 'twitch', 
      name: 'Twitch', 
      icon: 'Tv',
      color: 'bg-gradient-to-r from-purple-600 to-purple-500',
      hoverColor: 'hover:from-purple-700 hover:to-purple-600'
    },
    { 
      id: 'vk', 
      name: 'VKontakte', 
      icon: 'Users',
      color: 'bg-gradient-to-r from-blue-600 to-blue-500',
      hoverColor: 'hover:from-blue-700 hover:to-blue-600'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Добро пожаловать!</DialogTitle>
          <DialogDescription>
            Войдите, чтобы отслеживать любимые команды и получать уведомления
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="signup">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="login-password">Пароль</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => handleEmailLogin(false)}
              >
                Войти
              </Button>
            </div>

            <div className="relative">
              <Separator className="my-4" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                или
              </span>
            </div>

            <div className="space-y-3">
              {socialProviders.map((provider) => (
                <Button
                  key={provider.id}
                  variant="outline"
                  className={`w-full ${provider.color} ${provider.hoverColor} text-white border-0 transition-all duration-300 hover-lift`}
                  onClick={() => handleSocialLogin(provider.id)}
                >
                  <Icon name={provider.icon as any} size={20} className="mr-2" />
                  Войти через {provider.name}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="signup-name">Имя</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="signup-password">Пароль</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => handleEmailLogin(true)}
              >
                Зарегистрироваться
              </Button>
            </div>

            <div className="relative">
              <Separator className="my-4" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                или
              </span>
            </div>

            <div className="space-y-3">
              {socialProviders.map((provider) => (
                <Button
                  key={provider.id}
                  variant="outline"
                  className={`w-full ${provider.color} ${provider.hoverColor} text-white border-0 transition-all duration-300 hover-lift`}
                  onClick={() => handleSocialLogin(provider.id)}
                >
                  <Icon name={provider.icon as any} size={20} className="mr-2" />
                  Регистрация через {provider.name}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
