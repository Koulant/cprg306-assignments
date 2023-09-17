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
        </ul>
      </div>
    </main>
  )
}
