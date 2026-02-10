import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // This allows you to use 'describe', 'it', and 'expect'
    // without importing them manually in every single test file.
    globals: true,

    // Sets the testing environment to Node.js (perfect for DSA).
    environment: "node",

    // Tells Vitest to look for test files inside your src folder.
    include: ["src/**/*.test.ts"],
  },
});
