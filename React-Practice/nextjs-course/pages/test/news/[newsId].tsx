//localhost:3000/NewsPage/DetailsPage
import { useRouter } from 'next/router';

function DetailsPage() {

    const router = useRouter();
    console.log(router.query.newsId)

    return (
        <div>
           <h1> Hi this is a DetailsPage</h1>
        </div>
    );
};

export default DetailsPage;