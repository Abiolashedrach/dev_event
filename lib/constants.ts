export type EventItem = {
    image: string;
    title: string;
    slug:string;
    location: string;
    date: string;
    time: string;
};


    export  const events: EventItem[] = [
        {
            image: '/images/event1.png',
            title: 'React Summer Summit 2026',
            slug: 'React-Summer-Summit-2026',
            location: 'London, UK',
            date: '2026-07-23',
            time: '12:30PM - 4:30PM',
        },
        {
            image: '/images/event2.png',
            title: 'Emerging AI Fields 2026',
            slug: 'AI-Fields-2026',
            location: 'Cardiff, UK',
            date: '2026-03-28',
            time: '9:00AM TO 2:00PM',
        },
        {
            image: '/images/event3.png',
            title: 'React Summer Summit 2028',
            slug: 'R-S-S-2026',
            location: 'San Francisco, CA, USA',
            date: '2026-09-28',
            time: '1:00PM',
        },
        {
            image: '/images/event4.png',
            title: 'Business Intelligence 2026',
            slug: 'BI 2026',
            location: 'Paris, FR',
            date: '2026-11-14',
            time: '',
        },
        {
            image: '/images/event5.png',
            title: 'Augumented Reality 2026',
            slug: 'Augumented-Reality-2026',
            location: 'Las Vegas,NV, USA',
            date: ' 2026-02-14',
            time: '7:00AM',
        },
        {
            image: '/images/event6.png',
            title: 'React Summer Summit 2027',
            slug: 'React026',
            location: 'Dubai, UAE',
            date: '2026-05-29',
            time: '7:00PM',
        },
        {
            image: '/images/event-full.png',
            title: 'Automated Intelligence Summit 2026',
            slug: 'AI 2026',
            location: 'Stoke-On-Trent, UK',
            date: '2026-04-11',
            time: '11:00AM',
        }
    ]