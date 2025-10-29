import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedGames, setSelectedGames] = useState<string[]>(['CS2', 'Dota 2', 'Valorant', 'League of Legends']);
  const [selectedStatus, setSelectedStatus] = useState<string[]>(['live', 'upcoming', 'finished']);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const notificationInterval = setInterval(() => {
      const messages = [
        'Natus Vincere выиграли раунд!',
        'Новый матч начнётся через 5 минут',
        'Team Spirit обогнали в рейтинге!',
        'Fnatic набрали 10 очков'
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setNotifications(prev => [randomMsg, ...prev].slice(0, 5));
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 10000);

    return () => clearInterval(notificationInterval);
  }, []);

  const allGames = ['CS2', 'Dota 2', 'Valorant', 'League of Legends'];

  const liveTournaments = [
    {
      id: 1,
      game: 'CS2',
      tournament: 'IEM Katowice 2025',
      match: 'Natus Vincere vs FaZe Clan',
      score: '13 - 11',
      map: 'de_ancient',
      time: '2:35:12',
      status: 'live',
      viewers: '145K',
      team1Score: 13,
      team2Score: 11,
      maxScore: 16
    },
    {
      id: 2,
      game: 'Dota 2',
      tournament: 'The International 2025',
      match: 'Team Spirit vs OG',
      score: '1 - 1',
      map: 'BO3',
      time: '1:12:45',
      status: 'live',
      viewers: '328K',
      team1Score: 1,
      team2Score: 1,
      maxScore: 3
    },
    {
      id: 3,
      game: 'Valorant',
      tournament: 'VCT Masters',
      match: 'Fnatic vs Paper Rex',
      score: '9 - 7',
      map: 'Haven',
      time: '0:45:20',
      status: 'live',
      viewers: '89K',
      team1Score: 9,
      team2Score: 7,
      maxScore: 13
    }
  ];

  const topTeams = [
    { rank: 1, name: 'Natus Vincere', game: 'CS2', rating: 1000, change: '+12', logo: '🇺🇦', winRate: 87 },
    { rank: 2, name: 'FaZe Clan', game: 'CS2', rating: 987, change: '+5', logo: '🌐', winRate: 82 },
    { rank: 3, name: 'Team Spirit', game: 'Dota 2', rating: 965, change: '-3', logo: '🇷🇺', winRate: 78 },
    { rank: 4, name: 'Fnatic', game: 'Valorant', rating: 942, change: '+8', logo: '🇬🇧', winRate: 75 },
    { rank: 5, name: 'OG', game: 'Dota 2', rating: 928, change: '+15', logo: '🇪🇺', winRate: 73 }
  ];

  const upcomingMatches = [
    {
      id: 1,
      game: 'CS2',
      team1: 'G2 Esports',
      team2: 'Vitality',
      tournament: 'BLAST Premier',
      time: '18:00',
      date: '29 окт',
      status: 'upcoming'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'PSG.LGD',
      team2: 'Tundra',
      tournament: 'DreamLeague',
      time: '20:30',
      date: '29 окт',
      status: 'upcoming'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'LOUD',
      team2: 'Sentinels',
      tournament: 'Champions Tour',
      time: '22:00',
      date: '29 окт',
      status: 'upcoming'
    }
  ];

  const recentResults = [
    {
      id: 1,
      game: 'CS2',
      team1: 'Heroic',
      team2: 'ENCE',
      score: '16 - 14',
      tournament: 'ESL Pro League',
      status: 'finished'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'Evil Geniuses',
      team2: 'TSM',
      score: '2 - 0',
      tournament: 'DPC NA',
      status: 'finished'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'DRX',
      team2: 'PRX',
      score: '13 - 10',
      tournament: 'VCT Pacific',
      status: 'finished'
    }
  ];

  const chatMessages = [
    { id: 1, user: 'ProGamer123', text: 'Navi топ! 🔥', time: '2 мин' },
    { id: 2, user: 'CS_Fan', text: 'Этот раунд был безумным', time: '3 мин' },
    { id: 3, user: 'DotaLover', text: 'Spirit играют невероятно', time: '5 мин' },
    { id: 4, user: 'ValorantPro', text: 'Fnatic на высоте сегодня', time: '7 мин' }
  ];

  const liveStats = {
    totalViewers: '562K',
    liveMatches: 3,
    upcomingToday: 12,
    activeUsers: '45.2K'
  };

  const filterBySearch = (item: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.tournament?.toLowerCase().includes(query) ||
      item.match?.toLowerCase().includes(query) ||
      item.name?.toLowerCase().includes(query) ||
      item.team1?.toLowerCase().includes(query) ||
      item.team2?.toLowerCase().includes(query)
    );
  };

  const filteredLive = liveTournaments.filter(t => 
    selectedGames.includes(t.game) && 
    selectedStatus.includes('live') && 
    filterBySearch(t)
  );
  
  const filteredUpcoming = upcomingMatches.filter(m => 
    selectedGames.includes(m.game) && 
    selectedStatus.includes('upcoming') && 
    filterBySearch(m)
  );
  
  const filteredResults = recentResults.filter(r => 
    selectedGames.includes(r.game) && 
    selectedStatus.includes('finished') && 
    filterBySearch(r)
  );
  
  const filteredTeams = topTeams.filter(t => 
    selectedGames.includes(t.game) && 
    filterBySearch(t)
  );

  const toggleGame = (game: string) => {
    setSelectedGames(prev =>
      prev.includes(game) ? prev.filter(g => g !== game) : [...prev, game]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatus(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Icon name="Gamepad2" size={20} className="text-primary" />
          Игры
        </h3>
        <div className="space-y-3">
          {allGames.map(game => (
            <div key={game} className="flex items-center space-x-3 group">
              <Checkbox
                id={`game-${game}`}
                checked={selectedGames.includes(game)}
                onCheckedChange={() => toggleGame(game)}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <label
                htmlFor={`game-${game}`}
                className="text-sm font-medium cursor-pointer group-hover:text-primary transition-colors"
              >
                {game}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Icon name="Filter" size={20} className="text-secondary" />
          Статус
        </h3>
        <div className="space-y-3">
          {[
            { value: 'live', label: 'В эфире', icon: 'Radio' },
            { value: 'upcoming', label: 'Предстоящие', icon: 'Clock' },
            { value: 'finished', label: 'Завершённые', icon: 'CheckCircle2' }
          ].map(status => (
            <div key={status.value} className="flex items-center space-x-3 group">
              <Checkbox
                id={`status-${status.value}`}
                checked={selectedStatus.includes(status.value)}
                onCheckedChange={() => toggleStatus(status.value)}
                className="border-secondary data-[state=checked]:bg-secondary"
              />
              <label
                htmlFor={`status-${status.value}`}
                className="text-sm font-medium cursor-pointer group-hover:text-secondary transition-colors flex items-center gap-2"
              >
                <Icon name={status.icon as any} size={16} />
                {status.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <Button
          variant="outline"
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          onClick={() => {
            setSelectedGames(['CS2', 'Dota 2', 'Valorant', 'League of Legends']);
            setSelectedStatus(['live', 'upcoming', 'finished']);
          }}
        >
          <Icon name="RotateCcw" size={16} className="mr-2" />
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {showNotification && notifications[0] && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <Card className="bg-card border-primary p-4 shadow-lg shadow-primary/20 min-w-[300px]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">{notifications[0]}</p>
              <Icon name="Bell" size={16} className="text-primary ml-auto" />
            </div>
          </Card>
        </div>
      )}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="border-b border-border backdrop-blur-xl bg-background/80 sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-slide-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center neon-border hover-scale">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold neon-glow cursor-pointer">ESPORTS HUB</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск команд, турниров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <nav className="hidden lg:flex gap-6">
                {[
                  { icon: 'Trophy', label: 'Турниры' },
                  { icon: 'Users', label: 'Команды' },
                  { icon: 'TrendingUp', label: 'Результаты' },
                  { icon: 'Radio', label: 'Трансляции' }
                ].map((item, index) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`hover:text-primary transition-all duration-300 flex items-center gap-2 hover-lift group animate-fade-in stagger-${index + 1}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon as any} size={20} />
                    </div>
                    <span className="font-medium relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                ))}
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-primary hover:bg-primary hover:text-primary-foreground">
                    <Icon name="SlidersHorizontal" size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-80 bg-card border-border">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold gradient-text">Фильтры</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-card/50 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Зрителей</p>
                  <p className="text-2xl font-bold text-primary">{liveStats.totalViewers}</p>
                </div>
                <Icon name="Eye" size={32} className="text-primary/40" />
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">В эфире</p>
                  <p className="text-2xl font-bold text-secondary">{liveStats.liveMatches}</p>
                </div>
                <Icon name="Radio" size={32} className="text-secondary/40" />
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Сегодня</p>
                  <p className="text-2xl font-bold text-accent">{liveStats.upcomingToday}</p>
                </div>
                <Icon name="Calendar" size={32} className="text-accent/40" />
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Онлайн</p>
                  <p className="text-2xl font-bold text-primary">{liveStats.activeUsers}</p>
                </div>
                <Icon name="Users" size={32} className="text-primary/40" />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-3">
            {filteredLive.length > 0 && (
              <section className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full shadow-lg shadow-primary/50"></div>
                  <span className="gradient-text">Прямые трансляции</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground font-normal">{filteredLive.length} в эфире</span>
                  </div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredLive.map((tournament, index) => (
                    <Card
                      key={tournament.id}
                      className={`bg-card border-border hover:border-primary transition-all duration-500 card-glow overflow-hidden group cursor-pointer hover-neon-border relative animate-slide-up stagger-${index + 1}`}
                      onMouseEnter={() => setHoveredCard(tournament.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-accent/90 text-accent-foreground live-pulse font-semibold shadow-lg">
                            <Icon name="Radio" size={14} className="mr-1" />
                            LIVE
                          </Badge>
                        </div>
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="secondary" className="bg-secondary/90 font-semibold backdrop-blur-sm hover-scale">
                            {tournament.game}
                          </Badge>
                        </div>
                        <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
                          <div className={`transition-all duration-500 ${hoveredCard === tournament.id ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}`}>
                            <Icon name="Gamepad2" size={64} className="text-primary/40" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                        </div>
                      </div>
                      <div className="p-5 relative">
                        <h3 className="font-bold text-lg mb-2 text-primary group-hover:neon-glow transition-all duration-300">
                          {tournament.tournament}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-foreground font-medium text-sm">{tournament.match}</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>Прогресс матча</span>
                              <span>{Math.round((tournament.team1Score / tournament.maxScore) * 100)}%</span>
                            </div>
                            <Progress value={(tournament.team1Score / tournament.maxScore) * 100} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between text-2xl font-bold">
                            <span className="text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                              {tournament.score}
                            </span>
                            <span className="text-sm text-muted-foreground">{tournament.map}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground hover-lift">
                              <Icon name="Clock" size={16} />
                              <span>{tournament.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-accent hover-lift">
                              <Icon name="Eye" size={16} />
                              <span className="font-semibold">{tournament.viewers}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {filteredUpcoming.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in">
                  <div className="w-2 h-8 bg-gradient-to-b from-secondary to-primary rounded-full shadow-lg shadow-secondary/50"></div>
                  <span className="gradient-text">Предстоящие матчи</span>
                </h2>
                <div className="space-y-4">
                  {filteredUpcoming.map((match, index) => (
                    <Card
                      key={match.id}
                      className={`bg-card border-border hover:border-secondary transition-all duration-500 p-5 hover-glow-primary group animate-slide-up stagger-${index + 1}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-3 border-secondary text-secondary hover-scale">
                            {match.game}
                          </Badge>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                              {match.team1}
                            </span>
                            <span className="text-muted-foreground group-hover:scale-125 transition-transform duration-300 inline-block">
                              vs
                            </span>
                            <span className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                              {match.team2}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{match.tournament}</p>
                        </div>
                        <div className="text-right group-hover:scale-110 transition-transform duration-300">
                          <div className="text-2xl font-bold text-primary">{match.time}</div>
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {filteredResults.length > 0 && (
              <section className="animate-slide-up stagger-3">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full shadow-lg shadow-accent/50"></div>
                  <span className="gradient-text">Последние результаты</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredResults.map((result, index) => (
                    <Card
                      key={result.id}
                      className={`bg-card border-border hover:border-accent transition-all duration-500 p-5 hover-glow-primary group animate-fade-in stagger-${index + 1}`}
                    >
                      <Badge variant="outline" className="mb-3 border-accent text-accent hover-scale">
                        {result.game}
                      </Badge>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold group-hover:text-primary transition-colors duration-300">
                          {result.team1}
                        </span>
                        <span className="text-xl font-bold text-primary group-hover:scale-125 group-hover:neon-glow transition-all duration-300 inline-block">
                          {result.score}
                        </span>
                        <span className="font-semibold group-hover:text-primary transition-colors duration-300">
                          {result.team2}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{result.tournament}</p>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            {filteredTeams.length > 0 && (
              <div className="animate-slide-in stagger-2">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-2 h-6 bg-gradient-to-b from-accent to-secondary rounded-full shadow-lg shadow-accent/50"></div>
                  <span className="gradient-text">Топ команды</span>
                </h2>
                <Card className="bg-card border-border p-4 hover-neon-border transition-all duration-500">
                  <div className="space-y-3">
                    {filteredTeams.map((team, index) => (
                      <div
                        key={team.rank}
                        className={`hover:bg-muted/50 p-3 rounded-lg transition-all duration-300 cursor-pointer group hover-lift animate-fade-in stagger-${index + 1}`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-xl font-bold text-primary w-6 group-hover:scale-125 group-hover:neon-glow transition-all duration-300">
                            #{team.rank}
                          </div>
                          <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                            {team.logo}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-sm group-hover:text-primary transition-colors duration-300">
                              {team.name}
                            </div>
                            <div className="text-xs text-muted-foreground">{team.game}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-sm">{team.rating}</div>
                            <div className={`text-xs font-semibold ${team.change.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>
                              {team.change}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Винрейт</span>
                            <span className="text-primary font-semibold">{team.winRate}%</span>
                          </div>
                          <Progress value={team.winRate} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            <Card className="bg-card border-border p-4">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="MessageSquare" size={20} className="text-secondary" />
                Чат
              </h3>
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {chatMessages.map(msg => (
                  <div key={msg.id} className="text-sm hover:bg-muted/30 p-2 rounded transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-primary text-xs">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-foreground">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input placeholder="Написать сообщение..." className="text-sm" />
                <Button size="icon" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </Card>

            <Card className="bg-card border-border p-4">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Bell" size={20} className="text-accent" />
                Уведомления
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {notifications.slice(0, 5).map((notif, index) => (
                  <div key={index} className="text-sm p-2 bg-muted/30 rounded flex items-center gap-2 hover:bg-muted/50 transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{notif}</span>
                  </div>
                ))}
                {notifications.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">Нет новых уведомлений</p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-8 backdrop-blur-sm bg-background/50 relative z-10">
        <div className="container mx-auto px-4 text-center text-muted-foreground animate-fade-in">
          <p className="hover:text-primary transition-colors duration-300">
            © 2025 ESPORTS HUB. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
