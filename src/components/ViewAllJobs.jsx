import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllJobs() {
  return (
    <section class="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  );
}
