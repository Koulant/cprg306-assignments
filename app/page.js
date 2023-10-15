//#2 Edit Root Page

import StudentInfo from "./ReactComponent";
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Web Development 2 Assignments</h1>
      <StudentInfo/>
      <div>
        <ul>
          <li>
            <Link href="/week2">
              Week 2
            </Link>
          </li>
          <li>
          <Link href="/week3">
              Week 3
            </Link>
          </li>
          <li>
          <Link href="/week4">
              Week 4
            </Link>
          </li>
          <li>
          <Link href="/week5">
              Week 5
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
