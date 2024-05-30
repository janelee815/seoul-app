import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import './index.css';
import moment from 'moment';
import 'moment/locale/ko'; // moment를 한국어로 설정

function App() {
  const [value, onChange] = useState(new Date());
  const [events, setEvents] = useState([]);

  // 이벤트를 추가하는 함수
  const addEvent = () => {
    const newEvent = {
      date: moment(value).format("YYYY-MM-DD"),
      title: "서울 문화의 밤 행사",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <Calendar
        className='react-calendar'
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        howNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
      />


      <div className="text-gray-500 mt-4">
        {/*moment(value).format("YYYY년 MM월 DD일") 현재 날짜 알려줌*/}
      </div>

      {/* 추가된 이벤트 목록 */}
      <div>
        <h2>오늘의 서울</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date}: {event.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

