import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [smsCode, setSmsCode] = useState("");

  const socialProviders = [
    { name: "MAX", icon: "Tv", color: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" },
    { name: "WhatsApp", icon: "MessageCircle", color: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" },
    { name: "Telegram", icon: "Send", color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <Card className="relative w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 p-1">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Icon name="User" className="text-white" size={20} />
              </div>
              <span className="text-white font-semibold">Вход в систему</span>
            </div>
            <Link to="/">
              <div className="w-7 h-7 bg-white/20 rounded hover:bg-red-500 transition-colors flex items-center justify-center cursor-pointer backdrop-blur-sm">
                <Icon name="X" className="text-white" size={16} />
              </div>
            </Link>
          </div>
        </div>

        <div className="p-8 space-y-5">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="UserCircle" className="text-white" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Добро пожаловать</h2>
            <p className="text-sm text-gray-600">Войдите в свою учетную запись</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Имя</label>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border-2 border-gray-300 focus:border-blue-500 bg-white rounded-lg h-11"
                  placeholder="Иван"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Фамилия</label>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border-2 border-gray-300 focus:border-blue-500 bg-white rounded-lg h-11"
                  placeholder="Иванов"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 focus:border-blue-500 bg-white rounded-lg h-11"
                placeholder="ivan@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Код из СМС</label>
              <Input
                type="text"
                value={smsCode}
                onChange={(e) => setSmsCode(e.target.value)}
                className="border-2 border-gray-300 focus:border-blue-500 bg-white rounded-lg h-11 text-center text-lg tracking-widest font-mono"
                placeholder="• • • • • •"
                maxLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">Введите 6-значный код из СМС</p>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold h-12 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Icon name="LogIn" className="mr-2" size={18} />
              Войти
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-600 font-semibold">или войти через</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {socialProviders.map((provider) => (
              <Button
                key={provider.name}
                className={`${provider.color} text-white border-0 shadow-md hover:shadow-lg transition-all font-semibold text-sm h-12 rounded-lg flex flex-col items-center justify-center gap-1`}
              >
                <Icon name={provider.icon as any} size={20} />
                <span className="text-xs">{provider.name}</span>
              </Button>
            ))}
          </div>

          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">Windows XP Style © 2026</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
