// week8/page.js
"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleGitHubSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  return (
    <div>
      {user ? (
        // User is logged in
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <Link href="/week8/shopping-list">
            <a>Go to Shopping List</a>
          </Link>
        </>
      ) : (
        // User is not logged in
        <button onClick={handleGitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
}

export default LandingPage;
