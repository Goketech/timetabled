import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
        <table>
        <thead>
        <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="time">8 am</td>
            <Event event='Starbucks ☕️' color ='green' location='Maple & Ash'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Yolk 🍳' color ='green' location='New York'/>
            <td></td>
        </tr>
        <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink' location='Boston'/>
            <td></td>
            <td></td>
            <Event event='The Bean 🫘' color ='blue' location='Yaba'/>
        </tr>
        <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <Event event='Tech Interview Prep' color ='green' location='Tech Hub'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Hackerrank prep' color ='pink' location='New York'/>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event='Mentor Call' color ='pink' location='Zoom'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Career Summit' color ='blue' location='California'/>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
        <td className="time">4 pm</td>
        <Event event='Hackerrank prep' color ='green' location='Lagos'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Kibo Meetup' color ='blue' location='Yaba'/>
            <td></td>
        </tr>
        <tr>
        <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <Event event='Leetcode' color ='pink' location='New York'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Calendar;