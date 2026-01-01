import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Добро пожаловать
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Войдите в систему или создайте новый аккаунт
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Начать <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Icon name="Shield" className="mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Безопасно</h3>
            <p className="text-white/80">Ваши данные защищены современными технологиями шифрования</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Icon name="Zap" className="mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Быстро</h3>
            <p className="text-white/80">Моментальная регистрация через соцсети или email</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <Icon name="Users" className="mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Удобно</h3>
            <p className="text-white/80">Множество способов входа на ваш выбор</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
