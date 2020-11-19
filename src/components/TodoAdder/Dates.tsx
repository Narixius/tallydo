import React from 'react'
import { CalendarOutline } from 'heroicons-react'
import dayjs from 'dayjs'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './Dates.css'
import { DayPicker } from 'react-dates'

function Dates({ onDateChange }: { onDateChange(date: Date): void }) {
    const [selectedDate, setSelectedDate] = React.useState('today')
    const [showCalendar, setShowCalendar] = React.useState(false)
    const [customDate, setCustomDate] = React.useState<Date>()

    function generateClassName(fieldName: string) {
        let defaultClass =
            'dateTag rounded-md mb-2 text-sm text-white font-bold px-3 py-1 mr-3 opacity-25 cursor-pointer'
        if (fieldName === selectedDate) return defaultClass + ' active'
        else return defaultClass
    }
    return (
        <div>
            <span className="text-white block p-2 pl-0 font-bold text-sm">
                Due Date
            </span>
            <div className="flex md:flex-wrap overflow-x-auto overflow-y-hidden hiddenScrollbar">
                <div
                    className={generateClassName('today') + ' bg-red-500'}
                    onClick={() => {
                        setSelectedDate('today')
                        setCustomDate(undefined)
                        onDateChange(new Date())
                    }}
                >
                    <span>Today</span>
                </div>
                <div
                    className={generateClassName('tomorrow') + ' bg-indigo-500'}
                    onClick={() => {
                        setSelectedDate('tomorrow')
                        setCustomDate(undefined)
                        onDateChange(dayjs().add(1, 'day').toDate())
                    }}
                >
                    <span>Tomorrow</span>
                </div>
                <div
                    className={
                        generateClassName('customDate') + ' bg-yellow-600 flex'
                    }
                    onClick={() => {
                        setSelectedDate('customDate')
                        setShowCalendar(true)
                    }}
                >
                    <CalendarOutline size={19} />
                    {customDate && (
                        <span className="ml-1">
                            {dayjs(customDate).format('DD-MM-YYYY')}
                        </span>
                    )}
                </div>
            </div>

            {showCalendar && (
                <div className="relative mt-1 calendar">
                    <div className="calendar -mt-32 absolute z-50 w-full flex justify-center items-center">
                        <DayPicker
                            numberOfMonths={1}
                            onDayClick={(e) => {
                                setSelectedDate('customDate')
                                setCustomDate(e.toDate())
                                onDateChange(e.toDate())
                                setShowCalendar(false)
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dates
