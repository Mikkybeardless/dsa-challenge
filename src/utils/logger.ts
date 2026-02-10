/**
 * A simple utility for formatted console logging during DSA challenges.
 */
export const logger = {
  /**
   * Logs the result of an algorithm with a success style.
   */
  success: (message: string, data?: any) => {
    console.log(`✅ [SUCCESS]: ${message}`);
    if (data) console.dir(data, { depth: null });
  },

  /**
   * Logs an error or failed test case.
   */
  error: (message: string, error?: any) => {
    console.error(`❌ [ERROR]: ${message}`);
    if (error) console.error(error);
  },

  /**
   * Useful for visualizing step-by-step changes in an array or map
   * (e.g., inside a loop during a sorting algorithm).
   */
  step: (stepName: string, state: any) => {
    console.log(`🔍 [STEP - ${stepName}]:`, state);
  },

  /**
   * Prints a divider to separate different test cases.
   */
  divider: () => {
    console.log("---------------------------------------------------");
  },
};
