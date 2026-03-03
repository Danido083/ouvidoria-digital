/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Users, MapPin, Calendar, TrendingUp, AlertTriangle, 
  MessageSquare, Mic, Video, Database, Activity, Lightbulb, Tractor, Building2, Home,
  Target, ShieldAlert, CheckCircle2, BarChart3
} from 'lucide-react';

const regionData = [
  { name: 'Zona Rural', value: 82, fill: '#ef4444', label: 'Estradas/Água' },
  { name: 'N. Sra. de Fátima', value: 68, fill: '#f97316', label: 'Infraestrutura' },
  { name: 'Centro', value: 55, fill: '#eab308', label: 'Saúde' },
  { name: 'Liberdade', value: 45, fill: '#3b82f6', label: 'Iluminação/Limpeza' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900 font-sans selection:bg-indigo-100 pb-12">
      {/* Top Navigation / Branding */}
      <div className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold tracking-wide text-sm uppercase">Ouvidoria Digital</span>
        </div>
        <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest hidden sm:block">
          Uso Interno / Confidencial
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
              Relatório de Inteligência Política
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Análise de sentimento e mapeamento de demandas da população para direcionamento estratégico do mandato.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-zinc-200/60">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-zinc-700">01 a 15 de Março</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-zinc-200/60">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-zinc-700">Conceição - PB</span>
            </div>
          </div>
        </header>

        {/* KPIs - Clean Utility Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200/50 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageSquare className="w-24 h-24" />
            </div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Volume de Interações</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tighter text-zinc-900">142</span>
              <span className="text-lg font-medium text-zinc-400">eleitores</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              Alta participação
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200/50 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Database className="w-24 h-24" />
            </div>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">O Cofre da Campanha</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tighter text-zinc-900">47</span>
              <span className="text-lg font-medium text-zinc-400">novos contatos</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              <Users className="w-3.5 h-3.5" />
              Base atualizada
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 shadow-lg relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-24 h-24 text-rose-500" />
            </div>
            <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Termômetro da Cidade</p>
            <div className="mt-2">
              <span className="text-2xl font-semibold leading-tight block mb-1">Infraestrutura</span>
              <span className="text-zinc-400 text-lg">& Atenção Básica</span>
            </div>
            <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-full border border-rose-400/20">
              <ShieldAlert className="w-3.5 h-3.5" />
              Dores mais urgentes
            </div>
          </div>
        </div>

        {/* Mapeamento & Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Chart */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-zinc-200/50 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900">Intensidade das Queixas</h2>
              </div>
              <p className="text-sm text-zinc-500 ml-13">Percentual de mensagens por região focadas no problema principal.</p>
            </div>
            
            <div className="flex-grow min-h-[350px] -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f4f4f5" />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} stroke="#a1a1aa" fontSize={12} axisLine={false} tickLine={false} />
                  <YAxis dataKey="name" type="category" stroke="#52525b" fontSize={13} fontWeight={500} width={110} axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{fill: '#f4f4f5'}}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '12px 16px' }}
                    formatter={(value: number, name: string, props: any) => [
                      <span className="font-bold text-zinc-900 text-lg">{value}% <span className="text-sm font-normal text-zinc-500">das mensagens</span></span>, 
                      <span className="text-indigo-600 font-medium">{props.payload.label}</span>
                    ]}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={40}>
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} className="hover:opacity-80 transition-opacity cursor-pointer" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Region Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-zinc-200/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900">O Que o Povo Está Falando</h2>
            </div>
            
            <div className="space-y-6">
              {/* Zona Rural */}
              <div className="group relative pl-6 border-l-2 border-zinc-100 hover:border-red-500 transition-colors">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-zinc-100 group-hover:border-red-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <Tractor className="w-5 h-5 text-red-500" />
                    Zona Rural
                    <span className="text-sm font-normal text-zinc-500 ml-1">(Mata Grande e Cabaça)</span>
                  </h3>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-100">82% das queixas</span>
                </div>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  Condição das estradas vicinais (cortadas pelas águas) e dificuldade no abastecimento de água.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"Estrada de terra"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"carro pipa"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"acesso"</span>
                </div>
              </div>

              {/* N. Sra. de Fátima */}
              <div className="group relative pl-6 border-l-2 border-zinc-100 hover:border-orange-500 transition-colors">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-zinc-100 group-hover:border-orange-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <Home className="w-5 h-5 text-orange-500" />
                    Bairro Nossa Senhora de Fátima
                  </h3>
                  <span className="bg-orange-50 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-100">68% das queixas</span>
                </div>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  Buracos nas vias principais e falta de calçamento em ruas específicas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"Asfalto"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"lama"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"suspensão do carro"</span>
                </div>
                <div className="mt-4 bg-orange-50/50 rounded-xl p-3 border border-orange-100/50 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-orange-500 shrink-0" />
                  <p className="text-sm text-orange-800">
                    <strong className="font-semibold">Oportunidade:</strong> Visitar a rua principal logo após uma chuva para gravar vídeo mostrando a realidade.
                  </p>
                </div>
              </div>

              {/* Centro */}
              <div className="group relative pl-6 border-l-2 border-zinc-100 hover:border-yellow-500 transition-colors">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-zinc-100 group-hover:border-yellow-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-yellow-500" />
                    Centro
                  </h3>
                  <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-100">55% das queixas</span>
                </div>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  Demora na marcação de exames e falta de medicamentos na farmácia básica.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"Posto"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"remédio"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"fila"</span>
                </div>
              </div>

              {/* Liberdade */}
              <div className="group relative pl-6 border-l-2 border-zinc-100 hover:border-blue-500 transition-colors">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-zinc-100 group-hover:border-blue-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-blue-500" />
                    Bairro da Liberdade
                  </h3>
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100">45% das queixas</span>
                </div>
                <p className="text-zinc-600 mb-4 leading-relaxed">
                  Escuridão em pontos específicos e necessidade de limpeza de terrenos baldios.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"Lâmpada queimada"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"insegurança"</span>
                  <span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg">"mato alto"</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Action Plan - Editorial Style */}
        <div className="bg-indigo-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden mt-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 border border-indigo-500/30">
                <Target className="w-4 h-4" />
                Estratégia de Comunicação
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Plano de Ação:<br/>Seu Discurso Desta Semana
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl">
                Com base nos dados reais dos seus eleitores, preparamos o seu roteiro de comunicação para os próximos dias, focado em empatia e resolução.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tribuna */}
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                    <Mic className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pauta para a Tribuna</h3>
                    <p className="text-indigo-300 font-medium mt-1">Câmara dos Vereadores</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 -top-6 text-7xl text-indigo-500/30 font-serif leading-none">"</div>
                  <p className="text-indigo-50 text-lg leading-relaxed font-serif italic relative z-10">
                    Senhor Presidente, nobres colegas. Hoje eu não falo por mim, falo pelas dezenas de famílias do Sítio Mata Grande e da Cabaça dos Martins que me procuraram esta semana através da nossa ouvidoria. A situação das estradas vicinais lá não é apenas um problema de trânsito, é um problema de dignidade. Se uma mãe precisa trazer um filho doente de madrugada para o hospital de Conceição, ela não consegue passar. Precisamos de um cronograma urgente da secretaria de obras para as máquinas patrolarem aquelas estradas. O homem do campo não pode ficar isolado.
                  </p>
                </div>
              </div>

              {/* Video */}
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <Video className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Roteiro de Vídeo Curto</h3>
                    <p className="text-emerald-400 font-medium mt-1">Instagram / WhatsApp</p>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-2xl p-4 mb-6 border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-indigo-200 leading-relaxed">
                    <strong className="text-white font-semibold">Cenário ideal:</strong> Em pé, no Bairro Nossa Senhora de Fátima, mostrando a rua esburacada ao fundo (preferencialmente após chuva).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 -top-6 text-7xl text-emerald-500/20 font-serif leading-none">"</div>
                  <p className="text-indigo-50 text-lg leading-relaxed font-serif italic relative z-10">
                    Pessoal, estou aqui no Nossa Senhora de Fátima. Ao longo dessa semana, recebi dezenas de mensagens na nossa Ouvidoria Digital reclamando da situação desse calçamento. Eu vim ver de perto. A prefeitura precisa entender que tapar buraco com terra não resolve. Já estou protocolando um ofício hoje cobrando a recuperação definitiva desse trecho. Você do Nossa Senhora de Fátima, conte com o meu mandato. E se o seu bairro também precisa de atenção, manda uma mensagem aqui no meu número.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

