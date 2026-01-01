import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialProviders = [
    { name: "Itch.io", icon: "Gamepad2", color: "bg-red-500 hover:bg-red-600" },
    { name: "Telegram", icon: "Send", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "MAX", icon: "Tv", color: "bg-indigo-500 hover:bg-indigo-600" },
    { name: "iOS", icon: "Apple", color: "bg-gray-800 hover:bg-gray-900" },
    { name: "Yandex", icon: "Search", color: "bg-red-600 hover:bg-red-700" },
    { name: "Android", icon: "Smartphone", color: "bg-green-600 hover:bg-green-700" },
  ];

  return (
    <div className="min-h-screen bg-[#008080] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA2MDYwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Z4=')] opacity-20"></div>
      
      <Card className="relative w-full max-w-md bg-[#c0c0c0] border-4 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.8),inset_-1px_-1px_0px_0px_rgba(128,128,128,0.8)]">
        <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="User" className="text-white" size={16} />
            <span className="text-white font-bold text-sm">Регистрация</span>
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-xs">_</div>
            <div className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-xs">□</div>
            <Link to="/">
              <div className="w-4 h-4 bg-[#c0c0c0] border border-black flex items-center justify-center text-xs cursor-pointer hover:bg-[#a0a0a0]">×</div>
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center mb-6">
            <Icon name="Monitor" className="mx-auto mb-2 text-[#000080]" size={48} />
            <h2 className="text-xl font-bold text-[#000080]">Добро пожаловать!</h2>
            <p className="text-sm text-gray-700">Выберите способ входа</p>
          </div>

          <div className="space-y-3">
            <div className="border-2 border-[#808080] bg-white p-3">
              <label className="text-sm font-bold text-[#000080] mb-1 block">Email:</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-[#808080] bg-white"
                placeholder="your@email.com"
              />
            </div>

            <div className="border-2 border-[#808080] bg-white p-3">
              <label className="text-sm font-bold text-[#000080] mb-1 block">Пароль:</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-[#808080] bg-white"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full bg-[#c0c0c0] text-black border-4 border-t-white border-l-white border-r-[#808080] border-b-[#808080] hover:bg-[#a0a0a0] font-bold shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.8)]">
              Войти
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-[#808080]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#c0c0c0] text-[#000080] font-bold">ИЛИ</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socialProviders.map((provider) => (
              <Button
                key={provider.name}
                className={`${provider.color} text-white border-2 border-black hover:scale-105 transition-transform font-bold text-xs`}
              >
                <Icon name={provider.icon as any} className="mr-2" size={16} />
                {provider.name}
              </Button>
            ))}
          </div>

          <div className="text-center mt-4 text-xs text-gray-700">
            <p>Windows 95 Style © 2026</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
