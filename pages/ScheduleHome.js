/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ScheduleHome() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const currentDate = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayIndex = currentDate.getDay();
    const weekdayName = weekdays[weekdayIndex].toLowerCase();

    useEffect(() => {
        if (data === null) {
            fetch('https://api.arydigital.tv/v4/schedule.php').then((resp) => {
                resp.json().then((result) => {
                    setData(result);
                    setIsLoading(true);
                    console.log("WeekDay is: " + weekdayName);
                });
            });
        }
    }, []);

    return (
        <>
            <section className="container-fluid pt-1 ScheduleHome">
                <div className="scroll-container">
                    <div className="grid-container  justify-content-between">
                        {isLoading ? 
                            <>
                                {data ? 
                                    data.Schedule.filter(drama => drama.dramaDays[weekdayName]).map((drama, index) => (
                                        <div className="grid-item" key={index}>
                                            <center>
                                                <Link href={{ pathname: "/playlist/" + drama.dramaPlaylist }}>
                                                    <div className="Extra cursor-pointer">
                                                        <div className="scheduleContentHome">
                                                            <h2 className="truncate">{drama.dramaName}</h2>
                                                            <p className="timings">{drama.dramaTime}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </center>
                                        </div>
                                    )) 
                                    : null
                                }
                            </> 
                            : <h1 className="text-black"> LOADING... </h1> 
                        }
                    </div>
                </div>
            </section>

            <style jsx>{`
                .scroll-container {
                    overflow-x: auto;
                    width: 100%;
                    scrollbar-width: thin;
                    scrollbar-color: #fbd003 #213087;
                    margin-bottom: 2px;
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 1rem;
                    width: max-content;
                    
                }
                .grid-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 100%;
                }
                .scheduleContentHome {
                    text-align: center;
                    width: 100%;
                }
                .truncate {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    max-width: 160px; /* Adjust this value as needed */
                }
                .timings {
                    font-size: 1rem;
                }
                @media (max-width: 1200px) {
                    .grid-container {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                @media (max-width: 992px) {
                    .grid-container {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 576px) {
                    .grid-container {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }

            `}</style>
        </>
    );
}
