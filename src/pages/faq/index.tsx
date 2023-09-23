import type { FC } from 'react'
import { FaqStyled } from './style'

const Faq: FC = () => {
  return (
    <FaqStyled>
      <h5 className="header">FAQ</h5>

      <h4 className="hr"> О сервере </h4>
      <div className="about">
        <div className="about-item">
          <p className="about-text">
            &emsp;Сервер для трик серфа, один из режимов, созданный игровым сообществом,
            базирующимся на механики скольжения. Сервер отслеживает перемещение игрока по карте и
            при правильных траекториях засчитывает выполнения того или иного трика, на данный момент
            доступны 3 карты <b>Ski2 </b>
            <code>полное покрытие</code> / <b>xDream </b>
            <code>большинство триков</code> / <b>Aero </b>
            <code>в разработке</code>. Все возможные маршруты на данных картах можно посмотреть в
            резделе
            <a className="about-lint">/tricks</a>. Все трики делятся два типа с Pre-Strafe и
            Unlimited. О каждом в кратце
          </p>
        </div>
        <p className="about-text">
          &emsp;<em>Pre-Strafe </em> - Начало трика обязательно начинается с места и отслеживание
          происходит только после прыжка (когда игрок покинет места, которое является началом того
          или иного трика). При этом скорость не должна быть больше
          <strong> 405</strong>. Чтобы добиться такой скорости, нужно уметь делать специальный
          разворот благодаря которому вы будете приобретать скорость (сила высшей математике вам в
          помощь)
        </p>
        <p className="about-text">
          &emsp;<em>Unlimited </em>- Начало трика может быть с любого места и с не любой скоростью,
          главное достичь результата.
        </p>
        <p className="about-text">
          &emsp;При успешном выполнении трика, он будет добавлен в базу данных, а вы свою очередь
          получите его результаты ( скорость и время). Всю статистику вы можете посмотреть в
          разделах
          <a className="about-lint">/leaderboards</a>в котором места высчитывается по 4 топам
          <code>
            ( Сумма всех очков за выполнненые трики / Сумма всех очков уникальных выполнненых триков
            / Сумма всех выполнныных триков / Сумма всех уникальных выполнненых триков )
          </code>
          . Также имеется таблица рейтинга по дайли трикам. На сервере вы можете написать{' '}
          <code>!d / !daily</code> и выполнить достпуный трик, за это вы получите очки относительно
          сложности дейли трика. Если у вас пришло прозрение и вы вдруг увидели восхитительный рут,
          в таком случае вы всегда можете записать его в разделе
          <a className="about-lint">/trick-creator</a>, после провки модерацией данный трик будет
          опубликован.
        </p>
        <p className="about-text">
          &emsp;Благодаря отслеживанию большинства событий, на сервере присутствуют достижения
          затрагивающие различные сферы, со всеми ними можно ознакомиться в разделе
          <a className="about-lint">/achievements</a>
        </p>
        <p className="about-text">
          &emsp;Сервер и все его дополнения были сделаны на энтузиазме пары человек и моральной
          поддержкой сообщества. Вся команда разработчиков находится на волонтерской основе, и если
          у вас есть желание принять участие в этом, ну или просто перенять, то что уже имеется, а
          может и вовсе поддержать данный проект, буду рад побеседовать discord -
        </p>
        <p className="about-text">
          Server ip
          <code>
            <a className="link" href="steam://connect/194.147.90.131:27015">
              194.147.90.131:27015
            </a>
          </code>
        </p>
      </div>

      <h4 className="hr"> Доступные команды </h4>
      <div className="commands">
        <p className="commands-text">
          &emsp;<code>!ski2 !strafes </code> - выбрать карту для отслеживания траекторий
        </p>
        <p className="commands-text">
          &emsp;<code>!saveloc !startpos </code> - сохранить свою позицию
        </p>
        <p className="commands-text">
          &emsp;<code>!teleport !tele !r !back </code> - телепорт к сохраненной позиции
        </p>
        <p className="commands-text">
          &emsp;<code>!mhud </code> - настройка худа со скоростью и отображением клавиш
        </p>
        <p className="commands-text">
          &emsp;<code>!triggers </code>
          <code>!t </code> - отображение касания триггеров
        </p>
        <p className="commands-text">
          &emsp;<code>!showtriggers </code>
          <code>!st </code> - отображение моделей триггеров
        </p>
        <p className="commands-text">
          &emsp;<code>!daily </code>
          <code>!d </code> - список ежедневных заданий-триков
        </p>
        <p className="commands-text">
          &emsp;<code>!skybox </code>
          <code>!sky </code> - смена скайбокса
        </p>
        <p className="commands-text">
          &emsp;<code>!skin </code>
          <code>!s </code> - получение скина за выполненные достижения
        </p>
        <p className="commands-text">
          &emsp;<code>!trickassist </code>
          <code>!ta </code> - отображение информации о касании триггеров при входе и выходе в чате
        </p>
        <p className="commands-text">
          &emsp;<code>!tah </code> - отображение информации о касании триггеров при входе и выходе
          на экране
        </p>
        <p className="commands-text">
          &emsp;<code>!pack </code>
          <code>!p </code> - tricks pack
        </p>
        <p className="commands-text">
          &emsp;<code>!noclipme </code> - включить / выключить режим полета
        </p>
        <p className="commands-text">
          &emsp;<code>!zone </code> - телепортация к ближайщей возможной зоне старта трика
        </p>
      </div>

      <h4 className="hr"> Команда разработчиков</h4>
      {developers.map(({ id, description, nickname }) => (
        <div key={id}>
          <div>{nickname}</div>
          <div>{description}</div>
        </div>
      ))}
    </FaqStyled>
  )
}

const developers = [
  {
    steamid: '76561198177823310',
    id: 54,
    nickname: 'EVAI',
    description:
      'Основной разработчик плагина и веб-сайта, и также ответственный за базу данных всего проекта'
  },
  {
    steamid: '76561198279987304',
    id: 49,
    nickname: 'Halisha',
    description: 'Геймдизайнер, спроектировал карту и придумал основную концепцию плагина'
  },
  {
    steamid: '76561198120754101',
    id: 73,
    nickname: 'Parta',
    description: 'Главный тестер и создатель множества триков'
  },
  {
    steamid: '76561198058934072',
    id: 65,
    nickname: 'ArturPertuh',
    description: 'Рамповый владыка, дискордный повелитель и просто тригональный маестро'
  }
]

export default Faq
