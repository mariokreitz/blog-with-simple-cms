// global.d.ts

import mongoose from "mongoose";

/* eslint-disable no-var */
declare global {
  // Extending the global object
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Export to make this a module and avoid isolatedModules error
export {};
