import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      viewers: '145K'
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
      viewers: '328K'
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
      viewers: '89K'
    }
  ];

  const topTeams = [
    { rank: 1, name: 'Natus Vincere', game: 'CS2', rating: 1000, change: '+12', logo: '🇺🇦' },
    { rank: 2, name: 'FaZe Clan', game: 'CS2', rating: 987, change: '+5', logo: '🌐' },
    { rank: 3, name: 'Team Spirit', game: 'Dota 2', rating: 965, change: '-3', logo: '🇷🇺' },
    { rank: 4, name: 'Fnatic', game: 'Valorant', rating: 942, change: '+8', logo: '🇬🇧' },
    { rank: 5, name: 'OG', game: 'Dota 2', rating: 928, change: '+15', logo: '🇪🇺' }
  ];

  const upcomingMatches = [
    {
      id: 1,
      game: 'CS2',
      team1: 'G2 Esports',
      team2: 'Vitality',
      tournament: 'BLAST Premier',
      time: '18:00',
      date: '29 окт'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'PSG.LGD',
      team2: 'Tundra',
      tournament: 'DreamLeague',
      time: '20:30',
      date: '29 окт'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'LOUD',
      team2: 'Sentinels',
      tournament: 'Champions Tour',
      time: '22:00',
      date: '29 окт'
    }
  ];

  const recentResults = [
    {
      id: 1,
      game: 'CS2',
      team1: 'Heroic',
      team2: 'ENCE',
      score: '16 - 14',
      tournament: 'ESL Pro League'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'Evil Geniuses',
      team2: 'TSM',
      score: '2 - 0',
      tournament: 'DPC NA'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'DRX',
      team2: 'PRX',
      score: '13 - 10',
      tournament: 'VCT Pacific'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="border-b border-border backdrop-blur-xl bg-background/80 sticky top-0 z-50 shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-slide-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-border hover-scale">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold neon-glow cursor-pointer">ESPORTS HUB</h1>
            </div>
            <nav className="flex gap-6">
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
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full shadow-lg shadow-primary/50"></div>
            <span className="gradient-text">Прямые трансляции</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-normal">Сейчас в эфире</span>
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveTournaments.map((tournament, index) => (
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
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
                      <span className="text-foreground font-medium">{tournament.match}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in">
              <div className="w-2 h-8 bg-gradient-to-b from-secondary to-primary rounded-full shadow-lg shadow-secondary/50"></div>
              <span className="gradient-text">Предстоящие матчи</span>
            </h2>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
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

          <div className="animate-slide-in stagger-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent to-secondary rounded-full shadow-lg shadow-accent/50"></div>
              <span className="gradient-text">Топ команды</span>
            </h2>
            <Card className="bg-card border-border p-5 hover-neon-border transition-all duration-500">
              <div className="space-y-4">
                {topTeams.map((team, index) => (
                  <div
                    key={team.rank}
                    className={`flex items-center justify-between hover:bg-muted/50 p-3 rounded-lg transition-all duration-300 cursor-pointer group hover-lift animate-fade-in stagger-${index + 1}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-primary w-8 group-hover:scale-125 group-hover:neon-glow transition-all duration-300">
                        #{team.rank}
                      </div>
                      <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                        {team.logo}
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-primary transition-colors duration-300">
                          {team.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{team.game}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg group-hover:scale-110 transition-transform duration-300 inline-block">
                        {team.rating}
                      </div>
                      <div
                        className={`text-sm font-semibold transition-all duration-300 ${
                          team.change.startsWith('+')
                            ? 'text-primary group-hover:neon-glow'
                            : 'text-destructive'
                        }`}
                      >
                        {team.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <section className="animate-slide-up stagger-3">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full shadow-lg shadow-accent/50"></div>
            <span className="gradient-text">Последние результаты</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentResults.map((result, index) => (
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
