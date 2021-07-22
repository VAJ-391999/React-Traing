//localhost:3000/NewsPage

import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>This is a news page</h1>
      <ul>
        <li>
          <Link href="/news/reactjs">Reactjs</Link>
        </li>
        <li>
          <Link href="/news/nextjs">Nestjs</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
