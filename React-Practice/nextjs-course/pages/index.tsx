//localhost:3000/

import MeetupList from "../components/meetups/MeetupList";
import Jummu from '../public/jummu_kashmir.jpg';

const DUMMY_MEETUPS =[
    {
        id: 'm1',
        title: 'First meet',
        image: 'https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)#/media/File:Akhnoor_Fort_-_Jammu_-_Jammu_and_Kashmir_-_DSC_0001.jpg',
        description: 'Nice place',
        address: 'Jummu kasmir first meet'
    },
    {
        id: 'm2',
        title: 'Second meet',
        image: 'https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)#/media/File:Akhnoor_Fort_-_Jammu_-_Jammu_and_Kashmir_-_DSC_0001.jpg',
        description: 'Nice place',
        address: 'Jummu kasmir second meet'
    },
    {
        id: 'm2',
        title: 'Third meet',
        image: '/public/static/jummu_kashmir.jpg',
        description: 'Nice place',
        address: 'Jummu kasmir third meet'
    },
]

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}
export default HomePage;