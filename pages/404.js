import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  // Redirects the user to the 'Homepage' after 4 seconds.
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Ooops! That page cannot be found :(</h2>
      <p>
        Redirecting to the <Link href="/">Homepage</Link> to see my projects.
      </p>
    </div>
  );
};

export default NotFound;
