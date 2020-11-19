import React from 'react'
import { CalendarOutline } from 'heroicons-react'
import dayjs from 'dayjs'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './Dates.css'
import { SingleDatePicker } from 'react-dates'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

function generateClassName(isActive: boolean) {
    let defaultClass =
        'dateTag rounded-md mb-2 text-sm text-white font-bold px-3 py-1 mr-3 opacity-25 cursor-pointer'
    if (isActive) return defaultClass + ' active'
    else return defaultClass
}
function Dates({ onDateChange }: { onDateChange(date: Date): void }) {
    const [selectedDate, setSelectedDate] = React.useState('today')
    const [showCalendar, setShowCalendar] = React.useState(false)
    const [customDate, setCustomDate] = React.useState<Date>()

    const selectDate = (date: Date, state: string) => {
        setSelectedDate(state)
        setCustomDate(undefined)
        onDateChange(date)
    }
    const customDateSelected = (e: moment.Moment | any) => {
        setSelectedDate('customDate')
        setCustomDate(e.toDate())
        onDateChange(e.toDate())
        setShowCalendar(false)
    }
    const selectingCustomDate = () => {
        setSelectedDate('customDate')
        setShowCalendar(true)
    }
    return (
        <div>
            <span className="text-white block p-2 pl-0 font-bold text-sm">
                Due Date
            </span>
            <div className="flex md:flex-wrap overflow-x-auto overflow-y-hidden hiddenScrollbar">
                <div
                    className={
                        generateClassName('today' === selectedDate) +
                        ' bg-red-500'
                    }
                    onClick={() => selectDate(new Date(), 'today')}
                >
                    <span>Today</span>
                </div>
                <div
                    className={
                        generateClassName('tomorrow' === selectedDate) +
                        ' bg-indigo-500'
                    }
                    onClick={() =>
                        selectDate(dayjs().add(1, 'day').toDate(), 'tomorrow')
                    }
                >
                    <span>Tomorrow</span>
                </div>
                <div
                    className={
                        generateClassName('customDate' === selectedDate) +
                        ' bg-yellow-600 flex'
                    }
                    onClick={selectingCustomDate}
                >
                    <CalendarOutline size={19} />
                    {customDate && (
                        <span className="ml-1 customDate">
                            {dayjs(customDate).format('DD-MM-YYYY')}
                        </span>
                    )}
                </div>
            </div>

            {showCalendar && (
                <div className="relative mt-1 calendar">
                    <div className="calendar -mt-32 absolute z-50 w-full flex justify-center items-center">
                        <SingleDatePicker
                            id="signleDatePicker"
                            numberOfMonths={1}
                            focused={true}
                            date={null}
                            onDateChange={customDateSelected}
                            isDayHighlighted={(day1) =>
                                dayjs(day1.toDate()).isToday()
                            }
                            onFocusChange={() => {}}
                            withPortal
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dates
