import FirstBf from "../ui/Icon/Benefits/FirstBf";
import FourthBf from "../ui/Icon/Benefits/FourthBf";
import SecondBf from "../ui/Icon/Benefits/SecondBf";
import ThirdBf from "../ui/Icon/Benefits/ThirdBf";

export const BenefitsData = [
  {
    title: "Досрочный выход на пенсию",
    desc: "Для женщин - 53 года, для мужчин - 55 лет",
    icon: <FirstBf />,
    width: "w-[70%]",
  },
  {
    title: "Пожизненная пенсия",
    desc: "Получение регулярных выплат на протяжении всей жизни",
    icon: <SecondBf />,
  },
  {
    title: "Выгодные инвестиции",
    desc: "Индексация страховых выплат Ежегодная сумма пенсии будет увеличиваться на 7%",
    icon: <ThirdBf />,
  },
  {
    title: "Социальные льготы",
    desc: "Выплаты гарантируются Фондом гарантирования страховых выплат",
    icon: <FourthBf />,
    width: "w-[85%]",
  },
];
